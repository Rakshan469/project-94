var firebaseConfig = {
    apiKey: "AIzaSyB-zgs79CMigpXk3EA0GQekfYewtwDl4Oc",
    authDomain: "einstein-chat-bot-ow9j.firebaseapp.com",
    databaseURL: "https://einstein-chat-bot-ow9j-default-rtdb.firebaseio.com",
    projectId: "einstein-chat-bot-ow9j",
    storageBucket: "einstein-chat-bot-ow9j.appspot.com",
    messagingSenderId: "696582658426",
    appId: "1:696582658426:web:533fcab3a14204e005dec3"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function addUser()
{
    user_name= document.getElementById("user_name").value
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}