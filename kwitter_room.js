const firebaseConfig = {
      apiKey: "AIzaSyBZsqhaOCDMVHPjfNusjSXiW0rLrfUPJ3s",
      authDomain: "kwitter-a5eec.firebaseapp.com",
      databaseURL: "https://kwitter-a5eec-default-rtdb.firebaseio.com",
      projectId: "kwitter-a5eec",
      storageBucket: "kwitter-a5eec.appspot.com",
      messagingSenderId: "369363676316",
      appId: "1:369363676316:web:bac89374d965da41669159"
};
firebase.initializeApp(firebaseConfig)

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name..."
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}