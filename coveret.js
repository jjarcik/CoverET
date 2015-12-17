/*
 *  CoverET - Cover EveryThing
 *  Simple light weight code for cover everything (video, img and others),
 *  similar behavior as the css background-size: cover
 *  
 *  Author: Jan Jarcik, https://github.com/jjarcik
 *  Licence: MIT License http://opensource.org/licenses/mit-license.php
 */

(function ($) {

    var $e, o = {};

    var cover = function () {
        var css = {};
        var ww = o.parent.width();
        var wh = o.parent.height();
        var vr = o.w / o.h;
        var neww = ww, newh = ww / vr;

        if (newh < wh) {
            newh = wh;
            neww = vr * wh;
        }

        if (o.center) {
            css.left = (-Math.abs((neww - ww)) / 2) + "px";
            css.top = -Math.abs((newh - wh)) / 2 + "px";            
        }

        css.width = neww + "px";
        css.height = newh + "px";
        $e.css(css);

    };

    $.fn.coverET = function (w, h, options) {
        $e = $(this);
        o = $.extend({}, $.fn.coverET.defaults, options, {'w': w, 'h': h});

        if (o.onresize) {
            $(window).resize(function () {
                cover();
            });
        }
        
        if (!o.window){
            o.parent = $(this).parent();
        }

        cover();
    };

    $.fn.coverET.defaults = {
        center: true,        
        window: true,
        onresize: true,
        parent: $(window)
    };

})(jQuery); 