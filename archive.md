---
layout: page
title: "文章"
permalink: /archive/
---

<div class="archive-total-count">目前共 {{ site.posts.size }} 篇文章</div>

<div class="section-heading">文章分類</div>
<div class="archive-cat-nav">
  {% for item in site.data.categories %}
  <a href="{{ '/archive/' | relative_url }}{{ item[0] }}/" class="cat-pill">{{ item[1] }}<span class="cat-count">{{ site.categories[item[1]].size }}</span></a>
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
      {% for item in site.data.categories %}
        {% if item[1] == cat %}{% assign cat_slug = item[0] %}{% endif %}
      {% endfor %}
      <a href="{{ '/archive/' | relative_url }}{{ cat_slug }}/">{{ cat }}</a>
    {% endfor %}
  </div>
  {% endif %}
</div>
{% endfor %}
{% endfor %}
