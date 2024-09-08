import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA4vh55jxmsSyFocm0iVirOKWKIi913giM",
  authDomain: "e-commerce-bee09.firebaseapp.com",
  projectId: "e-commerce-bee09",
  storageBucket: "e-commerce-bee09.appspot.com",
  messagingSenderId: "1089328260784",
  appId: "1:1089328260784:web:c1025fe271b00ca8c63d75"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

