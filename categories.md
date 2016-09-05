---
layout: post
title: Categories
permalink: /categories/
---

{% capture tags %}
  {% for tag in site.categories %}
    {{ tag[0] }}
  {% endfor %}
{% endcapture %}
{% assign sortedtags = tags | split:' ' | sort %}

{% for tag in sortedtags %}
  <h3 style='text-transform: capitalize;' id="{{ tag }}">{{ tag }}</h3>
  <ul>
  {% for post in site.categories[tag] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
  </ul>
{% endfor %}
