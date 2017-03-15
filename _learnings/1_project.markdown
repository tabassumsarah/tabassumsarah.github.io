---
layout: post
title: Javascript Learning
description: Learning Javascript
img: /img/12.jpg
---

Every project has a beautiful feature shocase page. It's easy to include images, in a flexible 3-column grid format. Make your photos 1/3, 2/3, or full width.

<ul class="post-list">
{% for jc in site.javascripts reversed %}
    <li>
        <h2><a class="jc-title" href="{{ jc.url | prepend: site.baseurl }}">{{ jc.title }}</a></h2>
        <p class="post-meta">{{ jc.date | date: '%B %-d, %Y — %H:%M' }}</p>
      </li>
{% endfor %}
</ul>
