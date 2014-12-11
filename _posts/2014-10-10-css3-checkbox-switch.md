---
layout: post
title: "CSS3 Checkbox Switch"
description: "<div class='demo-switch-container'>
  <input id='switchToggle' class='toggle-switch' type='checkbox' checked=''>
  <label for='switchToggle' data-switch-on='on' data-switch-off='off'></label>
</div>Another pure css toggle switch (no javascript) for checkboxes. This one has the option of using data-attributes to add labels via css."
category: CSS3
tags: [CSS3,HTML5]
customcss:
 -  /assets/demos/css-toggle-switch.css
---
{% include JB/setup %}

<div class="toggle-switch-container">
  <input id="switchToggle" class="toggle-switch" type="checkbox" checked>
  <label for="switchToggle" data-switch-on="on" data-switch-off="off"></label>
</div>


Pure CSS3 check boxes, there is no javascript in this example and shuould work in IE9 +. There are many great examples of CSS3 checkboxes out there [^fn-css3-checkbox-examples] and this is just another one.

To style the switch we are using `:before`, `:after` pseudo-elements and  `+` adjacent sibling selector. Then using the `:checked` pseudo selector we can update the styles depending on the checkbox state.

    input[type="checkbox"]:checked + label {  
    }

This example also uses **data-attributes** to provide labels via css. In the html we are using `data-switch-on="yes" data-switch-off="no"` and the rendering the content via css using `content: attr(data-switch-on);` and `content: attr(data-switch-off);`.


<div class="toggle-switch-container">
  <input id="switchToggle4" class="toggle-switch toggle-switch-wide" type="checkbox">
  <label for="switchToggle4" data-switch-on="Sign me up" data-switch-off="No Thanks"></label>
</div>

You can simply make the switch wider to allow for longer labels by just increasing the width in the css, in this example  `.toggle-switch-wide` contains the css for the  **wider version** of the switch.

Check out the pen with more examples and the raw .less

<p data-height="330" data-theme-id="0" data-slug-hash="tHyGc" data-default-tab="result" data-user="devben" class='codepen'>See the Pen <a href='http://codepen.io/devben/pen/tHyGc/'>tHyGc</a> by ben (<a href='http://codepen.io/devben'>@devben</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//codepen.io/assets/embed/ei.js"></script>

***

[^fn-css3-checkbox-examples]: Nice flat design CSS3 toggle switchs  - [http://callmenick.com/2014/05/13/css-toggle-switch-examples/](http://callmenick.com/2014/05/13/css-toggle-switch-examples/ "CSS Toggle Switch")  <br />Tutorial on basic principle from webdesign.tutsplus.com  - [http://webdesign.tutsplus.com/articles/quick-tip-easy-css3-checkboxes-and-radio-buttons--webdesign-8953](http://webdesign.tutsplus.com/articles/quick-tip-easy-css3-checkboxes-and-radio-buttons--webdesign-8953"tutsplus.com")

