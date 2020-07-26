<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <div class="d-flex align-items-center">
            <h4 class="card-title">{{tableTitle}}</h4>
            <button @click.prevent="add()" class="btn btn-primary btn-round ml-auto">
              <i class="fa fa-plus"></i>
              {{btnText}}
            </button>
          </div>
        </div>
        <div class="w-75 ml-5">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </div>
        <div class="card-body">
          <v-data-table
            :search="search"
            :headers="headers"
            :items="data"
            :items-per-page="10"
            class="table-bordered"
          ></v-data-table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["tableTitle", "data", "columns", "btnText"],
  head: {
    script: [
      {
        src: "/assets/js/datatables.js",
        body: true,
      },
    ],
  },
  data() {
    return {
      search: "",

      headers: [],
    };
  },
  methods: {
    add: function () {
      event.preventDefault();
      this.$emit("addRow");
    },
  },
  async created() {
    this.columns.forEach((item) => {
      this.headers.push({
        text: item.replace("_", " ").toUpperCase(),
        value: item,
      });
    });
  },
};
</script>
<style >
</style>
