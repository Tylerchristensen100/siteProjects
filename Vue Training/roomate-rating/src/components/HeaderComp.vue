<template>
    <div class="container">
        <h1>{{ title }}</h1>
        <div class="row mt-4">
            <div class="col-sm-3"></div>
            <div class="col-sm-6 d-flex flex-row justify-content-center">
                <i class="fa-solid fa-star fa-2xl p-2"></i>
                <i class="fa-solid fa-star fa-2xl p-2"></i>
                <i class="fa-solid fa-star fa-2xl p-2"></i>
                <i class="fa-solid fa-star fa-2xl p-2"></i>
                <i class="fa-solid fa-star fa-2xl p-2"></i>
            </div>
            <div class="col-sm-3"></div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  components: {
  }
}
</script>
