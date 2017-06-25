const list = "Hi He Lied Because Boron Could Not Oxidize Fluorine. New Nations Might Also Sign Peace Security Clause. Arthur King Can.";

let ary = list.replace(/,|\./g,'').split(" ");
let answer = {};

let con = [1,5,6,7,8,9,15,16,19];

for(let i = 0; i < ary.length; i++){
	answer[String(i+1)] = ary[i].slice(0,2);
}

for(let i in o = con){
	answer[o[i]] = answer[o[i]].slice(0,1);
}

console.log(answer);