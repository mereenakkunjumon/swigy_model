import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart=()=>{
    const dispatch=useDispatch()
    const clearcartfun=()=>{
        dispatch(clearCart());
    }
    return(
        <div>
            <h1>cart</h1>
            <button onClick={clearcartfun}>clearcart</button>
        </div>
    )
}
export default Cart;