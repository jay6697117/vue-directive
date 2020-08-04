const draggable = {
  inserted(el, binding, vNode) {
    el.setAttribute('style', 'position: fixed; bottom:10px; right: 10px; z-index: 999999');
  },

  bind(el) {
    let agent = window.navigator.userAgent.toLowerCase(),
      start,
      move,
      end;
    //判断当前是移动端还是PC，移动端监听touch，PC监听mouse
    if (['android', 'iphone', 'symbianos', 'windows phone', 'ipad', 'ipod'].some(i => agent.indexOf(i) > 0)) {
      start = 'touchstart';
      move = 'touchmove';
      end = 'touchend';
    } else {
      start = 'mousedown';
      move = 'mousemove';
      end = 'mouseup';
    }
    //添加事件开始监听
    el.addEventListener(start, e => {
      //读取事件开始时，触摸或鼠标按下的坐标，以及容器当前所在位置，并声明两个函数对象，供后面添加和取消监听用
      let cur = e.touches ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : { x: e.clientX, y: e.clientY },
        x = el.offsetLeft,
        y = el.offsetTop,
        prevent = function() {
          event.preventDefault();
        },
        moveFun = function() {
          let widthMax = document.documentElement.clientWidth - el.offsetWidth;
          let heightMax = document.documentElement.clientHeight - el.offsetHeight;

          if (event.touches) {
            el.style.left = event.touches[0].clientX - cur.x + x + 'px';
            el.style.top = event.touches[0].clientY - cur.y + y + 'px';
            if (parseInt(el.style.left) <= 0) {
              el.style.left = 0 + 'px';
            } else if (parseInt(el.style.left) >= parseInt(widthMax)) {
              el.style.left = parseInt(widthMax) + 'px';
            }
            if (parseInt(el.style.top) <= 0) {
              el.style.top = 0 + 'px';
            } else if (parseInt(el.style.top) >= parseInt(heightMax)) {
              el.style.top = parseInt(heightMax) + 'px';
            }
          } else {
            el.style.left = event.clientX - cur.x + x + 'px';
            el.style.top = event.clientY - cur.y + y + 'px';
            if (parseInt(el.style.left) <= 0) {
              el.style.left = 0 + 'px';
            } else if (parseInt(el.style.left) >= parseInt(widthMax)) {
              el.style.left = parseInt(widthMax) + 'px';
            }
            if (parseInt(el.style.top) <= 0) {
              el.style.top = 0 + 'px';
            } else if (parseInt(el.style.top) >= parseInt(heightMax)) {
              el.style.top = parseInt(heightMax) + 'px';
            }
          }
          //阻止移动端屏幕移动
          window.addEventListener('touchmove', prevent, { passive: false });
          // window.addEventListener('mousemove', prevent, { passive: false });
        };
      //监听move并修改位置
      el.addEventListener(move, moveFun);
      //声明一个移除处理函数对象
      let endFun = function() {
        el.removeEventListener(move, moveFun);
        el.removeEventListener(move, endFun);
        window.removeEventListener('touchmove', prevent);
        // window.removeEventListener('mousemove', prevent);
      };
      //监听到事件结束时，移除start以外的监听
      el.addEventListener(end, endFun);
    });
  },

  unbind(el, bindding, vNode) {
    document.body.removeEventListener('dragover', el._documentAllowDraop);
    el.removeEventListener('dragstart', el._dragstart);
    el.removeEventListener('dragend', el._dragEnd);
    window.removeEventListener('resize', el._checkPosition);
    delete el._documentAllowDraop;
    delete el._dragstart;
    delete el._dragEnd;
    delete el._checkPosition;
  }
};

export default draggable;
