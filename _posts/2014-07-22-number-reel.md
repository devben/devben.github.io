---
layout: post
title: "CSS3 Number Reel"
description: "<div class='demo2'><div data-trigger='numberReel' data-thousands='true' data-currency='€'>9999999</div></div> A javascript Number Reel plugin using CSS3 anitmations."
category: JS Plugin
tags: [CSS3,HTML5,JS Plugin]
bodyClass: nav-white
overviewClass: light
overviewImage: /assets/images/macbook45.jpg
customjs:
 - /assets/plugins/jquery.scrollstop.js
 - /assets/plugins/jquery.easing.min.js
 - /assets/plugins/jquery.scrollsnap.js
 - /assets/number-reel/js/number-reel.js
 - /assets/number-reel/js/demo.js
customcss:
 -  /assets/number-reel/css/number-reel.css
 -  /assets/number-reel/css/demo.css
topHtml:
 - <div class="hero-section hero-section1"><!--<div class="showme">Scroll down for more examples<br>or</br><a class="btn btn-default" href="#code">just show me the code</a></div>--><div><div data-trigger="numberReel">12345</div><button data-trigger="clickme" type="button" class="btn btn-default btn-outline">Randomise</button></div><a class="fork-me" href="https://github.com/devben/number-real"><img src="https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_white_ffffff.png"></a></div><!--<div class="hero-section hero-section2 snap"><div></div></div><div class="hero-section hero-section3 snap"><div></div></div><a name="code"></a>-->   
---
{% include JB/setup %}

I wanted create a CSS animated reel of numbers so wrote this little plugin. Animation can be initalized **programatically** `el.numberReel` or using **data-attributes** `data-trigger="numberReel"`. At the time of writing the plugin take thes following [options](#options)

<div class="demo"><div data-trigger="numberReel" >191919</div></div>

    <div data-trigger="numberReel">191919</div>

***

<div class="demo"><div class="number">292929</div></div>

    $('.number').numberReel({
        infinite:true
    });

***

<div class="demo2"><div data-trigger="numberReel" data-thousands="true" data-currency="£">9999999</div></div>

    <div data-trigger="numberReel" data-thousands="true" data-currency="£">9999999</div>

***

##onClick

<div class="demo-click">
<div class="button-wrap"><button class="btn btn-primary" data-trigger="clickme" type="button">clickme</button></div>
<div class="demo"><div id="onClick"></div>
</div>
<span class="help-block hide" data-msg="helpText" >you can click me multiple times</span>
</div>


    var btn = $('[data-trigger="clickme"]');
    var numbers = $('#onClick');

    btn.on('click', function(){
        var number = Math.floor(Math.random() * 9999);
        numbers.html(number).numberReel();
    });

##Options

<table class="table">
                <thead>
                    <tr>
                        <th>name</th>
                        <th>type</th>
                        <th>default</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                     <tr>
                        <td>wrapper</td>
                        <td>string</td>
                        <td nowrap>'number-reel'</td>
                        <td>wrapping div.class</td>
                    </tr>
                    <tr>
                        <td>currency</td>
                        <td>string</td>
                        <td>'$'</td>
                        <td>Prepend a currecy symbol or any string. <code>''</code>, prepends NULL</td>
                    </tr>
                    <tr>
                        <td>infinite</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td><code>true</code> animates the numbers continuously with the addition of <code>.infinite</code>, a small delay is present which is configurable in the CSS. <code>false</code> animates only once.</td>
                    </tr>
                   <!--  <tr>
                        <td>reelFace</td>
                        <td>number</td>
                        <td>9</td>
                        <td>appends X other numbers, in a random order, to use in the animation</td>
                    </tr> -->
                    <tr>
                        <td>thousands</td>
                        <td>boolean</td>
                        <td>false</td>
                        <td>groups numbers reels in 3's to add styling for thousand seperated numbers. i.e 1 000 000</td>
                    </tr>
                </tbody>
            </table>
