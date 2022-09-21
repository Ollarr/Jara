

import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';



const firebaseConfig = {

    apiKey: "AIzaSyCsc1thzfvMPhkk9Aai-hCVqD6fu48Fm48",
    authDomain: "jara-blog-b6a9b.firebaseapp.com",
    projectId: "jara-blog-b6a9b",
    storageBucket: "jara-blog-b6a9b.appspot.com",
    messagingSenderId: "870757965054",
    appId: "1:870757965054:web:c7f3cfab507c05e8c019af",
    measurementId: "G-4XK5Y6LSLL"
  
  };

  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage();
const auth = getAuth(app);

export { auth, db, storage, };