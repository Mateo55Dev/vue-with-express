<script setup>
import DisplayMembers from './components/DisplayMembers.vue';
import AddMembers from './components/AddMembers.vue';
</script>

<template>
    <div class="container">
        <div class="display">
            <DisplayMembers />
            <!-- DisplayCOS -->
        </div>
        <div class="add">
            <AddMembers />
        </div>
    </div>

</template>

<style>
.container {
    display: flex;
    gap: 5rem;
}
</style>