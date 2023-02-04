var $item = $('.item');

console.log($item.offset());   // 绝对距离
console.log($item.position());  // 相对距离
// 可以填参数, {"top": 50, "left": 50}

// scrollTop, scrollLeft获取滚动距离

// 父元素overflow: auto, 子元素超出父元素的高度, 会出现滚动条
// width: width
// innerwidth: width + 2 * padding
// outerwidth: width + 2 * padding + 2 * border
// outerwidth参数传true, 可以+= 2 * margin

// each(idx, elem)