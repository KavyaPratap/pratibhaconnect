import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../lib/supabaseClient';
import LoadingSpinner from '../components/UI/LoadingSpinner';

export default function ProfilePage() {
  const { id } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ full_name: '', bio: '' });

  useEffect(() => {
    fetchProfile();
  }, []);

  async function fetchProfile() {
    setLoading(true);
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .single();
    if (error) console.error(error);
    else setProfile(data);
    setForm({ full_name: data.full_name, bio: data.bio });
    setLoading(false);
  }

  async function updateProfile() {
    setLoading(true);
    const { error } = await supabase
      .from('profiles')
      .update({ full_name: form.full_name, bio: form.bio })
      .eq('id', id);
    if (error) console.error(error);
    else fetchProfile();
    setEditing(false);
    setLoading(false);
  }

  if (loading) return <LoadingSpinner />;

  return (
    <div className="max-w-xl mx-auto p-4">
      {editing ? (
        <div className="space-y-4">
          <input
            className="w-full border p-2 rounded"
            value={form.full_name}
            onChange={e => setForm({ ...form, full_name: e.target.value })}
            placeholder="Full Name"
          />
          <textarea
            className="w-full border p-2 rounded"
            value={form.bio}
            onChange={e => setForm({ ...form, bio: e.target.value })}
            placeholder="Bio"
          />
          <button onClick={updateProfile} className="btn-primary">Save</button>
        </div>
      ) : (
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">{profile.full_name}</h1>
          <p>{profile.bio}</p>
          <button onClick={() => setEditing(true)} className="btn-secondary">Edit Profile</button>
        </div>
      )}
    </div>
  );
}
