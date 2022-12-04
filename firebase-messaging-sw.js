
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging.js');


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDL2blzVNpKvW76X7ifx_h8rVAPoskj3gg",
  authDomain: "test-webpush-591dc.firebaseapp.com",
  projectId: "test-webpush-591dc",
  storageBucket: "test-webpush-591dc.appspot.com",
  messagingSenderId: "383365496625",
  appId: "1:383365496625:web:a32d6e8e2a2c0bd54dfa10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Retrieve Firebase Messaging object.
const messaging = getMessaging(app);
messaging.setBackgroundMessageHandler(function(payload){
 
    const title = "Hello World";
    const options = {
            body: payload.data.status
    };
 
    return self.registration.showNotification(title,options);
});
