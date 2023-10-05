import PropTypes from 'prop-types'; // ES6
import { Link } from 'react-router-dom';

const Cards = ({ donation }) => {
    return (
        <>
            <Link className='card card-compact h-full w-full bg-base-100 shadow-xl overflow-hidden' to={`/donation/${donation.id}`}>
                <figure className='h-56'><img className='h-full w-full object-cover' src={donation.thumbnail} alt="please wait" /></figure>
                <div className="card-body items-start" style={{ backgroundColor: donation.bgColor }}>
                    <span className="card-title p-2 rounded-md" style={{
                        backgroundColor: donation.cateBgColor,
                        color: donation.textColor
                    }}>{donation.category}</span>
                    <p className='text-xl' style={{ color: donation.textColor }}>{donation.title}</p>
                </div>
            </Link>
        </>
    );
};

Cards.propTypes = {
    donation: PropTypes.object
}

export default Cards;