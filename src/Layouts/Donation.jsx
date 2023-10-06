import { useEffect, useState } from "react";
import Hero from "../Components/Hero";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    let tmpDnt = JSON.parse(localStorage.getItem("donated") || '[]');
    setDonations(tmpDnt);
  }, []);

  return (
    <div className="container mx-auto flex flex-col items-center py-20">
      <div className="grid md:grid-cols-2 w-full gap-5 px-5 md:px-0">
        {donations.slice(0, showAll ? donations.length : 4).map((donation) => (
          <Hero key={donation.id} donation={donation}></Hero>
        ))}
      </div>
      {!showAll && donations.length > 4 && (
        <button
          className="btn bg-[#009444] text-white w-28 mt-8"
          onClick={() => setShowAll(true)}
        >
          See All
        </button>
      )}
    </div>
  );
};

export default Donation;
