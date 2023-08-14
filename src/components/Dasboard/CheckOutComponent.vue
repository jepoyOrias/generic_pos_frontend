<template>
  <div class="py-2 pe-5">
    <div class="">
      <div class="d-flex flex-column align-items-stretch flex-shrink-0 right-side-content" style="width: 380px;">
    <a href="/" class="d-flex align-items-center flex-shrink-0 p-3 link-body-emphasis text-decoration-none border-bottom">
      <span class="fs-5 fw-semibold cart">Current Order</span>
    </a>
    <div class="list-group list-group-flush border-bottom scrollable-div">
    <div
      v-for="index in 10"
      :key="index"
      class="p-3 my-1"
    >
    <div class="row">
      <div class="col-4"><img alt="Product Picture"></div>
      <div class="col-8">
        <div class="fw-bold">Order {{ index }}</div>
        <div class="d-flex w-100 align-items-center justify-content-between mt-2">
          <div>Php{{ index }}0</div>
          <div><i class="plus-square-fill"></i><span>1</span><i class="file-minus-fill"></i></div>
        </div>
      </div>
      </div>
    </div>
  </div>
    <div class="right-side-content">
      <div class="p-3 d-flex flex-column">
        <div class="row">
          <div class="col-5">Subtotal:</div>
          <div class="col-3">Php {{ total }}</div>
        </div>
        <div class="row">
          <div class="col-5">Discount Sales:</div>
          <div class="col-3">Php 0</div>
        </div>
        <div class="row">
          <div class="col-5">Total Sales Tax:</div>
          <div class="col-3">Php {{ total }}</div>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script setup>
let total = 0;
for (let index = 1; index <= 10; index++) {
  total += index * 10;
}
</script>

<style>
.scrollable-div {
    height: 300px;
    overflow-y: auto; /* This will add a vertical scrollbar when content exceeds the height */
}
</style>