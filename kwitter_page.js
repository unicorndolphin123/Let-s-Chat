var firebaseConfig = {
      apiKey: "AIzaSyD5eUpfpumNDgBcZcPVTOKydzZPGvL7HEk",
      authDomain: "kwitter-database-f8439.firebaseapp.com",
      databaseURL: "https://kwitter-database-f8439-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-f8439",
      storageBucket: "kwitter-database-f8439.appspot.com",
      messagingSenderId: "657120506502",
      appId: "1:657120506502:web:2b76c212b138f77e7b1707"
    };
    
    
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg = document.getElementById("msg").value; 
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html"
}