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