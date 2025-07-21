const DrinkCard = ({ product, category }) => {
  const categoryColors = {
   'Black': 'bg-black', // Черный кофе
    'White milk': 'bg-amber-100', // Белый/молочный
    'Фреш': 'bg-orange-500', // Фреши
    'Мохито': 'bg-green-300', // Мохито
    'Чаи': 'bg-emerald-100', // Чай
    'Авторские чаи': 'bg-emerald-200', // Авторские чаи
    'Холодное кофе': 'bg-amber-200', // Холодный кофе
    'Смузи': 'bg-purple-200', // Смузи
    'Айс урбеч': 'bg-yellow-100', // Айс урбеч
    'Не кофе': 'bg-amber-900', // Не кофе
    'Бабл ти': 'bg-pink-300', // Бубл ти
    'Милкшейк': 'bg-violet-300' // Милкшейки
  };

  // Получаем цвет для текущей категории или используем цвет по умолчанию
  const bgColor = categoryColors[category] || 'bg-black';

  return (
    <div className={`p-3 flex items-center justify-between rounded-xl w-full h-10 ${bgColor} bg-opacity-50`}>
      <h2 className="font-medium">{product.name}</h2>
      <div className="flex flex-col gap-2">
        <h2 className=" w-12 bg-white bg-opacity-20 p-1 rounded-lg flex items-center justify-center">
          {product.price}₽
        </h2>
      </div>
    </div>
  );
};

export default DrinkCard;
