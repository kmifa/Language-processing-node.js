const Ngram = function(list,n,separator){
	this.list      = list;
	this.n         = n;
	this.separator = separator;
	this.word      = [];
	this.cha       = [];

	this.init = () => {
		let str = list.split(" ");
		this.nGramWord(str);
		this.nGramCha(str);
	}
	this.nGramWord = (list) => {
		this.joinWord(this.word,list);
	}
	this.nGramCha = (list) => {
		let str = list.join(' ').replace(/ /g,"");
		this.joinWord(this.cha,str);
	}

	this.joinWord = (aryWrap,list) => {
		for(let i = 0; i < list.length; i++){
			aryWrap[i] = list[i] + this.separator + list[i + 1];
			if(i == list.length - this.n){
				break;
			} 
		}
	}
	this.init();
}

var answer = new Ngram("I am an NLPer",2,"-");
console.log(answer.word);
console.log(answer.cha);