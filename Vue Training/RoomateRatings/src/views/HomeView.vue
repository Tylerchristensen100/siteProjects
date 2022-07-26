<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable prettier/prettier -->
<script>
import Heading from "@/components/Heading.vue";
import db from "@/db.js";
export default {
  name: "Home",
  components: {
    Heading,
    props: ["user"],
  },
};
</script>

<template>
  <div class="container">
    <Heading />
    <h1>Welcome {{user}}</h1>
  </div>
</template>

<style></style>
