'use strict';
window.onload=()=>{
	let words=[
		["里","li"],
		["有","yǒu"],
		["水果店","shuǐguǒdiàn"],
		["哇","wa"],
		["想","xiǎng"],
		["买","mǎi"],
		["什么","shénme"],
		["草莓","cǎoméi"],
		["和","hé"],
		["香蕉","xiāngjiāo"],
		["星期天","xīngqītiān"],
		["开门","kāimén"],
		["呀","ya"],
		["早上","zǎoshang"],
		["点","diǎn"],
		["晚上","wǎnshang"],
		["关门","guānmén"],
		["那","nà"],
		["现在","xiànzài"],
		["去","qù"],
		["选修课","xuǎnxiūkè"],
		["没有","méiyou"],
		["时间","shíjiān"],
		["课","kè"],
		["几","jǐ"],
		["上","shàng"],
		["生活","shēnghuó"],
		["经济学","jīngjìxué"],
		["半","bàn"],
		["冰箱","bīngxiāng"],
		["可乐","kělè"],
		["自己","zìjǐ"],
		["拿","ná"],
		["东南亚","dōngnányà"],
		["冬季","dōngjì"],
		["明天","míngtiān"],
		["联欢会","liánhuānhuì"],
		["兄弟","xiōngdì"],
		["姐妹","jiěmèi"],
		["旁边儿","pángbiānr"],
		["永定门","yǒngdìngmén"],
		["天坛","tiāntán"],
		["先农坛","xiānnóngtán"],
		["南面","nánmiàn"],
		["山","shān"],
		["北面","běimiàn"],
		["河","hé"],
		["门旁","ménpáng"],
		["路旁","lùpáng"],
		["书架","shūjià"],
		["灰","huī"],
		["桌子","zhuōzi"],
		["自动","zìdòng"],
		["取款机","qǔkuǎnjī"],
		["看","kàn"],
		["奥运","àoyùn"],
		["比赛","bǐsài"],
		["休息","xiūxi"],
		["出门","chūmén"],
		["谁","shéi"],
		["班主任","bānzhǔrèn"],
		["手机","shǒujī"],
		["号码","hàomǎ"],
		["吃","chī"],
		["喝","hē"],
		["茶","chá"],
		["昨天","zuótiān"],
		["积雪","jīxuě"],
		["厘米","límǐ"],
		["京都","jīngdū"],
		["奈良","nàiliáng"],
		["古都","gǔdū"],
		["热爱","rè'ài"],
		["音乐","yīnyuè"],
		["文学","wénxué"],
		["北京","běijīng"],
		["天津","tiānjīn"],
		["西安","xī'ān"],
		["广州","guǎngzhōu"],
		["顿号","dùnhào"],
		["逗号","dòuhào"],
		["钟","zhōng"],
		["分","fēn"],
		["两","liǎng"],
		["刻","kè"],
		["差","chà"],
		["零","líng"],
		["今天","jīntiān"],
		["星期","xīngqī"],
		["月","yuè"],
		["号","hào"],
		["日","rì"],
		["小朋友","xiǎopéngyou"],
		["岁","suì"],
		["啤酒","píjiǔ"],
		["瓶","píng"],
		["第","dì"],
		["页","yè"]
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
		console.log(input);
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
			console.log(wrongwords);
		}
		if(index==words.length-1){
			msg+=`<br>全${words.length}問中${correct}問正解`;
			index=-1;
			document.getElementById('wrong').innerHTML="間違えた単語でもう一度テスト:"+wrong;
			wrong=[];
			words=wrongwords;
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