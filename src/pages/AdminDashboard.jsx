import React from 'react';
import Header from '../components/Layout/Header';

const AdminDashboard = () => (
  <div>
    <Header />
    <main className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Admin Dashboard</h2>
      <p>Select a module to manage.</p>
    </main>
  </div>
);

export default AdminDashboard;
