'use strict';
window.onload=()=>{
	const word_list=[
		["毕业","bìyè"],
		["打算","dǎsuan"],
		["就业","jiùyè"],
		["大环境","dàhuánjìng"],
		["越来越","yuèláiyuè"],
		["给","gěi"],
		["研究生","yánjiūshēng"],
		["将来","jiānglái"],
		["想法","xiǎngfǎ"],
		["感","gǎn"],
		["直接","zhíjiē"],
		["或者","huòzhě"],
		["公务员","gōngwùyuán"],
		["反正","fǎnzhèng"],
		["挑","tiāo"],
		["邀请","yāoqǐng"],
		["人们","rénmén"],
		["离","lí"],
		["开","kāi"],
		["网络","wǎngluò"],
		["真正","zhēnzhèng"],
		["茅台酒","máotáijiǔ"],
		["礼物","lǐwù"],
		["游戏","yóuxì"],
		["好玩儿","hǎowánr"],
		["老年人","lǎoniánrén"],
		["愿意","yuànyì"],
		["尝试","chángshì"],
		["新生","xīnshēng"],
		["事物","shìwù"],
		["表现","biǎoxiàn"],
		["喜怒哀乐","xǐnùāilè"],
		["小孩子","xiǎoháizi"],
		["舒服","shūfu"]

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
			ls.setItem("wrong18", JSON.stringify(wrongwords)) //localStorageに保存。数字は課による
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
			words=JSON.parse(ls.getItem("wrong18"));
			setItem(0);
			result.innerHTML="苦手単語モードに切り替えました"
		}else{
			result.innerHTML="再読み込みしてもう一度試してください"
		}
	})
}