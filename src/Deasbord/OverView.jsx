import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Loading from "../Components/Loading";

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
   
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg">Total Items</h2>
          <p className="text-3xl font-bold">{totalItems}</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <h2 className="text-lg">My Items</h2>
          <p className="text-3xl font-bold">{myItems}</p>
        </div>
        {/* More cards if needed */}
      </div>
   
  );
};

export default Overview;
