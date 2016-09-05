---
layout: default
title: Categories
permalink: /categories/
---

{% capture tags %}
  {% for tag in site.labels %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}

{% for tag in sortedtags %}
  <h3 style='text-transform: capitalize;' id="{{ tag }}">{{ tag }}</h3>
  <ul>
  {% for post in site.labels[tag] %}
    <li class="entry-content"><time>{{ post.date | date:"%d %b" }}</time> - <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
{% endfor %}
