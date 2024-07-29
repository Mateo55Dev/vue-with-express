<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const records = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/members');
    records.value = response.data;
  } catch (error) {
    console.error('Błąd podczas pobierania danych:', error);
  }
});
</script>


<template>
  <div>
    <h1>Lista Rekordów</h1>

    <table>
        <tr style="font-weight: bold;">
            <th>Name</th>
            <th>Surname</th>
            <th>Phone</th>
            <th>Age</th>
        </tr>
        <tr v-for="record in records" :key="record.id">
            <td>{{ record.name }}</td>
            <td>{{ record.surname }}</td>
            <td>+48 {{ record.phone }}</td>
            <td>{{ record.age }}</td>
        </tr>
    </table>
  </div>
</template>


<style>
/* Dodaj własne style tutaj */
table {
        width: 100%;
        border-collapse: collapse;
        font-family: Arial, sans-serif;
        }
        
        th {
            background-color: #4CAF50;
            border: 1px solid #ddd; 
            color: white;
            padding: 10px;
            text-align: left;
        }
        
        td {
            border: 1px solid #ddd;
            padding: 8px;
        }
</style>
