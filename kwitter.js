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

function  addUser() {
     user_name=document.getElementById("user_name").value
     localStorage.setItem("user_name",user_name)
     window.location="kwitter_room.html"
}

