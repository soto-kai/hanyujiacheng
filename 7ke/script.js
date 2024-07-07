'use strict';
window.onload=()=>{
	let words=[
		["早","āiyā"],
		["脸色","liúliàng"],
		["生","yòng"],
		["病","wán"],
		["吧","le"],
		["感冒","yǐjīng"],
		["头","fàng"],
		["疼","xià"],
		["嗓子","yíhuìr"],
		["有点儿","tīng"],
		["药","duìle"],
		["过","yào"],
		["趟","hé"],
		["药店","péngyou"],
		["别","cānjiā"],
		["乱","tài"],
		["医院","qiǎo"],
		["看","cì"],
		["一下","hǎo"],
		["带","bīnguǎn"],
		["行","dìng"],
		["正好","fàngxīn"],
		["没事儿","jīchǎng"],
		["给","jiē"],
		["请假","zhù"],
		["大象","yílùpíngān"],
		["鼻子","chūntiān"],
		["长","tiānqì"],
		["名胜","nuǎnhuo"],
		["古迹","kuài"],
		["裙子","wǎn"],
		["颜色","bǎo"],
		["好看","zǒu"],
		["四季","lèi"],
		["分明","jiàn"],
		["理工科","dǒng"],
		["男生","xǐ"],
		["比较","gānjìng"],
		["租房","wǎn"],
		["句子","fèiyán"],
		["通顺","zhōngyú"],
		["害怕","zhì"],
		["过山车","qīngchu"],
		["爬","gāngcái"],
		["富士山","huà"],
		["下班","lǎo"],
		["超市","pǎo"],
		["时候","chúfáng"],
		["动","càidāo"],
		["走路","tāo"],
		["电影院","chū"],
		["时","xiǎoběnr"],
		["不要","jì"],
		["大声","shūmíng"],
		["说话","chūbǎnshè"],
		["封","shǔjià"],
		["信","shànghǎi"],
		["首","jiā"],
		["歌","táng"],
		["医生","máng"],
		["大家","làngfèi"],
		["检查","tàigǔlǐ"],
		["身体","jiē"],
		
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