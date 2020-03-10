<template>
   <div id="app"> 
        <div id="nav">
          <!-- including home page on the APP module-->
           <router-view/>
          <router-link to="/"></router-link> |
          <Mynav></Mynav>   
        </div>    
   </div>
</template>   

//Importing and exporting the feature so that we can use it in APP module
<script>
   import Mynav from "/Users/lakshmi/Desktop/Web practice/Fitness Tracker/client/src/components/Nav.vue";
   export default{
        components:{
                  Mynav
      }
   }
</script>