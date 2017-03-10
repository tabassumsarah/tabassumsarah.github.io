---
layout: default
title:  "Javascript On the Go"
date:   2016-02-12 17:50:00
categories: main
---

<div id="home">
  <h1>Javascript Basics</h1>
  <ul class="posts">
  <ul>
    {% for post in site.category.javascripts %}
      <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
  </ul>

  </ul>
</div>

