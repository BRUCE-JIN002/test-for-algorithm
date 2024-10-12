<template>
  <div>{{ x }}</div>
</template>

<script>
  import moment from "moment";
  import { ref } from "vue";
  const x = moment().format("YYYY-MM-DD HH:mm:ss");
  const y = ref(123);
  export default {
    data() {
      return {
        x,
        y
      };
    }
  };
</script>
