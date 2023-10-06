import PieChart from "../Components/PieChart";

const Statistics = () => {
  return (
    <>
      <div className="md:hidden grid place-items-center">
        <PieChart size={150}></PieChart>
      </div>
      <div className="hidden md:grid lg:hidden place-items-center">
        <PieChart size={275}></PieChart>
      </div>
      <div className="hidden lg:grid place-items-center">
        <PieChart size={400}></PieChart>
      </div>

      <div className="container mx-auto w-[90%] max-w-lg flex flex-col md:flex-row gap-4">
        <div className="w-full flex gap-2 justify-center items-center">
          <p className="w-full text-center">Your Donation</p> 
          <span className="w-full h-2 bg-[#FF444A] block "></span>
        </div>
        <div className="w-full flex gap-2 justify-center items-center">
          <p className="w-full text-center">Total Donation</p> 
          <span className="w-full h-2 bg-[#00C49F] block "></span>
        </div>
      </div>
    </>
  );
};

export default Statistics;