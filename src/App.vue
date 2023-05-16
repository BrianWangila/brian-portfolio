
<script>
    import SideNav from './components/SideNav.vue';

    export default {
        name: "App",

        components: {
            SideNav,
        }

    }

</script>





<template>
    <router-view />
    <SideNav />
    
</template>




<style scoped>


</style>