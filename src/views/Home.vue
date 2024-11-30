<template>
  <div class="home">
    <Header />
    <Ranking />
    <Categories />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Ranking from '../components/Ranking.vue';
import Categories from '../components/Categories.vue';


export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    Ranking,
    Categories
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>