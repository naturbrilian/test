---
layout: distill
title: Apakah Tema Windows 10 masih bisa digunakan saat kamu mengunakan Windows 11?
description: cara menerapkan tema windows 10 ke 11
tags: tutorial
giscus_comments: true
date: 2023-02-19
featured: false
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
  - name: Bagaimana cara menerapkannya?
  - name: Mengapa saat menerapkan, tidak lewat pengaturan Windows?
  - name: Apa saja kekurangan dari cara ini?
  - name: Cara mengakalinya jika menu konteks klasik tidak muncul?
  - name: Untuk Patch Themes
  - name: Apakah menerapkan tema ini sangat direkomendasikan?

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
Halo para pengunjung setia, sepertinya saya sudah lama tidak ngeblog disini karena ya satu bingung mau nulis apa dan kesibukan juga. Oh ya mungkin beberapa orang pada bertanya apalagi termasuk di salah satu halaman penggemar bertanya “Apakah tema ini bisa digunakan/diterapkan di os paling tinggi a.k.a Windows 11?” Tentu saja jawabannya bisa, dengan catatan nanti ada beberapa tombol menu konteks bermasalah (karena emang base nya bukan menggunakan w11 tapi w10). Dulu penulis sudah menguji coba nya menggunakan tema Arknights buatan Desonime dan Golden Marriage buatan ~Theia dan bekerja dengan sempurna, walaupun ada beberapa base yang error

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-401.png" title="Arknights Windows 10 Theme by Desonime" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-421.png" title="Golden Marriage Windows 10 Themes by ~Theia" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Bagaimana cara menerapkannya?

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-431.png" title="Golden Marriage Windows 10 Themes by ~Theia" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Untuk menerapkan tema ini, kamu harus melalui folder C:\Windows\Resources\Themes lalu Cari Tema Arknight Windows 10 Theme.theme, lalu klik ganda pada tema tersebut.

---

## Mengapa saat menerapkan, tidak lewat pengaturan Windows?

Sebenarnya bisa, hanya saja tema itu tidak akan bisa diterapkan dikarenakan beda base.

---

## Apa saja kekurangan dari cara ini?

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-44.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Kurang lebih seperti yang ada di tangkapan layar ini.

---

## Cara mengakalinya jika menu konteks klasik tidak muncul?

Menu konteks klasik tidak akan bisa muncul, karena masalah kompatibilitas pada tema ini, jadi sebenarnya kamu bisa mengakali hal ini. Bagaimana cara mengatasinya? Atur seperti ini di startallback

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-451.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Untuk Patch Themes

Patch Tema caranya masih sama, jangan lupa untuk membuat titik restore, karena ini sangat penting kalau semisal ada masalah pada sistem operasimu.

---

## Apakah menerapkan tema ini sangat direkomendasikan?

Sebenarnya tidak, karena sudah beda sistem operasi. Namun kalau kamu ingin menggunakannya, dipersilahkan dengan catatan harus menanggung resiko (disarankan sebaiknya mencari tema yang sudah kompatibel dengan os ini).

---