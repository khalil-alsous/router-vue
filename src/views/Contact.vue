<template>
  <div class="contact">
    <h1>This is an Contact page</h1>
    <h2>{{ id }}</h2>
    <h2>{{ age }}</h2>
    <router-view />
    <!-- For Inner Page -->
  </div>
</template>

<script>
export default {
  name: "Contact",
  data() {
    return {
      id: this.$route.params.id,
      age: this.$route.params.userage,
    };
  },
  methods: {
    check() {
      this.id = this.$route.params.id;
      this.age = this.$route.params.userage;
    },
  },
  watch: {
    $route: "check",
  },
};
</script>
