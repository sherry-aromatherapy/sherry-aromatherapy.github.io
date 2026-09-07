---
layout: page
title: "文章"
permalink: /archive/
---

<div class="archive-total-count">目前共 {{ site.posts.size }} 篇文章</div>

<p class="archive-intro-note">這裡大部分的文章，是把我在 IG、Threads 上聊過的想法，重新整理成更完整的版本。如果標題看起來眼熟，通常代表這裡會補上更多脈絡跟細節。</p>

<div class="section-heading">文章分類</div>
<div class="archive-cat-nav">
  {% for item in site.data.categories %}
  {% assign this_name = item[1] %}
  {% assign this_posts = site.categories[this_name] %}
  <a href="{{ '/archive/' | relative_url }}{{ item[0] }}/" class="cat-pill">{{ this_name }}<span class="cat-count">{{ this_posts.size }}</span></a>
  {% endfor %}
</div>

{% assign excerpt_sentence_count = 2 %}
{% assign posts_by_year = site.posts | group_by_exp: "post", "post.date | date: '%Y'" %}
{% for year_group in posts_by_year %}
<div class="section-heading">{{ year_group.name }}</div>
{% for post in year_group.items %}
{% assign excerpt_text = post.excerpt | strip_html | strip_newlines %}
{% assign sentences = excerpt_text | split: "。" %}
{% assign preview = sentences | slice: 0, excerpt_sentence_count | join: "。" %}
<div class="post-list-item">
  <div class="date">{{ post.date | date: "%m月%d日" }}</div>
  <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
  <div class="excerpt">{{ preview }}{% if sentences.size > excerpt_sentence_count %}。{% endif %}</div>
  {% if post.categories.size > 0 %}
  <div class="cats">
    {% for cat in post.categories %}
      {% assign cat_slug = cat %}
      {% for catmap in site.data.categories %}
        {% if catmap[1] == cat %}{% assign cat_slug = catmap[0] %}{% endif %}
      {% endfor %}
      <a href="{{ '/archive/' | relative_url }}{{ cat_slug }}/">{{ cat }}</a>
    {% endfor %}
  </div>
  {% endif %}
</div>
{% endfor %}
{% endfor %}
