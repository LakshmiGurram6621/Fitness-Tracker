<template>
  <div >
      <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
      <section class="hero is-primary is-fullwidth is-small">
           <div class="hero-body">
               <div class="container ">
                  <h1 class="title is-1">
                     FITNESS TRACKER
                  </h1>
              </div>
          </div>
     </section>
     <div>
         <figure style="text-align:center;">
             <img src="https://th.bing.com/th/id/OIP.MvmBV9GXM-lCbrsgIgoK4QHaK8?w=138&h=192&c=7&o=5&dpr=2&pid=1.7" style="width:500px;height:400px;">
         </figure>
    </div>
    <footer class="footer ">
        <div class="tabs is-medium is-fullwidth is-boxed">
          <ul>
            <li class="is-active">
              <a>
                <span class="icon is-small"><i class="fas fa-tasks" aria-hidden="true"></i></span>
                <span>TODAY</span>
             </a>
           </li>
           <li >
              <a>
                <span class="icon is-small"><i class="fas fa-h-square" aria-hidden="true"></i></span>
                <span>WORKOUTS</span>
             </a>
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

<style lang="scss">
     @import "~bulma/css/bulma.css"
</style>


// <script>
// // @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

// export default {
//   name: 'Home',
//   components: {
//     HelloWorld
//   }
// }
// </script>
