import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user?.email}!</h1>
      <p className="mb-6">This is your dashboard. From here, you can:</p>
      <ul className="list-disc list-inside space-y-2 mb-6">
        <li>
          <Link to={`/profile/${user.id}`} className="text-blue-600 hover:underline">
            View/Edit Your Profile
          </Link>
        </li>
        <li>
          <Link to="/explore" className="text-blue-600 hover:underline">
            Explore Other Profiles
          </Link>
        </li>
      </ul>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
}