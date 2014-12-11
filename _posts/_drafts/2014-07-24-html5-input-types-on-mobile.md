---
layout: post
title: "html5 input types on mobile"
description: "html5 input types on mobile and the use of "
category: HTML5
tags: [HTML5,HTML]
---
{% include JB/setup %}


###input type="text"

`<input type="text" name="text">`

<input type="text" class="form-control" placeholder="text input" name="text">

<div class="image-with-title">

<!-- ![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png) -->
Soft Keyboard for text = iOS (left) - Android (Right)
</div>

***


###input type="email"

`<input type="email" name="email">`

<input type="email" class="form-control" placeholder="email input" name="email">

<div class="image-with-title">


<img src="https://octodex.github.com/images/yaktocat.png" alt="image">


<div>Soft Keyboard for email = iOS (left) - Android (Right)</div>
</div>

***

###input type="number"

`<input type="number" name="number">`

<input type="number" class="form-control" placeholder="number input" name="number">

<div class="image-with-title">

<!-- ![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png) -->
Soft Keyboard for numbers = iOS (left) - Android (Right)
</div>

***

###input type="tel"

`<input type="tel" name="tel">`

<input type="tel" class="form-control" placeholder="tel input" name="tel">

<div class="image-with-title">

<!-- ![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png) -->
Soft Keyboard for tel = iOS (left) - Android (Right)
</div>

***

##using the pattern attribute
The use of `type="tel"` is commonly used on inputs where it perhaps it shouldn't be...
<blockquote>
The input element with a type attribute whose value is "tel" represents a one-line plain-text edit control for entering a telephone number.
<footer><a href="http://www.w3.org/TR/html-markup/input.tel.html">http://www.w3.org/</a></footer>
</blockquote>
The correct solution would be to use the pattern attribute;

###pattern="[0-9]*"
`<input type="text" name="textpattern" pattern="[0-9]*">`

<input type="text" pattern="[0-9]*" maxlength="5"  class="form-control" placeholder="text with pattern" name="textpattern">

<div class="image-with-title">

<!-- ![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png) -->
Soft Keyboard for text pattern="[0-9]*" = iOS (left) - Android (Right)
</div>

***


###pattern="[0-9]*"
`<input type="number" name="numberpattern" pattern="[0-9]*">`

<input type="number"  pattern="[0-9]*" maxlength="5" class="form-control" placeholder="number input with pattern" name="numberpattern">

<div class="image-with-title">

<!-- ![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png) -->
Soft Keyboard for number pattern="[0-9]*" = iOS (left) - Android (Right)
</div>

***


###pattern="[0-9\\.]*"
`<input type="number" name="numberpattern" pattern="[0-9\.]*">`

<input type="number"  pattern="[0-9\.]*" maxlength="5" class="form-control" placeholder="number input with pattern" name="numberpattern">

<div class="image-with-title">

<!-- ![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png) -->
Soft Keyboard for number pattern="[0-9\.]*" = iOS (left) - Android (Right)
</div>


***


###step="0.01"
`<input type="number" name="numberpattern" step="any">`

<input type="number"  step="any" class="form-control" placeholder="number input with pattern" name="numberpattern">

<div class="image-with-title">

<!-- ![Image of Yaktocat](https://octodex.github.com/images/yaktocat.png) -->
Soft Keyboard for tel = iOS (left) - Android (Right)
</div>
