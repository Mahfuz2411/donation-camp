import PropTypes from 'prop-types'; // ES6

const Cards = ({ donation }) => {

    return (
        <>
            <div className="card card-compact w-full bg-base-100 shadow-xl overflow-hidden">
                <figure className='h-56'><img className='h-full w-full object-cover' src={donation.thumbnail} alt="please wait" /></figure>
                <div className="card-body items-start" style={{backgroundColor: donation.bgColor}}>
                    <span className="card-title p-2 rounded-md" style={{backgroundColor: donation.cateBgColor,
                    color: donation.textColor}}>{donation.category}</span>
                    <p className='text-xl' style={{color: donation.textColor}}>{donation.title}</p>
                </div>
            </div>
        </>
    );
};

Cards.propTypes = {
    donation: PropTypes.object
}

export default Cards;