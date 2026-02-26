---
layout: distill
title: Tutorial Tema Google Chrome
description: cara membuat tema google chrome mu sendiri
tags: tutorial
giscus_comments: true
date: 2024-11-12
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
  - name: Persiapan
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Ambil Screenshot
  - name: Potong beberapa bagian
  - name: Buat latar untuk Toolbar
  - name: NTP Background
  - name: Frame & Latar Tab
  - name: Tahap Penyelesaian

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

## Persiapan

1. Persiapan untuk membuat tema chrome ini adalah ukuran layar desktop/laptopmu
2. Adobe Photoshop atau Photopea (jika kamu malas pasang)
3. Web ThemeBeta, tempat untuk mempublikasikan

---

## Ambil Screenshot

Ambil tangkapan layar desktopmu, lalu copas ke editor foto. Disini aku menggunakan Photopea (karena lagi males buka photoshop)

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ngepasin-layout.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Jangan lupa untuk menandai seperti ini, ini untuk menentukan tata letak agar lebih sempurna saat diterapkan.

---

## Potong beberapa bagian

Sekarang kita potong beberapa bagian, bagian ini nantinya akan dibagi menjadi 6 bagian yaitu:
1. Toolbar
2. NTP Background
3. Frame
4. Tab Background
5. NTP Attribution (yang ini bisa kamu lewati)
6. Frame Overlay

---

## Buat latar untuk Toolbar

Pertama potong yang sudah kamu screenshot tadi seperti ini

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-167.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Setelah itu, kamu tentukan gambar favorit kamu sebagai tema, disini aku menggunakan karakter Nao Tomori sebagai base temanya. Tambahkan warna base & karakternya seperti ini lalu simpan ke format PNG.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-166.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Setelah itu mari kita unggah sebagai test saja ke ThemeBeta, dan ini adalah pratinjau sementara

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-168.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## NTP Background

Nah, sekarang kita masuk ke proses berikutnya, yaitu membuat NTP Background, sekarang kita potong lagi bagian ini. Kemudian kita tambahkan latar belakangnya seperti ini & save ke png.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-169.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

> Bang, gambar yang aku pakai tidak sesuai dengan di pratinjau? Mari kita ukur kembali & potong

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-170.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Dalam proses memotong screenshot, disarankan harus di zoom seperti ini

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-171.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Setelah itu tambahkan gambar kamu, dan save lagi & tes lagi di ThemeBeta, dan hasilnya seperti ini nantinya.

---

## Frame & Latar Tab

Berikutnya kita tambahkan gambar frame dengan gambar yang sama, disini kamu cukup manfaatin auto color picker saja Kemudian untuk latar tab, kita kasih warna yang mengambil dari warna karakter itu sendiri.

---

## Tahap Penyelesaian

Nah, setelah selesai dibuat, kita beri nama tema kamu lalu kamu simpan atau kamu publikasikan di ThemeBeta & web manapun, kemudian kita terapkan dan hasilnya seperti ini.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-172.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Selesai & mudah kan?

---