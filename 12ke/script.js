'use strict';
window.onload=()=>{
	let words=[
		["驾照","jiàzhào"],
		["可以","kěyǐ"],
		["开","kāi"],
		["换","huàn"],
		["成","chéng"],
		["国际","guójì"],
		["啦","la"],
		["厉害","lìhai"],
		["满","mǎn"],
		["一样","yíyàng"],
		["好","hǎo"],
		["试","shì"],
		["其实","qíshí"],
		["敢","gǎn"],
		["多","duō"],
		["几","jǐ"],
		["熟练","shúliàn"],
		["陪练","péiliàn"],
		["好好儿","hǎohāor"],
		["练","liàn"],
		["饮料","yǐnliào"],
		["展厅","zhǎntīng"],
		["拍照","pāizhào"],
		["墨水","mòshuǐ"],
		["校园","xiàoyuán"],
		["内","nèi"],
		["抽烟","chōuyān"],
		["人员","rényuán"],
		["使用","shǐyòng"],
		["自习室","zìxíshì"],
		["回答","huídá"],
		["牌子","páizi"],
		["电子","diànzǐ"],
		["功能","gōngnéng"],
		["决定","juédìng"],
		["尝","cháng"],
		["想","xiǎng"],
		["答复","dáfù"],
		["提高","tígāo"],
		["口语","kǒuyǔ"],
		["错","cuò"],
		["胆子","dǎnzi"],
		["恐怖","kǒngbù"],
		["爱","ài"],
		["最近","zuìjìn"],
		["胖","pàng"],
		["公斤","gōngjīn"],
		["甜食","tiánshí"],
		["弹奏","tánzòu"],
		["乐器","yuèqì"],
		["什么时候","shénmeshíhòu"],
		["欧洲","ōuzhōu"],
		["好像","hǎoxiàng"],
		["游泳","yóuyǒng"],
		["打字","dǎzì"],
		["游","yóu"],
		["米","mǐ"],
		["以后","yǐhòu"]

	];
	const ja =document.getElementById('ja');
	const btn=document.getElementById('btn');
	const output=document.getElementById('output');
	const result=document.getElementById('result');
	document.addEventListener('keydown', keydown_ivent);
	let input = "";

	function keydown_ivent(e) {


		switch (e.key) {
			case 'Backspace':
				input = input.slice(0,input.length-1);
				break;
			case 'Enter':
				btn.click();
				break;
			case 'Shift':
				break;
			case 'v':
				input=String(input)+'ü';
				break;
			default:
				input=String(input)+String(e.key);
			};

		switch (input.slice(-2)) {
			case 'a1':
				input= String(input.slice(0,input.length-2))+'ā';
				break;
			case 'a2':
				input= String(input.slice(0,input.length-2))+'á';
				break;
			case 'a3':
				input= String(input.slice(0,input.length-2))+'ǎ';
				break;
			case 'a4':
				input= String(input.slice(0,input.length-2))+'à';
				break;
			case 'i1':
				input= String(input.slice(0,input.length-2))+'ī';
				break;
			case 'i2':
				input= String(input.slice(0,input.length-2))+'í';
				break;
			case 'i3':
				input= String(input.slice(0,input.length-2))+'ǐ';
				break;
			case 'i4':
				input= String(input.slice(0,input.length-2))+'ì';
				break;
			case 'u1':
				input= String(input.slice(0,input.length-2))+'ū';
				break;
			case 'u2':
				input= String(input.slice(0,input.length-2))+'ú';
				break;
			case 'u3':
				input= String(input.slice(0,input.length-2))+'ǔ';
				break;
			case 'u4':
				input= String(input.slice(0,input.length-2))+'ù';
				break;
			case 'ü1':
				input= String(input.slice(0,input.length-2))+'ǖ';
				break;
			case 'ü2':
				input= String(input.slice(0,input.length-2))+'ǘ';
				break;
			case 'ü3':
				input= String(input.slice(0,input.length-2))+'ǚ';
				break;
			case 'ü4':
				input= String(input.slice(0,input.length-2))+'ǜ';
				break;
			case 'e1':
				input= String(input.slice(0,input.length-2))+'ē';
				break;
			case 'e2':
				input= String(input.slice(0,input.length-2))+'é';
				break;
			case 'e3':
				input= String(input.slice(0,input.length-2))+'ě';
				break;
			case 'e4':
				input= String(input.slice(0,input.length-2))+'è';
				break;
			case 'o1':
				input= String(input.slice(0,input.length-2))+'ō';
				break;
			case 'o2':
				input= String(input.slice(0,input.length-2))+'ó';
				break;
			case 'o3':
				input= String(input.slice(0,input.length-2))+'ǒ';
				break;
			case 'o4':
				input= String(input.slice(0,input.length-2))+'ò';
				break;

		};

		output.innerHTML = input;
		return false;
	};

	let wrong=[];
	let wrongwords=[];
	let index=0;
	let correct=0;
	btn.addEventListener('click',()=>{
		let ans=input;
		let msg='';
		ja.classList.remove("fade");
		if (ans == words[index][1]){
			correct++;
			msg='〇';
		}else{
			msg=`× 正:${words[index][1]}`;
			wrong.push(words[index][0]);
			wrongwords.push([String(words[index][0]),String(words[index][1])]);

		}
		if(index==words.length-1){
			index=-1;
			document.getElementById('wrong').innerHTML=`全${words.length}問中${correct}問正解<br>`+"間違えた単語でもう一度テスト:<br>"+wrong;
			wrong=[];
			words=wrongwords;
			wrongwords=[];
		}
		input="";
		output.innerHTML=input;
		result.innerHTML=msg;
		result.classList.remove('fade');
		setTimeout(function(){
			result.classList.add('fade');
		},1500);
		setItem(++index);
		output.focus();


	});
	function setItem(index){
		ja.textContent=words[index][0];
	}
	setItem(index);
}
