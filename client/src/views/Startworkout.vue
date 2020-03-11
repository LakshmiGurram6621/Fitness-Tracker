<template>
<div>
   <h2>this is start workout page</h2>
   <p>time is {{time}} fghh</p>
</div>  
</template>
<script>
    import addworkoutpage from "/Users/lakshmi/Desktop/Web practice/Fitness Tracker/client/src/views/Addworkout.vue"
    export default{
        components: {
                addworkoutpage
        },
        data() {
           return {
               time:this.time
       }
     }
   
 }
</script>