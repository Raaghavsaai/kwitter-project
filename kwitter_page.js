var firebaseConfig = {
    apiKey: "AIzaSyBN4_ilRpuTyaxFlva1FChSgwFLOe0u3nI",
    authDomain: "kwitter-ab16b.firebaseapp.com",
    databaseURL: "https://kwitter-ab16b-default-rtdb.firebaseio.com/",
    projectId: "kwitter-ab16b",
    storageBucket: "kwitter-ab16b.appspot.com",
    messagingSenderId: "1077272109310",
    appId: "1:1077272109310:web:3590f36899c13f7911c5af",
    measurementId: "G-DNTH6JP4CD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

username=localStorage.getItem("username");
Room_name=localStorage.getItem("Room_name");

function send(){
    msg=document.getElementById("msg").value;
firebase.database().ref(Room_name).push({
    Username:username,
    Message:msg,
    likes:0
});
document.getElementById("msg").value="";
}
function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("Room_name");
    window.location.replace("index.html");
}