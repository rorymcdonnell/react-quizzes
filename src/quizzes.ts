export const quizzes = [
  {
    title: "Why use React?",
    pages: [
      {
        elements: [
          {
            type: "radiogroup",
            name: "question1",
            title: "Why react?",
            choices: ["is good :)", "is bad :("],
          },
          {
            type: "radiogroup",
            name: "question2",
            title: "Which language do you use with React?",
            choices: ["Python", "JavaScript"],
          },
        ],
      },
    ],
    showCompletedPage: false,
    showQuestionNumbers: "off",
  },
  {
    title: "Components",
    pages: [
      {
        elements: [
          {
            type: "radiogroup",
            name: "What is a component?",
            title: "What is a component?",
            choices: ["blah", "not blah"],
          },
          {
            type: "radiogroup",
            name: "What is a common component structure?",
            title: "What is a common component structure?",
            choices: ["like this", "like that"],
          },
        ],
      },
    ],
    showCompletedPage: false,
    showQuestionNumbers: "off",
  },
  {
    title: "State",
    pages: [
      {
        elements: [
          {
            type: "radiogroup",
            name: "What is state?",
            title: "What is state?",
            choices: ["object that does stuff", "gas, liquid, solid"],
          },
          {
            type: "radiogroup",
            name: "What good for?",
            title: "What good for?",
            choices: ["stuff", "lots"],
          },
        ],
      },
    ],
    showCompletedPage: false,
    showQuestionNumbers: "off",
  },
];