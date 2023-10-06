// import { useEffect } from "react";
// import { useState } from "react";
// import Cards from "../Components/Cards";

// const Donation = () => {
//     const [donations, setDonations] = useState([]);
//     useEffect(() =>{
//         let tmpDnt = JSON.parse(localStorage.getItem('donated')) || [];
//         setDonations(tmpDnt);
//     }, [])
//     return (
//         <div>
//             {
//                 donations.map((donation, i) => {
//                     if(i>3) {setLogic(true); break;}
//                     return <Cards key={donation.id} donation={donation}></Cards>
//                 })
//             }
//         </div>
//     );
// };

// export default Donation;

import { useEffect, useState } from "react";
import Hero from "../Components/Hero";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let tmpDnt = JSON.parse(localStorage.getItem("donated")) || [];
    setDonations(tmpDnt);
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center">
      <div className="grid md:grid-cols-2 w-full">
        {donations.slice(0, showAll ? donations.length : 4).map((donation) => (
          <Hero key={donation.id} donation={donation}></Hero>
        ))}
      </div>
      {!showAll && donations.length > 4 && (
        <button
          className="btn bg-[#009444] text-white w-28"
          onClick={() => setShowAll(true)}
        >
          See All
        </button>
      )}
    </div>
  );
};

export default Donation;
