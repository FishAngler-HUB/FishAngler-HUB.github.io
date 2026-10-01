(function(){
  'use strict';
  var script=document.currentScript;
  var root=script&&script.src?new URL('../',script.src):new URL('./',location.href);
  function url(path){return new URL(path,root).href;}
  var guides=[
    ['エギング','eging/'],['アジング','ajing/'],['メバリング','mebaring/'],['シーバス','seabass/'],
    ['ライトショアジギング','light-shore-jigging/'],['ショアジギング','shore-jigging/'],['チニング','chinning/'],
    ['ロックフィッシュ','rockfish/'],['バス釣り','bass/'],['サビキ釣り','sabiki/'],['投げ釣り','surf-casting/'],
    ['タイラバ','tairaba/'],['イカメタル','ikametaru/'],['バチコンアジング','bachikon/']
  ];
  var tools=[['ライン・リーダー号数早見表','tools/line-leader/'],['リール糸巻き計算機','tools/reel-capacity/'],['ノット選択ナビ','tools/knot-selector/'],['クーラーボックス容量ナビ','tools/cooler-navi/']];
  var guideLinks=guides.map(function(item){return '<li><a href="'+url(item[1])+'">'+item[0]+'</a></li>';}).join('');
  var toolItems=tools.map(function(item){return '<li><a href="'+url(item[1])+'">'+item[0]+'</a></li>';}).join('');
  var footer=document.querySelector('footer');
  if(!footer){footer=document.createElement('footer');document.body.appendChild(footer);}
  footer.className='global-footer';
  footer.setAttribute('aria-label','サイトフッター');
  footer.innerHTML='<div class="global-footer__inner"><div class="global-footer__main">'+
    '<div class="global-footer__brand"><strong>釣りタックルナビ</strong><p>釣りを始めたい初心者が、釣り方に合うロッド・リール・ラインなどを一度に確認できる道具ガイドです。</p><small>運営：ぐれまる</small></div>'+
    '<nav class="global-footer__nav" aria-label="フッターナビゲーション">'+
      '<section class="global-footer__group global-footer__group--tackle"><h2>釣りタックル</h2><ul class="global-footer__links">'+guideLinks+'</ul></section>'+
      '<section class="global-footer__group"><h2>釣り便利ツール</h2><ul class="global-footer__links global-footer__tools">'+toolItems+'</ul></section>'+
      '<section class="global-footer__group"><h2>サイト情報</h2><ul class="global-footer__links">'+
        '<li><a href="'+url('about.html')+'">このサイトについて</a></li><li><a href="'+url('privacy.html')+'">プライバシーポリシー</a></li><li><a href="'+url('disclaimer.html')+'">免責事項</a></li></ul></section>'+
    '</nav></div><div class="global-footer__bottom">© 2026 釣りタックルナビ</div></div>';
})();
