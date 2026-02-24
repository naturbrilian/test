---
layout: post
title: Verifying link ownership is surprisingly easy
date: 2026-02-19 12:14:14
tags: blogging, verification
categories: blogging
thumbnail: assets/img/verifikasi-tautan.png
---

I've been using social media for years and I've always wanted the flexibility of a checkmark next to my display name, but I don't think it's necessary because it turns out you have to pay to get the checkmark verification.

In the past, to verify an account's official status, you had to submit a document with identification, such as a national ID card (KTP), tax ID, and so on for individuals. But now it's much easier, especially with a link.

## Link Ownership
For links, you can verify ownership by simply adding _<a rel=”me” href=””_ in your html file, for example I will verify link ownership with fediverse Misskey, as in the following screenshot.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/rel-me.png" title="hananako main" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

For Misskey itself, the verification process is fast, unlike threads, which can take up to a quarter of an hour. Facebook also has a link ownership verification system, but the process is more complicated. It's more or less as shown in this screenshot.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/contoh-verifikasi-tautan.png" title="hananako main" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

In Discord itself, there is also a verification system like this, and of course the methods are various, for example, I want to verify the ownership link of my website which I also host on nekoweb.org, for nekoweb, the method is more or less the same as neocities.org, namely placing a file containing values ​​in the .well-known folder like this, which will later be directly verified by Discord.

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

Even now, some web templates have been given support for automatic link verification, for example [al-folio](https://github.com/george-gca/multi-language-al-folio) and [Fuwari](https://github.com/saicaca/fuwari) which I used before the domain expired.