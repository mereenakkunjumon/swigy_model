
import Shimmmer from "./Shimmmer";
import { useParams } from "react-router-dom";
import useRestaurentmenu from "../utils/useRestaurentmenu";
import Restaurentcategory from "./Restaurentcategory";


const Restaurentmenu=()=>{

    
    const { resId }=useParams();
   
    const resinfo=useRestaurentmenu(resId);
    // console.log(resinfo);
    // console.log(resinfo.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards?.[0]?.card?.info?.category);
    
    const categories=resinfo.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(c=>c.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // console.log(categories);

    const { name = '' } = resinfo?.cards?.[2]?.card?.card?.info ?? {};
    // const {name,id,city,cuisines,avgRating }=resinfo?.cards[2].card.card.info;

    return resinfo===null?(<Shimmmer/>):(
        <div>
            <h1 className="text-center font-bold " >{name}</h1>
            
            {categories?.map((category)=>(<Restaurentcategory data={category?.card?.card}/>))}


        </div>

    );

}
export default Restaurentmenu;