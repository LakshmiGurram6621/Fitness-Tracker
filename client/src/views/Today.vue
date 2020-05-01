<template>
  <div class="today form-down">
    <div class="columns">
        <div class="column hero is-primary is-full is-medium has-text-centered">
             <router-link to="/Today/Startworkout"><a>Start Workout</a></router-link>
        </div>
    </div>
    <div class="columns"> 
        <div class="column hero is-link is-medium has-text-centered">
            <router-link to="/Plans/Createworkout">Create Workout</router-link>
        </div>
        <div class="column hero is-info is-medium has-text-centered">
            <router-link to="/Plans/Workouthistory">Workout History</router-link>
        </div>
    </div>
  </div> 
</template>
<style scoped>
  .form-down{
      margin-top: 10px;
  }
</style>