const mappingSpeed = direction => {
  const mapping = {
    ['top']: 10,
    ['right']: 15,
    ['bottom']: 20,
    ['left']: 10
  }

  return mapping[direction];
}

const runnerController = {
  speedController(way) {
    const speed = mappingSpeed(way);
    return speed;
  },
  wayController(way, speed) {
    let handleNowState = 0;
    let handleStyleName = '';
    let nowspeed = 0;

    way === 'top' || way === 'left' ? nowspeed = -speed : nowspeed = speed;

    if (way === 'top' || way === 'bottom') {
      handleNowState = 1;
      handleStyleName = 'top';
    }
    else {
      handleNowState = 0;
      handleStyleName = 'left';
    }

    this.nowstate[handleNowState] += nowspeed;
    this.targetElement.style[handleStyleName] = this.nowstate[handleNowState] + 'px';
  },
  begin(way) {
    const speed = this.speedController(way);
    this.wayController(way, speed);
  }
}

export default runnerController;