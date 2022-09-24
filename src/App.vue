<template>
  <div>
    <Header />
    <router-view ></router-view>
    <Footer v-show="$route.meta.isShow"/>
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
}
</script>

<style>
</style>
