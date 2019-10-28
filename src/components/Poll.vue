<template>
    <div class="poll__container">
        <div class="poll__voted">
            <span class="poll__votes">{{votes}}%</span>
            <span class="poll__text">{{text}}</span>
        </div>
        <span class="poll__bg" :style="{width: votes + '%'}"></span>
    </div>
</template>

<script lang="ts">
     import Vue from 'vue'

    export default Vue.extend({
        name: 'Poll',
        props: {
            votes:{
                required:true,
                type:Number
            },
            text:{
                required:true,
                type:String
            },
        },
        methods: {
            selectDepartment() {
                this.$emit('selectDepartment')
            }
        }
    });
</script>
<style>
    .poll__container {
        border: 1px solid #dbe2e8;
        position: relative;
        border-radius: 2px;
    }

    .poll__voted {
        padding: 5px 0;
    }

    .poll__votes {
        font-weight: 700;
        min-width: 51px;
        display: inline-block;
        margin: 0 10px;
        float: right;
        z-index: 1;
        position: relative;
    }

    .poll__text{
        position: relative;
        z-index: 1;
        margin-left: 1rem;
    }

    .poll__bg {
        position: absolute;
        width: 0;
        top: 0;
        left: 0;
        bottom: 0;
        z-index: 0;
        background-color: #e5ecf2;

        transition: all .3s cubic-bezier(.5, 1.2, .5, 1.2);
        -webkit-transition: all .3s cubic-bezier(.5, 1.2, .5, 1.2);
        -moz-transition: all .3s cubic-bezier(.5, 1.2, .5, 1.2);
    }
</style>
