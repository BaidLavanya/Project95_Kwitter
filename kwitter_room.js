var firebaseConfig = {
  apiKey: "AIzaSyC7aysAwT97QRQ95on1PwG2PZfi_yWTaBo",
  authDomain: "kwitterproject-a889f.firebaseapp.com",
  databaseURL: "https://kwitterproject-a889f-default-rtdb.firebaseio.com",
  projectId: "kwitterproject-a889f",
  storageBucket: "kwitterproject-a889f.appspot.com",
  messagingSenderId: "493777204464",
  appId: "1:493777204464:web:c91b0e43e01d90c39f7e35"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User Name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose : "Adding Room Name"      
      });

      localStorage.setItem("Room Name" , room_name);
      window.location = "roomPage.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoom(this.id)'> #" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row; 
      });});}
getData();

function redirectToRoom(name) {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "roomPage.html";
}