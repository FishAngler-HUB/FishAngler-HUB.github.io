import{KNOTS}from'./data.js';

const result=(primary,alternatives,reason)=>({primary:KNOTS[primary],primaryId:primary,alternatives:alternatives.map(id=>({id,...KNOTS[id]})),reason});

export function recommendKnot({connection,priority,peUse=''}){
 if(!connection)return{error:'結ぶ対象を1つ選んでください。'};
 if(!priority)return{error:'重視することを1つ選んでください。'};
 if(connection==='peLeader'){
  if(!peUse)return{error:'ラインの使い方を1つ選んでください。'};
  if(peUse==='heavy')return result('pr',['fg','noname'],'太いPEとリーダーで大型魚を狙う条件のため、大物向けとして公式に紹介されているPRノットを第一候補にしました。');
  if(priority==='strength')return result('fg',peUse==='light'?['tripleEight','noname']:['noname','train'],'PEとリーダーの接続で、結び目の細さと強度を重視する条件のためです。');
  if(peUse==='light')return result('tripleEight',['fg'],'細いラインを使うライトゲームで、簡単さと結び直しやすさを優先したためです。');
  return result('train',['fg','noname'],'入門者でも手順を覚えやすく、現場で結び直しやすいことを優先したためです。');
 }
 if(connection==='snap'){
  if(priority==='strength')return result('doubleClinch',['uni','palomar'],'スナップの輪へ結ぶ用途で、基本のクリンチより強度を重視したためです。');
  return result(priority==='field'?'clinch':'uni',priority==='field'?['uni','doubleClinch']:['clinch','doubleClinch'],'スナップへ短時間で結べる基本ノットを優先したためです。');
 }
 if(connection==='lure'){
  if(priority==='strength')return result('palomar',['doubleClinch','uni'],'ルアーのアイへ結ぶ用途で、強度を重視したためです。');
  return result('uni',['clinch',priority==='field'?'doubleClinch':'palomar'],'ルアーへ素早く結べ、ほかの金具にも応用しやすいためです。');
 }
 if(connection==='hook'){
  if(priority==='strength')return result('palomar',['doubleClinch','uni'],'アイ付き針を強度重視で接続する条件のためです。');
  return result(priority==='field'?'clinch':'uni',priority==='field'?['uni','palomar']:['clinch','palomar'],'アイ付き針へ結べ、初心者がほかの金具にも応用しやすいためです。');
 }
 return{error:'選択内容を確認してください。'};
}
