<template>
   <div>
     <nav class="level">
        <p class="level-item has-text-centered ">
           <span class="icon is-small"><i class="fa fa-chevron-left" aria-hidden="true"></i></span> 
           <router-link to="/Today">
               <span>Back</span>
           </router-link>    
        </p>
        <p class="level-item has-text-centered title is-4">
            Create Workout
        </p>
        <p class="level-item has-text-centered ">
           <router-link to="/Createworkout/Addworkout">
              <span class="icon is-small"><i class="fa fa-plus-circle" aria-hidden="true"></i></span>
           </router-link>   
        </p>
      </nav>
   </div>
</template>