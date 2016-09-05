---
layout: page
title: Categories
permalink: /categories/
---
<div style="padding 1em 0em 0em 0em;">
{% capture tags %}
  {% for tag in site.tags %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}

{% for tag in sortedtags %}
  <h3 style='text-transform: capitalize;' id="{{ tag }}">{{ tag }}</h3>
  <ul>
  {% for post in site.tags[tag] %}
    <li class="entry-content"><time>{{ post.date | date:"%d %b" }}</time> - <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
{% endfor %}
</div>
