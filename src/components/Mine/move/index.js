import { extend } from '../../../common/util/base';
import runnerController from './runnerController';

// 初始模块 (模块合并，事件初始化)
// 运动方向模块 (方向，速度)

export default class Mover {
  constructor(config = {}) {
    const { idArrs, target, parentElement } = config;
    this.idArrs = idArrs || [];
    this.direction = ['top', 'right', 'bottom', 'left'];
    this.parentElement = parentElement || document;
    target ? this.targetElement = this.parentElement.querySelector(target) : null;
    this.nowstate = [
      this.targetElement.offsetLeft || 0,
      this.targetElement.offsetTop || 0
    ];
  }
}

Mover.prototype.init = function () {
  extend(Mover.prototype, runnerController);
  extend(this, Mover.prototype);
}

Mover.prototype.bind = function () {
  this.init();
  this.idArrs.forEach((item, index) => {
    const ele = this.parentElement.querySelector(item);
    ele.onclick = () => {
      this.begin(this.direction[index]);
    }
  })
}