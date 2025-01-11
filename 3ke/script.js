'use strict';
window.onload=()=>{
	let words=[
		["喂","wèi"],
		["在","zài"],
		["哪儿","nǎr"],
		["呢","ne"],
		["回","huí"],
		["的","de"],
		["车","chē"],
		["中午","zhōngwǔ"],
		["宿舍","sùshè"],
		["做饭","zuòfàn"],
		["食堂","shítáng"],
		["一起","yìqǐ"],
		["饺子","jiǎozi"],
		["吧","ba"],
		["好","hǎo"],
		["啊","a"],
		["卖","mài"],
		["窗口","chuāngkǒu"],
		["楼","lóu"],
		["教师","jiàoshī"],
		["餐厅","cāntīng"],
		["见","jiàn"],
		["东京","dōngjīng"],
		["迪士尼乐园","díshìnílèyuán"],
		["千叶","qiānyè"],
		["县","xiàn"],
		["钥匙","yàoshi"],
		["书包","shūbāo"],
		["这儿","zhèr"],
		["这里","zhèli"],
		["那儿","nàr"],
		["那里","nàli"],
		["哪里","nǎli"],
		["电梯","diàntī"],
		["洗手间","xǐshǒujiān"],
		["告诉","gàosu"],
		["感冒药","gǎnmàoyào"],
		["摄影","shèyǐng"],
		["社团","shètuán"],
		["属","shǔ"],
		["猴儿","hóur"],
		["欸","éi"],
		["穿","chuān"],
		["连衣裙","liányīqún"],
		["女孩子","nǚháizi"],
		["表妹","biǎomèi"],
		["编写","biānxiě"],
		["程序","chéngxù"],
		["工程师","gōngchéngshī"],
		["做","zuò"],
		["志愿者","zhìyuànzhě"],
		["还","huán"],
		["发","fā"],
		["邮件","yóujiàn"],
		["打针","dǎzhēn"],
		["预防","yùfáng"],
		["流感","liúgǎn"],
		["颐和园","yíhéyuán"],
		["玩儿","wánr"],
		["唱","chàng"],
		["卡拉","kǎlā"],
		["怎么样","zěnmeyàng"],
		["棒球","bàngqiú"],
		["旅游","lǚyóu"],
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