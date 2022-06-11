
 var firebaseConfig = {
      apiKey: "AIzaSyDesLMUlbjs4UrmUOHZot2gvZFiwjlgJNw",
      authDomain: "kwitter-9ed36.firebaseapp.com",
      databaseURL: "https://kwitter-9ed36-default-rtdb.firebaseio.com",
      projectId: "kwitter-9ed36",
      storageBucket: "kwitter-9ed36.appspot.com",
      messagingSenderId: "399153153365",
      appId: "1:399153153365:web:ea9ed5b647c73922399bdc"
    };
    
    // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  function addRoom()
  {
  room_name = document.getElementById("room_name").value;
  
  firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
  }