---
layout: page
title: "文章"
permalink: /archive/
---

<div id="archiveFilterNote" style="display:none; font-size:13px; color:var(--mist); margin-bottom:16px;"></div>

{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year_group in posts_by_year %}
<div class="section-heading">{{ year_group.name }}</div>
{% for post in year_group.items %}
<div class="post-list-item" data-cats="{{ post.categories | join: ',' }}" data-tags="{{ post.tags | join: ',' }}">
  <div class="date">{{ post.date | date: "%m月%d日" }}</div>
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  {% if post.categories.size > 0 or post.tags.size > 0 %}
  <div class="cats">
    {% for cat in post.categories %}<a href="?cat={{ cat }}">{{ cat }}</a>{% endfor %}
    {% for tag in post.tags %}<a href="?tag={{ tag }}">#{{ tag }}</a>{% endfor %}
  </div>
  {% endif %}
</div>
{% endfor %}
{% endfor %}

<script>
(function(){
  const params = new URLSearchParams(window.location.search);
  const cat = params.get('cat');
  const tag = params.get('tag');
  if (!cat && !tag) return;

  const note = document.getElementById('archiveFilterNote');
  const items = document.querySelectorAll('.post-list-item');
  let visibleCount = 0;

  items.forEach(item => {
    const cats = (item.getAttribute('data-cats') || '').split(',');
    const tags = (item.getAttribute('data-tags') || '').split(',');
    const match = (cat && cats.includes(cat)) || (tag && tags.includes(tag));
    item.style.display = match ? '' : 'none';
    if (match) visibleCount++;
  });

  document.querySelectorAll('.section-heading').forEach(h => {
    let sib = h.nextElementSibling;
    let hasVisible = false;
    while (sib && !sib.classList.contains('section-heading')){
      if (sib.classList.contains('post-list-item') && sib.style.display !== 'none') hasVisible = true;
      sib = sib.nextElementSibling;
    }
    h.style.display = hasVisible ? '' : 'none';
  });

  note.style.display = 'block';
  note.textContent = `篩選：${cat ? cat : '#' + tag}（共 ${visibleCount} 篇，`;
  const clearLink = document.createElement('a');
  clearLink.href = window.location.pathname;
  clearLink.textContent = '清除篩選';
  note.appendChild(clearLink);
  note.appendChild(document.createTextNode('）'));
})();
</script>
