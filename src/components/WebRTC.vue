<template>
  <div class="">
    <div class="video-chat-form">
      <input v-model="roomName" name="roomName" type="text" id="room-name" placeholder="room name">
      <button id="join" @click="join">Join</button>
    </div>
    <div class="video-chat-rooms">
      <video ref="userVideo" id="user-video"></video>
      <video ref="peerVideo" id="peer-video"></video>
    </div>
    <div class="btn-group">
      <button ref="muteBtn" @click="muteMicroHandler">{{ muteBtnText }}</button>
      <button ref="leaveBtn" @click="leaveRoomHandler">Leave Room</button>
      <button ref="hideCameraBtn" @click="hideCameraHandler">{{ toggleCameraBtnText }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import SocketioService from "../assets/services/socketio.service";
import {onBeforeUnmount, onMounted, ref} from 'vue';
import { Socket } from "socket.io-client";

let roomName = ref<string>('room1')
let socket = ref<Socket | null>(null)
let creator = ref<boolean>(false)
let rtcPeerConnection = ref<RTCPeerConnection | null>(null)
let userStream = ref<any>(null)
let muteFlag = ref<boolean>(false)
let hideCameraFlag = ref<boolean>(false)
let muteBtnText = ref<string>('Mute')
let toggleCameraBtnText = ref<string>('Hide camera')
const iceServers = ref<object>({
  iceServers: [
    { urls: "stun:stun.services.mozilla.com" },
    { urls: "stun:stun1.l.google.com:19302" }
  ]
})
const userVideo = ref<HTMLVideoElement>()
const peerVideo = ref<HTMLVideoElement>()
const socketioService = new SocketioService()
const navigatorGetUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

onMounted(() => {
  socketHandlers();
})

function muteMicroHandler() {
  muteFlag.value = !muteFlag.value;

  if (muteFlag.value) {
    userStream.value.getTracks()[0].enabled = false
    muteBtnText.value = 'Onmute'
  } else {
    userStream.value.getTracks()[0].enabled = true
    muteBtnText.value = 'Mute'
  }
}

function hideCameraHandler() {
  hideCameraFlag.value = !hideCameraFlag.value;

  if (hideCameraFlag.value) {
    userStream.value.getTracks()[1].enabled = false
    toggleCameraBtnText.value = 'Show camera'
  } else {
    userStream.value.getTracks()[1].enabled = true
    toggleCameraBtnText.value = 'Hide camera'
  }
}

function leaveRoomHandler() {
  socket.value.emit('leave', roomName.value)

  if (userVideo.value) {
    if ("getTracks" in userVideo.value.srcObject) {
      userVideo.value.srcObject.getTracks()[0].stop()
      userVideo.value.srcObject.getTracks()[1].stop()
    }
  }

  if (peerVideo.value) {
    if ("getTracks" in peerVideo.value.srcObject) {
      peerVideo.value.srcObject.getTracks()[0].stop()
      peerVideo.value.srcObject.getTracks()[1].stop()
    }
  }

  if (rtcPeerConnection.value) {
    rtcPeerConnection.value.ontrack = null
    rtcPeerConnection.value.onicecandidate = null
    rtcPeerConnection.value?.close()
  }
}

function onTrack(event: RTCTrackEvent) {
  peerVideo.value.srcObject = event.streams[0];
  peerVideo.value.onloadedmetadata = () => peerVideo.value.play()
}

function onIceCandidate(event: RTCPeerConnectionIceEvent) {
  if (event.candidate) {
    socket.value.emit('candidate', event.candidate, roomName.value)
  }
}

function join() {
  if (roomName.value) {
    socket.value.emit('join', roomName.value)
  } else {
    alert('Enter room name')
  }
}

function getUserMedia() {
  navigatorGetUserMedia.call(navigator,
      {
        video: true,
        audio: true
      },
      function (stream) {
        userStream.value = stream
        userVideo.value.srcObject = stream
        userVideo.value.onloadedmetadata = () => userVideo.value.play()

        socket.value.emit('ready', roomName.value)
      }.bind(this),
      function () {
        alert("You can't access Media")
      }
  )
}

onBeforeUnmount(() => {
  socketioService.disconnect();
})

function socketHandlers() {
  socketioService.setupSocketConnection();
  socket.value = socketioService.socket;

  socket.value.on('created', () => {
    creator.value = true;
    console.log('Is creator', creator.value)
    getUserMedia();
  })

  socket.value.on('joined', () => {
    creator.value = false;
    console.log('Is creator', creator.value)
    getUserMedia();
  })

  socket.value.on('full', () => {
    alert("Room is full, you can't join")
  })

  socket.value.on('ready', () => {
    if (creator.value) {
      rtcPeerConnection.value = new RTCPeerConnection(iceServers.value);
      rtcPeerConnection.value.onicecandidate = onIceCandidate;

      rtcPeerConnection.value.ontrack = onTrack;
      rtcPeerConnection.value?.addTrack(userStream.value.getTracks()[0], userStream.value); // for audio ['audio', 'video']
      rtcPeerConnection.value?.addTrack(userStream.value.getTracks()[1], userStream.value); // for video ['audio', 'video']

      rtcPeerConnection.value?.createOffer(
          (offer) => {
            rtcPeerConnection.value?.setLocalDescription(offer)
            socket.value.emit('offer', offer, roomName.value)
          },
          (error) => { console.log(error) }
      )
    }
  })

  socket.value.on('offer', (offer) => {
    if (!creator.value) {
      rtcPeerConnection.value = new RTCPeerConnection(iceServers.value);
      rtcPeerConnection.value.onicecandidate = onIceCandidate;

      rtcPeerConnection.value.ontrack = onTrack;
      rtcPeerConnection.value?.addTrack(userStream.value.getTracks()[0], userStream.value); // for audio ['audio', 'video']
      rtcPeerConnection.value?.addTrack(userStream.value.getTracks()[1], userStream.value); // for video ['audio', 'video']
      rtcPeerConnection.value?.setRemoteDescription(offer)

      rtcPeerConnection.value?.createAnswer(
          (answer) => {
            rtcPeerConnection.value?.setLocalDescription(answer)
            socket.value.emit('answer', answer, roomName.value)
          },
          (error) => { console.log(error) }
      )
    }
  })

  socket.value.on('answer', (answer) => {
    rtcPeerConnection.value?.setRemoteDescription(answer)
  })

  socket.value.on('candidate', (candidate) => {
    const iceCandidate = new RTCIceCandidate(candidate);
    rtcPeerConnection.value?.addIceCandidate(iceCandidate)
  })

  socket.value.on('leave', () => {
    creator.value = true

    if (peerVideo.value && "getTracks" in peerVideo.value.srcObject) {
      peerVideo.value.srcObject.getTracks()[0].stop()
      peerVideo.value.srcObject.getTracks()[1].stop()
    }

    if (rtcPeerConnection.value) {
      rtcPeerConnection.value.ontrack = null
      rtcPeerConnection.value.onicecandidate = null
      rtcPeerConnection.value?.close()
    }
  })
}
</script>

<style scoped lang="scss">
</style>