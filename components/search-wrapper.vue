<script lang="ts" setup>

import {useUsers} from "~/stores/users";
import {storeToRefs} from "pinia";
import UserMore from "~/components/user-more.vue";

let searchInput = ref(null)
let selectedUser = ref(null)
const store = useUsers();
store.fetchUsers();
const {users} = storeToRefs(store);

const searchResult = computed(() => {
  if (searchInput.value) {
    if (searchInput.value.includes(',')) {
      let result = [];
      let q = searchInput.value.split(',');
      q = q.filter((e) => e != '')
      q.forEach((searchQ) => {
        result.push(users.value.filter((element) => element.username.includes(searchQ) || element.name.includes(searchQ) || element.id == searchQ)[0])
      })
      return result
    } else {
      return users.value.filter((element) => element.username.includes(searchInput.value) || element.name.includes(searchInput.value) || element.id == searchInput.value)
    }
  } else {
    return []
  }
})

function selectUser(user) {
  selectedUser.value = user.id
}

watch(searchInput, async (newQuestion, oldQuestion) => {
  if (!newQuestion) {
    selectedUser.value = null
  }
})
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

        <div class="users-wrapper">
          <div class="users">
            <user v-for="user in searchResult" :key="user?.id" :class="{active: user.id==selectedUser}"
                  :email="user.email"
                  :name="user.username"
                  @click="selectUser(user)"/>
          </div>
        </div>
      </div>

    </div>
    <div class="col result">
      <p v-show="!selectedUser" class="select">Выберите сотрудника, чтобы посмотреть его профиль</p>
      <user-more v-show="selectedUser" :user-id="selectedUser"/>
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
  width: 290px;
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

.users {
  display: flex;
  flex-direction: column;
  gap: 18px;
  width: 100%;

}

.users-wrapper {
  height: 100%;
  flex: 1;
  padding-top: 18px;
}

.result-block {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}

.select {
  margin: auto;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
  color: #76787D;
}
</style>