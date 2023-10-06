import { useEffect, useState } from "react";
import { PieChart, Pie } from "recharts";

const Statistics = () => {
    const [donations, setDonations] = useState([]);
  
    useEffect(() => {
      let tmpDnt = JSON.parse(localStorage.getItem("donated")) || [];
      setDonations(tmpDnt);
    }, []);
  return (
    <div>
      <PieChart width={730} height={250}>
        <Pie
          data={donations}
          dataKey={donations.price}
          nameKey={donations.title}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill={donations.bgColor}
          label
        />
      </PieChart>
    </div>
  );
};

export default Statistics;
