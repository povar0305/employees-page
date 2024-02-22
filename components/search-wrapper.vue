<script lang="ts" setup>

import {useUsers} from "~/stores/users";
import {storeToRefs} from "pinia";

let searchInput = ref(null)
const store = useUsers();
store.fetchUsers();
const {users} = storeToRefs(store);

function searchResult() {
  console.log(searchInput.value)
  if (!searchInput.value) {
    return users
  } else {
    return []
  }
}
</script>

<template>
  <div class="search-wrapper">
    <div class=" search">
      <p class="search-label">
        Поиск сотрудников
      </p>
      <input v-model.trim="searchInput" :placeholder="!searchInput?'Введите Id или имя ':''" class="search-input">
      <div class="result-block">
        <p class="search-result">Результаты</p>
        <p v-show="!searchInput" class="text">начните поиск </p>
        <p v-show="searchResult.length==0&&searchInput" class="text">ничего не найдено </p>
      </div>

    </div>
    <div class="col result">
      <p class="select">Выберите сотрудника, чтобы посмотреть его профиль</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
p {
  margin: 0;
}

.search-wrapper {
  display: flex;
  box-shadow: 0 0 10px 0 #0000001A;
  border-radius: 10px;
  isolation: isolate;
  overflow: hidden;
  flex: 1;
}

.search {
  background: #FDFDFD;
  display: flex;
  flex-direction: column;
  gap: 22px;
  padding: 27px 23px;
}

.search-label,
.search-result {
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;
}

.search-input {
  padding: 14.5px 16px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #76787D;
  border: 1.5px solid #E9ECEF;
  border-radius: 8px;

}

.text {
  color: #76787D;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  letter-spacing: 0px;
  text-align: left;
  margin-top: 10px;

}

.result {
  border-left: 1px solid #DEDEDD;
  background: #FFFFFF;
  display: flex;
  flex: 1;
}
</style>