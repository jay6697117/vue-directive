<template>
  <div class="modal" v-show="!isClosed">
    <slot name="header">
      <div class="header">
        {{ title }}
      </div>
    </slot>

    <div class="default">
      <slot />
    </div>

    <slot name="footer">
      <div class="footer">
        <div @click="close" class="close">
          <Button>
            Close
          </Button>
        </div>
      </div>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  components: {
    Button: () => import(/* webpackChunkName: "button" */ './Button')
  },
  data() {
    return {
      title: 'Modal header'
    };
  },
  props: {
    isClosed: {
      type: Boolean
    }
  },
  methods: {
    close() {
      this.$emit('closeModal', true);
    }
  }
};
</script>

<style scoped>
.modal {
  width: 80vw;
  height: 80vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  background-color: #ccc;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal > * {
  width: 100%;
}
.header {
  padding: 10px 0;
  color: #ffffff;
  background-color: royalblue;
}

.default {
  padding: 10px 0;
  background-color: #eeeeee;
}
.footer {
  padding: 10px 0;
  background-color: green;
}
.footer .close {
  display: inline-block;
}
</style>
