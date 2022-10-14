import MyMessageBox from './index.vue';

const MessageBox = () => { };
// const obj = { age: 100 }

MessageBox.install = (Vue) => {
  if(MessageBox.install.installed){
    return;
  }
  MessageBox.install.installed = true;

  // vue.util.defineReactive(obj, 'age', 300);

  Vue.mixin({
    data() {
      return {
      }
    },
    // beforeCreate() {
    //   this.obj = obj;
    // },
    // created() {
    // },
    methods: {
      messageBox(opts) {
        const { title = '', desc = '', handleCancel } = opts;
        const Constructor = Vue.extend(MyMessageBox);
        const vm = new Constructor({
          el: document.createElement('div'),
          data: {
            title,
            desc
          },
          methods: {
            handleCancel() {
              handleCancel && handleCancel();
              document.body.removeChild(vm.$el);
            }
          }
        });

        document.body.appendChild(vm.$el);
      }
    }
  })
}

export default MessageBox;