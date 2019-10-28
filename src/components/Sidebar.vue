<template>
    <a @click="selectDepartment" class="sidebar__component__button"
       :class="{'active': selectedDepartment === departmentName}">{{departmentName}}
    </a>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'Sidebar',
        props: {
            departmentName: String,
            departmentResponses: Array,
            selectedDepartment: String
        },
        methods: {
            selectDepartment() {
                this.$emit('selectDepartment')
            }
        }
    });
</script>

<style>
    .sidebar__component__button {
        font-size: 16px;
        font-weight: bold;
        line-height: 48px;
        padding: 8px;
        height: 48px;
        min-width: 64px;
        cursor: pointer;
        color: #ffff;
        display: block;
    }

    .sidebar__component__button.active {
        background-color: #18283a;
    }

    .sidebar__component__button:hover {
        background-color: #18283a;
        color: #778faa;
    }
</style>
