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

    :root {
        --blue-attest: #163d69;
        --dark-blue:#18283a;
        --light-grey-attest:#dbe2e8;
        --light-blue:#e5ecf2;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background: var(--blue-attest);
    }
</style>
