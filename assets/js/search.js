(function(){
  const input = document.getElementById('searchInput');
  const results = document.getElementById('searchResults');
  if (!input || !results) return;

  let searchData = null;

  function loadData(){
    if (searchData) return Promise.resolve(searchData);
    const base = document.body.getAttribute('data-baseurl') || '';
    return fetch(base + '/search.json')
      .then(r => r.json())
      .then(data => { searchData = data; return data; });
  }

  function snippet(content, query){
    const idx = content.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return content.slice(0, 60) + '…';
    const start = Math.max(0, idx - 25);
    const end = Math.min(content.length, idx + query.length + 40);
    return (start > 0 ? '…' : '') + content.slice(start, end) + (end < content.length ? '…' : '');
  }

  function render(query){
    if (!query.trim()){
      results.innerHTML = '';
      return;
    }
    const q = query.trim().toLowerCase();
    const matches = searchData.filter(item => {
      return item.title.toLowerCase().includes(q) ||
             item.content.toLowerCase().includes(q) ||
             (item.tags || []).some(t => t.toLowerCase().includes(q)) ||
             (item.categories || []).some(c => c.toLowerCase().includes(q));
    }).slice(0, 30);

    if (matches.length === 0){
      const base = document.body.getAttribute('data-baseurl') || '';
      results.innerHTML = `
        <div class="search-empty">
          <img src="${base}/assets/images/site/search-empty-bottle.png" alt="Empty Bottle" class="search-empty-img">
          <p>抱歉，目前沒有相關的搜尋結果。<br>換個關鍵字試試看？或者直接問我～</p>
          <p class="search-empty-contact">
            E-mail｜<a href="mailto:sherry.aromatherapy@gmail.com">sherry.aromatherapy@gmail.com</a><br>
            IG｜<a href="https://www.instagram.com/sherry.aromatherapy/" target="_blank" rel="noopener">@sherry.aromatherapy</a>
          </p>
        </div>
      `;
      return;
    }

    results.innerHTML = matches.map(item => `
      <div class="search-result-item">
        <a href="${item.url}">${item.title}</a>
        <div class="meta">${item.date}</div>
        <div class="snippet">${snippet(item.content, q)}</div>
      </div>
    `).join('');
  }

  loadData().then(() => {
    input.focus();
    if (input.value) render(input.value);
  });

  input.addEventListener('input', () => {
    if (searchData) render(input.value);
  });
})();
