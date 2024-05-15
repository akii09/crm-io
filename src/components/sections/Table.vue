<template>
    <div class="table-container">
        <table class="ci-table">
        <thead>
            <tr>
            <th>Name</th>
            <th>File</th>
            <th>Category</th>
            <th>Author</th>
            <th>Status</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in tableData" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.file }}</td>
            <td>{{ item.category }}</td>
            <td>{{ item.author }}</td>
            <td style="width: 185px;">
                <span class="ci-status" :class="pickStatusClass(item.status)">{{ item.status }}</span>
            </td>
            </tr>
        </tbody>
        </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tableData: [
          { name: "Annual Report", file: "PDF", category: "Property", author: "Diana Matthews", status: "Send" },
          { name: "Business Plan", file: "WORD", category: "Cryptocurrency", author: "Philip James", status: "Send" },
          { name: "Marketing Tool", file: "PDF", category: "Content Creator", author: "Amanda Ross", status: "Pending" },
        ],
      };
    },
    methods: {
      pickStatusClass(status) {
        return {
          "success": status === "Send",
          "warning": status === "Pending",
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .ci-table {
    border-collapse: collapse;
    width: 100%;
  }
  
  .ci-table th,
  td { 
    padding: 15px;
    text-align: left;
    min-width: 150px;
  }
  .table-container {
  overflow-x: auto; /* Enable horizontal scrolling */
}
  .ci-table thead th {
    
  }
  </style>
  