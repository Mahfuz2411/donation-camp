import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Hero = ({ donation }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl overflow-hidden">
      <figure className="w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={donation.thumbnail}
          alt="Please wait..."
        />
      </figure>
      <div
        className="w-full h-full card-body items-start flex flex-col justify-between"
        style={{ backgroundColor: donation.bgColor }}
      >
        <span
          className="card-title p-2 rounded-md"
          style={{
            backgroundColor: donation.cateBgColor,
            color: donation.textColor,
          }}
        >
          {donation.category}
        </span>
        <p className="text-2xl font-semibold">{donation.title}</p>
        <p className="font-semibold text-base" style={{ color: donation.textColor }}>${donation.price}</p>
        <Link
          to={`/donation/${donation.id}`}
        >
          <button
            className="btn text-white border-none text-lg font-semibold"
            style={{ background: donation.textColor }}
          >View Details</button>
        </Link>
      </div>
    </div>
  );
};

Hero.propTypes = {
  donation: PropTypes.object,
};

export default Hero;
