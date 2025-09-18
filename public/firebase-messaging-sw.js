importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js'
)
importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js'
)
firebase?.initializeApp({
    apiKey: 'AIzaSyBwwvPfUL1TpuaR2CUv2kAmnjXDnxlmxuY',
    authDomain: 'munchies-725cd.firebaseapp.com',
    projectId: 'munchies-725cd',
    storageBucket: 'munchies-725cd.appspot.com',
    messagingSenderId: '927982732163',
    appId: '1:927982732163:web:d0aa0e019a68a509726cb6',
    measurementId: 'G-WTGYQ9RBE8',
})

// Retrieve firebase messaging
const messaging = firebase?.messaging()

messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})
