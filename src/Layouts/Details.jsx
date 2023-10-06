import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Details = () => {
  // const obj = JSON.parse(localStorage.getItem('myData'));
  const { id } = useParams();
  const [donation, setDonation] = useState({});
  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/Mahfuz2411/jsonplaceholder/main/donate.json"
    )
      .then((res) => res.json())
      .then((data) =>
        data.filter((item) => {
          if (item.id == id) {
            setDonation(item);
            return;
          }
        })
      );
  }, [id]);

  const saveOnLocal = () => {
    let donated = JSON.parse(localStorage.getItem("donated") || "[]");
    let val = true;
    for (let i of donated) {
      if (i.id == id) {
        console.log(i.title, donation.title);
        toast("You already donated here");
        val = false;
        break;
      }
    }
    if (val) {
      donated.push(donation);
      toast("Succesfully donated!");
    }
    localStorage.setItem("donated", JSON.stringify(donated));
  };

  return (
    <div className="container flex flex-col gap-10 mx-auto py-20">
      <figure className="relative">
        <img
          className="h-full w-full object-cover "
          src={donation.thumbnail}
          alt="please wait"
        />
        <figcaption className="absolute w-full bg-[#0b0b0b80] bottom-0 left-0 py-6 px-9">
          <button
            className="btn text-white border-none text-xl"
            style={{background: donation.textColor}}
            onClick={() => saveOnLocal()}
          >{`Donate $${donation.price}`}</button>
        </figcaption>
      </figure>
      <article>
        <h2 className="font-bold pb-6 text-5xl">{donation.title}</h2>
        <p className="text-base font-normal">{donation.description}</p>
      </article>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Details;
