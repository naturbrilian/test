---
layout: distill
title: Tutorial Tema Google Chrome
description: how to create your own Google Chrome theme
tags: tutorial
giscus_comments: true
date: 2024-11-12
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
  - name: Preparation
    # if a section has subsections, you can add them as follows:
    # subsections:
    #   - name: Example Child Subsection 1
    #   - name: Example Child Subsection 2
  - name: Take a Screenshot
  - name: Cut some parts
  - name: Create a background for the toolbar
  - name: NTP Background
  - name: Frame & Tab Background
  - name: Finalizing

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

## Preparation

1. The preparation for creating this Chrome theme is the screen size of your desktop/laptop.
2. Adobe Photoshop or Photopea (if you lazy to Install Photoshop)
3. ThemeBeta Web, to create and publish the theme

---

## Take a Screenshot

Take a screenshot of your desktop, then paste it into a photo editor. Here, I'm using Photopea (because I can't be bothered to open Photoshop).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ngepasin-layout.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Don't forget to mark it like this, this is to determine the layout so that it is more perfect when applied.

---

## Cut some parts

Now we cut several pieces, which will later be divided into 6 pieces, namely:
1. Toolbar
2. NTP Background
3. Frame
4. Tab Background
5. NTP Attribution (You can skip this part)
6. Frame Overlay

---

## Create a background for the toolbar

First, cut the screenshot you took earlier like this

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-167.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

After that, choose your favorite image as the theme. Here, I used the character Nao Tomori as the base theme. Add the base color and character like this, then save it in PNG format.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-166.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

After that, let's upload it as a test to ThemeBeta, and this is a temporary preview.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-168.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

## NTP Background

Now, let's to the next step, which is creating the NTP Background. Now, let's cut this part again. Then, let's add the background like this and save it as a png file.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-169.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

> Bro, the image I'm using doesn't match the preview? Let's measure it again and crop it.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-170.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

When cropping a screenshot, it is recommended to zoom in like this.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-171.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

After that, add your image, save it again, and test it again on ThemeBeta. The result will look like this.

---

## Frame & Latar Tab

Next, we add a frame image with the same image. Here, you can just use the auto color picker. Then, for the tab background, we give it a color taken from the character's own color.

---

## Finalizing

Now, once it's done, name your theme, then save it or publish it on ThemeBeta & any other website, then apply it and the result will look like this.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/image-172.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Done and easy, right?

---