<template>
  <div class="test">
    <div class="test-title">
      <h2>Testi 1</h2>
      <hr />
    </div>
    <div class="test-body">
      <div class="text-center mt-3">
        <div
          class="timer"
          v-if="
            (minutes || seconds) &&
            correctAnswers.length === 0 &&
            correctAnswers !== 0
          "
        >
          {{ `${minutes}:${seconds}` }}
        </div>
        <div class="timer" v-else-if="minutes === 0 && seconds === 0">
          EXPIRED
        </div>
      </div>
      <div>
        <ul>
          <li>Lloji i testit teorik: Kategoria Bazë</li>
          <li>Koha: 40 minuta</li>
          <li>Pyetje ne total: 40</li>
          <li>Gabime te lejuara: 4</li>
        </ul>
      </div>
      <div class="button mt-3">
        <router-link to="/test/"
          ><i class="fas fa-folder"></i> Lista e testeve</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["minutes", "seconds", "correctAnswers"],
};
</script>

<style scoped>
.test {
  height: 100%;
  position: relative;
  padding: 12px 20px 15px;
  background-color: #fff;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
  border: 0;
  margin-top: 0px;
  margin-bottom: 25px;
  border-radius: 2px;
}

.test .test-title {
  padding: 0;
  min-height: 48px;
  color: #355dae;
  border: 0;
  margin-bottom: 0;
  border-radius: 2px 2px 0 0;
  text-align: center;
}

.test .test-title > h2 {
  font-size: 27px;
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 1.1;
  font-weight: 300;
}

hr {
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #eee;
  border-bottom: 0;
  box-sizing: content-box;
}

.test .test-body {
  padding-top: 5px;
  border: 0;
  border-radius: 0 0 2px 2px;
}

.test-body .timer {
  font: bold 21px Arial;
  text-align: center;
  color: rgb(230, 79, 0);
}

.test-body ul {
  margin-top: 0;
  margin-bottom: 10px;
}

.test-body .button {
  display: table;
  table-layout: fixed;
  border-collapse: separate;
  vertical-align: middle;
}

.test-body .button a {
  margin-left: 0;
  margin-bottom: 0;
  background-color: #355dae;
  color: #fff;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 1px 2px rgb(0 0 0 / 18%);
  display: table-cell;
  float: none;
  width: 1%;
  position: relative;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  border-width: 0!;
  overflow: hidden;
  padding: 9px 14px 8px;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  user-select: none;
  border-collapse: separate;
}

.test-body .button a:hover {
  color: #fff;
  background-color: #1f897f;
  z-index: 2;
  outline: 0;
  box-shadow: 0 3px 6px rgb(0 0 0 / 20%), 0 3px 6px rgb(0 0 0 / 26%);
  text-decoration: none;
  cursor: pointer;
}

.test-body .button a:focus {
  color: #fff;
  background-color: #1f897f;
  z-index: 2;
  text-decoration: none;
  outline-offset: -2px;
}

.button a i {
  display: inline-block;
  font-size: 14px;
  line-height: 14px;
  margin-top: 0;
  margin-left: 3px;
  margin-right: 3px;
}

@media screen and (min-width: 992px) {
  .test-body .button {
    position: absolute;
    bottom: 15px;
    width: calc(100% - 40px);
  }
}
</style>
