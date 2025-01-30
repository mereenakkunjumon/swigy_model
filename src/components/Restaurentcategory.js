import Itemlist from "./Itemlist";

const Restaurentcategory=(props)=>{
    // console.log(props);
    return(
    <div className="w-6/12 mx-auto my-4 bg-slate-400 shadow-lg p-4">
        <div >
        <span className="font-bold m-10">{props.data.title}({props.data.itemCards.length})</span>
        </div>
        <div >
            <span><Itemlist item={props.data.itemCards}/></span>
        </div>
    </div>
    
        
        
    );
}
export default Restaurentcategory