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
        <div class="card-body">
          <div class="table-responsive">
            <table id="basic-datatables" class="display table table-striped table-hover">
              <thead>
                <tr>
                  <th v-for="(item, index) in columns" :key="index">{{item.replace('_',' ')}}</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th v-for="(item, index) in columns" :key="index">{{item.replace('_',' ')}}</th>
                  <th>Action</th>
                </tr>
              </tfoot>
              <tbody>
                <tr v-for="(item, index) in data" :key="index">
                  <td v-for="(input, index) in columns" :key="index">{{item[input]}}</td>
                  <td>
                    <div class="form-button-action">
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title
                        class="btn btn-link btn-primary btn-lg"
                        data-original-title="Edit Task"
                      >
                        <i class="fa fa-edit"></i>
                      </button>
                      <button
                        type="button"
                        data-toggle="tooltip"
                        title
                        class="btn btn-link btn-danger"
                        data-original-title="Remove"
                      >
                        <i class="fa fa-times"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { DataTable } from "v-datatable-light";

export default {
  props: ["tableTitle", "btnText", "data", "columns"],
  components: {
    DataTable
  },
  head: {
    script: [
      {
        src: "/assets/js/datatables.js",
        body: true
      }
    ]
  },
  data() {
    return {
      headerFields: []
    };
  },
  methods: {
    add: function() {
      event.preventDefault();
      this.$emit("addRow");
    }
  },
  mounted() {
    this.columns.forEach(item => {
      console.log(item);
      this.headerFields.push({ name: item, label: item, sortable: true });
    });
  }
};
</script>
<style >
th {
  text-transform: capitalize;
}
</style>
