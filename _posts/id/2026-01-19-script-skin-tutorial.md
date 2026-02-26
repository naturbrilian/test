---
layout: post
title: Cara membuat skrip untuk dukungan multi-warna pada skinmu sendiri
date: 2026-01-19 11:59:00-0400
description: an example of a blog post with table of contents
tags: tutorial, script, code
categories: tutorial
giscus_comments: true
related_posts: false
toc:
  beginning: true
---

Mumpung masih ingat dan pengin nulis tutorial & kali ini adalah pertanyaan yang sering aku temukan di forum atau kebetulan nemu sebuah topik di forum dari postingan yang tak lain adalah fl facebook ku sendiri

> ##### TIP
>
> Untuk tutorial ini aku hanya membagikan bagaimana caraku membuat skrip untuk dukungan multi-warna, untuk tutorial membuat skin,
> silahkan pelajari di YouTube atau nanti aku buatkan tutorial tertulisnya (kalau inget sih
{: .block-tip }

## Membuat resource warna dan lain-lain

Sebelumnya kamu perlu membuat resource terlebih dahulu di “repository resource”

Pastikan juga kamu sudah membuat skinmu terlebih dahulu, kalau belum buat dulu konsepnya

Pertama kamu pergi ke tab color, dan harus mencari id untuk target warna yang sebelumnya kamu buat sebagai contoh “Skin.Bawah.Accent.Dark”, setelah sudah ditentukan mari buat lagi dengan nama yang sama namun ditambahin angka jadi “Skin.Bawah.Accent.Dark.0” lalu salin id warna yang dari id “accent.dark” ke id “accent.dark.0”

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/scripts-1.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Setelah itu kaitkan dengan sumber repo utama yaitu yang bernama “Accent.Dark” lakukan seperti di gambar

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/scripts-resource.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/color-resource.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

lakukan hal yang sama pada resource untuk “pustaka” dan “daftar putar”, kalau lupa gunakan fungsi ini, biasanya yang aku ubah adalah warna pada bagian “ItemLine1Fonts”, “ItemLine2Fonts”, “HeaderFonts” dan “ItemBackground” untuk di daftar putar, untuk pustaka kurang lebih sama, tinggal gunakan instingmu saja.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/edit-resource.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Membuat script

Setelah semuanya sudah selesai dalam membuat warnanya mari ke bagian berikutnya yaitu ngoding banf. Pertama, mari masuk ke bagian “Provider Custom” lalu pilih “ScriptableOperatorCounter”

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/create-script.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

> ##### TIP
>
> Pastikan juga kamu mengingat nama / kalau aku nyebutnya “sintaks” dalam bahasa pemrograman,
> kalau tidak ingat kamu kopas saja
{: .block-tip }

Kedua, buat script seperti ini


```command
procedure SetupResource(const AName, ASuffix: string);
begin
  FindResource(AName).Set('ID', AName + '.' + ASuffix);
end;

procedure SetupTheme(const ASuffix: string);
begin
  SetupResource('Skin.Bawah.Accent.Dark', ASuffix); // ini nama id resourcenya
end;

procedure Execute(var State: Integer);
begin
  BeginUpdateResources;
  case State of
    0: SetupTheme('0'); // ini adalah urutan, pastikan sama dengan di repo resource
    1: SetupTheme('1');       
  end;
  EndUpdateResources;
end;
```

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/scripts-sample.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Sebagai contoh ada di gambar, lalu klik “build”, kemudian atur provider parameternya seperti ini, sebagai contoh aku atur 12

Fungsinya tidak lain adalah mengatur batas klik pada script tersebut. Defaultnya adalah 2, jika tidak diatur maka nanti akan kembali ke 0

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/counting-command.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Membuat tombol untuk memanggil script

Sekarang adalah membuat tombol untuk memanggil atau menguji apakah script tersebut bekerja dengan benar. Klik 2x pada tombol yang sudah kamu buat, lalu cari nama script yang tadi kamu buat, lalu atur seperti ini

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/binding-command.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Pada bagian accessibility klik 2x lalu isikan “Value <> 0” dan di bagian action isikan “0” (oh, ya jangan lupa klik “test” dulu), lalu lakukan hal ini pada tombol berikutnya (untuk lebih gampangnya gunakan shorcut “ctrl+shift+j” untuk menyalin semua assets, dan tombolnya, dan tinggal edit ganti angka 1 dst

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ee.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Setelah semuanya selesai coba test tombolnya apa berfungsi dengan benar dengan memencet “alt+click”

Gimana, mudah kan? buat yang masih awam dalam dunia perskinan, script atau justru pertama kali mau buat tapi masih bingung, aku saranin untuk mempelajari struktur dan kode skinnya dari tautan berikut:

1. [SoundMax AIMP Project File](https://www.deviantart.com/desonime/art/SoundMax-AIMP-Project-File-874776988)
2. [Skin MusicExplorer](https://github.com/zawa-ch/skin-musicexplorer) (download semua yang ada di repo, kemudian impor menggunakan metode “import from folder”)
3. Minta akses project skin ke SMIOTAKU melalui tautan [berikut](https://project.smiotaku.my.id/download/source-skin)
