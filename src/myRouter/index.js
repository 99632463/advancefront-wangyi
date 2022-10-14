class HistoryRouter {
  constructor() {
    this.current = '/';
  }
}

class MyRouter {
  constructor(options = {}) {
    this.mode = options.mode || 'hash';
    this.routes = options.routes || [];
    this.routesMap = this.createMap(this.routes);
    this.historyRouter = new HistoryRouter();
    this.init();
  }

  init() {
    if (this.mode === 'hash') {
      location.hash ? '' : location.hash = '/';   // 添加 /#
      // 监听事件
      window.addEventListener('load', () => {
        this.historyRouter.current = location.hash.slice(1);
      })
      window.addEventListener('hashchange', () => {
        this.historyRouter.current = location.hash.slice(1);
      })
    }
  }

  createMap(routes) {
    return routes.reduce((prev, item) => {
      prev[item.path] = item.component;
      return prev;
    }, {});
  }
}

// 监听 current
MyRouter.install = (Vue) => {
  if (MyRouter.install.installed) {
    return;
  }
  MyRouter.install.installed = true;
  Vue.mixin({
    beforeCreate() {
      if (this.$options && this.$options.router) {
        this._root = this;
        this._router = this.$options.router;
        Vue.util.defineReactive(this, 'current', this._router.historyRouter);
      }
      else {
        this._root = this.$parent._root;
      }

      Object.defineProperty(this,'$router',{
        get(){
          return this._root._router;
        }
      })
    }
  });

  //注册新组件，更新新组件
  Vue.component('router-view', {
    render(h) {
      const current = this._self._root._router.historyRouter.current;
      const routesMap = this._self._root._router.routesMap;
  
      return h(routesMap[current]);
    }
  })
}

export default MyRouter;