'use strict';
window.onload=()=>{
	let words=[
		["箱子","xiāngzi"],
		["装","zhuāng"],
		["让","ràng"],
		["邮局","yóujú"],
		["寄","jì"],
		["过去","guoqu"],
		["快递","kuàidì"],
		["取","qǔ"],
		["多","duō"],
		["的话","de huà"],
		["只","zhǐ"],
		["需要","xūyào"],
		["喔","ò"],
		["上班","shàngbān"],
		["校外","xiàowài"],
		["查","chá"],
		["包裹","bāoguǒ"],
		["要","yào"],
		["带","dài"],
		["身份","shēnfèn"],
		["证件","zhèngjiàn"],
		["忘","wàng"],
		["不用","búyòng"],
		["着急","zháojí"],
		["警察","jǐngchá"],
		["叫","jiào"],
		["司机","sījī"],
		["停","tíng"],
		["随便","suíbiàn"],
		["使","shǐ"],
		["高兴","gāoxìng"],
		["办公室","bàngōngshì"],
		["虚心","xūxīn"],
		["进步","jìnbù"],
		["骄傲","jiāo'ào"],
		["落后","luòhòu"],
		["文件","wénjiàn"],
		["燕子","yànzi"],
		["飞","fēi"],
		["南方","nánfāng"],
		["孩子","háizi"],
		["玩具","wánjù"],
		["多么","duōme"],
		["些","xiē"],
		["可怜","kělián"],
		["哪","na"],
		["支付","zhīfù"],
		["方便","fāngbiàn"],
		["如果","rúguǒ"],
		["红叶","hóngyè"],
		["要是","yàoshi"],
		["兴趣","xìngqù"],
		["随时","suíshí"],
		["问","wèn"],
		["愚人节","yúrénjié"],
		["小学生","xiǎoxuéshēng"],
		["上学","shàngxué"],
		["下学","xiàxué"],
		["戴","dài"],
		["小黄帽","xiǎohuángmào"],
		["马路","mǎlù"],
		["确认","quèrèn"],
		["来往","láiwǎng"],
		["车辆","chēliàng"],
		["失败","shībài"],
		["责备","zébèi"],
		["住","zhù"],
		["掉","diào"],
		["坐","zuò"],
		["站","zhàn"],
		["躺","tǎng"],
		["吉祥寺","jíxiángsì"],
		["地上","dìshang"],
		["茶叶","cháyè"],

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