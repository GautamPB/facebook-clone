import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAk5lF1CshW_StxqgxY546OaowlL9mpoXk',
    authDomain: 'facebook-clone-2906b.firebaseapp.com',
    projectId: 'facebook-clone-2906b',
    storageBucket: 'facebook-clone-2906b.appspot.com',
    messagingSenderId: '65508167424',
    appId: '1:65508167424:web:1e9d3e0ba6f01319a1ade5',
    measurementId: 'G-JP0BMYZ6KQ',
}

const firebaseApp = firebase.initializeApp(firebaseConfig) //connects this app to firebase
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider() //tells we want to include google auth in this project

export { auth, provider }
export default db
