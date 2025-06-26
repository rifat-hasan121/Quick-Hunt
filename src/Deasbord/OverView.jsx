import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading";
import BarChart from "./BarChart";
import { RanderChart } from "./RanderChart";

const Overview = () => {
  const { user2, loading } = useContext(AuthContext);
  const [totalItems, setTotalItems] = useState(0);
  const [myItems, setMyItems] = useState(0);

 
  useEffect(() => {
    if (!user2 || loading) return;

    fetch("https://freelance-task-marketplace-server-nine.vercel.app/addUser")
      .then((res) => res.json())
      .then((data) => setTotalItems(data.length));

    fetch(
      `https://freelance-task-marketplace-server-nine.vercel.app/addUser?email=${user2?.email}`
    )
      .then((res) => res.json())
      .then((data) => setMyItems(data.length));
  }, [user2, loading]);
  if (loading || !user2) {
    return <Loading />;
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        <div className="bg-blue-100 dark:bg-gray-700 dark:text-gray-200 shadow rounded p-4">
          <h2 className="text-lg md:text-xl font-bold">Total Items</h2>
          <p className="text-3xl font-bold">{totalItems}</p>
        </div>
        <div className="bg-blue-100 dark:bg-gray-700 dark:text-gray-200 shadow rounded p-4">
          <h2 className="text-lg md:text-xl font-bold">My Items</h2>
          <p className="text-3xl font-bold">{myItems}</p>
        </div>
        {/* More cards if needed */}
      </div>
      <div className="mt-12 h-4xl flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <BarChart />
        </div>
        <div className=" w-2xl h-2xl">
          <RanderChart></RanderChart>
        </div>
      </div>
    </>
  );
};

export default Overview;
