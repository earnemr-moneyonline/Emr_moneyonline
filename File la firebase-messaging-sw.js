importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyBWusaokijRT-O7Q8wzvgBShdh5hm5u2D0",
    authDomain: "emr-community.firebaseapp.com",
    projectId: "emr-community",
    storageBucket: "emr-community.firebasestorage.app",
    messagingSenderId: "639867712004",
    appId: "1:639867712004:web:7b7f4c71893b109ad1fb51"
});

const messaging = firebase.messaging();

// Hii inashughulikia ujumbe ukiwa background
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968534.png' 
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
