## Роутинг

Авторизация вход/логин - /welcome-login

Настройка профиля - /welcome-settings

Поиск напарника - /search

Напарник найден - /speaking

Профиль - /profile

Мои напарники - /my-partners

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## Для запуска сервера WebRTC

Если в корне проекта нет файла .env , его необходимо создать, внутри него должно быть прописано

```sh
VITE_APP_SOCKET_ENDPOINT=http://localhost:3000
```

После чего необходимо установить модули для сервера

```sh
cd src/assets/socketio-node
npm install
```

В index.js прописана серверная часть webRTC приложения с использованием express

Для запуска сервера используем команду 

```sh
nodemon index.js
```

После чего серверная часть запустится на порту 3000

## Для запуска клиентского приложения

Из корня проекта устанавливаем модули и запускаем приложение

```sh
npm install
npm run dev
```
