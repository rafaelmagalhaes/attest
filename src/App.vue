<template>
    <div id="app">
        <Main/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Main from './components/Main.vue'

    export default Vue.extend({
        name: 'app',
        components: {
            Main
        }
    });
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');

    body {
        font-family: 'Roboto', sans-serif;
        background: #163d69;
    }

    #app {
        display: flex;
        justify-content: space-around;
        padding: 5rem;
    }

</style>
