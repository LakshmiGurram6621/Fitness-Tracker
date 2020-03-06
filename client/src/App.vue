<template>
   <div id="app"> 
        <div id="nav">
          <!-- including home page on the APP module-->
          <router-link to="/"></router-link> |
        </div>  
        <router-view/> 
        <Mynav></Mynav>    
   </div>
</template>   
<style lang="scss">
     @import "~bulma/css/bulma.css"
</style>
<script>
   import Mynav from "/Users/lakshmi/Desktop/Web practice/Fitness Tracker/client/src/components/Nav.vue";
   export default{
        components:{
                  Mynav
      }
   }
</script>