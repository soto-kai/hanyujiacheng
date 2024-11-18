'use strict';
window.onload=()=>{
	const words=[
		["场","chǎng"],
		["还","hái"],
		["应该","yīnggāi"],
		["来得及","láidejí"],
		["对不起","duìbuqǐ"],
		["才","cái"],
		["就","jiù"],
		["让","ráng"],
		["借","jiè"],
		["走","zǒu"],
		["着","zhe"],
		["肯定","kěndìng"],
		["座儿","zuòr"],
		["没关系","méiguānxi"],
		["齐","qí"],
		["漫画","mànhuà"],
		["家教","jiājiào"],
		["帅","shuài"],
		["受","shòu"],
		["女生","nǚshēng"],
		["篇","piān"],
		["论文","lùnwén"],
		["明白","míngbai"],
		["睡","shuì"],
		["起床","qǐchuáng"],
		["加班","jiābān"],
		["醒","xǐng"],
		["预习","yùxí"],
		["开始","kāishǐ"],
		["被","bèi"],
		["送","sòng"],
		["叫","jiào"],
		["撕","sī"],
		["让","ráng"],
		["服","fú"],
		["偷","tōu"],
		["全身","quánshēn"],
		["淋","lín"],
		["湿","shī"],
		["烤","kǎo"],
		["糊","hú"],
		["扔","rēng"],
		["哼","hēng"],
		["关","guān"],
		["窗户","chuānghu"],
		["睡觉","shuìjiào"],
		["稍微","shāowēi"],
		["批评","pīpíng"],
		["哭","kū"],
		["样子","yàngzi"],
		["不怎么样","bùzěnmeyàng"],
		["味道","wèidao"],
		["不错","búcuò"],
		["收拾","shōushi"],
		["抓","zhuā"],
		["好人","hǎorén"],
		["刚","gāng"],
		["火车","huǒchē"],

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
		}
		if(index==words.length-1){
			msg+=`<br>全${words.length}問中${correct}問正解`;
			index=-1;
			document.getElementById('wrong').innerHTML="間違えた文字:"+wrong;
			wrong=[];
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
