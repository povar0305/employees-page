<script lang="ts" setup>
import {useUsers} from "~/stores/users";
import {storeToRefs} from "pinia";

interface Props {
  modelValue: number
}

const store = useUsers();
store.fetchUsers();
const {users} = storeToRefs(store);


const props = defineProps<Props>()
const user = computed(() => users.value.filter((user) => user.id == props.modelValue)[0])
</script>

<template>
  <div v-if="modelValue!=null" class="user">
    <img alt="user-image" src="../public/user.png"/>
    <div class="col">
      <p class="title">{{ user.name }}</p>
      <p v-show="user.email" class="data">email:<span>{{ user.email }}</span></p>
      <p v-show="user.phone" class="data">phone:<span>{{ user.phone }}</span></p>
      <div class="title about">О себе:</div>
      <p class="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi assumenda consectetur
        consequuntur, cum dignissimos, doloremque doloribus error excepturi expedita in mollitia praesentium quia quis
        recusandae sequi, sint ut. Est, saepe.Ipsum nobis nulla reprehenderit sint? Aliquid amet blanditiis, ea ipsum
        libero magni maiores natus nostrum quas repellat temporibus ullam! Asperiores distinctio error fugiat fugit
        necessitatibus obcaecati quisquam recusandae sapiente. Blanditiis!Accusamus doloremque earum eum hic in
        inventore iure labore laborum libero necessitatibus non officiis optio placeat, praesentium provident quae quia
        quo ratione similique unde veniam veritatis voluptatem voluptatibus. Illo, nostrum?
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  margin: 0;
}

.user {
  padding: 30px 21px;
  width: 100%;
  display: flex;
  align-items: start;
  gap: 60px;

  img {
    max-width: 424px;
    width: 100%;
    flex: 1;
    display: flex;
  }
}

.col {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.data {
  font-size: 14px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #333333;


  span {
    font-weight: 400;
    margin-left: 8px;
  }
}

.title {
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
}

.about {
  margin-top: 10px;
  margin-bottom: 15px;
}

.text {
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #76787D;

}
</style>