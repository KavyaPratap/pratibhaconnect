// src/pages/ExplorePage.jsx
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../lib/supabaseClient';
import { Link } from 'react-router-dom';
import LoadingSpinner from '../components/UI/LoadingSpinner';

async function getProfiles() {
  const { data, error } = await supabase.from('profiles').select('*');
  if (error) throw error;
  return data;
}

export default function ExplorePage() {
  const { data, isLoading, error } = useQuery(['profiles'], getProfiles);

  if (isLoading) return <LoadingSpinner />;
  if (error) return <p className="text-red-500">Error loading profiles.</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {data.map(profile => (
        <Link
          key={profile.id}
          to={`/profile/${profile.id}`}
          className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col"
        >
          <div className="flex-1">
            <h2 className="text-xl font-bold text-gray-900">{profile.full_name}</h2>
            <p className="mt-2 text-gray-600 line-clamp-3">{profile.bio}</p>
          </div>
          <div className="mt-4">
            <span className="text-sm text-primary hover:underline">View Profile →</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
