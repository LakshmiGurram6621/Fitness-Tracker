<template>
    <h1>this is workout history page</h1>
</template>
<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
                id: "",

                }
            },    
    mounted() {
                axios({ method: "GET", "url": "https://localhost:42/api/getdata" }).then(result => {
                    console.log(result.data[0].LoginId);
                    this.id = result.data[0].LoginId;
                }, error => {
                    console.error(error);
                });
            },
}        
</script>