---
layout: page
#title: The online home of
#tagline: Ben Harrison
bodyClass: homepage
topHtml:
 - <div class="hero-section hero-index"><div class="strapline"><div class="inner"><h2>online home of</h2><h1>devben</h1></div></div><a href="#posts"><span class="glyphicon glyphicon-arrow-down"></span></a></div>
customcss:
 -  /assets/demos/css-toggle-switch.css
 - /assets/number-reel/css/number-reel.css
customjs:
 - /assets/number-reel/js/number-reel.js
---



{% include JB/setup %}

{% comment %}
Read [Jekyll Quick Start](http://jekyllbootstrap.com/usage/jekyll-quick-start.html)

Complete usage and documentation available at: [Jekyll Bootstrap](http://jekyllbootstrap.com)

## Update Author Attributes

In `_config.yml` remember to specify your own data:

    title : My Blog =)

    author :
      name : Name Lastname
      email : blah@email.test
      github : username
      twitter : username


The theme should reference these variables whenever needed.
{% endcomment %}
<!-- {% if post.overviewImage %} style="background-image:url({{post.overviewImage}});"  {% endif %} -->
<div class="col-xs-12 ">


  <!-- Tab panes -->
  <div class="tab-content">
      <div class="tab-pane active" id="all">
        <ul class="posts">
          {% for post in site.posts %}
            <li {% if post.overviewClass %} class="{{post.overviewClass}}" {% endif %}>
              <article  >
                <span class="post-date"><time>{{ post.date | date_to_string }}</time></span>
                <h2><a href="{{ BASE_PATH }}{{ post.url }}">{{ post.title }}</a></h2>
                <div class="main">
                  {{post.description}}
                </div>
                <a class="btn btn-outline" title="{{ post.title }}" href="{{ BASE_PATH }}{{ post.url }}">Go to article</a>
              </article>
            </li>
          {% endfor %}
        </ul>
      </div>
     {% for tag in site.tags %}
        <div class="tab-pane" id="{{ tag[0] | replace: ' ','' }}-ref">
            <ul class="posts">
            {% assign post_list = tag[1] %}  
            {% include JB/post_list %}
            </ul>
        </div>
    {% endfor %}
  </div>
   <ul class="tag-box inline">
    <li><span class="glyphicon glyphicon-tag"></span></li>
    <li class="active"><a role="tab" data-toggle="tab" href="#all">All </a></li>
      {% assign tags_list = site.tags %}  
      {% include JB/tags_list_index %}
  </ul>

</div>
