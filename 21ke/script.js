'use strict';
window.onload=()=>{
	const word_list=[
		["快乐观","kuàilèguān"],
		["四喜是","sìxǐshì"],
		["旱","hàn"],
		["逢","féng"],
		["甘雨","gānyǔ"],
		["他乡","tāxiāng"],
		["故知","gùzhī"],
		["洞房","dòngfáng"],
		["花烛","huāzhú"],
		["夜","yè"],
		["金榜","jīnbǎng"],
		["题名","tímíng"],
		["古人","gǔrén"],
		["列举","lièjǔ"],
		["快乐","kuàilè"],
		["古代","gǔdài"],
		["农耕","nónggēng"],
		["社会","shèhuì"],
		["靠","kào"],
		["天","tiān"],
		["吃饭","chīfàn"],
		["大旱","dàhàn"],
		["之后","zhīhòu"],
		["降","jiàng"],
		["甘霖","gānlín"],
		["自然","zìrán"],
		["喜事","xǐshì"],
		["至于","zhìyú"],
		["成家立业","chéngjiālìyè"],
		["看来","kànlái"],
		["人生","rénshēng"],
		["大事","dàshì"],
		["家族","jiāzú"],
		["应","yīng"],
		["尽","jìn"],
		["责任","zérèn"],
		["所以","suǒyǐ"],
		["等于","děngyú"],
		["履行","lǚxíng"],
		["意味着","yìwèizhe"],
		["官","guān"],
		["资格","zīgé"],
		["从此","cóngcǐ"],
		["有望","yǒuwàng"],
		["出人头地","chūréntóudì"],
		["满足","mǎnzú"],
		["前程","qiánchéng"],
		["期许","qīxǔ"],
		["好事","hǎoshì"],
		["字面上","zìmiànshang"],
		["人生地不熟","rénshēngdìbùshú"],
		["老朋友","lǎopéngyou"],
		["像","xiàng"],
		["歌颂","gēsòng"],
		["友情","yǒuqíng"],
		["陌生","mòshēng"],
		["关照","guānzhào"],
		["庆幸","qìngxìng"],
		["明显","míngxiǎn"],
		["对于","duìyú"],
		["功利","gōnglì"],
		["注重","zhùzhòng"],
		["实用","shíyòng"],
		["而","ér"],
		["在意", "zàiyì"],
		["个性","gèxìng"],
		["舒展","shūzhǎn"],
		["精神","jīngshén"],
		["层次","céngcì"],
		["追求","zhuīqiú"],
		["并","bìng"],
		["富足","fùzú"],
		["生存","shēngcún"],
		["重要","zhòngyào"],
		["挣","zhèng"],
		["学费","xuéfèi"],
		["生活费","shēnghuófèi"],
		["瑜伽","yújiā"],
		["缓解","huǎnjiě"],
		["压力","yālì"],
		["发生","fāshēng"],
		["辞职","cízhí"],
		["阅读","yuèdú"],
		["休闲","xiūxián"],
		["方式","fāngshì"],
		["初学者","chūxuézhě"],
		["内容","nèiróng"],
		["队","duì"],
		["夺冠","duóguàn"],
		["款","kuǎn"],
		["上市","shàngshì"],
		["会谈","huìtán"],
		["间","jiān"],
		["神情","shénqíng"],
		["似乎","sìhū"],
		["全球","quánqiú"],
		["日益","rìyì"],
		["严重","yánzhòng"],
		["数据","shùjù"],
		["近年","jìnnián"],
		["利润","lìrùn"],
		["持续","chíxù"],
		["增长","zēngzhǎng"],
		["眼泪","yǎnlèi"],
		["软弱","ruǎnruò"],
		["收入","shōurù"],
		["能力","nénglì"],
		["相关","xiāngguān"],
		["虽然","suīrán"],
		["却","què"],
		["记忆力","jìyìlì"],
		["超过","chāoguò"],
		["常人","chángrén"],
		["差","chà"],
		["体力","tǐlì"],
		["以前","yǐqián"],

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