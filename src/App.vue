<template>
  <div>
    <Header />
    <Ranking />
    <Categories />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Ranking from "./components/Ranking.vue";
import Categories from "./components/Categories.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Ranking,
    Categories,
    Footer,
  },
};
</script>
