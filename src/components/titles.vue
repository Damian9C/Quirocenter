<template>
  <div>
    <br/>
    <h1 class="customers--tittle">
      {{ principalTitle }}
    </h1>
    <br/>
  </div>
</template>

<script>
export default {
  name: "titles",
  props:[ 'principalTitle' ]
}
</script>

<style scoped>

.customers--tittle{
  width: 100%;
  text-align: center;
  align-items: center;
  font-size: 2.5rem;
}

</style>