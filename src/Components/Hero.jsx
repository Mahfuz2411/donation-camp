import PropTypes from "prop-types";

const Hero = ({ donation }) => {
  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img src={donation.thumbnail} alt="Please wait..." />
        </figure>
        <div
          className="card-body items-start"
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
          <p className="text-xl" style={{ color: donation.textColor }}>
            {donation.title}
          </p>
        </div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  donation: PropTypes.object,
};

export default Hero;
