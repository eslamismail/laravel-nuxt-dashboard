<template>
  <div class="main-panel">
    <div class="content">
      <div class="page-inner">
        <div class="page-header">
          <h4 class="page-title">Starter Template</h4>
        </div>
        <div class="page-category">Setting Description</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "app",
  head: {
    title: "Admin Setting"
  },
  beforeRouteLeave(to, from, next) {
    next();
  }
};
</script>

<style>
</style>
