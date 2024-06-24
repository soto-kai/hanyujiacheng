'use strict';
window.onload=()=>{
	const words=[
		["这","zhè"],
		["位","wèi"],
		["是","shì"],
		["她","tā"],
		["也","yě"],
		["桃乡","táoxiāng"],
		["大学","dàxué"],
		["的","de"],
		["学生","xuésheng"],
		["你","nǐ"],
		["好","hǎo"],
		["你好","nǐhǎo"],
		["姓","xìng"],
		["林","Lín"],
		["吗","ma"],
		["我","wǒ"],
		["不","bù"],
		["进修","jìnxiū"],
		["学院","xuéyuàn"],
		["日本","rìběn"],
		["留学生","liúxuéshēng"],
		["名片","míngpiàn"],
		["请","qǐng"],
		["多","duō"],
		["指教","zhǐjiào"],
		["谢谢","xièxie"],
		["外语","wàiyǔ"],
		["二","èr"],
		["年级","niánjí"],
		["您","nín"],
		["他","tā"],
		["它","tā"],
		["我们","wǒmen"],
		["咱们","zánmen"],
		["你们","nǐmen"],
		["她们","tāmen"],
		["他们","tāmen"],
		["它们","tāmen"],
		["英国","yīngguó"],
		["美国人","měiguórén"],
		["黄","huáng"],
		["王","wáng"],
		["张","zhāng"],
		["教授","jiàoshòu"],
		["研究","yánjiū"],
		["物理","wùlǐ"],
		["每天","měitiān"],
		["打","dǎ"],
		["太极拳","tàijíquán"],
		["那","nà"],
		["哪","nǎ"],
		["广东菜","guǎngdōngcài"],
		["水性笔","shuǐxìngbǐ"],
		["油性笔","yóuxìngbǐ"],
		["大阪","dàbǎn"],
		["车站","chēzhàn"],
		["新大阪","xīndàbǎn"],
		["月饼","yuèbing"],
		["这个","zhèige"],
		["那个","nèige"],
		["家","jiā"],
		["要","yào"],
		["哪个","zhè"],
		["鲁迅","lǔxùn"],
		["文学家","wénxuéjiā"],
		["思想家","sīxiǎngjiā"],
		["小","xiǎo"],
		["李","lǐ"],
		["独生","dúshēng"],
		["子女","zǐnǚ"],
		["教","jiāo"],
		["英语","yīngyǔ"],
		["眼镜","yǎnjìng"],
		["手表","shǒubiǎo"],
		["笔记本","bǐjìběn"],
		["电脑","diànnǎo"],
		["贝多芬","bèiduōfēn"],
		["交响曲","jiāoxiǎngqǔ"],
		["梵高","fàngāo"],
		["自画像","zìhuàxiàng"],
		["图书馆","túshūguǎn"],
		["书","shū"],
		["博物馆","bówùguǎn"],
		["展品","zhǎnpǐn"],
		["快餐店","kuàicāndiàn"],
		["菜单","càidān"],
		["学校","xuéxiào"],
		["公司","gōngsī"],
		["妈妈","māma"],
		["哥哥","gēge"],
		["广东人","guǎngdōngrén"],
		["福建人","fújiànrén"],
		["中国","zhōngguó"],
		["韩国","hánguó"],
		["参加","cānjiā"],
		["生日","shēngri"],
		["聚会","jùhuì"],
		["爷爷","yéye"],
		["奶奶","nǎinai"],
		["姥爷","lǎoye"],
		["姥姥","lǎolao"],
		["姑姑","gūgu"],
		["叔叔","shūshu"],
		["伯伯","bóbo"],
		["爸爸","bàba"],
		["姨妈","yímā"],
		["姨","yí"],
		["舅舅","jiùjiu"],
		["妹妹","mèimei"],
		["姐姐","jiějie"],
		["弟弟","dìdi"],
		["爱人","àiren"],
		["丈夫","zhàngfu"],
		["妻子","qīzi"],
		["儿子","érzi"],
		["女儿","nǚ'ér"],
		
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