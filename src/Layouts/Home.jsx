import { useEffect, useState } from "react";
import Cards from "../Components/Cards";
import bgImg from "../assets/donation.jpg";


const Home = () => {
    const [donations, setDonations] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Mahfuz2411/jsonplaceholder/main/donate.json')
        .then(res => res.json())
        .then(data => setDonations(data))
    },[]);
    return (
        <>
            <section className="w-full grid place-items-center min-h-screen" style={{background: `url(${bgImg})`, backgroundPosition: 'center', backgroundRepeat:'no-repeat', backgroundSize: 'cover'}}>
                <div className="w-[90%] max-w-2xl flex flex-col justify-center items-center gap-2">
                    <h1 className="">I Grow By Helping People In Need</h1>
                    <div className="join w-full">
                        <input className="input input-bordered join-item w-full" placeholder="Email" />
                        <button className="btn join-item rounded-r">Subscribe</button>
                    </div>
                </div>
            </section>
            <section className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    donations.map(donation => <Cards key={donation.id} donation={donation}></Cards>)
                }
            </section>
        </>
    );
};

export default Home;