<!-- Button.vue -->
<template>
  <button class="btn-flex" @click="clickHandle">
    <slot />
  </button>
</template>

<script>
export default {
  name:'Button',
  data() {
    return {
      timer: null
    };
  },
  methods: {
    clickHandle() {
      this.$emit('loading', true);
      this.timer = setTimeout(() => {
        this.timer = null;
        this.$emit('openModal', { isLoading: false, isOpen: true });
      }, 1000);
    }
  }
};
</script>

<style lang="less" scoped>
.btn-flex {
  width: 92px;
  height: 30px;
  margin: 0 auto;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
}
</style>
