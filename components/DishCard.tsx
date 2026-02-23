import { JSX } from "react"
import { View } from "react-native"

interface Dishes  {
    id: number | string,
    name: string,
    taste: string,
    region: string,
    main_ingredients: string[],
    optional_ingredients: string[],
    recipe: string,
    calories: number | string,
    prep_time: number | string
  
  }


  interface DishCardProps {
    dish: Dishes
  }

const DishCard = ({ dish } : DishCardProps ) : JSX.Element => {
  return (

    <View>

        {dish.name} -- {dish.calories}
        
        
         </View>
   
  )
}

export default DishCard
