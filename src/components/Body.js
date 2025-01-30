import React, {useState,useEffect} from "react";
import Rescard,{withpromotedlabel} from "./Rescard";
import Shimmmer from "./Shimmmer";
import { Link } from "react-router-dom";
import { RES_URL } from "../utils/constants";
import useOnlinestatus from "../utils/useOnlinestatus";


const Body=()=>{
    const [filterrestaurent,setfilterrestaurent] = useState([]);
    const[searchtext,setSearchText]=useState("")
    const onlinestatus=useOnlinestatus();
    const Rescardpromoted=withpromotedlabel(Rescard);

    useEffect(()=>{
        fetchdata();
    },[]);
    const fetchdata=async ()=>{
        const data=await fetch(RES_URL);
        const json=await data.json();
        setfilterrestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    const handlefilter = ()=>{
        const filteredValues = filterrestaurent.filter((item)=>item.info.avgRating>4.3);
        setfilterrestaurent(filteredValues)
    }
    const inputhandler=(e)=>{
        setSearchText(e.target.value); 
    }

    const handleSearch = ()=>{
    const searchValues = filterrestaurent.filter((item)=>item.info.name.toLowerCase().includes(searchtext.toLowerCase()));
        setfilterrestaurent(searchValues)
    }
    if(filterrestaurent.length===0){
        return <Shimmmer/>
    }
    
   if(onlinestatus===false) 
    return(
        <h1>looks you are offline</h1>
    );
    return(
<div className="body">
    <div className="searchbtn">
        <button className="filter-btn"onClick={handlefilter}>
            top restaurent 
        </button>
    </div>
    <div>
        <input type="text" onChange={inputhandler} value={searchtext}></input>
        <button onClick={handleSearch}>
            search
        </button>
    </div>


    <div className="rescontainer">
        {
            filterrestaurent.map((restaurent)=>

             <Link to={"/restaurent/"+restaurent.info.id}>
             {restaurent.info.visibility?<Rescardpromoted resdata={restaurent}/>:<Rescard key={restaurent.info.id} resdata={restaurent}/>}

             </Link>
            )
        }
    </div>
</div>
    )
}
export default Body;