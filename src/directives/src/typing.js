const vTyping = {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function(el) {
    const initIndex = 0;
    const initStr = '我是自定义指令啦啦啦';
    writing(initIndex, initStr);
    function writing(index, str) {
      const arr = str.split('');
      if (index < arr.length) {
        el.value += arr[index];
        setTimeout(() => {
          index += 1;
          writing(index, str);
        }, 500);
      }
    }
  }
}

export default vTyping
