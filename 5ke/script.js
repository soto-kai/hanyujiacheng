'use strict';
window.onload=()=>{
	let words=[
		["羽毛球鞋","yǔmáoqiúxié"],
		["真","zhēn"],
		["酷","kù"],
		["的","de"],
		["花","huā"],
		["多少","duōshao"],
		["钱","qián"],
		["网","wǎng"],
		["百","bǎi"],
		["多","duō"],
		["块","kuài"],
		["会","huì"],
		["当然","dāngrán"],
		["过","guo"],
		["怎么","zěnme"],
		["上","shàng"],
		["网站","wǎngzhàn"],
		["先","xiān"],
		["注册","zhùcè"],
		["账号","zhànghào"],
		["再","zài"],
		["选择","xuǎnzé"],
		["商品","shāngpǐn"],
		["改天","gǎitiān"],
		["约","yuē"],
		["观战","guānzhàn"],
		["鱼香肉丝","yúxiāngròusī"],
		["请问","qǐngwèn"],
		["天安门","tiān'ānmén"],
		["走","zǒu"],
		["打车","dǎchē"],
		["到","dào"],
		["厦门","xiàmén"],
		["学","xué"],
		["广东话","guǎngdōnghuà"],
		["香港","xiānggǎng"],
		["陈","chén"],
		["老师","lǎoshī"],
		["说","shuō"],
		["吹","chuī"],
		["口琴","kǒuqín"],
		["东西","dōngxi"],
		["正宗","zhèngzōng"],
		["川菜","chuāncài"],
		["西游记","xīyóujì"],
		["故宫博物院","gùgōngbówùyuàn"],
		["参观","cānguān"],
		["美术馆","měishùguǎn"],
		["然后","ránhòu"],
		["午餐","wǔcān"],
		["银行","yínháng"],
		["找","zhǎo"],
		["遍","biàn"],
		["欢迎","huānyíng"],
		["千","qiān"],
		["万","wàn"],
		["亿","yì"],
		["元","yuán"],
		["毛","máo"],
		["分","fēn"],
		["角","jiǎo"],
		["圆","yuán"],

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