'use strict';
window.onload=()=>{
	const word_list=[
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
	let words=word_list //出題する単語集。動的。
	const shuffle=document.getElementById('shuffle'); //htmlの要素をidで取得
	const all_mode=document.getElementById('all_mode');
	const wrong_mode=document.getElementById('wrong_mode');
	const num=document.getElementById('num');
	const chn=document.getElementById('chn');
	const btn=document.getElementById('btn');
	const output=document.getElementById('output');
	const result=document.getElementById('result');
	document.addEventListener('keydown', keydown_ivent);
	const ls = localStorage;
	let input = "";

	function keydown_ivent(e) { //キー入力での動作


		switch (e.key) {
			case 'Backspace':
				input = input.slice(0,input.length-1);
				break;
			case 'Enter':
				e.preventDefault(); // フォームのデフォルト動作を防ぐ
                btn.click();
				break;
			case 'Shift':
			case 'Control':
			case 'Delete':
			case 'Meta':
			case 'Escape':
			case 'Insert':
			case 'Alt':
			case 'ArrowRight':
			case 'ArrowLeft':
			case 'ArrowUp':
			case 'ArrowDown':
			case 'Hiragana':
			case 'Convert':
			case 'Hankaku':
			case 'Zenkaku':
			case 'Alphanumeric':
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
	function shuffle_func(a){ //配列をシャッフルする関数
		const array=a.slice()
		for (let i=array.length-1;i>=0;i--){
			const randomIndex=Math.floor(Math.random()*(i+1));
			[array[i], array[randomIndex]]=[array[randomIndex],array[i]]
		}
		return array

	}
	let wrong=[]; //間違えた単語一覧用のリスト
	let wrongwords=[]; //wordsを置き換えるための配列
	let index=0;
	let correct=0;

	btn.addEventListener('click',()=>{
		let ans=input;
		let msg='';
		chn.classList.remove("fade");
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
			ls.setItem("wrong4", JSON.stringify(wrongwords)) //localStorageに保存。数字は課による
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
	function setItem(index){ //中国語を表示
		chn.textContent=words[index][0];
		num.innerHTML=`${index+1}問目/全${words.length}問`;
		document.getElementById("bar").style.width = (index+1)/words.length*100 + "%";
	}
	setItem(index);
	shuffle.addEventListener('click',()=>{ //単語をシャッフル
		if (index==0){
			words=shuffle_func(words);
			setItem(0);
			result.innerHTML="単語をシャッフルしました"
		}else{
			result.innerHTML="再読み込みしてもう一度試してください"
		}
	})
	all_mode.addEventListener('click',()=>{ //全ての単語モード
		if (index==0){
			words=word_list;
			setItem(0);
			result.innerHTML="全ての単語モードに切り替えました"
		}else{
			result.innerHTML="再読み込みしてもう一度試してください"
		}
	})
	wrong_mode.addEventListener('click',()=>{ //苦手単語モード
		if (index==0){
			words=JSON.parse(ls.getItem("wrong4"));
			setItem(0);
			result.innerHTML="苦手単語モードに切り替えました"
		}else{
			result.innerHTML="再読み込みしてもう一度試してください"
		}
	})
}