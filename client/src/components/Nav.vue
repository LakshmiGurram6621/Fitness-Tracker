<template>
  <div >
      <link rel="stylesheet" 
        href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" 
        integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" 
        crossorigin="anonymous">
      <footer class="footer is-small">  
        <div class="tabs is-fullwidth is-boxed">
          <ul>
            <li class="is-active">
                <router-link to="/Today">|
                   <span class="icon is-small"><i class="fas fa-tasks" aria-hidden="true"></i></span>
                    <span>TODAY</span>
                </router-link>      
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
