<template>
  <div >
      <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
      <footer class="footer is-small">  
        <div class="tabs is-fullwidth is-boxed">
          <ul>
            <li class="is-active" v-on:click="greet">
                <router-link to="/Today">|
                   <span class="icon is-small"><i class="fas fa-tasks" aria-hidden="true"></i></span>
                    <span>TODAY</span>
                </router-link>      
            </li>
            <li >
               <router-link to="/Workouts">
                  <span class="icon is-small"><i class="fas fa-h-square" aria-hidden="true"></i></span>
                  <span>WORKOUTS</span>
              </router-link>
           </li>
           <li>
             <a>
               <span class="icon is-small"><i class="fas fa-file-alt" aria-hidden="true"></i></span>
                <span>PROGRAMS</span>
             </a>
           </li>
           <li>
              <a>
                <span class="icon is-small"><i class="far fa-spinner" aria-hidden="true"></i></span>
                <span>PROGRESS</span>
              </a>
            </li>
            <li>
              <a>
                <span class="icon is-small"><i class="far fa-user" aria-hidden="true"></i></span>
                <span>Account</span>
             </a>
           </li>
        </ul>
     </div>
    </footer> 
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  methods: {
    greet: function (e) {
      // `this` inside methods points to the Vue instance
      var elems = document.getElementsByClassName(".router-link-exact-active router-link-active");
      alert(elems);
      // `event` is the native DOM event
    }
  }
}

</script>