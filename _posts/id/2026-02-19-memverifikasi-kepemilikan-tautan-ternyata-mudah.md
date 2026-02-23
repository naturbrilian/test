---
layout: post
title: Memverifikasi kepemilikan tautan ternyata mudah
date: 2026-02-19 12:14:14
tags: blogging, verification
categories: blogging
thumbnail: assets/img/verifikasi-tautan.png
---

Bertahun-tahun menggunakan sebuah sosial media dan ingin rasanya fleksing yang namanya tanda centang di samping nama tampilanmu, tapi aku rasa tidak perlu dikarenakan ternyata untuk memiliki itu kita harus membayar terlebih dahulu agar bisa dapat verifikasi centang.

Di jaman dahulu, untuk mendapatkan sebuah verifikasi apakah ini akun resmi, kita harus menyerahkan sebuah berkas dengan id pengenal sebagai contoh KTP, kartu pajak dan lain-lain untuk kategori individu, namun sekarang sangat mudah apalagi kepemilikan tautan.

## Kepemilikan Tautan
Untuk tautan, kamu bisa memverifikasi kepemilikan hanya dengan menambahkan _<a rel=”me” href=””_ di berkas html mu, sebagai contoh aku akan memverifikasi kepemilikan tautan dengan fediverse Misskey, seperti pada potongan tangkapan layar berikut.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rel-me.png" title="hananako main" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Untuk Misskey sendiri, proses verifikasinya cepat, beda dengan threads yang harus menunggu 1/3 jam. Di Facebook juga ada sistem verifikasi kepemilikan tautan, hanya saja caranya ribet. Kurang lebih seperti yang tampil di tangkapan layar begini.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/contoh-verifikasi-tautan.png" title="hananako main" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Di discord sendiri juga ada namanya sistem verifikasi seperti ini, dan tentu saja metodenya macam-macam sebagai contoh aku ingin memverifikasi tautan kepemilikan webku yang juga aku hosting di nekoweb.org, untuk cara nekoweb itu kurang lebih sama seperti neocities.org yaitu meletakkan berkas yang berisi value di folder .well-known seperti ini, yang nantinya nanti langsung diverifikasi oleh Discord.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nekoweb.png" title="hananako main" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/nekoweb-discord.png" title="hananako main" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Bahkan sekarang untuk beberapa templat web sudah diberi dukungan untuk verifikasi tautan secara otomatis, sebagai contoh [al-folio](https://github.com/george-gca/multi-language-al-folio) dan [Fuwari](https://github.com/saicaca/fuwari) yang dulu pernah saya pakai sebelum masa domain habis.