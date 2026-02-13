export type Option = {
  id: string;
  text?: string;
  image?: string; // URL for option image
};

export type Question = {
  id: number;
  text: string;
  image?: string; // URL for question image
  type: 'single' | 'multiple';
  options: Option[];
};

export const questions: Question[] = [
  {
    id: 1,
    text: "Which programming language is this logo associated with?",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
    type: 'single',
    options: [
      { id: 'a', text: "Java" },
      { id: 'b', text: "TypeScript" },
      { id: 'c', text: "Python" },
      { id: 'd', text: "C++" },
    ],
  },
  {
    id: 2,
    text: "Select all fruits that are typically red.",
    type: 'multiple', // Multi-select
    options: [
      { id: 'a', text: "Apple" },
      { id: 'b', text: "Banana" },
      { id: 'c', text: "Cherry" },
      { id: 'd', text: "Strawberry" },
    ],
  },
  {
    id: 3,
    text: "Identify the correct traffic sign for 'Stop'.",
    type: 'single',
    options: [
      { id: 'a', image: "https://placehold.co/150x150/png?text=STOP", text: "Option A" },
      { id: 'b', image: "https://placehold.co/150x150/png?text=GO", text: "Option B" },
      { id: 'c', image: "https://placehold.co/150x150/png?text=YIELD", text: "Option C" },
      { id: 'd', image: "https://placehold.co/150x150/png?text=SLOW", text: "Option D" },
    ],
  },
  {
    id: 4,
    text: "What is the capital of France?",
    type: 'single',
    options: [
      { id: 'a', text: "London" },
      { id: 'b', text: "Berlin" },
      { id: 'c', text: "Paris" },
      { id: 'd', text: "Madrid" },
    ],
  },
  {
    id: 5,
    text: "Select all the animals that can fly.",
    type: 'multiple',
    options: [
      { id: 'a', text: "Eagle" },
      { id: 'b', text: "Penguin" },
      { id: 'c', text: "Bat" },
      { id: 'd', text: "Elephant" },
    ],
  },
  {
    id: 6,
    text: "Which shape has 4 equal sides?",
    image: "https://placehold.co/600x200/png?text=Geometry+Shapes",
    type: 'single',
    options: [
      { id: 'a', text: "Triangle" },
      { id: 'b', text: "Square" },
      { id: 'c', text: "Rectangle" },
      { id: 'd', text: "Circle" },
    ],
  },
  {
    id: 7,
    text: "Which of these is a frontend framework?",
    type: 'single',
    options: [
      { id: 'a', text: "Django" },
      { id: 'b', text: "Laravel" },
      { id: 'c', text: "React" },
      { id: 'd', text: "Spring Boot" },
    ],
  },
  {
    id: 8,
    text: "Select all prime numbers.",
    type: 'multiple',
    options: [
      { id: 'a', text: "2" },
      { id: 'b', text: "4" },
      { id: 'c', text: "11" },
      { id: 'd', text: "9" },
    ],
  },
  {
    id: 9,
    text: "Identify this historical landmark.",
    image: "https://placehold.co/600x300/png?text=Landmark",
    type: 'single',
    options: [
      { id: 'a', text: "Eiffel Tower" },
      { id: 'b', text: "Statue of Liberty" },
      { id: 'c', text: "Great Wall of China" },
      { id: 'd', text: "Taj Mahal" },
    ],
  },
  {
    id: 10,
    text: "What implies 'Success' in this color code?",
    type: 'single',
    options: [
      { id: 'a', image: "https://placehold.co/100/red/white?text=Red", text: "Error" },
      { id: 'b', image: "https://placehold.co/100/green/white?text=Green", text: "Success" },
      { id: 'c', image: "https://placehold.co/100/yellow/black?text=Yellow", text: "Warning" },
      { id: 'd', image: "https://placehold.co/100/blue/white?text=Blue", text: "Info" },
    ],
  },
];