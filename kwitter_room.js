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
    
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name" 
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room_Name -" + Room_names);
      row = "<div class = 'room_name' id=>" + Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div></hr>";
      document.getElementById("output").innerHTML+= row;
      });});}
getData();

function redirectToRoomName(){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html";
}
function logout(){
      localStorage.removeItem ("user_name");
      localStorage.removeItem ("room_name");
      window.location = "index.html";
}