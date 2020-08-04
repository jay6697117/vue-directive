<template>
  <div class="hello">
    <div>{{ msg }}</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  width: 60vw;
  padding: 5px 0;
  margin: 0 auto;
  background-color: #ccc;
  margin-top: 10px;
}
</style>
