<template>
  <v-app>
    <v-main>
      <!-- <HelloWorld/> -->    
        <Header/>     
        <!-- <Home/>
        <Create/> -->
        <v-content>
          <router-view></router-view>
        </v-content>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import Header from './components/Header.vue';
// import Home from './components/Home.vue';
// import Create from './components/BlogCreate.vue';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    Header,
    // Home,
    // Create,
  }  
};
</script>
