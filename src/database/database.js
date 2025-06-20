import sup from '../assets/sup.jpg';
import casha1 from '../assets/casha1.jpg';
import casha2 from '../assets/casha2.jpg';

export const menu = {
  Каши: [
    {
      id: 1,
      name: 'Молочная овсянка с ягодами',
      ingredients: ['Овсянка', 'молоко', 'ягоды', 'сливочное масло'],
      image: casha1,
      price: 290,
    },
    {
      id: 2,
      name: 'Шоколадная овсянка с лотусом',
      ingredients: [
        'Шоколадное молоко',
        'овсянка',
        'паста из печенья',
        'сливочное масло',
      ],
      image: casha2,
      price: 320,
    },
    {
      id: 3,
      name: 'Гречневая каша',
      ingredients: ['Кукурузная мука', 'вода', 'творог', 'топленое масло)'],
      image: casha2,
      price: 230,
    },
  ],
  Завтраки: [
    {
      id: 10,
      name: 'Фирменный завтрак RAF',
      ingredients: ["Яичница", "сосиски", "говяжья ветчина", "пикули", "хлеб", "свежий салат"],
      image: sup,
      price: 490,
    },
  ],
};
