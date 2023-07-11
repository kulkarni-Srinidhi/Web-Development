let users = [
  {
    userId: "USR00001",
    name: "Robers Sympson",
    profilePicture:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLWYfAfS9PZaOTtICO8tVS9DqYUq6NojXA1Vi2qYyHJg&usqp=CAU&ec=48600113",
    statusMessage: "We become what we think about!",
    presence: 1,
  },
  {
    userId: "USR00002",
    name: "Leonard MacDirmid",
    profilePicture:
      "https://thumbs.dreamstime.com/b/flat-design-ironman-reactor-white-background-vector-illustration-ironan-reactor-logo-shining-light-white-background-vector-202017677.jpg",
    statusMessage: "A positive mindset brings positive things.",
    presence: 2,
  },
  {
    userId: "USR00003",
    name: "Catharina Patroni",
    profilePicture:
      "https://i1.sndcdn.com/avatars-sqpFyHHydfkys2TW-eUwhog-t240x240.jpg",
    statusMessage: "One small positive thought can change your whole day",
    presence: 3,
  },
  {
    userId: "USR00004",
    name: "Easter Eckley",
    profilePicture:
    "https://cdna.artstation.com/p/assets/images/images/033/435/166/large/rishav-gupta-naruto.jpg?1609603275",
    statusMessage: "I am a rockstar",
    presence: 1,
  },
  {
    userId: "USR00005",
    name: "Maria Dropola",
    profilePicture:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2P1hphlSKqkg1SiIkslJL6GB5aKuMEuixl0_0ETZhg&usqp=CAU&ec=48600113",
    statusMessage: "I am using Gradious messenger",
    presence: 4,
  },
];
const MsgBox=document.querySelector('.msg1');
document.querySelector(".sender").onclick = function(){
let newMsg=document.querySelector(".msg-typer input").value;
// console.log(newMsg);
if(value===""){
  return;
}
const newMsgBox=MsgBox.cloneNode(true);
newMsgBox.querySelector('span').textContent = newMsg;
document.querySelector(".chat-body-content").append(newMsgBox);
document.querySelector(".msg-typer input").value="";

}
const record=document.querySelector('.user');
const list=document.querySelector('.userslist');
const color=["rgb(14, 255, 14)", "Red", "Yellow", "Grey"];

function searchFor(Id) {
return list.querySelector("#"+Id);
}

function addUser(user,rand=1){
  const newRecord = record.cloneNode(true);
  newRecord.querySelector('.name').innerHTML=user.name;
  newRecord.querySelector('.status').innerHTML=user.statusMessage;
  if(!user.profilePicture){
    newRecord.querySelector('.profile-img img').src=
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD2P1hphlSKqkg1SiIkslJL6GB5aKuMEuixl0_0ETZhg&usqp=CAU&ec=48600113";
  }
  else{
    newRecord.querySelector('.profile-img img').src=user.profilePicture;
  }
  newRecord.querySelector(".profile-img").style.backgroundColor =
  color[user.presence -1];
  newRecord.id=user.userId;
  newRecord.classList.remove("hide");
  newRecord.onclick=function(){
    document.querySelector(".chat-header img").src=user.profilePicture;
    document.querySelector(".chat-title").innerHTML=user.name;


  }
  list.prepend(newRecord);
}


function renderUsers() {
  users.map((val, index) => {
    addUser(val, index);
  });
}


function updatePresence(status){
// console.log("hiii");
searchFor(status.userId).querySelector(".profile-img").style.backgroundColor =
  color[status.presence -1];
}


function updateStatusMessage(Msg) {
searchFor(Msg.userId).querySelector(".status").innerHTML = Msg.statusMessage;
}


function deleteUser(userId) {
searchFor(userId).remove();
}
renderUsers();
console.log("you can perform : addUser(user)  || updatePresence(status) || updateStatusMessage(Msg) || deleteUser(userId)");