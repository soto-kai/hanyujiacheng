'use strict';
window.onload=()=>{
	let words=[
		["外面","wàimiàn"],
		["下","xià"],
		["雨","yǔ"],
		["伞","sǎn"],
		["坏了","huàile"],
		["把","bǎ"],
		["得","de"],
		["跟","gēn"],
		["认识","rènshi"],
		["高中","gāozhōng"],
		["同学","tóngxué"],
		["怪不得","guàibude"],
		["关系","guānxi"],
		["见面","jiànmiàn"],
		["就","jiù"],
		["吵架","chǎojià"],
		["才","cái"],
		["说明","shuōmíng"],
		["感情","gǎnqíng"],
		["对方","duìfāng"],
		["当","dàng"],
		["外人","wàirén"],
		["附近","fùjìn"],
		["黄金周","huángjīnzhōu"],
		["期间","qījiān"],
		["店","diàn"],
		["客人","kèren"],
		["跑","pǎo"],
		["期末","qīmò"],
		["报告","bàogào"],
		["屏幕","píngmù"],
		["摔","shuāi"],
		["碎","suì"],
		["手续","shǒuxù"],
		["学生证","xuéshēngzhèng"],
		["弄","nòng"],
		["坏","huài"],
		["责怪","zéguài"],
		["骗","piàn"],
		["房间","fángjiān"],
		["羽绒服","yǔróngfú"],
		["脱","tuō"],
		["北海道","běihǎidào"],
		["冬天","dōngtiān"],
		["雪","xuě"],
		["日语","rìyǔ"],
		["流利","liúlì"],
		["女朋友","nǚpéngyou"],
		["长","zhǎng"],
		["漂亮","piàoliang"],
		["篮球","lánqiú"],
		["特别","tèbié"],
		["家人","jiārén"],
		["旅行","lǚxíng"],
		["任何","rènhé"],
		["广播","guǎngbō"],
		["讲座","jiǎngzuò"],
		["上海话","shànghǎihuà"],
		["福建话","fújiànhuà"],
		["打瞌睡","dǎkēshuì"],
		["脸","liǎn"],
		["红","hóng"],
		["麻婆豆腐","mápódòufu"],
		["烤鸭","kǎoyā"],
		["一般","yìbān"]

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