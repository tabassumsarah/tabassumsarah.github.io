---
layout: default
title:  "Javascript On the Go"
date:   2016-02-12 17:50:00
categories: main
---

<div id="home">
  <h1>Javascript Basics</h1>
  <ul class="posts">
    {% for post in site.categories.javascripts %}
        {{ post.title }}
    {% endfor %}
  </ul>
</div>

