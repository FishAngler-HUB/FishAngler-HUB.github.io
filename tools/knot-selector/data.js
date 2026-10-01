export const KNOTS={
 fg:{name:'FGノット',difficulty:'やや難しい',strength:'高め',speed:'慣れが必要',uses:'PEラインとリーダーを細く結ぶルアーフィッシング全般',summary:'PEラインとリーダーをしっかり結び、結び目を細く仕上げたい場合の定番です。',merits:['結び目が小さく、ガイドへの干渉を抑えやすい','強度を重視するルアーフィッシングに向く'],caution:'正しく締め込むには練習が必要です。編み込みと仕上げを省略しないでください。',detailSlug:'fg-knot'},
 pr:{name:'PRノット',difficulty:'難しい',strength:'高め',speed:'時間と道具が必要',uses:'マグロなどの大型魚、太いリーダーを使う釣り',summary:'太いPEとリーダーで大型魚を狙う場合に向く摩擦系ノットです。',merits:['太いリーダーを使う大物釣りに対応','ボビンを使って安定した巻き付けを作る'],caution:'ボビンと十分な練習が必要です。ノットを長くしすぎるとガイド絡みの原因になります。',detailSlug:'pr-knot'},
 noname:{name:'ノーネームノット',difficulty:'普通',strength:'高め',speed:'少し時間がかかる',uses:'PEラインとリーダーを確実に接続したい場面',summary:'すっぽ抜けを抑え、確実性を重視したい場合の候補です。',merits:['PEとリーダーの接続に使える','確実性を重視した構造'],caution:'手順が複数あるため、釣行前に繰り返し練習してください。',detailSlug:'no-name-knot'},
 tripleEight:{name:'トリプルエイトノット',difficulty:'簡単',strength:'標準',speed:'速い',uses:'ライトゲームなど、細いPEラインとリーダーの接続',summary:'細いライン同士を短時間で結びたい初心者に向くノットです。',merits:['手順が少なく覚えやすい','釣り場で素早く結び直しやすい'],caution:'ライトゲーム向けです。太いラインや大型魚狙いではFGなどを検討してください。',detailSlug:'triple-eight-knot'},
 train:{name:'電車結び',difficulty:'簡単',strength:'標準',speed:'速め',uses:'PEラインとリーダーを手軽に接続する場面',summary:'ユニノットを2つ使う、初心者が覚えやすいライン同士の結びです。',merits:['構造を理解しやすい','現場で結び直しやすい'],caution:'FGより結び目が大きくなります。ガイドへ巻き込む場合は引っ掛かりを確認してください。',detailSlug:'train-knot'},
 uni:{name:'ユニノット',difficulty:'簡単',strength:'標準',speed:'速い',uses:'ラインとスナップ、ルアー、アイ付き針の接続',summary:'金具の輪へ素早く結べ、複数の用途に使いやすい基本ノットです。',merits:['手順が比較的簡単','スナップやルアーなど用途が広い'],caution:'摩擦熱を抑えるため湿らせ、ゆっくり締め込んでください。',detailSlug:'uni-knot'},
 clinch:{name:'クリンチノット',difficulty:'簡単',strength:'標準',speed:'速い',uses:'スナップ、ルアー、サルカン、アイ付き針の接続',summary:'金具の輪へ結ぶ基本として広く使える、初心者が覚えたいノットです。',merits:['対応する金具が多い','釣り場で結び直しやすい'],caution:'巻き付けが重ならないよう整え、湿らせてから締め込んでください。',detailSlug:'clinch-knot'},
 doubleClinch:{name:'ダブルクリンチノット',difficulty:'普通',strength:'高め',speed:'普通',uses:'ラインとスナップ、ルアーなどの金具を強度重視で接続',summary:'金具の輪へ2回通し、クリンチノットより強度を重視した結びです。',merits:['金具への接続で強度を高めやすい','クリンチノットから発展して覚えられる'],caution:'輪へ2回通した部分を重ねず、均等に締め込んでください。',detailSlug:'double-clinch-knot'},
 palomar:{name:'パロマーノット',difficulty:'普通',strength:'高め',speed:'普通',uses:'アイ付き針やルアーを強度重視で接続',summary:'フックやルアーを強度重視で結びたい場合の基本候補です。',merits:['大物用の結びの基本として紹介される','ラインを二重にアイへ通す構造'],caution:'ルアーや針全体を輪へ通せるスペースが必要です。交差やねじれを残さず締めてください。',detailSlug:'palomar-knot'}
};

export const CONNECTIONS={
 peLeader:{label:'PEライン ＋ リーダー',help:'ルアーフィッシングのライン同士'},
 snap:{label:'ライン ＋ スナップ',help:'ルアー交換用の小さな金具'},
 lure:{label:'ライン ＋ ルアー',help:'ルアーのアイへ直接結ぶ'},
 hook:{label:'ライン ＋ 針',help:'輪のある針（アイ付き針）'}
};

export const PRIORITIES={easy:'簡単さ',strength:'強度',field:'釣り場での結び直し'};
