import Vue from 'vue'
import axios from 'axios';
import HelloWorld from '@/components/HelloWorld';
import Promise from 'es6-promise';
Promise.polyfill();

describe('HelloWorld.vue', () => {
  let vm = null;

  before(() => {
    const Constructor = Vue.extend(HelloWorld);
    vm = new Constructor().$mount();
  })

  // 仅测试这一个单元测试
  // it.only('xxx',() => {

  // })

  it('should render correct contents', () => {
    expect(vm.$el.innerHTML).to.equal('test');
  })

  it('test function', () => {
    expect(vm.fib(100)).to.equal(100);
  });

  it('test async function', () => {
    vm.fix(2, 2, (res) => {
      expect(res).to.equal(4);
    });
  });

  it('test request function', () => {
    const axiosSpy = sinon.spy(axios, 'get');
    vm.getData(axiosSpy);
    expect(axiosSpy.callCount).to.equal(1);
    axiosSpy.restore();
  });

  it('test request function', () => {
    //spy, 会拦截掉方法的作用
    //stub 会拦截掉方法的作用
    const axiosStub = sinon.stub(axios,'get');
    const axiosSpy = sinon.spy(() => {
      return 4;
    });
    
    expect(vm.getData(axiosSpy)).to.equal(4);
    axiosStub.restore();
  });
})
