import React, { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";

import {
  ShoppingCart,
  Users,
  DollarSign,
  Package,
  TrendingUp,
  TrendingDown,
} from "lucide-react";


const AdminPage = () => {
  const { user } = useAuth();
  const [dashboard, setDashboard] = useState({
    totalOrders: null,
    totalUsers: null
  })

  const fetchDashboard = async () => {
    const response = await fetch("http://localhost:4040/user/dashboard");
    const result = await response.json();
   
    if(response.ok){
      setDashboard(result.data)
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard title="Total Orders" Icon={ShoppingCart} value={dashboard?.totalOrders} change={13} isUp={false} />
      <StatsCard title="Total Users" Icon={Users} value={dashboard?.totalUsers} change={13} isUp={false} />
    </div>
  );
};

export default AdminPage;

const StatsCard = ({isUp=true, title="Total Order", value=10, change=12, Icon=ShoppingCart}) => {

  return (
    <div
      className="bg-white dark:bg-gray-900 rounded-xl p-5 shadow-sm hover:shadow-md transition"
    >
      <div className="flex items-center justify-between">
        <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/30">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>

        <div
          className={`flex items-center gap-1 text-sm font-medium ${
            isUp ? "text-green-600" : "text-red-500"
          }`}
        >
          {isUp ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          {change}
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm text-gray-500 dark:text-gray-400">
          {title}
        </h4>
        <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-1">
          {value}
        </p>
      </div>
    </div>
  );
};
