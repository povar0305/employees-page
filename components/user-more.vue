<script lang="ts" setup>
interface Props {
  user: {}
}

const props = defineProps<Props>()
</script>

<template>
  <div class="user">
    {{ user }}
  </div>
</template>

<style lang="scss" scoped>

</style>