const moji = "Now I need a drink, alcoholic of course, after the heavy lectures involving quantum mechanics.";

let ary = moji.replace(/,|\./g,'').split(' ');

for(let i = 0; i < ary.length; i++){
	let str_1st = ary[i].length;
	console.log(str_1st);
}