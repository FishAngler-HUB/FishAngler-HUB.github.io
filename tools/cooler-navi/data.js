export const FISH_TYPES={
 small:{label:'アジ／メバルなど小型魚',type:'small',sizes:[['under20','～20cm'],['20to30','20～30cm'],['over30','30cm以上']]},
 squid:{label:'アオリイカ',type:'squid',sizes:[['autumn','秋の小型中心'],['around1kg','1kg前後'],['large','大型を想定']]},
 seabass:{label:'シーバス',type:'long',sizes:[['under40','～40cm'],['40to60','40～60cm'],['60to80','60～80cm'],['over80','80cm以上']]},
 bluefish:{label:'青物',type:'long',sizes:[['under40','～40cm'],['40to60','40～60cm'],['60to80','60～80cm'],['over80','80cm以上']]},
 kiss:{label:'キス',type:'small',sizes:[['under20','～20cm'],['20to25','20～25cm'],['over25','25cm以上']]},
 rockfish:{label:'カサゴ／ロックフィッシュ',type:'medium',sizes:[['under25','～25cm'],['25to40','25～40cm'],['over40','40cm以上']]},
 bass:{label:'ブラックバス（持ち帰る場合）',type:'medium',sizes:[['under30','～30cm'],['30to50','30～50cm'],['over50','50cm以上']]},
 other:{label:'その他',type:'other',sizes:[['small','小型・30cm未満'],['medium','中型・30～50cm'],['large','大型・50cm以上']]}
};
export const AMOUNTS={few:'少なめ',normal:'普通',many:'多め'};
export const AMOUNT_HINTS={
 small:{few:'～5匹程度',normal:'6～15匹程度',many:'16匹以上'},
 kiss:{few:'～10匹程度',normal:'11～25匹程度',many:'26匹以上'},
 squid:{few:'1杯',normal:'2～3杯程度',many:'4杯以上'},
 rockfish:{few:'1～2匹程度',normal:'3～5匹程度',many:'6匹以上'},
 seabass:{few:'1匹',normal:'2匹程度',many:'3匹以上'},
 bluefish:{few:'1匹',normal:'2匹程度',many:'3匹以上'},
 bass:{few:'1匹',normal:'2匹程度',many:'3匹以上'},
 other:{few:'1～2匹程度',normal:'3～5匹程度',many:'6匹以上'}
};
export const LOADS={fish:'魚中心',light:'飲み物や軽食も入れる',full:'飲み物・食べ物もまとめて入れる'};
export const CAPACITY_BANDS={
 small:{few:{fish:[6,10],light:[10,15],full:[15,20]},normal:{fish:[10,15],light:[15,20],full:[20,25]},many:{fish:[15,20],light:[20,25],full:[25,30]}},
 squid:{few:{fish:[10,15],light:[15,20],full:[20,25]},normal:{fish:[15,20],light:[20,25],full:[25,30]},many:{fish:[20,25],light:[25,30],full:[30,35]}},
 medium:{few:{fish:[15,20],light:[20,25],full:[24,32]},normal:{fish:[20,25],light:[24,32],full:[30,35]},many:{fish:[24,32],light:[30,35],full:[35,48]}}
};
export const SIZE_ADJUST={small:{under20:0,'20to30':1,over30:2,under25:0,'20to25':1,over25:2},squid:{autumn:0,around1kg:1,large:2},medium:{under25:0,'25to40':1,over40:2,under30:0,'30to50':1,over50:2},other:{small:0,medium:1,large:2}};
export const LONG_BANDS={
 under40:{fish:[15,20],light:[20,25],full:[24,32],inner:'40cm級を想定。容量だけでなく内寸長も確認してください。',status:'要確認'},
 '40to60':{fish:[24,32],light:[25,35],full:[32,35],inner:'40～60cm級を想定。同じ容量でも内寸長は異なります。なるべく曲げずに収めたい場合は、内寸50～60cm級のロングタイプを比較してください。',status:'要確認'},
 '60to80':{fish:[35,48],light:[48,60],full:[48,60],inner:'60～80cm級では容量より内寸を優先してください。内寸60cm級でも魚体や収納方法によって収まり方が変わるため、内寸75cm級を含む大型魚向けロングタイプも比較してください。',status:'大型魚・内寸優先'},
 over80:{fish:[48,60],light:[60,60],full:[60,60],inner:'80cm以上は一般的な容量表示だけでは判断できません。内寸85cm級でも魚体によって収まらない可能性があるため、実際の内寸と収納方法を必ず確認してください。',status:'大型魚・個別確認'}
};
export const PRODUCT_BANDS=[{capacity:10,inner:'約26cm級',use:'ライトゲーム・エギング向け製品例'},{capacity:15,inner:'約31～36cm級',use:'ライトゲーム向け製品例'},{capacity:24,inner:'約46.5cm級',use:'中型魚向けロングタイプ例'},{capacity:25,inner:'約50cm級',use:'釣種を選ばないロングタイプ例'},{capacity:32,inner:'約56.5cm級',use:'中型～大型魚向けロングタイプ例'},{capacity:35,inner:'約60cm級',use:'船・オフショア向け例'},{capacity:48,inner:'約75cm級',use:'大型青物向け例'},{capacity:60,inner:'約85cm級',use:'大型青物向け例'}];
