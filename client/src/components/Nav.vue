<template>
<!-- Creating Navigation Bar for the module-->
  <div >
      <footer class="footer is-small" id="footer">  
        <div class="tabs is-fullwidth is-boxed">
          <ul>
            <li  v-on:click="onClick">
                <router-link to="/Today">|
                   <span class="icon is-small"><i class="fas fa-tasks" aria-hidden="true"></i></span>
                   <h1 class="title is-5"><span>TODAY</span></h1>
                </router-link>      
            </li>
            <li v-on:click="onClick">
               <router-link to="/Plans">
                  <span class="icon is-small"><i class="fas fa-h-square" aria-hidden="true"></i></span>
                  <h1 class="title is-5"><span>PLANS</span></h1>
              </router-link>
           </li>
           <li v-on:click="onClick">
              <a>
                <span class="icon is-small"><i class="far fa-spinner" aria-hidden="true"></i></span>
                <h1 class="title is-5"><span>PROGRESS</span></h1>
              </a>
            </li>
            <li v-on:click="onClick">
              <a>
                <span class="icon is-small"><i class="far fa-user" aria-hidden="true"></i></span>
                <h1 class="title is-5"><span>Account</span></h1>
             </a>
           </li>
        </ul>
     </div>
    </footer> 
  </div>
</template>

<script>
// Defining Onclick event for the tabs
export default {
  methods: {
    onClick: function (e) {
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
<style scoped>
#footer {
    position: fixed;
    height: 10px;
    background-color:lightgray;
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
}
</style>