// var thumbItem = document.getElementsByClassName('thumb-item'),
//     sliderItem = document.getElementsByClassName('slider-item');
//
// for (var i = 0; i < thumbItem.length; i++) {
//     // 立即执行函数
//     (function (j) {
//         thumbItem[j].onclick = function() {
//             for (var k = 0; k < thumbItem.length; k++) {
//                 thumbItem[k].className = 'thumb-item';
//                 sliderItem[k].className = 'slider-item';
//             }
//             this.className += ' cur';   // 这么神奇么
//             sliderItem[j].className += ' active';
//         }
//     })(i);
// }

// 做成插件
;(function () {
    var Slider = function (opt) {
        this.sliderItem = document.getElementsByClassName(opt.sliderItem);
        this.thumbItem = document.getElementsByClassName(opt.thumbItem);
        this.bindClick();
    }

    Slider.prototype = {
        bindClick: function () {
            var slider = this.sliderItem,
                thumbs = this.thumbItem;

            for (var i = 0; i < thumbs.length; i++) {
                (function(j) {
                    thumbs[j].onclick = function () {
                        for (var k = 0; k < thumbs.length; k++) {
                            thumbs[k].className = 'thumb-item';
                            slider[k].className = 'slider-item';
                        }
                        this.className += ' cur';
                        slider[j].className += ' active';
                    }
                })(i);
            }
        }
    }

    window.Slider = Slider;
})();