<template>
   <div> 
     <nav class="level">
       <div class="level-left">
          <p class="level-item title is-2 has-text-centered">
              <a class="link is-info">My Fitness Tracker</a>
          </p>
        </div>  
        <div class="level-right ">
           <p class="level-item">
              <a class="link is-info">Sign Up</a>
           </p>
           <p class="level-item ">
             <a class="link is-info">Log In</a>
          </p>
        </div>  
    </nav>
  </div>
</template>  
//Exporting the page so that other vue modules can access it
<script>
// @ is an alias
export default {
  name: 'Home' 
}
</script>
