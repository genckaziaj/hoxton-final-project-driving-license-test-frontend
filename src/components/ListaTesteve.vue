<template>
  <div class="main" v-if="tests.length > 0">
    <div class="container-md px-xl-0 px-lg-3 px-md-0 px-4">
      <div class="tests">
        <div class="tests-title">
          <h2>Lista e testeve</h2>
          <hr />
        </div>
        <div class="tests-body">
          <div class="row gx-5">
            <div
              class="col-xl-3 col-lg-4 col-6"
              v-for="(test, index) in tests"
              :key="test.id"
            >
              <router-link :to="`/test/${test.id}`" @click="removeLocalItems">
                <div class="tests-container">
                  <a>
                    <h5>Testi {{ test.id }}</h5>
                  </a>
                  <p
                    class="text-right"
                    v-if="testPercantages[`percantage${index + 1}`]"
                  >
                    {{ testPercantages[`percantage${index + 1}`] }}%
                  </p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tests: [],
      idTests: {},
      testPercantages: {},
    };
  },
  methods: {
    removeLocalItems() {
      let keysToRemove = ["choosenAnswer", "correctAnswers", "time"];
      keysToRemove.forEach((k) => localStorage.removeItem(k));
    },
  },
  created() {
    fetch("http://localhost:2222/tests")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        this.tests = data;

        const testPercantages = {};
        for (let i in data) {
          if (localStorage.getItem(`percantage${data[i]["id"]}`)) {
            const testPercantage = localStorage.getItem(
              `percantage${data[i]["id"]}`
            );
            testPercantages[`percantage${data[i]["id"]}`] = testPercantage;
          }
        }

        this.testPercantages = testPercantages;

        console.log(this.testPercantages);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.main {
  padding-bottom: 50px;
}

.tests {
  height: 100%;
  position: relative;
  padding: 12px 20px 15px;
  background-color: #fff;
  box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.1);
  margin-top: 0;
  margin-bottom: 25px;
  border-radius: 2px;
  border: 0;
}

.tests > .tests-title {
  padding: 0;
  min-height: 48px;
  color: #355dae;
  border: 0;
  margin-bottom: 0;
  border-radius: 2px 2px 0 0;
  text-align: center;
}

h2 {
  font-weight: 700;
  font-size: 27px;
  line-height: 1.1;
  margin-top: 20px;
  margin-bottom: 10px;
}

hr {
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #eee;
  border-bottom: 0;
  box-sizing: content-box;
}

.tests .tests-body {
  padding-top: 5px;
  border: 0;
  border-radius: 0 0 2px 2px;
}

.col-6 {
  position: relative;
}

.tests-container {
  padding: 10px;
  border: 1px solid #e7eff7;
  margin-bottom: 15px;
  border-radius: 10px;
  text-align: center;
  background-color: #e7eff7;
  cursor: pointer;
}

.tests-container a {
  color: #444;
}

.tests-container a:hover {
  color: #1e1e1e;
  cursor: pointer;
  text-decoration: underline;
}

.tests-container a:focus {
  color: #23527c;
  text-decoration: underline;
}

.tests-container a h5 {
  font-weight: 700;
  font-size: 13px;
  margin-top: 10px;
  margin-bottom: 10px;
  line-height: 1.1;
  color: inherit;
}

.tests-container p {
  position: absolute;
  right: 10px;
  top: 0px;
  background: #355dae;
  padding: 5px;
  border-radius: 50%;
  color: white;
}
</style>
