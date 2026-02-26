---
layout: distill
title: Mahjong Soul on Desktop
description: how to run Mahjong Soul as a standalone application (tutorial is outdated)
tags: tutorial
giscus_comments: true
date: 2022-04-29
featured: true
mermaid:
  enabled: true
  zoomable: true
code_diff: true
map: true
chart:
  chartjs: true
  echarts: true
  vega_lite: true
tikzjax: true
typograms: true

authors:
  - name: Lieba Natur Brilian
    url: "https://naturbrilian.github.io/"

bibliography: 2018-12-22-distill.bib

# Optionally, you can add a table of contents to your post.
# NOTES:
#   - make sure that TOC names match the actual section names
#     for hyperlinks within the post to work correctly.
#   - we may want to automate TOC generation in the future using
#     jekyll-toc plugin (https://github.com/toshimaru/jekyll-toc).
toc:
  - name: Introduction
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: First, what exactly is Mahjong or Mahjong Soul?
  - name: Installation
  - name: Run & Play
  - name: Change the URL on the Mahjong Soul desktop client
  - name: Tutorial Video Version

# Below is an example of injecting additional post-specific styles.
# If you use this post as a template, delete this _styles block.
_styles: >
  .fake-img {
    background: #bbb;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 12px;
  }
  .fake-img p {
    font-family: monospace;
    color: white;
    text-align: left;
    margin: 12px 0;
    text-align: center;
    font-size: 16px;
  }
---

## Introduction

---

## First, what exactly is Mahjong or Mahjong Soul?

Mahjong, or commonly known as Mahjong, is a game for four people that originated in China. It is a game that requires skill, strategy, intelligence, calculation, and luck. Depending on the variation of the game, the luck factor can be minor or dominant. In Asia, mahjong is a popular game for gambling or computer games.

---

## Installation

You only need one piece of software called NodeJS. which you can install via the following [link](https://www.google.com/url?q=https%3A%2F%2Fnodejs.org%2Fen%2Fdownload%2Fcurrent%2F&sa=D&sntz=1&usg=AOvVaw2NBLQNRYaH0g2zYL7qEUe2). Then install it as usual (I'll skip this part since it's already installed).
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/node-js.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Then [download](https://github.com/berpergian/MahjongSoul-Dekstop) & extract it anywhere, as long as you remember where you saved it.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ms-github.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-55-ekstrak.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

After all files have been extracted, run Windows Terminal or run cmd in a folder like this.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/run.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Then type the command line npm install as shown in this image and wait for the process to complete.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/command.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Run & Play

After completing all the processes, just run npm start as shown in this image.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-58-command.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Voilà, you can play it without having to open your browser. Incidentally, for the current event, we are collaborating with the anime Kaguya-sama: Love is War (this article was written in 2022), which you can watch on YouTube or Bilibili.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/kaguya.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Change the URL on the Mahjong Soul desktop client

Want to play another version? Simply edit the index.html file using any text editor. Change it to game.mahjongsoul.com for the Japanese server, as shown in the image below.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/url-change.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Tutorial Video Version

<iframe width="560" height="315" src="https://www.youtube.com/embed/nSzSK884S_o?si=oaqXmZVIRbZWxzHe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Have questions about this game? Just contact me at
1. Twitter : [@naturbrilian](https://twitter.com/naturbrilian) 
2. Discord: [discord.gg/Bz9YuXs9S3](http://discord.gg/Bz9YuXs9S3)

---