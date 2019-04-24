const nightmareSkill = {
    // 能力上昇系スキル
    ミトラ: '物理及び魔法攻撃力を特大アップ',
    ミハイル: '物理及び魔法攻撃力を特大アップ',
    ユリシス: '物理及び魔法攻撃力を特大アップ',
    レヴィ: '物理攻撃力を特大アップ',
    かさごろー: '魔法攻撃力を特大アップ',
    ライブラリウィスプ: '物理及び魔法防御力を特大アップ',
    ミレイユ: '物理及び魔法防御力を特大アップ',
    カルキノス: '物理及び魔法防御力を特大アップ',
    アズー: '物理防御力を特大アップ',
    ジルニトラ: '魔法防御力を特大アップ',
    // 能力減少系スキル
    ヤタガラス: '物理及び魔法攻撃力を特大ダウン',
    マギア: '物理及び魔法攻撃力を特大ダウン',
    ウロボロス: '物理攻撃力を特大ダウン',
    リューゲ: '魔法攻撃力を特大ダウン',
    レッドローズ: '物理及び魔法防御力を特大ダウン',
    シルバータイガー: '物理及び魔法防御力を特大ダウン',
    ジャバウォック: '魔法防御力を特大ダウン',
    // 武器スキル強化系スキル
    ウガルルム: '火属性スキル効果アップ',
    フロン: '火属性スキル効果アップ',
    リコネ: '火属性スキル効果特大アップ',
    フリーズゴーレム: '水属性スキル効果アップ',
    邪王炎殺黒龍波: '水属性スキル効果アップ',
    ユノ: '水属性スキル効果特大アップ',
    リント: '風属性スキル効果アップ',
    ドリュアス: '風属性スキル効果特大アップ',
    // 劣勢時前衛スキル効果アップ系スキル
    バーバリアン: '劣勢時前衛スキル効果特大アップ',
    ゴリラ: '劣勢時前衛スキル効果特大アップ',
    マウアルケロン: '劣勢時前衛スキル効果特大アップ',
    // 補助スキル発動率増減系スキル
    ブルーポピー: '補助スキル発動率特大アップ',
    グリフォン: '補助スキル発動率特大アップ',
    ノイン: '補助スキル発動率特大ダウン',
    フリッピーバード: '補助スキル発動率特大ダウン',
    // スキル効果減少系スキル
    マミー: '刀剣と打撃スキル効果ダウン',
    ココ: '刀剣と打撃スキル効果ダウン',
    鎧巨人: '射出と長柄スキル効果ダウン',
    ブラン: '楽器スキル効果ダウン',
    ディアボロス: '魔書スキル効果ダウン',
    オディオ: '祈祷スキル効果ダウン',
    // SP関係スキル
    エリス: 'スキルの消費SP減少',
    フィア: '前衛のSPを回復',
    レブン: '前衛のSPを回復',
    愚カナ妹達: '後衛のSPを回復',
    // カウンター系スキル
    ガリア: '召喚中のスキル時間を短縮',
    ウインドゴーレム: '召喚スキルの時間を巻き戻す',
    // 装備チェンジ回数リセットスキル
    アイアタル: '装備チェンジ回数リセット',
    ロイサ: '装備チェンジ回数リセット',
}

const table = document.getElementsByTagName('table')[0];

function setThListener(th) {
    th.addEventListener('click', function () {
        const participation = 'non-participation';

        if (th.className === participation) {
            th.classList.remove(participation);
            th.parentNode.classList.remove('non-active');
        } else {
            th.classList.add(participation);
            th.parentNode.classList.add('non-active');
        }
    }, false);
}

function setTdListener(td) {
    td.addEventListener('click', function () {
        const selectedClasses = document.getElementsByClassName(td.className);
        const removeClasses = [];
        const parentTh = td.parentNode.children[0];

        for (let i = 0; i < selectedClasses.length; i++) {
            const selectedClass = selectedClasses.item(i);

            if (selectedClass.className.match('non-active')) {
                removeClasses.push(selectedClass);
                parentTh.classList.remove('non-participation');
            } else {
                selectedClass.classList.add('non-active');
                td.parentNode.classList.add('non-active');
                parentTh.classList.add('non-participation');
            }
        }
        removeClasses.forEach((removeClass) => {
            removeClass.classList.remove('non-active');
            td.parentNode.classList.remove('non-active');
        })
    }, false);
}

function setTable(data, setRootTr) {
    const th = document.createElement('th');
    th.textContent = data.name;
    setThListener(th);
    setRootTr.appendChild(th);

    for (let i = 1; i < 6; i++) {
        const td = document.createElement('td');
        const nightmareName = data[Object.keys(data)[i]];

        td.textContent = nightmareName;
        if (nightmareName) td.classList.add(nightmareSkill[nightmareName]);
        setTdListener(td);
        setRootTr.appendChild(td);
    }
}

const request = new XMLHttpRequest();

request.open('GET', 'https://script.google.com/macros/s/AKfycbxjfs3VGRvKUnKILKebdG5UOvEoTMpWFvXiHjX_QalOju-BJRc/exec', true);
request.responseType = 'json';

request.onload = function () {
    const data = this.response;
    const tbody = document.createElement('tbody');

    for (let i = 0; i < 17; i++) {
        const tr = document.createElement('tr');

        if (i === 0 || i === 6) {
            const th = document.createElement('th');
            th.classList.add('position');
            th.textContent = i === 0 ? '前衛ズ' : '後衛ズ';
            th.setAttribute('colspan', '6');

            tr.appendChild(th);
        } else if (i >= 1 && i < 6) {
            setTable(data[i - 1], tr);
        } else if (i >= 7) {
            setTable(data[i - 2], tr);
        }

        tbody.appendChild(tr)
    }

    table.appendChild(tbody);

    document.getElementsByTagName('img')[0].style.display = 'none';
};

request.send();
