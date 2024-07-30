<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const name = ref('');
const surname = ref('');
const phone = ref('');
const age = ref('');
const records = ref([]);

const addRecord = async () => {
    try {
        const response = await axios.post('http://localhost:3001/api/addMembers', {
            name: name.value,
            surname: surname.value,
            phone: phone.value,
            age: age.value
        });
        records.value.push(response.data);
        name.value = '';
        value.value = '';
    } catch (error) {
        console.error('Błąd podczas dodawania danych:', error);
    }
};
</script>

<template>
    <div>
        <h1>Dodaj Rekord</h1>
        <form @submit.prevent="addRecord">
            <label for="name">Name:</label>
            <input v-model="name" id="name" type="text" required />

            <label for="value">Value:</label>
            <input v-model="value" id="value" type="text" required />

            <button type="submit">Dodaj Rekord</button>
        </form>
    </div>
</template>

<style>
/* Dodaj własne style tutaj */
</style>    