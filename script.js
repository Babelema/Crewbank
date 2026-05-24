const btn = document.getElementById("toggleTransactions");
const transactions = document.getElementById("transactions");

if(btn){
btn.onclick = function(){

if(transactions.style.display === "block"){
transactions.style.display = "none";
btn.innerText = "See All Transactions";
}else{
transactions.style.display = "block";
btn.innerText = "Hide Transaction History";
}

};
}

function goToSend(){
window.location.href = "send.html";
}

function performAction(type){

let amount = prompt("Enter amount");

if(!amount || isNaN(amount)){
alert("Invalid amount");
return;
}

let pin = prompt("Enter your 4-digit PIN");

if(pin !== "2007"){
alert("Incorrect PIN");
return;
}

let now = new Date();

let date = now.toLocaleDateString("en-US",{
month:"short",
day:"numeric",
year:"numeric"
});

let time = now.toLocaleTimeString([],{
hour:"2-digit",
minute:"2-digit"
});

let txList = document.getElementById("txList");

let tx = document.createElement("div");

tx.className = "tx failed";

tx.innerHTML = `
<div>
<p>${type}</p>
<small>${date} • ${time}</small>
</div>
<span>-$${parseFloat(amount).toFixed(2)} Failed</span>
`;

txList.prepend(tx);

alert(type + " transaction failed");
}
