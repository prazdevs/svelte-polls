import { writable } from 'svelte/store';

const PollStore = writable([
  {
    id: 1,
    question: "React or Vue ?",
    answerA: "React",
    answerB: "Vue",
    votesA: 4,
    votesB: 2,
  },
]);

export default PollStore;
