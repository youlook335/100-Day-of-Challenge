// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxAEo5_Db94SysNr-nM3WN5FExhjodC7M",
  authDomain: "dsa-overview.firebaseapp.com",
  projectId: "dsa-overview",
  storageBucket: "dsa-overview.appspot.com",
  messagingSenderId: "786009976763",
  appId: "1:786009976763:web:b406f3d1092144010e1e9e",
  measurementId: "G-YNJC98K89N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // ← یہ لائن لازمی ہے

// submit btn
const submit = document.getElementById('submit');
submit.addEventListener("click", function (event) {
  event.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Account Created Successfully!");
      window.location.href = "Chart.html"
    })
    .catch((error) => {
      const errorMessage = error.message; // ← .message کرو، نہ کہ .errorMessage
      alert(errorMessage);
    });
});

  // Initialize Firebase
  // const app = initializeApp(firebaseConfig);
  
  
  
  // <script type="module">
  //   // Import the functions you need from the SDKs you need
  //   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  //   import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-analytics.js";
  //   // TODO: Add SDKs for Firebase products that you want to use
  //   // https://firebase.google.com/docs/web/setup#available-libraries
  
  //   // Your web app's Firebase configuration
  //   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyAxAEo5_Db94SysNr-nM3WN5FExhjodC7M",
  //     authDomain: "dsa-overview.firebaseapp.com",
  //     projectId: "dsa-overview",
  //     storageBucket: "dsa-overview.firebasestorage.app",
  //     messagingSenderId: "786009976763",
  //     appId: "1:786009976763:web:b406f3d1092144010e1e9e",
  //     measurementId: "G-YNJC98K89N"
  //   };
  
  //   // Initialize Firebase
  //   const app = initializeApp(firebaseConfig);
  //   const analytics = getAnalytics(app);
  // </script>
  // Google ID project-786009976763