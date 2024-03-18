import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCONtt-anglZXZFPu9I0Ns4WSp-bDrd4wU",
  authDomain: "carbon-mint.firebaseapp.com",
  projectId: "carbon-mint",
  storageBucket: "carbon-mint.appspot.com",
  messagingSenderId: "964274556867",
  appId: "1:964274556867:web:3fbca80a7815fb848b3776"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);