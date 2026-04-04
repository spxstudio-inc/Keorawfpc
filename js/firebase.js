const firebaseConfig = {

apiKey: "AIzaSyAck1t_x7zbsZ5289_6XZpiVYalUtGNgXc",
authDomain: "keora-ind.firebaseapp.com",
projectId: "keora-ind",
storageBucket: "keora-ind.firebasestorage.app",
messagingSenderId: "94290148941",
appId: "1:694290148941:web:fa0b7ee82a78647d0ab604"

};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();