import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Link } from 'react-router-dom';


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const AnalyticsDashboard = () => {
  
  const [communicationData, setCommunicationData] = useState([
    { type: "Email", date: "2024-12-28", notes: "Discussed pricing." },
    { type: "Call", date: "2024-12-27", notes: "Follow-up on proposal." },
    { type: "Meeting", date: "2024-12-25", notes: "Reviewed project details." },
    { type: "Email", date: "2024-12-20", notes: "Sent project outline." },
    { type: "Email", date: "2024-12-18", notes: "Follow-up email." },
    { type: "Call", date: "2024-12-15", notes: "Initial contact." },
    { type: "Meeting", date: "2024-12-10", notes: "Team sync." },
  ]);

  // Process data for communication frequency
  const communicationFrequency = communicationData.reduce((acc, comm) => {
    acc[comm.type] = (acc[comm.type] || 0) + 1;
    return acc;
  }, {});

  // Generate data for Bar Chart
  const chartData = {
    labels: Object.keys(communicationFrequency),
    datasets: [
      {
        label: 'Communication Frequency',
        data: Object.values(communicationFrequency),
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCD56'],
      },
    ],
  };

  // Sample data for overdue communications
  const overdueData = communicationData.filter(comm => new Date(comm.date) < new Date());
  const overdueCount = overdueData.length;

  // Create CSV download data
  const csvData = communicationData.map(comm => ({
    Type: comm.type,
    Date: comm.date,
    Notes: comm.notes,
  }));

  // Real-time activity log
  const [log, setLog] = useState([]);
  const logNewActivity = (activity) => {
    setLog((prevLog) => [{ timestamp: new Date().toLocaleTimeString(), activity }, ...prevLog]);
  };

  useEffect(() => {
    // Simulate activity logging every 3 seconds
    const interval = setInterval(() => {
      logNewActivity('New communication logged');
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>

<header className="bg-blue-600 text-white py-4 px-6 shadow-md flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <img
          src="/reshot-icon.svg"
          alt="Logo"
          className="h-8 w-8 mr-3"
        />
        <h1 className="text-xl font-bold">User Dashboard</h1>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="hover:underline">
          Home
        </Link>
        <Link to="/admin" className="hover:underline">
          Admin
        </Link>
      </nav>
    </header>


    <div className="p-6 bg-gray-100 space-y-8">

      <h2 className="text-2xl font-bold">Reporting and Analytics</h2>

      {/* Communication Frequency Report */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Communication Frequency Report</h3>
        <Bar data={chartData} options={{ responsive: true }} />
      </div>

      {/* Overdue Communications Trends */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Overdue Communications Trends</h3>
        <p>Total Overdue Communications: {overdueCount}</p>
        <ul className="list-disc list-inside">
          {overdueData.map((comm, idx) => (
            <li key={idx}>
              {comm.type} - {comm.date}
            </li>
          ))}
        </ul>
      </div>

      {/* Downloadable Reports */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Downloadable Reports</h3>
        <CSVLink data={csvData} filename="communications_report.csv" className="px-4 py-2 bg-blue-500 text-white rounded">
          Download CSV
        </CSVLink>
      </div>

      {/* Real-Time Activity Log */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold">Real-Time Activity Log</h3>
        <div className="bg-gray-50 p-4 rounded shadow-md max-h-48 overflow-y-auto">
          {log.map((entry, idx) => (
            <div key={idx} className="flex justify-between">
              <span>{entry.timestamp}</span>
              <span>{entry.activity}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default AnalyticsDashboard;
