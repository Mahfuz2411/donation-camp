import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Details = () => {
    // const obj = JSON.parse(localStorage.getItem('myData'));
    const {id} = useParams();
    const [donation, setDonation] = useState({});
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/Mahfuz2411/jsonplaceholder/main/donate.json')
        .then(res => res.json())
        .then(data => (data.filter(item => {
            if(item.id==id) {
                setDonation(item);
                return;
            }
        })))
    },[id]);

    const saveOnLocal = () => {
        let donated = JSON.parse(localStorage.getItem('donated') || '[]');
        let val = true;
        for(let i of donated) {
            if(i.id==id) {
                console.log(i.title, donation.title);
                val = false; 
                break;
            }
        }
        if(val) {
            donated.push(donation)
        }
        localStorage.setItem('donated', JSON.stringify(donated));
    }

    return (
        <div>
            <figure className='h-96'><img className='h-full w-full object-cover' src={donation.thumbnail} alt="please wait" />
                <figcaption>
                    
                </figcaption>
            </figure>
            <button onClick={() => saveOnLocal()}>{`Donate $${donation.price}`}</button>
            <article >
                <h2 className="text-4xl font-bold">{donation.title}</h2>
                <p className="text-2xl font-normal">{donation.description}</p>
            </article>
        </div>
    );
};

export default Details;