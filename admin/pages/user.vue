<template>
  <div class="main-panel">
    <div class="content">
      <div class="page-inner">
        <DataTable
          @addRow="addUser()"
          tableTitle="Users"
          btnText="Add User"
          :columns="columns"
          :data="data"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from "../components/datatable";
export default {
  layout: "app",
  head: {
    title: "Dashboard Users",
  },
  components: { DataTable },
  created() {
    // setTimeout(() => {
    this.getUsers();
    // }, 3000);
  },
  methods: {
    addUser: function (e) {
      // console.log("event working");
      let lastID = this.data.length;
      this.data.push({
        id: (lastID + 1).toString(),
        name: "test",
        email: "test@test",
        created_at: moment().format("llll"),
        updated_at: moment().format("llll"),
      });
    },
    getUsers: function () {
      axios
        .get("/users")
        .then((response) => {
          this.data = response.data.users;
          this.data.forEach((item) => {
            item.id = item.id.toString();
            item.created_at = moment(item.created_at).format("llll");
            item.updated_at = moment(item.updated_at).format("llll");
          });
        })
        .catch((error) => {});
    },
  },
  data() {
    return {
      data: [],
      columns: ["id", "name", "email", "created_at"],
    };
  },
};
</script>

<style>
</style>
