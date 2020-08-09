<template>
  <div class="home">
    <img alt="Vue logo" height="100px" src="../assets/logo.png" />

    <br />
    <hr />

    <button v-longpress="longpressHandle" class="longpress-btn">v-longpress测试</button>
    <div v-color="'red'">v-color测试</div>
    <div v-draggable class="draggable-dom">拖拽</div>
    <br />
    <hr />

    <HelloWorld msg="Welcome to Your Vue.js App" />
    <input class="focus-input" type="text" v-typing />

    <div style="width:200px; margin:0 auto;">
      <Select />
      <div style="padding:10px 0;">
        <Button @loading="loadingHandle" @openModal="openModalHandle">
          <svg
            v-show="loading"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="20px"
            height="20px"
            viewBox="0 0 50 50"
            style="enable-background:new 0 0 50 50"
            xml:space="preserve"
          >
            <path
              fill="#FF6700"
              d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
              transform="rotate(275.098 25 25)"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"
              ></animateTransform>
            </path>
          </svg>
          <span>{{ loading ? 'Loading...' : 'Click Me' }}</span>
        </Button>
      </div>

      <Modal :isClosed="isClosed" @closeModal="closeModalHandle">
        <div style="padding:5px 0">Modal default1</div>
        <div style="padding:5px 0">Modal default1</div>
      </Modal>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    HelloWorld: () => import(/* webpackChunkName: "hello-world" */ '../components/HelloWorld'),
    Select: () => import(/* webpackChunkName: "select" */ '../components/Select'),
    Modal: () => import(/* webpackChunkName: "modal" */ '../components/Modal'),
    Button: () => import(/* webpackChunkName: "button" */ '../components/Button')
  },
  data() {
    return {
      loading: false,
      isClosed: true
    };
  },
  methods: {
    loadingHandle(boolValue) {
      this.loading = boolValue;
    },
    openModalHandle(boolObj) {
      this.loading = boolObj.isLoading; //false
      this.isClosed = !boolObj.isOpen; //true
    },
    closeModalHandle(boolValue) {
      console.log('closeModalHandle boolValue :>> ', boolValue);
      this.isClosed = boolValue;
    },
    longpressHandle() {
      alert('触发长按');
    }
  },
  mounted() {
    console.log('this :>> ', this);
  }
};
</script>

<style scoped>
.focus-input {
  margin: 10px 0;
}
.longpress-btn {
  padding: 5px 20px;
  border: 1px solid #cccccc;
  font-size: 14px;
  border-radius: 16px;
  background-color: green;
}
.draggable-dom {
  width: 60px;
  height: 60px;
  line-height: 60px;
  border: 1px solid #cccccc;
  border-radius: 30px;
  font-size: 18px;
  background-color: #aaaaaa;
}
</style>
