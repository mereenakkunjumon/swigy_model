import { useDispatch } from "react-redux";
import { addItems, clearCart } from "../utils/cartSlice";

const Itemlist=(props)=>{
    // console.log("check",props.item);
     const dispatch=useDispatch();

    const clickhandle=()=>{
    dispatch(addItems("pizza"));
    };

    return(
        <div>
          
           {props?.item?.map((a)=>(
          <div  key={a.card?.info?.id}>
             <button onClick={clickhandle}><span>{a.card?.info?.name}</span></button>
          <span>-{a.card?.info?.price/100}</span>
          {/* <span>{a.card?.info?.imageId}</span> */}
          </div>
           ))} 
        </div>
    )
}
export default Itemlist;