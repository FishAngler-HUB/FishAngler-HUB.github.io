import{LINE_GUIDE}from'./data.js';

const body=document.querySelector('#lineGuideBody');
const escapeHtml=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

body.innerHTML=LINE_GUIDE.map(item=>`<tr>
  <th scope="row"><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.fish)}</small></th>
  <td data-label="メインライン">${escapeHtml(item.mainRange)}</td>
  <td data-label="迷ったら"><strong class="guide-pick">${escapeHtml(item.mainPick)}</strong></td>
  <td data-label="リーダー">${escapeHtml(item.leaderRange)}</td>
  <td data-label="迷ったら"><strong class="guide-pick">${escapeHtml(item.leaderPick)}</strong></td>
  <td data-label="補足">${escapeHtml(item.note)}</td>
</tr>`).join('');
