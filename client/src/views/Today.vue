<template>
  <div class="today form-down">
    <div class="columns">
        <div class="column hero is-success is-full is-large has-text-centered">
             <router-link to="/Today/Startworkout"><a><h3 class="title is-3">Start Workout</h3></a></router-link>
        </div>
    </div>
    <div class="columns"> 
        <div class="column hero is-primary is-bold has-text-centered">
            <router-link to="/Plans/Createworkout"><h3 class="title is-3">Create Workout</h3></router-link>
        </div>
        <div class="column hero is-info is-bold has-text-centered">
            <router-link to="/Plans/Workouthistory"><h3 class="title is-3">Workout History</h3></router-link>
        </div>
    </div>
  </div> 
</template>
<style scoped>
  .form-down{
      margin-top: 10px;
  }
</style>
