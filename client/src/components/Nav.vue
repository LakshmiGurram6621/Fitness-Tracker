<template>
  <div >
      <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
      <footer class="footer is-small">  
        <div class="tabs is-fullwidth is-boxed">
          <ul>
            <li  v-on:click="onClick">
                <router-link to="/Today">|
                   <span class="icon is-small"><i class="fas fa-tasks" aria-hidden="true"></i></span>
                    <span>TODAY</span>
                </router-link>      
            </li>
            <li v-on:click="onClick">
               <router-link to="/Workouts">
                  <span class="icon is-small"><i class="fas fa-h-square" aria-hidden="true"></i></span>
                  <span>WORKOUTS</span>
              </router-link>
           </li>
           <li v-on:click="onClick"> 
             <a>
               <span class="icon is-small"><i class="fas fa-file-alt" aria-hidden="true"></i></span>
                <span>PROGRAMS</span>
             </a>
           </li>
           <li v-on:click="onClick">
              <a>
                <span class="icon is-small"><i class="far fa-spinner" aria-hidden="true"></i></span>
                <span>PROGRESS</span>
              </a>
            </li>
            <li v-on:click="onClick">
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
    onClick: function (e) {
      // `this` inside methods points to the Vue instance
      // `event` is the native DOM event
        var tabs = document.getElementsByTagName("li");
        for (var i = 0; i < tabs.length; i++) {
              var childClass=tabs[i].childNodes[0].className;
              if(childClass=='router-link-exact-active router-link-active'){
                  if (tabs[i].className == 'is-active') {
                      tabs[i].className = '';
                  }
                  else{
                      tabs[i].className='is-active'
                  }
              }
              else{
                  tabs[i].className = '';
              }
        }
    }
  }
}
</script>