<script lang="ts" setup>

</script>

<template>
  <div class="search-wrapper">
    <div class=" search">
      <p class="search-label">
        Поиск сотрудников
      </p>
      <input>
      <p class="search-result">Результаты</p>
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
  padding: 27px 23px;
}

.search {
  background: #FDFDFD;
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.search-label,
.search-result {
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;
  text-align: left;

}
</style>