let userName;
let userResult;

// 名前
userName = prompt("お名前を教えて下さい");

if(userName == ""){
	userName = "名無しさん";
};
document.getElementById("name").innerHTML = userName;


// おみくじ
let rand = Math.floor(Math.random() * 5);

if(rand == 0){
	userResult = "大吉";
}

if(rand == 1){
	userResult = "中吉";
}

if(rand == 2){
	userResult = "小吉";
}

if(rand == 3){
	userResult = "吉";
}

if(rand == 4){
	userResult = "凶";
}
document.getElementById("result").innerHTML = userResult;
