const moji = "パタトクカシーー";

let an = "";
for(let i = 0; i < moji.length; i++){
	if(i % 2 === 0){
		continue;
	}else{
		an += moji.charAt(i);
	}
}

console.log(an);