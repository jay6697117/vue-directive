import copy from './src/copy';
import emoji from './src/emoji';
import longpress from './src/longpress';
import debounce from './src/debounce';
import waterMarker from './src/waterMarker';
import draggable from './src/draggable';
import color from './src/color';
import lazyLoad from './src/lazyLoad';
import typing from './src/typing';
import clickOutside from './src/clickOutside';
// 自定义指令
const directives = {
  copy,
  emoji,
  longpress,
  debounce,
  waterMarker,
  draggable,
  color,
  lazyLoad,
  typing,
  'click-outside': clickOutside
};
// 这种写法可以批量注册指令
export default directives;
