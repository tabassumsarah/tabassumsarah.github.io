---
layout: post
title: Javascript Learning
permalink: /learnings/
description: Documenting as I am learning bits and pieces of javascript
img: /img/12.jpg
---


<ul class="post-list">
{% for jc in site.javascripts reversed %}
    <li>
        <h2><a class="jc-title" href="{{ jc.url | prepend: site.baseurl }}">{{ jc.title }}</a></h2>
        <p class="post-meta">{{ jc.date | date: '%B %-d, %Y — %H:%M' }}</p>
      </li>
{% endfor %}
</ul>
