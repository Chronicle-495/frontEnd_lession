(function (data) {
    var idx = 0;

    function init() {
        bindEvent();
        renderData(data);
    }

    function bindEvent() {

    }

    function renderData(data) {
        var len = Math.min(data.length - idx * 10, 10);

        // console.log(len);

        for (var i = 0; i < len; i++) {
            
        }
    }

    init();
})(srcData);
