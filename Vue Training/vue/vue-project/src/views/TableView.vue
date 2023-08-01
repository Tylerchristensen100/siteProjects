<script setup>
    import { ref } from 'vue'

    const data = [{fName: 'banana', lName: 'Doe'}, {fName: 'John', lName: 'Doe'}, {fName: 'Jane', lName: 'Doe'}, {fName: 'John', lName: 'Smith'}, {fName: 'Jane', lName: 'Smith'}, {fName: 'Bob', lName: 'Smith'},{fName: 'John', lName: 'Doe'}, {fName: 'Jane', lName: 'Doe'}, {fName: 'John', lName: 'Smith'}, {fName: 'Jane', lName: 'Smith'}, {fName: 'Bob', lName: 'Smith'},{fName: 'John', lName: 'Doe'}, {fName: 'Jane', lName: 'Doe'}, {fName: 'John', lName: 'Smith'}, {fName: 'Jane', lName: 'Smith'}, {fName: 'Bob', lName: 'Smith'},{fName: 'John', lName: 'Doe'}, {fName: 'Jane', lName: 'Doe'}, {fName: 'John', lName: 'Smith'}, {fName: 'Jane', lName: 'Smith'}, {fName: 'Bob', lName: 'Smith'},{fName: 'John', lName: 'Doe'}, {fName: 'Jane', lName: 'Doe'}, {fName: 'John', lName: 'Smith'}, {fName: 'Jane', lName: 'Smith'}, {fName: 'Bob', lName: 'Smith'},{fName: 'John', lName: 'Doe'}, {fName: 'Jane', lName: 'Doe'}, {fName: 'John', lName: 'Smith'}, {fName: 'Jane', lName: 'Smith'}, {fName: 'Bob', lName: 'Smith'},{fName: 'John', lName: 'Doe'}, {fName: 'Jane', lName: 'Doe'}, {fName: 'John', lName: 'Smith'}, {fName: 'Jane', lName: 'Smith'}, {fName: 'Bob', lName: 'Smith'},{fName: 'John', lName: 'Doe'}, {fName: 'Jane', lName: 'Doe'}, {fName: 'John', lName: 'Smith'}, {fName: 'Jane', lName: 'Smith'}, {fName: 'Bob', lName: 'Smith'},{fName: 'John', lName: 'Doe'}, {fName: 'Jane', lName: 'Doe'}, {fName: 'John', lName: 'Smith'}, {fName: 'Jane', lName: 'Smith'}, {fName: 'Bob', lName: 'Smith'},{fName: 'John', lName: 'Doe'}, {fName: 'Jane', lName: 'Doe'}, {fName: 'John', lName: 'Smith'}, {fName: 'Jane', lName: 'Smith'}, {fName: 'Bob', lName: 'Smith'},{fName: 'John', lName: 'Doe'}, {fName: 'Jane', lName: 'Doe'}, {fName: 'John', lName: 'Smith'}, {fName: 'Jane', lName: 'Smith'}, {fName: 'Bob', lName: 'Smith'},{fName: 'John', lName: 'Doe'}, {fName: 'Jane', lName: 'Doe'}, {fName: 'John', lName: 'Smith'}, {fName: 'Jane', lName: 'Smith'}, {fName: 'Bob', lName: 'Smith'},{fName: 'John', lName: 'Doe'}, {fName: 'Jane', lName: 'Doe'}, {fName: 'John', lName: 'Smith'}, {fName: 'Jane', lName: 'Smith'}, {fName: 'Bob', lName: 'Smith'},{fName: 'John', lName: 'Doe'}, {fName: 'Jane', lName: 'Doe'}, {fName: 'John', lName: 'Smith'}, {fName: 'Jane', lName: 'Smith'}, {fName: 'Bob', lName: 'Smith'}]

    const input = ref('')

    const search = () => {
      return data.filter((row) => {
        if (!input.value) {
          return true
      }
      const user = row.fName + ' ' + row.lName
        return user.toLowerCase().includes(input.value.toLowerCase()) 
    })
    }
</script>



<template>
    <div class="table">
      <input type="text" v-model="input" placeholder="Search">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in search()" :key="row.fName" >
            <td>{{ row.fName }}</td>
            <td>{{ row.lName }}</td>
          </tr>
        </tbody>
        </table>
    </div>
  </template>

  