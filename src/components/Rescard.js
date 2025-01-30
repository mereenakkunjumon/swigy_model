// import React from 'react';
const Rescard=(props)=>{
    const{resdata}=props
    return(
<div className="rescard">
    <img className="resimage" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    resdata.info.cloudinaryImageId}
    />
    <h2>{resdata.info.name}</h2>
    <h2>{resdata.info.cuisines}</h2>
    <h2>{resdata.info.avgRating}</h2>

</div>
    )
};
export const withpromotedlabel=(Rescard)=>{
    return(props)=>{
        return(
            <div>
                <label>promoted</label>
                <Rescard {...props}/>
            </div>
        )
    }
}
export default Rescard;