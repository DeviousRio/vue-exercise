<template>
  <div>
    <span>Fancy Quiz App</span>
    <span>Counter: 4/10</span>

    <div class="question-container">
      <p class="question">Some question here</p>
      <p>List of answers</p>

      <button class="submit-btn" type="submit">Submit</button>
      <button class="next-btn">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "QuizCmp",
  data() {
    return {
      questions: []
    };
  },
  mounted: function() {
    axios
      .get("https://opentdb.com/api.php?amount=10&category=27&type=multiple")
      .then(res => (this.questions = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

div span {
  flex: 0 0 100%;
  margin: 0.5em;
  padding-left: 1em;
  font-weight: bold;
}

div span:nth-child(2) {
  margin: 0;
  border-bottom: 1px dotted;
}

.question-container {
  flex: 0 0 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: lightgray;
  padding: 1em;
  border-radius: 5px;
}

.question-container p {
  flex: 0 0 95%;
  text-align: center;
  padding: 2em 1em 1em 1em;
}

.question-container .question {
  border-bottom: 1px dotted;
}

button {
  padding: 0.5em 1em;
  margin: 0.5em;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.submit-btn {
  background-color: blue;
}

.next-btn {
  background-color: green;
}
</style>

