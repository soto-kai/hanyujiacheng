'use strict';
window.onload=()=>{
	let words=[
		["发现","fāxiàn"],
		["了","le"],
		["家","jiā"],
		["书店","shūdiàn"],
		["叫","jiào"],
		["书院","shūyuàn"],
		["知道","zhīdao"],
		["地方","dìfang"],
		["那","nà"],
		["很","hěn"],
		["有名","yǒumíng"],
		["对","duì"],
		["楼上","lóushàng"],
		["书吧","shūbā"],
		["环境","huánjìng"],
		["非常","fēicháng"],
		["好","hǎo"],
		["点","diǎn"],
		["杯","bēi"],
		["咖啡","kāfēi"],
		["在","zài"],
		["个","ge"],
		["小时","xiǎoshí"],
		["便宜","piányi"],
		["二手书","èrshǒushū"],
		["难得","nándé"],
		["放假","fàngjià"],
		["天","tiān"],
		["没","méi"],
		["逛","guàng"],
		["都","dōu"],
		["好学生","hǎoxuésheng"],
		["头","tóu"],
		["牛","niú"],
		["块","kuài"],
		["蛋糕","dàngāo"],
		["条","tiáo"],
		["鱼","yú"],
		["片","piàn"],
		["面包","miànbāo"],
		["张","zhāng"],
		["纸","zhǐ"],
		["把","bǎ"],
		["雨伞","yǔsǎn"],
		["下","xià"],
		["涩谷","sègǔ"],
		["晚饭","wǎnfàn"],
		["部","bù"],
		["白酒","báijiǔ"],
		["本","běn"],
		["行李","xíngli"],
		["旧","jiù"],
		["新","xīn"],
		["王府井","wángfǔjǐng"],
		["热闹","rènao"],
		["厚","hòu"],
		["词典","cídiǎn"],
		["贵","guì"],
		["薄","báo"],
		["青海","qīnghǎi"],
		["美丽","měilì"],
		["茶卡盐湖","chákǎyánhú"],
		["著名","zhùmíng"],
		["柴达木盆地","cháidámùpéndì"],
		["好消息","hǎoxiāoxi"],
		["公园","sīxgōngyuániǎngjiā"],
		["跑步","pǎobù"],
		["种","zhǒng"],
		["智能","zhìnéng"],
		["流行","liúxíng"],
		["打","dǎ"],
		["羽毛球","yǔmáoqiú"],
		["西安人","xī'ānrén"],
		["中国菜","zhōngguócài"],
		["意大利菜","yìdàlìcài"],
		["日本菜","rìběncài"],
		["喜欢","xǐhuan"],
		["杯子","bēizi"],
		["苹果","píngguǒ"],
		["问题","wèntí"],
		["电话","diànhuà"],
		["只","zhī"],
		["鸡","jī"],
		["猫","māo"],
		["鸟","niǎo"],
		["表","biǎo"],
		["鞋","xié"],
		["杂志","zázhì"],
		["手册","shǒucè"],
		["根","gēn"],
		["头发","tóufa"],
		["火柴","huǒchái"],
		["线","xiàn"],
		["烟","yān"],
		["枝","zhī"],
		["铅笔","qiānbǐ"],
		["圆珠笔","yuánzhūbǐ"],
		["手帕","shǒupà"],
		["糖","táng"],
		["肉","ròu"],
		["裤子","kùzi"],
		["毛巾","máojīn"],
		["被子","bèizi"],
		["狗","gǒu"],
		["件","jiàn"],
		["衣服","yīfu"],
		["大衣","dàyī"],
		["事","shì"],
		["票","piào"],
		["照片","zhàopiàn"],
		["床","chuáng"],
		["醋","cù"],
		["辆","liàng"],
		["自行车","zìxíngchē"],
		["汽车","qìchē"],
		["卡车","kǎchē"],
		["架","jià"],
		["飞机","fēijī"],
		["照相机","zhàoxiàngjī"],
		["猪","zhū"],
		["扇子","shànzi"],
		["椅子","yǐzi"],
		["茶壶","cháhú"],
		["刀","dāo"],
		["双","shuāng"],
		["袜子","wàzi"],
		["眼睛","yǎnjing"],
		["对","duì"],
		["夫妻","fūqī"],
		["花瓶","huāpíng"],
		["斤","jīn"],

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