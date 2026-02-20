---
layout: distill
title: Mahjong Soul on Desktop
description: cara menjalankan Mahjong Soul seperti aplikasi mandiri (tutorial sudah usang)
tags: distill formatting
giscus_comments: true
date: 2018-12-22
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
  - name: PENGENALAN
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Sebelumnya apa sih itu Mahjong atau Mahjong Soul itu?
  - name: PEMASANGAN
  - name: Jalankan & Mainkan
  - name: Penggantian URL pada desktop client Mahjong Soul
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

## PENGENALAN

---

## Sebelumnya apa sih itu Mahjong atau Mahjong Soul itu?

Mahyong atau orang biasa menyebutnya Mahjong adalah sebuah permainan untuk empat orang yang berasal dari Cina. Ini adalah permainan yang menuntut kecakapan, strategi, kecerdasan, kalkulasi, dan peruntungan. Tergantung pada variasi permainannya, faktor keberuntungan bisa kecil atau dominan. Di Asia, mahyong adalah permainan yang populer untuk judi atau permainan komputer.

---

## PEMASANGAN

Kamu hanya perlu satu software bernama NodeJS, kamu bisa memasangnya melalui pranala [berikut](https://www.google.com/url?q=https%3A%2F%2Fnodejs.org%2Fen%2Fdownload%2Fcurrent%2F&sa=D&sntz=1&usg=AOvVaw2NBLQNRYaH0g2zYL7qEUe2). Kemudian install seperti biasa (disini aku lewati karena sudah terpasang).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/node-js.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Kemudian [download](https://github.com/berpergian/MahjongSoul-Dekstop) & ekstrak dimana saja, ya asalkan mudah diingat lokasi penyimpanannya.

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

Setelah file yang terekstrak semua, jalankan windows terminal atau jalankan cmd di folder seperti ini.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/run.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Lalu ketikkan baris perintah npm install seperti gambar ini dan tunggu proses sampai selesai.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/command.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Jalankan & Mainkan

Setelah selesai semua proses, tinggal jalankan npm start seperti pada gambar ini.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-58-command.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

voila, kamu bisa memainkannya tanpa perlu membuka peramban kamu. Kebetulan untuk event saat ini sedang kolab dengan anime Perang cinta nona Kaguya (artikel ini ditulis tahun 2022), yang bisa kamu tonton di YouTube atau bilibili.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/kaguya.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Penggantian URL pada desktop client Mahjong Soul

Ingin bermain versi lain? simpel kamu tinggal sunting di berkas index.html nya menggunakan text editor terserah. Ganti ke game.mahjongsoul.com untuk server Jepang seperti gambar di bawah.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/url-change.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Tutorial Video Version

<iframe width="560" height="315" src="https://www.youtube.com/embed/nSzSK884S_o?si=oaqXmZVIRbZWxzHe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Punya pertanyaan seputar permainan ini? tinggal kontak saya di
1. Twitter : [@naturbrilian](https://twitter.com/naturbrilian) 
Discord: [discord.gg/Bz9YuXs9S3](http://discord.gg/Bz9YuXs9S3)

---