var $item = $('.item');

console.log($item.offset());   // ���Ծ���
console.log($item.position());  // ��Ծ���
// ���������, {"top": 50, "left": 50}

// scrollTop, scrollLeft��ȡ��������

// ��Ԫ��overflow: auto, ��Ԫ�س�����Ԫ�صĸ߶�, ����ֹ�����
// width: width
// innerwidth: width + 2 * padding
// outerwidth: width + 2 * padding + 2 * border
// outerwidth������true, ����+= 2 * margin

// each(idx, elem)