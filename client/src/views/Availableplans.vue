<template>
   <!---Creating Plans page-->
   <div class="buttons form-down"> 
     <button class="button">My Favorites</button>
     <button class="button"><router-link to="/Plans/Popular">Popular</router-link></button>
     <button class="button"><router-link to="/Plans/Beginner">Beginner</router-link></button>
     <button class="button"><router-link to="/Plans/Yoga">Yoga</router-link></button>
     <button class="button">High Protein</button>
     <button class="button">11,000 Steps a Day</button>
     <button class="button">9,000 Steps a Day</button>
   </div>     
</template>
<style scoped>
  .form-down{
      margin-top: 5px;
  }
</style>