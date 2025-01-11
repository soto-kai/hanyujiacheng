'use strict';
window.onload=()=>{
	let words=[
		["校医院","xiàoyīyuàn"],
		["还是","háishi"],
		["三甲","sānjiǎ"],
		["差别","chābié"],
		["比","bǐ"],
		["近","jìn"],
		["一点儿","diǎnr"],
		["但是","dànshì"],
		["水平","shuǐpíng"],
		["没有","méiyou"],
		["高","gāo"],
		["大病","dàbìng"],
		["这么","zhème"],
		["挂号","guàhào"],
		["交费","jiāofèi"],
		["药房","yàofáng"],
		["得","děi"],
		["又","yòu"],
		["添","tiān"],
		["麻烦","máfan"],
		["付","fù"],
		["能","néng"],
		["信用卡","xìnyòngkǎ"],
		["刷卡","shuākǎ"],
		["站","zhàn"],
		["地铁","dìtiě"],
		["出租车","chūzūchē"],
		["租","zū"],
		["公分","gōngfēn"],
		["选手","xuǎnshǒu"],
		["多了","duōle"],
		["旺季","wàngjì"],
		["淡季","dànjì"],
		["机票","jīpiào"],
		["一些","yìxiē"],
		["语法","yǔfǎ"],
		["阿拉伯语","ālābóyǔ"],
		["为什么","wèishénme"],
		["总是","zǒngshì"],
		["客气","kèqi"],
		["成都","chéngdū"],
		["那么","nàme"],
		["好吃","hǎochī"],
		["骑","qí"],
		["遵守","zūnshǒu"],
		["交通","jiāotōng"],
		["规则","guīzé"],
		["前","qián"],
		["安检","njiǎn"],
		["迷路","mílù"],
		["小心","xiǎoxīn"],
		["过","guò"],
		["口","kǒu"],
		["气","qì"],
		["俯卧撑","fǔwòchēng"],
		["醉","zuì"],
		["冷","lěng"],
		["安静","njìng"],
		["酒","jiǔ"]
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