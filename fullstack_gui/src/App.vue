<template>
 <div>
  <NavBarComp2/>
  <NavBarComp/>
  <router-view/>
  <FooterComp/>
 </div>
</template>
<script>
import NavBarComp2 from './components/NavBarComp2.vue';
import NavBarComp from './components/NavBarComp.vue';
import FooterComp from './components/FooterComp.vue';
export default {
  components: {
    NavBarComp,
    NavBarComp2,
    FooterComp
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body{
   box-sizing: border-box;
  padding: 0;
  margin: 0;
  justify-content: space-around;
}
</style>
