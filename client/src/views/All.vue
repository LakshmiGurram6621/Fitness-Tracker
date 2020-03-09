<template>
  <!--Importing popular and beginner modules-->
  <div>
    <BeginnerMenu></BeginnerMenu>
    <PopularMenu></PopularMenu>
  </div>
</template>

<script>
   import BeginnerMenu from "/Users/lakshmi/Desktop/Web practice/Fitness Tracker/client/src/views/Beginner.vue";
   import PopularMenu from "/Users/lakshmi/Desktop/Web practice/Fitness Tracker/client/src/views/Popular.vue";

   export default{
        components:{
                  BeginnerMenu,PopularMenu
      }
   }
</script>
