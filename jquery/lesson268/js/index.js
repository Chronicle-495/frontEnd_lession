(function (data) {
    var $Container = $('.container'),
        idx = 0,
        $ContentList = $('.news-list'),
        total = data.length / 10,
        bgColorArr = ['#f54545', '#ff8547', '#ffac38'];

    function init() {
        bindEvent();
        renderData(data);
    }

    function bindEvent() {
        $Container.find('.changeBtn').on('click', function () {
            idx = ++idx % total;

            renderData(idx);
        })
    }

    function renderData(data) {
        $ContentList.hide().find('.data-item').remove();

        var len = Math.min(data.length - idx * 10, 10);

        // console.log(len);

        for (var i = 0; i < len; i++) {
            var $CloneDOM = $Container.find('.tpl').clone()
                    .removeClass('tpl').addClass('data-item'),
                elem = data[i + idx * 10];

            $CloneDOM.find('div').eq(0).text(i + 1 + idx * 10)
                .css('background-color', idx == 0 && bgColorArr[i])
                .next().text(elem.title)
                .next().find('span').text(elem.number + "万")
                .addClass(elem.number > elem.preNumber ? 'up' : 'down');

            $ContentList.append($CloneDOM);
        }

        $ContentList.fadeIn();
    }

    init();
})(srcData);
