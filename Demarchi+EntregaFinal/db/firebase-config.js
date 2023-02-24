import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCXo75Y87JavVXqlIFT2669S1cy27Gikjw",
  authDomain: "demarchi-entregafinal.firebaseapp.com",
  projectId: "demarchi-entregafinal",
  storageBucket: "demarchi-entregafinal.appspot.com",
  messagingSenderId: "1069560120446",
  appId: "1:1069560120446:web:a147f3b90c3740d160c42f",
  measurementId: "G-Q9Z48V8RMP"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);