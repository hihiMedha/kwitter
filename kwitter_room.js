
var firebaseConfig = {
      apiKey: "AIzaSyBshn1wQEgAl0MVf-Zhkwoo-rkuGMTBxAY",
      authDomain: "kwitter-3bb1e.firebaseapp.com",
      projectId: "kwitter-3bb1e",
      storageBucket: "kwitter-3bb1e.appspot.com",
      messagingSenderId: "786486624403",
      appId: "1:786486624403:web:cb26f704ee7f95f13fcd66"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
