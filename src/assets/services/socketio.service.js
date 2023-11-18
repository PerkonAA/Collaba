import { io } from 'socket.io-client';

class SocketioService {
    socket;
    constructor() {}

    setupSocketConnection() {
        this.socket = io(import.meta.env.VITE_APP_SOCKET_ENDPOINT);
    }

    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
}

export default SocketioService;