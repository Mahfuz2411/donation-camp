import { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import bgImg from "../assets/donation.jpg";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [donations, setDonations] = useState([]);
  const [filteredData, setFilteredData] = useState(donations);
  const [input, setInput] = useState('');
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mahfuz2411/jsonplaceholder/main/donate.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setDonations(data);
        setFilteredData(data);
    });
  }, []);

  const onClickHandler = e => {
    e.preventDefault();
		if(!input) {setFilteredData(donations); return toast("Empty string detected!")}
		let tempFilter = donations.filter(item => item.category.toLowerCase().trim()===input.toLowerCase().trim());
		if(!tempFilter.length) return toast("Category not matched")
		setFilteredData(tempFilter);
  }

  const onChangeHandler = e => {
		setInput(e.target.value);
  }

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
          <form className="join w-full">
            <input
							name="search"
							value={input}
							onChange={onChangeHandler}
              className="input input-bordered join-item w-full"
              placeholder="Search here...."
            />
            <button onClick={onClickHandler} type="submit" className="px-4 py-2 rounded-s-none rounded-e-lg bg-[#FF444A] text-[#FFF]">Search</button>
          </form>
        </div>
      </section>
      <section className="container mx-auto w-full grid md:grid-cols-2 lg:grid-cols-4 gap-5 py-20">
        {filteredData.map((donation) => (
          <Cards key={donation.id} donation={donation}></Cards>
        ))}
      </section>
			<ToastContainer></ToastContainer>
    </>
  );
};

export default Home;
