import { useEffect, useState } from "react";


const Details = () => {
    const obj = JSON.parse(localStorage.getItem('myData'));
    console.log(obj);

    return (
        <div>
            <figure className='h-96'><img className='h-full w-full object-cover' src={obj.thumbnail} alt="please wait" /></figure>
            <p>{obj.description}</p>
            
        </div>
    );
};

export default Details;