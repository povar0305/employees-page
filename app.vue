<template>
  <div class="wrapper">
    <div class="row-info">
      <h1 class="title">Жилфонд</h1>
      <p>Пользователь</p>
    </div>
    <search-wrapper/>
  </div>
</template>


<style lang="scss">
.wrapper {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 26px;
}

body {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;

}

.row-info {
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    color: #333333;
  }

  .title {
    color: #E31F24;
    margin: 0;
    font-weight: 700;
    font-size: 32px;
  }
}


</style>
