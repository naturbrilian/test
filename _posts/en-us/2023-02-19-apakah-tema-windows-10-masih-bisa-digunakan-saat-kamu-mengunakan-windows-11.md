---
layout: distill
title: Apakah Tema Windows 10 masih bisa digunakan saat kamu mengunakan Windows 11?
description: cara menerapkan tema windows 10 ke 11
tags: tutorial
giscus_comments: true
date: 2023-02-19
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
  - name: INTRODUCTION
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: How's Apply
  - name: Why when applying, not through via Windows settings?
  - name: Cons
  - name: How to Settings?
  - name: Patch for Themes
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

## INTRODUCTION
Hello visitors, it seems I have not written on this blog for a long time. Oh yes, you must know or have used a theme on your OS, and surely you are wondering "Can this theme still be applied to the highest OS version, especially Win11?"

The answer is, of course you can. So, last night I did an experiment using the "Arknights" and "Golden Marriage" themes made by ~Theia and it still worked.

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

## How's Apply

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-431.png" title="Golden Marriage Windows 10 Themes by ~Theia" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The way to apply this theme is actually the same, but this time don't apply it through the default Windows settings, because later the image won't appear/fails. Apply via the Themes folder, by going to C:\Windows\Resources\Themes then searching for "Arknight Windows 10 Theme.theme, then double-clicking and waiting a moment.

---

## Why when applying, not through Windows settings?

Actually, it is possible, but the theme will not be applicable because it is a different base.

---

## Cons

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-44.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Context menu on file explorer or desktop does not appear (classics context menu), because it is not compatible with os w11. So you can use the context menu on the latest version of the OS.

---

## How to Settings?
Set on startallback like this.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-451.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## Patch for Themes

For the patch to stay the same, don't forget to create a restore point, that's the most important.

---

## Is applying this theme highly recommended?

Not really, as it's a different operating system. However, if you want to use it, please do so at your own risk (it's recommended to find a theme that's compatible with this operating system).

---