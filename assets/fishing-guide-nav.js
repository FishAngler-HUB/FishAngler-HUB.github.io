(function(){
  const items=[{"id":"egging","name":"エギング","slug":"eging"},{"id":"ajing","name":"アジング","slug":"ajing"},{"id":"mebaring","name":"メバリング","slug":"mebaring"},{"id":"seabass","name":"シーバス","slug":"seabass"},{"id":"light_shore_jigging","name":"ライトショアジギング","slug":"light-shore-jigging"},{"id":"shore_jigging","name":"ショアジギング","slug":"shore-jigging"},{"id":"chinning","name":"チニング","slug":"chinning"},{"id":"rockfish","name":"ロックフィッシュ","slug":"rockfish"},{"id":"bass","name":"バス釣り","slug":"bass"},{"id":"sabiki","name":"サビキ釣り","slug":"sabiki"},{"id":"nage","name":"投げ釣り","slug":"surf-casting"},{"id":"tairaba","name":"タイラバ","slug":"tairaba"},{"id":"ikametaru","name":"イカメタル","slug":"ikametaru"},{"id":"bachikon","name":"バチコンアジング","slug":"bachikon"}];
  const current=document.body.dataset.guide;
  const html=items.map(x=>'<a href="../'+x.slug+'/"'+(x.id===current?' aria-current="page"':'')+'>'+x.name+'</a>').join('');
  document.querySelectorAll('[data-guide-links]').forEach(el=>{el.innerHTML=html});
})();
