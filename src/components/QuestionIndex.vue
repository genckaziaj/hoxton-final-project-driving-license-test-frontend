<template>
  <div class="main" v-if="questions.length > 0">
    <div
      class="container-md px-md-0 px-4"
      v-if="
        correctAnswers === 0 ||
        (correctAnswers.length > 0 && correctAnswers.length < 36)
      "
    >
      <div class="row">
        <div class="col-12">
          <div class="alert-red">Ju nuk e kaloni testin</div>
        </div>
      </div>
    </div>
    <div
      class="container-md px-md-0 px-4"
      v-else-if="correctAnswers.length >= 36"
    >
      <div class="row">
        <div class="col-12">
          <div class="alert-green">Ju e kaluat testin</div>
        </div>
      </div>
    </div>
    <div class="container-md px-md-0 px-4">
      <div class="row gx-5">
        <div class="col-lg-3 col-12 d-flex flex-column">
          <test-info
            :minutes="minutes"
            :seconds="seconds"
            :correct-answers="correctAnswers"
          ></test-info>
        </div>
        <div class="col-lg-9 col-12 d-flex flex-column">
          <div class="test">
            <div class="numbers-holder">
              <ul>
                <li v-for="(question, index) in questions" :key="question.id">
                  <span
                    @click="loadQuestion(question, index)"
                    :class="{
                      active: index === selectedQuestion,
                      complete:
                        (index !== selectedQuestion && choosenAnswer[index]) ||
                        (correctAnswers.length > 0 &&
                          questions[index].answer == choosenAnswer[index]) ||
                        (minutes === 0 &&
                          seconds === 0 &&
                          questions[index].answer == choosenAnswer[index]),
                      error:
                        ((correctAnswers.length > 0 || correctAnswers === 0) &&
                          questions[index].answer != choosenAnswer[index]) ||
                        (minutes === 0 &&
                          seconds === 0 &&
                          questions[index].answer != choosenAnswer[index]),
                    }"
                    ><div class="d-lg-block d-none">{{ index + 1 }}</div></span
                  >
                </li>
              </ul>
            </div>
            <hr />
            <form @submit.prevent="submitAnswer">
              <div class="question-holder">
                <div class="row gx-5">
                  <div class="col-lg-4 col-12 text-center mb-4">
                    <img
                      v-if="questions.length > 0 && infoTest.image"
                      :src="infoTest.image"
                      @click="showSingle"
                    />
                    <img
                      v-else-if="questions.length > 0 && !infoTest.image"
                      :src="questions[0].image"
                      @click="showSingle"
                    />
                    <vue-easy-lightbox
                      escDisabled
                      moveDisabled
                      teleport="body"
                      :visible="visible"
                      :imgs="imgs"
                      :index="index"
                      @hide="handleHide"
                    ></vue-easy-lightbox>
                  </div>
                  <div class="col-lg-8 col-12">
                    <h4 v-if="questions.length > 0 && infoTest.question">
                      {{ infoTest.question }}
                    </h4>
                    <h4 v-else-if="questions.length > 0 && !infoTest.question">
                      {{ questions[0].question }}
                    </h4>
                    <div class="row mt-5 mb-4">
                      <div class="col-lg-5 gx-5 offset-lg-6 col-12">
                        <div
                          v-for="(question, index) in questions"
                          :key="question.id"
                        >
                          <div v-show="selectedQuestion === index">
                            <div class="form-check-inline">
                              <input
                                type="radio"
                                :name="`pyetja[${question.questionNumber}]`"
                                :id="`question_answer_${index + 1}_0`"
                                value="1"
                                v-model="choosenAnswer[index]"
                                :disabled="
                                  correctAnswers.length > 0 ||
                                  correctAnswers === 0 ||
                                  (minutes === 0 && seconds === 0)
                                "
                              />
                              <label :for="`question_answer_${index + 1}_0`"
                                ><span class="inc"></span>
                                <span class="check"></span>
                                <span class="box"></span>
                                Saktë
                              </label>
                            </div>
                            <div class="form-check-inline">
                              <input
                                type="radio"
                                :name="`pyetja[${question.questionNumber}]`"
                                :id="`question_answer_${index + 1}_1`"
                                value="0"
                                v-model="choosenAnswer[index]"
                                :disabled="
                                  correctAnswers.length > 0 ||
                                  correctAnswers === 0 ||
                                  (minutes === 0 && seconds === 0)
                                "
                              />
                              <label :for="`question_answer_${index + 1}_1`"
                                ><span class="inc"></span>
                                <span class="check"></span>
                                <span class="box"></span>
                                Gabim
                              </label>
                            </div>
                            <div
                              class="form-check-inline"
                              v-if="
                                (correctAnswers.length > 0 ||
                                  correctAnswers === 0 ||
                                  (minutes === 0 && seconds === 0)) &&
                                questions[index].answer != choosenAnswer[index]
                              "
                            >
                              <i class="fas fa-times text-danger"></i>
                            </div>
                            <div
                              class="form-check-inline"
                              v-else-if="
                                (correctAnswers.length > 0 ||
                                  (minutes === 0 && seconds === 0)) &&
                                questions[index].answer == choosenAnswer[index]
                              "
                            >
                              <i class="fas fa-check text-success"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <div class="buttons-holder">
                <div class="row">
                  <div class="col-12 d-flex justify-content-between">
                    <button
                      class="check-button"
                      v-if="
                        correctAnswers.length === 0 &&
                        correctAnswers !== 0 &&
                        (minutes !== 0 || seconds !== 0)
                      "
                    >
                      <i class="fas fa-check"></i>
                      Përfundo Testin
                    </button>
                    <div class="angles ms-auto">
                      <button type="button" @click="prevQuestion">
                        <i class="fas fa-angle-left"></i>
                      </button>
                      <button type="button" @click="nextQuestion">
                        <i class="fas fa-angle-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueEasyLightbox from "vue-easy-lightbox";
import TestInfo from "./TestInfo.vue";

export default {
  components: {
    VueEasyLightbox,
    TestInfo,
  },
  props: ["testId"],
  data() {
    return {
      // image-lightbox
      imgs: "",
      visible: false,
      index: 0,
      // end of image-lightbox
      time: 40 * 60,
      minutes: null,
      seconds: null,
      questions: [],
      infoTest: {},
      selectedQuestion: 0,
      choosenAnswer: [],
      correctAnswers: [],
      percantageCorrectAnswers: null,
    };
  },
  watch: {
    percantageCorrectAnswers(newValue) {
      localStorage.setItem(`percantage${this.testId}`, newValue);
    },
    correctAnswers: {
      handler(newValue) {
        localStorage.correctAnswers = JSON.stringify(newValue);
      },
      deep: true,
    },
    choosenAnswer: {
      handler(newValue) {
        localStorage.choosenAnswer = JSON.stringify(newValue);
      },
      deep: true,
    },
    time(newValue) {
      localStorage.time = newValue;
    },
  },
  methods: {
    //image-lightbox
    showSingle() {
      if (this.infoTest.image) {
        this.imgs = `${this.infoTest.image}`;
      } else {
        this.imgs = `${this.questions[0].image}`;
      }
      this.show();
    },
    show() {
      this.visible = true;
    },
    handleHide() {
      this.visible = false;
    },
    updateCountDown() {
      let minutes = Math.floor(this.time / 60);
      let seconds = this.time % 60;

      this.minutes = minutes;
      this.seconds = seconds;

      if (this.minutes !== 0 || this.seconds !== 0) {
        this.time--;
      } else {
        this.submitAnswer();
      }
    },
    //end of image-lightbox
    loadQuestion(infoQuestion, index) {
      this.infoTest.question = infoQuestion.question;
      this.infoTest.image = infoQuestion.image;
      this.infoTest.answer = infoQuestion.answer;
      this.selectedQuestion = index;
    },
    nextQuestion() {
      if (this.selectedQuestion < 39) {
        this.loadQuestion(
          this.questions[this.selectedQuestion + 1],
          this.selectedQuestion + 1
        );
      } else if (this.selectedQuestion === 39) {
        this.loadQuestion(this.questions[0], 0);
      }
    },
    prevQuestion() {
      if (this.selectedQuestion > 0) {
        this.loadQuestion(
          this.questions[this.selectedQuestion - 1],
          this.selectedQuestion - 1
        );
      } else if (this.selectedQuestion === 0) {
        this.loadQuestion(this.questions[39], 39);
      }
    },
    submitAnswer() {
      const correctAnswers = [];
      for (let i in this.choosenAnswer) {
        if (this.questions[i].answer == this.choosenAnswer[i]) {
          correctAnswers.push("Sakte");
        }
      }
      if (correctAnswers.length > 0) {
        this.correctAnswers = correctAnswers;
      } else {
        this.correctAnswers = 0;
      }

      const percantageCorrectAnswers = () => {
        return (correctAnswers.length / 40) * 100;
      };
      this.percantageCorrectAnswers = percantageCorrectAnswers();
    },
  },
  created() {
    fetch(`http://localhost:2222/tests/${this.testId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        const test = data.questions;

        const questions = [];
        for (let i in test) {
          questions.push({
            id: test[i].id,
            question: test[i].question,
            questionNumber: test[i].questionNumber,
            image: test[i].imagePath,
            answer: test[i].answer,
          });
        }
        this.questions = questions;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  mounted() {
    setInterval(this.updateCountDown, 1000);

    if (localStorage.correctAnswers) {
      this.correctAnswers = JSON.parse(localStorage.correctAnswers);
    }
    if (localStorage.choosenAnswer) {
      this.choosenAnswer = JSON.parse(localStorage.choosenAnswer);
    }
    if (localStorage.time) {
      this.time = localStorage.time;
    }
  },
};
</script>

<style scoped>
/* add class .active */
.main {
  padding-bottom: 50px;
}

.main .alert-red {
  background-color: #ff575c;
  color: #fff;
  border-color: #ff575c;
  border-radius: 2px;
  border-width: 0;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 1px 2px rgb(0 0 0 / 18%);
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}

.main .alert-green {
  background-color: #83d7be;
  color: #fff;
  border-color: #83d7be;
  border-radius: 2px;
  border-width: 0;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 1px 2px rgb(0 0 0 / 18%);
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
}

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

hr {
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #eee;
  border-bottom: 0;
  box-sizing: content-box;
}

.numbers-holder ul {
  padding: 10px 0;
  margin-bottom: 15px;
  background-color: #fff;
  border: 0;
  list-style: none;
  margin-top: 0;
  display: flex;
  flex-wrap: wrap;
}

.numbers-holder ul li {
  position: relative;
  display: block;
  margin-left: 2px;
}

.numbers-holder ul li:first-child {
  margin-left: 0;
}

.numbers-holder ul li {
  background-color: #fff;
  padding: 0;
  box-shadow: none;
  margin-bottom: 10px;
  font-size: 14px;
  border-radius: 2px 2px 0 0;
  position: relative;
  display: block;
  color: #444;
}

.numbers-holder ul li span {
  font-size: 14px;
  color: #666;
  font-weight: 600;
  margin-right: 0;
  height: 38px;
  width: 38px;
  padding: 10px 10px 10px;
  background-color: #eee;
  display: inline-block;
  text-align: center;
  border-radius: 50%;
  cursor: pointer;
}

/* add class active */
.numbers-holder ul li span.active {
  background-color: #337ab7;
  color: #fff;
}

/* add class .complete */
.numbers-holder ul li span.complete {
  color: #fff;
  background-color: #26a69a;
}

/* add class error */
.numbers-holder ul li span.error {
  color: #fff;
  background-color: #ff575c;
  border-color: #ff575c;
}

hr {
  margin: 20px 0;
  border: 0;
  border-top: 1px solid #eee;
  border-bottom: 0;
  box-sizing: content-box;
}

.test .question-holder img {
  vertical-align: middle;
  border: 0;
  width: 100%;
  cursor: pointer;
}

.test .question-holder h4 {
  font-size: 17px;
  font-weight: 700;
  margin-top: 10px;
  margin-bottom: 10px;
}

.test .form-check-inline {
  position: relative;
}

.test .form-check-inline:first-child {
  margin-right: 21px;
}

.test .form-check-inline:nth-child(2) {
  margin-right: 0px;
}

.test .form-check-inline:nth-child(3) {
  position: absolute;
  right: 10px;
}

.test .form-check-inline i {
  font-size: 20px;
  font-weight: bold;
  line-height: 14px;
}

input[type="radio"] {
  visibility: hidden;
  position: absolute;
  margin: 4px 0 0;
  line-height: normal;
  padding: 0;
}

label {
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  display: inline-block;
  max-width: 100%;
  margin-bottom: 5px;
  padding-left: 30px;
}

label > span {
  display: block;
  position: absolute;
  transition-duration: 0.3s;
  left: 0;
}

@keyframes growCircle {
  0%,
  100% {
    transform: scale(0);
    opacity: 1;
  }

  70% {
    background: #eee;
    transform: scale(1.25);
  }
}

label span.inc {
  background-color: #fff;
  left: -20px;
  top: -20px;
  height: 60px;
  width: 60px;
  opacity: 0;
  border-radius: 50%;
}

label span.box {
  top: 0;
  border: 2px solid #666;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  z-index: 5;
}

label span.check {
  top: 5px;
  left: 5px;
  width: 10px;
  height: 10px;
  background-color: #26a69a;
  opacity: 0;
  z-index: 6;
  border-radius: 50%;
  transform: scale(0);
}

label span.inc {
  animation: growCircleRadio 0.3s ease;
}

input[type="radio"]:checked ~ label > .check {
  opacity: 1;
  transform: scale(1);
}

input[type="radio"]:disabled:checked ~ label > .check,
input[type="radio"]:disabled ~ label > .box,
label > .check,
input[type="radio"][disabled]:checked ~ label > .check,
input[type="radio"][disabled] ~ label > .box {
  cursor: not-allowed;
  opacity: 0.7;
  filter: alpha(opacity=70);
}

.buttons-holder button.check-button {
  background-color: #ff575c;
  color: #fff;
  border-color: #ff575c;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  border-width: 0;
  overflow: hidden;
  position: relative;
  padding: 9px 14px 8px;
  outline: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.18);
  display: inline-block;
  margin-bottom: 0;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  border: 1px solid transparent;
}

.buttons-holder button.check-button:hover {
  color: #333;
  background-color: #d3d3d3;
  box-shadow: 0 3px 6px rgb(0 0 0 / 20%), 0 3px 6px rgb(0 0 0 / 26%);
  outline: 0;
}

.buttons-holder button.check-button:focus {
  color: #333;
  background-color: #d3d3d3;
  outline-offset: -2px;
}

.buttons-holder button.check-button:active {
  background-color: #c6c6c6;
  color: #333;
  box-shadow: 0 8px 18px rgb(0 0 0 / 22%), 0 6px 6px rgb(0 0 0 / 26%);
}

.buttons-holder .angles button {
  background-color: #355dae;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  border-width: 0;
  overflow: hidden;
  position: relative;
  padding: 9px 14px 8px;
  outline: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgb(0, 0, 0, 18%);
  display: inline-block;
  margin-bottom: 0;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  user-select: none;
  background-image: none;
  border: 1px solid transparent;
}

.buttons-holder .angles button:last-child {
  margin-left: 10px;
}

.buttons-holder .angles button:hover {
  color: #fff;
  background-color: #2386ca;
  box-shadow: 0 3px 6px rgb(0 0 0 / 20%), 0 3px 6px rgb(0 0 0 / 26%);
}

.buttons-holder .angles button:focus {
  color: #fff;
  background-color: #2386ca;
  outline-offset: -2px;
}

.buttons-holder .angles button:active {
  background-color: #1f78b5;
  color: #fff;
  box-shadow: 0 8px 18px rgb(0 0 0 / 22%), 0 6px 6px rgb(0 0 0 / 26%);
}

.buttons-holder button i {
  display: inline-block;
  font-size: 14px;
  line-height: 14px;
  margin-top: 0;
  margin-left: 3px;
  margin-right: 3px;
}

@media screen and (max-width: 991px) {
  .test .form-check-inline:nth-child(3) {
    position: absolute;
    right: 100px;
  }
  .numbers-holder ul li span {
    width: 15px;
    height: 15px;
    padding: 0;
  }
}
</style>
