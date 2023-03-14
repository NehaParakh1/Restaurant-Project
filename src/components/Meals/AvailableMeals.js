import Card from '../UI/Card'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'
const DUMMY_MEALS=[ {
    id: 'm1',
    name: 'Margherita pizza',
    description: 'Fresh mozzarella, fresh basil & our authentic pizza sauce',
    price: 350,
  },
  {
    id: 'm2',
    name: 'Nachos',
    description: 'Loaded nachos, beans, jalapenos,melted cheese',
    price: 220,
  },
  {
    id: 'm3',
    name: 'French fries',
    description: 'Fries with a spicy twist!',
    price: 250,
  },
  {
    id: 'm4',
    name: 'Burger',
    description: 'Topped with lettuce, tomato and shaved red onions',
    price: 350,
  },
]
const AvailableMeals=()=>{
const mealsList = DUMMY_MEALS.map(meal=> 
<MealItem 
key={meal.id}
id={meal.id} 
name={meal.name} 
description={meal.description} 
price={meal.price}
/>
);
    return (
    <section className= {classes.meals}>
        <Card>
        <ul>{mealsList}</ul>
        </Card>
    </section>
)
}

export default AvailableMeals;