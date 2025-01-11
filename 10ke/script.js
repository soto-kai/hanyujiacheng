'use strict';
window.onload=()=>{
	let words=[
		["选","xuǎn"],
		["文化","wénhuà"],
		["门","mén"],
		["有意思","yǒuyìsi"],
		["挺","tǐng"],
		["不过","búguò"],
		["有的","yǒude"],
		["词","cí"],
		["听不懂","tīngbudǒng"],
		["意思","yìsi"],
		["中文","zhōngwén"],
		["怎么","zěnme"],
		["排","pái"],
		["节","jié"],
		["早","zǎo"],
		["起","qǐ"],
		["听说","tīngshuō"],
		["是吗","shìma"],
		["多","duō"],
		["拿","ná"],
		["到","dào"],
		["优","yōu"],
		["而且","érqiě"],
		["及格","jígé"],
		["少","shǎo"],
		["啊","á"],
		["学分","xuéfēn"],
		["办","bàn"],
		["谦虚","qiānxū"],
		["语言","yǔyán"],
		["有趣","yǒuqù"],
		["现象","xiànxiàng"],
		["座","zuò"],
		["城市","chéngshì"],
		["历史","lìshǐ"],
		["悠久","yōujiǔ"],
		["心里","xīnli"],
		["开心","kāixīn"],
		["及时","jíshí"],
		["菜量","càiliàng"],
		["大","dà"],
		["之前","zhīqián"],
		["计划书","jìhuàshū"],
		["跟","gēn"],
		["联系","liánxi"],
		["发言","fāyán"],
		["套","tào"],
		["西服","xīfú"],
		["养","yang"],
		["宠物","chǒngwù"],
		["减压","jiǎnyā"],
		["刘","Liú"],
		["中","zhòng"],
		["彩票","cǎipiào"],
		["远","yuǎn"],
		["重","zhòng"],
		["深","shēn"],
		["奥林匹克","àolínpǐkè"],
		["金牌","jīnpái"],
		["东京晴空塔","dōngjīngqíngkōngtǎ"],
		["长城","chángchéng"]

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