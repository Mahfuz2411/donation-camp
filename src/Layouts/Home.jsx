import { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import bgImg from "../assets/donation.jpg";

const Home = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mahfuz2411/jsonplaceholder/main/donate.json"
    )
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  return (
    <>
      <section
        className="w-full grid place-items-center min-h-screen relative before:content-[''] before:absolute before:w-full before:h-full before:bg-[#ffffffce] -mt-20"
        style={{
          background: `url(${bgImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="w-[90%] max-w-2xl flex flex-col justify-center items-center gap-2 relative z-10 pt-24">
          <h1 className="text-4xl text-center font-bold text-[#0B0B0B] pb-6">I Grow By Helping People In Need</h1>
          <div className="join w-full">
            <input
              className="input input-bordered join-item w-full"
              placeholder="Search here...."
            />
            <button className="px-4 py-2 rounded-s-none rounded-e-lg bg-[#FF444A] text-[#FFF]">Subscribe</button>
          </div>
        </div>
      </section>
      <section className="container mx-auto w-full grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-20">
        {donations.map((donation) => (
          <Cards key={donation.id} donation={donation}></Cards>
        ))}
      </section>
    </>
  );
};

export default Home;
