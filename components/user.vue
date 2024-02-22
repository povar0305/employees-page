<script lang="ts" setup>

interface Props {
  email: string
  name: string
}

const props = defineProps<Props>()


</script>

<template>
  <div class="user">
    <img alt="user-image" src="../public/user.png">
    <div class="info">
      <p class="name">{{ props.name }}</p>
      <p class="email">{{ props.email }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.user {
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #0000001A;
  isolation: isolate;
  overflow: hidden;
  gap: 15px;
  align-items: center;
  cursor: pointer;

  .info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 15px 0;
  }

  p {
    font-size: 14px;
    line-height: 17px;
    text-align: left;
    margin: 0;
  }

  .name {
    color: #333333;
    font-weight: 600;

  }

  .email {
    color: #76787D;
    font-weight: 400;
  }
}


</style>