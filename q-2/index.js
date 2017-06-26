const pato = "パトカー";
const taku = "タクシー";

let html = "";
for(let i = 0; i < pato.length; i++){
	html += pato[i];
	html += taku[i];
}

console.log(html);