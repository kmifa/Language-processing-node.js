const moji = "stressed";
const len  = moji.length - 1;

let ar = [];
for(let i = len ; i > -1 ; i--){
	ar.push(moji[i]);
}

const str = ar.join(',').replace(/,/g,"");

console.log(str);