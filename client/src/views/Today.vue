<template>
    <div class="card">
       <article class="message is-info">
           <div class="message-body">
               Below are the Today's workouts suggested by GYM instructors
           </div>
       </article>
       <p></p>
       <div class="card-content">
          <div class="media">
             <div class="media-left">
               <figure class="image is-64x64">
                    <img src="https://th.bing.com/th/id/OIP.cMlHAfu7UUNVLto6BUmR-QHaKs?w=137&h=189&c=7&o=5&dpr=2&pid=1.7" alt="Placeholder image">
               </figure>
             </div>
             <div id="databinding" class="media-content">
                <a v-on:click="speed">SPEED RUN IN PLACE</a>  
             </div>
          </div>
          <div class="media">
             <div class="media-left">
               <figure class="image is-64x64">
                    <img src="https://th.bing.com/th/id/OIP.8r6_NWIjaLBGhw2beYR1MwHaJQ?w=144&h=180&c=7&o=5&dpr=2&pid=1.7" alt="Placeholder image">
               </figure>
             </div>
             <div class="media-content">
                <a>LATERAL PUNCHES</a>
             </div>
          </div>
          <div class="media">
             <div class="media-left">
               <figure class="image is-96x96">
                    <img src="https://th.bing.com/th/id/OIP.UZcqHiOE7VdapGK5slw49gHaEo?w=279&h=174&c=7&o=5&dpr=2&pid=1.7" alt="Placeholder image">
               </figure>
             </div>
             <div class="media-content">
                <a>HIP THRUSTS</a>
             </div>
          </div>
          <div class="media">
             <div class="media-left">
               <figure class="image is-96x96">
                    <img src="https://th.bing.com/th/id/OIP.aRaIshkK__TVAXXhEOVE0wHaFx?w=237&h=180&c=7&o=5&dpr=2&pid=1.7" alt="Placeholder image">
               </figure>
             </div>
             <div class="media-content">
                <a>PLANK</a>
             </div>
          </div>
       </div>
   </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'Today',
  methods: {
    speed: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello');
      // `event` is the native DOM event
    }
  }
}

</script>

