import * as firebase from 'firebase'

let db
(function init () {
  let config = {
    apiKey: 'AIzaSyDVbJ0aJbXsXiBhSfNklWw6JyA52HS9N1I',
    authDomain: 'artprogress-841e6.firebaseapp.com',
    databaseURL: 'https://artprogress-841e6.firebaseio.com',
    projectId: 'artprogress-841e6',
    storageBucket: '',
    messagingSenderId: '25345731288'
  }
  firebase.initializeApp(config)
  db = firebase.firestore()
  /* FireStore settings */
  const settings = {
    timestampsInSnapshots: true // Changes dates in firestore to be timestamps.
  }
  db.settings(settings)
})()
export default db
