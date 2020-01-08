const nightmareSkill = {
    // 能力上昇系スキル
    ミトラ: '物理及び魔法攻撃力を特大アップ',
    ミハイル: '物理及び魔法攻撃力を特大アップ',
    ユリシス: '物理及び魔法攻撃力を特大アップ',
    'ユリシス（メイン装備）': '物理及び魔法攻撃力を特大アップ',
    レヴィ: '物理攻撃力を特大アップ',
    雷かさごろー: '魔法攻撃力を特大アップ',
    かさごろー: '魔法攻撃力を特大アップ',
    シング: '魔法攻撃力を特大アップ',
    ライブラリウィスプ: '物理及び魔法防御力を特大アップ',
    ミレイユ: '物理及び魔法防御力を特大アップ',
    カルキノス: '物理及び魔法防御力を特大アップ',
    アズー: '物理防御力を特大アップ',
    ジルニトラ: '魔法防御力を特大アップ',
    // 能力減少系スキル
    ヤタガラス: '物理及び魔法攻撃力を特大ダウン',
    マギア: '物理及び魔法攻撃力を特大ダウン',
    ランスロット: '物理及び魔法攻撃力を特大ダウン',
    ウロボロス: '物理攻撃力を特大ダウン',
    リューゲ: '魔法攻撃力を特大ダウン',
    レッドローズ: '物理及び魔法防御力を特大ダウン',
    シルバータイガー: '物理及び魔法防御力を特大ダウン',
    シルタイ: '物理及び魔法防御力を特大ダウン',
    銀虎: '物理及び魔法防御力を特大ダウン',
    ジャバウォック: '魔法防御力を特大ダウン',
    // 武器スキル強化系スキル
    ウガルルム: '火属性スキル効果アップ',
    ウガル: '火属性スキル効果アップ',
    フロン: '火属性スキル効果アップ',
    リコネ: '火属性スキル効果特大アップ',
    テディ: '火属性スキル効果特大アップ',
    リライ: '火属性スキル効果特大アップ',
    フリーズゴーレム: '水属性スキル効果アップ',
    フリゴ: '水属性スキル効果アップ',
    邪王炎殺黒龍波: '水属性スキル効果アップ',
    ウロス: '水属性スキル効果アップ',
    ユノ: '水属性スキル効果特大アップ',
    水ドリュ: '水属性スキル効果特大アップ',
    'ユノ（メイン装備）': '水属性スキル効果特大アップ',
    リントヴルム: '風属性スキル効果アップ',
    リント: '風属性スキル効果アップ',
    リーズ: '風属性スキル効果アップ',
    ドリュアス: '風属性スキル効果特大アップ',
    リティ: '射出のスキル効果特大アップ',
    ナツノ: '刀剣のスキル効果特大アップ',
    // 劣勢時前衛スキル効果アップ系スキル
    バーバリアン: '劣勢時前衛スキル効果特大アップ',
    ババ: '劣勢時前衛スキル効果特大アップ',
    BBA: '劣勢時前衛スキル効果特大アップ',
    マウアルケロン: '劣勢時前衛スキル効果特大アップ',
    // 補助スキル発動率増減系スキル
    ブルーポピー: '補助スキル発動率特大アップ',
    ポピー: '補助スキル発動率特大アップ',
    'ノイン(lux)': '補助スキル発動率特大アップ',
    'ノイン(luxury)': '補助スキル発動率特大アップ',
    グリフォン: '補助スキル発動率特大アップ',
    ビィくん: '補助スキル発動率特大アップ',
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
    'フィア(コンボ時のみ)': '前衛のSPを回復',
    レブン: '前衛のSPを回復',
    'レブン（コンボ時）': '前衛のSPを回復',
    愚カナ妹達: '後衛のSPを回復',
    ゴリラ: '後衛のSPを回復',
    おっさん: '後衛のSPを回復',
    // カウンター系スキル
    ガリア: '召喚中のスキル時間を短縮',
    ウインドゴーレム: '召喚スキルの時間を巻き戻す',
    風ゴ: '召喚スキルの時間を巻き戻す',
    オーディン: '召喚スキルの時間を巻き戻す',
    // 装備チェンジ回数リセットスキル
    アイアタル: '装備チェンジ回数リセット',
    'アイアタル(コンボ時のみ)': '装備チェンジ回数リセット',
    ロイサ: '装備チェンジ回数リセット',
    サラマンダー: '前衛の装備チェンジ回数リセット',
    プロメテウス: '前衛の装備チェンジ回数リセット',
    ゴーゴン: '後衛の装備チェンジ回数リセット',
    ディオネア: '後衛の装備チェンジ回数リセット',
    // 効果コピースキル
    レイカ: '召喚スキルをコピー',
    ベルゼブブ: '召喚スキルをコピー',
    'ベルゼブブ（ミンス時）': '召喚スキルをコピー',
}
