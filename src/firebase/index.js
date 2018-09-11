import * as firebase from 'firebase'

export const init = () => {
  let config = {
    apiKey: 'AIzaSyDVbJ0aJbXsXiBhSfNklWw6JyA52HS9N1I',
    authDomain: 'artprogress-841e6.firebaseapp.com',
    databaseURL: 'https://artprogress-841e6.firebaseio.com',
    projectId: 'artprogress-841e6',
    storageBucket: '',
    messagingSenderId: '25345731288'
  }
  firebase.initializeApp(config)
  const db = firebase.firestore()
  return db
}
