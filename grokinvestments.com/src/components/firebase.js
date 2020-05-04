import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyAvMeZjp0-_MnTcHHES4epNruoopo7PWuE",
  authDomain: "grok-investments.firebaseapp.com",
  databaseURL: "https://grok-investments.firebaseio.com",
  projectId: "grok-investments",
  storageBucket: "grok-investments.appspot.com",
  messagingSenderId: "520870280571",
  appId: "1:520870280571:web:b023de92f4bdc1253991de",
  measurementId: "G-DDQPVKCEHY"
};

firebase.initializeApp(config);
export default firebase;
