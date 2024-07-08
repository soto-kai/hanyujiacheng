'use strict';
window.onload=()=>{
	let words=[
		["早","zǎo"],
		["脸色","liǎnsè"],
		["生","shēng"],
		["病","bìng"],
		["吧","ba"],
		["感冒","gǎnmào"],
		["头","tóu"],
		["疼","téng"],
		["嗓子","sǎngzi"],
		["有点儿","yǒudiǎnr"],
		["药","yào"],
		["过","guò"],
		["趟","tàng"],
		["药店","yàodiàn"],
		["别","bié"],
		["乱","luàn"],
		["医院","yīyuàn"],
		["看","kàn"],
		["一下","yíxià"],
		["带","dài"],
		["行","xíng"],
		["正好","zhènghǎo"],
		["没事儿","méishìr"],
		["给","gěi"],
		["请假","qǐngjià"],
		["大象","dàxiàng"],
		["鼻子","bízi"],
		["长","cháng"],
		["名胜","míngshèng"],
		["古迹","gǔjì"],
		["裙子","qúnzi"],
		["颜色","yánsè"],
		["好看","hǎokàn"],
		["四季","sìjì"],
		["分明","fēnmíng"],
		["理工科","lǐgōngkē"],
		["男生","nánshēng"],
		["比较","bǐjiào"],
		["租房","zūfáng"],
		["句子","jùzi"],
		["通顺","tōngshùn"],
		["害怕","hàipà"],
		["过山车","guòshānchē"],
		["爬","pá"],
		["富士山","Fùshìshān"],
		["下班","xiàbān"],
		["超市","chāoshì"],
		["时候","shíhou"],
		["动","dòng"],
		["走路","zǒulù"],
		["电影院","diànyǐngyuàn"],
		["时","shí"],
		["不要","jì"],
		["大声","dàshēng"],
		["说话","shuōhuà"],
		["封","fēng"],
		["信","xìn"],
		["首","shǒu"],
		["歌","gē"],
		["医生","yīshēng"],
		["大家","Dàjiā"],
		["检查","jiǎnchá"],
		["身体","shēntǐ"],
		
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
