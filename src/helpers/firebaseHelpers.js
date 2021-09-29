import firebase from 'firebase'

export function fireInit(func) {
	// !!!! Replace with your own Firebase settings !!!!!
	var config = {
      apiKey: 'AIzaSyBgfMAGvnlqEWJz59xSfJ2rrJPjpQPXgDY',
      authDomain: 'localhost',
      databaseURL: 'https://playlist-93f0b-default-rtdb.firebaseio.com/',
      storageBucket: 'gs://playlist-93fob.appspot.com'
    }
	firebase.initializeApp(config)

	firebase.auth().onAuthStateChanged(function (user) {
	  if (user) {
	    func(true, user)
	  } else {
	    func(false)
	  }
	}, function(error) {
	  console.log(error)
	})
}
