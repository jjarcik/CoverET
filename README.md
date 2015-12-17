CoverET 1.0
===========
Cover everything (video, img and others) with this lightweight code, similar behavior as the css background-size: cover, background-position: center.
The minify file has only 1KB. 

```js
$('video').coverET(1920, 1080);
$('video.indiv').coverET(1920, 1080, {window:false});
```

How to use it?
--------------
```html
<video autoplay loop>
        <source src="video.webm" type="video/webm">
        <source src="video.mp4" type="video/mp4">
</video>

<script src='coveret.min.js' type='text/javascript'></script>
<script>$('video').coverET(1920, 1080);</script>
 ```
 
Configuration
--------------
<b>window</b>
<br />
Boolean, the element has same size as window

<b>center</b>
<br />
Boolean, the element is centered in parent. You can use also
```css
video{
  position:absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto
}
```

<b>onresize</b>
<br />
Boolean, if the window is resized, size of the element is recalculated and resized.
