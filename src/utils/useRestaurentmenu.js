import { useEffect, useState } from "react";
import { MENU_URL} from "./constants";

const useRestaurentmenu=(resId)=>{
const [resinfo,setresinfo]=useState("");
    useEffect(()=>{
         fetchmenu();
    },[]);
    const fetchmenu=async ()=>{
        const data=await fetch(MENU_URL+resId);
        const x=await data.json();
        // console.log(x.data);
        

        setresinfo(x?.data);
        
        // console.log(x.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card)
    }

    return resinfo;
};
export default useRestaurentmenu;