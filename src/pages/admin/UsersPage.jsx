import React, { useEffect, useState } from 'react'

const UsersPage = () => {

    const [users, setUsers] = useState([])

      const fetchDashboard = async () => {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/user/all`);
        const result = await response.json();
       
        if(response.ok){
            setUsers(result.data)
        }
      };
    
      useEffect(() => {
        fetchDashboard();
      }, []);

  return (
    <div>
        <UsersTable users={users} />
    </div>
  )
}

export default UsersPage;



const UsersTable = ({users=[]}) => {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
          Users List
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-left font-medium text-gray-600 dark:text-gray-300">
                Name
              </th>
              <th className="px-6 py-3 text-left font-medium text-gray-600 dark:text-gray-300">
                Email
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {users.map((user) => (
              <tr
                key={user._id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="px-6 py-4 text-gray-800 dark:text-gray-200 font-medium">
                  {user.name}
                </td>
                <td className="px-6 py-4 text-gray-600 dark:text-gray-400">
                  {user.email}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

