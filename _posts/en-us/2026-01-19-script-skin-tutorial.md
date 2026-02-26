---
layout: post
title: How to create a script for multi-color support on your own skins
date: 2026-01-19 11:59:00-0400
description: an example of a blog post with table of contents
tags: tutorial, script, code
categories: tutorial
giscus_comments: true
related_posts: false
toc:
  beginning: true
---

While I still remember and want to write a tutorial, this time it's a question that I often find on forums or happened to find a topic on a forum from a post by none other than my Facebook friend.

> ##### TIP
>
> For this tutorial, I'm just sharing how I created a script for multi-color support.
> For tutorials on creating skins, please learn on YouTube or I'll make a written tutorial later (if I remember).
{: .block-tip }

## Creating colors and other resources

First, you need to create a resource in the “resource repository.”

Make sure you have created your skin first. If you haven't, create the concept first.

First, go to the color tab and find the ID for the target color you created earlier, for example, “Skin.Bawah.Accent.Dark.” Once you have determined it, create another one with the same name but add a number, so it becomes “Skin.Bawah.Accent.Dark.0.” Then, copy the color ID from “accent.dark” to “accent.dark.0.”

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/scripts-1.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

After that, link it to the main repo source named “Accent.Dark” as shown in the image.

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

Do the same for the “library” and ‘playlist’ resources. If you forget to use this function, I usually change the colors in “ItemLine1Fonts,” “ItemLine2Fonts,” “HeaderFonts,” and “ItemBackground” for the playlist. For the library, it's more or less the same, just use your instincts.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/edit-resource.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Creating scripts

Once everything is done in creating the colors, let's move on to the next part, which is coding the banf. First, let's go to the “Custom Provider” section and select “ScriptableOperatorCounter.”

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/create-script.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

> ##### TIP
>
> Make sure you remember the name / if I call it "syntax" in programming language
> if you don't remember, just copy it.
{: .block-tip }

Second, create a script like this


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

As shown in the image, click “build,” then set the provider parameters like this. For example, I set it to 12.

Its function is simply to set the click limit on the script. The default is 2, if not set it will revert to 0.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/counting-command.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Create a button to call the script

Now it's time to create a button to call or test whether the script works correctly. Double-click on the button you just created, then find the name of the script you created earlier, and set it up like this

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/binding-command.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

In the accessibility section, double-click and enter “Value <> 0” and in the action section, enter “0” (oh, yes, don't forget to click ‘test’ first), then do this on the next button (to make it easier, use the shortcut “ctrl+shift+j” to copy all assets and buttons, then just edit and replace the number 1, etc.).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/ee.png" title="start menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Once everything is complete, test the button to see if it works correctly by pressing “alt+click.”

How about that, easy right? For those who are still new to on customization of skins, scripts, or are trying to make one for the first time but are still confused, I recommend learning the structure and code of the skin from the following link:

1. [SoundMax AIMP Project File](https://www.deviantart.com/desonime/art/SoundMax-AIMP-Project-File-874776988)
2. [Skin MusicExplorer](https://github.com/zawa-ch/skin-musicexplorer) (download everything in the repository, then import using the “import from folder” method)
3. Request access to the project skin on SMIOTAKU via the following [links](https://project.smiotaku.my.id/download/source-skin)
