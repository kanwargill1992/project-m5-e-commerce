import fitness from "./fitness.jpg";
import entertainment from "./entertainment.jpg";
import gaming from "./gaming.jpg";
import health from "./medical.jpg";

import pets from "./pets.jpg";
import lifestyle from "./lifestyle.jpg";
import main from "./maincategory.jpg";
import industrial from "./industrailtorch.jpg";

const categories = [
  {
    id: 1,
    title: "Fitness",
    imageSrc: fitness,
  },
  {
    id: 2,
    title: "Lifestyle",

    imageSrc: lifestyle,
  },
  {
    id: 3,
    title: "Medical",

    imageSrc: health,
  },
  {
    id: 4,

    title: "Industrial",

    imageSrc: industrial,
  },
  {
    id: 5,
    title: "Gaming",

    imageSrc: gaming,
  },
  {
    id: 6,
    size: "large",
    title: "Entertainment",

    imageSrc: entertainment,
  },
  {
    id: 7,
    size: "large",
    title: "Pets and Animals",

    imageSrc: pets,
  },
  {
    id: 8,
    size: "large",
    title: "Categories",
    imageSrc: main,
  },
];

export default categories;
