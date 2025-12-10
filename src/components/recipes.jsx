import Procedure from "./procedure";
import { useNavigate } from "react-router";
function recipes() {
    const recipeCategories = [
        "Breakfast Recipes",
        "Lunch / Dinner Recipes",
        "Snacks & Appetizers",
        "Desserts",
        "Drinks & Beverages",
        "Soups",
        "Salads",
        "Baked Dishes",
        "Non-Veg Recipes",
        "Veg Recipes",
        "Rice Recipes",
        "Street Food",
        "Healthy Recipes",
        
    ];

    const navigate=useNavigate()
    return (
        <div className="d-flex types">
            {
                recipeCategories.map(
                    (item) => {
                        return (
                            <button key={item} className="d-flex border-0 bg-transparent" onClick={()=>navigate("procedure",{state:{
                                data:{item}
                            }})} >
                                {item}
                            </button>
                        )
                    }
                )
            }

        </div>
    )
}
export default recipes