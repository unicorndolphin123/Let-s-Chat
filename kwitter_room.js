var firebaseConfig = {
      apiKey: "AIzaSyD5eUpfpumNDgBcZcPVTOKydzZPGvL7HEk",
      authDomain: "kwitter-database-f8439.firebaseapp.com",
      databaseURL: "https://kwitter-database-f8439-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-f8439",
      storageBucket: "kwitter-database-f8439.appspot.com",
      messagingSenderId: "657120506502",
      appId: "1:657120506502:web:2b76c212b138f77e7b1707"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
