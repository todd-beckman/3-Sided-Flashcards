var colors = ['#06AA50', '#AA0650', '#0650AA'],
    q = 2,
    a = 0,
    i = -1,
    flipped = true,
    reversed = false,
    alone = [
        ["思う", "おもう", "to think"],
        ["終わる", "おわる", "to end"],
        ["始まる", "はじまる", "to begin"],
        ["物", "もの", "thing"],
        ["肉", "にく", "meat"],
        ["食事", "しょくじ", "meal"],
        ["お茶", "おちゃ", "tea"],
        ["お酒", "おさけ", "alcohol"],
        ["牛肉", "ぎゅうにく", "beef"],
        ["鳥肉", "とりにく", "chicken meat"],
        ["お湯", "おゆ", "hot water"],
        ["野菜", "やさい", "vegetable"],
        ["野きゅう", "やきゅう", "baseball"],
        ["魚", "さかな", "fish"],
        ["味", "あじ", "taste"],
        ["悪い", "わるい", "bad"],
        ["料理", "りょうり", "cuisine"],
        ["お米", "おこめ", "uncooked rice"],
        ["米国", "べいこく", "America"],
        ["食料品", "しょくりょうひん", "groceries"],
        ["和食", "わしょく", "japanese food"],
        ["洋食", "ようしょく", "western food"],
        ["夜", "よる", "night"],
        ["言う", "いう", "to say"],
        ["かい", "かい", "shellfish"]
    ];
    /*
        ["拝啓", "はいけい", "greetings"],
        ["敬具", "けいぐ", "sincerely"],
        ["手", "て", "hand"],
        ["家", "いえ", "house"],
        ["家族", "かぞく", "family"],
        ["男", "おとこ", "man"],
        ["女", "おんな", "woman"],
        ["子", "こ", "child"],
        ["父", "ちち", "father"],
        ["母", "はは", "mother"],
        ["兄", "あに", "older brother"],
        ["姉", "あね", "older sister"],
        ["弟", "おとうと", "younger brother"],
        ["妹", "いもうと", "younger sister"],
        ["勉", "べん", "diligence"],
        ["道", "みち", "street"],
        ["書く", "かく", "write or draw"],
        ["使う", "つかう", "use"],
        ["国", "くに", "country"],
        ["作る", "つくる", "make"],
        ["音", "おん", "sound"],
        ["楽", "がく", "enjoyment"],
        ["全部", "ぜんぶ", "all"],
        ["運動", "うんどう", "excersize"]
    ];
        ["天", "テン", "sky, the heavens, nature, God"],
        ["気", "キ", "spirit, heart, disposition, flavor, smell, mood"],
        ["雨", "あめ", "rain"],
        ["雪", "ゆき", "snow"],
        ["度", "ど", "number of occasions or degrees, occasion"],
        ["風", "がぜ", "wind, a cold"],
        ["台", "タイ", "platform, base, level, mark, price, number of machines"],
        ["番", "バン", "number, order, keeping watch, one's turn"],
        ["春", "はる", "spring season"],
        ["夏", "なつ", "summer season"],
        ["秋", "あき", "fall season"],
        ["冬", "ふゆ", "winter season"],
        ["東", "ひがし", "east"],
        ["西", "にし", "west"],
        ["南", "みなみ", "south"],
        ["北", "きた", "north"],
        ["高", "たか", "high, expensive"],
        ["多", "おお", "many, much"],
        ["少", "すく", "few, scarce"],
        ["強", "つよ", "strong"],
        ["弱", "よわ", "weak"],
        ["作", "さく", "past, previous"],
        ["暑", "あつ", "hot (weather)"],
        ["寒", "さむ", "cold (weather), midwinter"],
        ["空", "そら", "sky, empty"]
    ];*/

function next () {
    if (flipped) {
        i++;
        if (i == list.length) {
            shuffle();
            i = 0;
        }
        flipped = false;
    }
    else {
        flipped = true;
    }
    render();
}

function render() {
    var qt = reversed ? a : q;
    document.getElementById("question").innerHTML = list[i][qt];
    if (flipped) {
        var at = reversed ? q : a;
        document.getElementById("answer").innerHTML = list[i][at];
        document.getElementById("button").value = "Next";
    }
    else {
        document.getElementById("answer").innerHTML = "...";
        document.getElementById("answer2").innerHTML = "...";
        document.getElementById("button").value = "Flip";
    }

}

function hint() {
    var z = 0;
    while (z == a || z == q) {
        z++;
    }
    document.getElementById("answer2").innerHTML = list[i][z];
}

function shuffle() {
    for (var x = list.length - 1; -1 < x; x--) {
        var y = Math.floor(Math.random() * x);
        swap(list, x, y);
    }
}

function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function reverse() {
    reversed = !reversed;
    render();
}

function reveal(s, t, c) {
    q = s;
    a = t;
    document.body.style.background = colors[c];
    render();
}


function init() {
    list = alone;
    shuffle();
}