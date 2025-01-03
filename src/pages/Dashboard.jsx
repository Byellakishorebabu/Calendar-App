import React, { useState } from 'react';
import CompanyGrid from '../components/Dashboard/CompanyGrid';
import NotificationIcon from '../components/Dashboard/NotificationIcon';
import CalendarView from '../components/Dashboard/CalenderView';
import CommunicationModal from '../components/Dashboard/CommunicationModel';
import UserHeader from '../components/Layout/UserHeader';

const Dashboard = () => {
  const [companies, setCompanies] = useState([
    {
      name: 'Company A',
      lastCommunications: [
        { type: "Email", date: "2024-12-28", notes: "Discussed pricing." },
        { type: "Call", date: "2024-12-27", notes: "Follow-up on proposal." },
        { type: "Meeting", date: "2024-12-25", notes: "Reviewed project details." },
        { type: "Email", date: "2024-12-20", notes: "Sent project outline." },
        
      ],
      nextCommunication: { type: 'Meeting', date: '2024-01-05' },
    },
    {
      name: 'Company B',
      lastCommunications: [
        { type: "Call", date: "2024-12-27", notes: "Follow-up on feedback." },
        { type: "Email", date: "2024-12-24", notes: "Sent new proposal draft." },
        { type: "Meeting", date: "2024-12-20", notes: "Discussed requirements." },
        { type: "Email", date: "2024-12-18", notes: "Shared initial ideas." },
        
      ],
      nextCommunication: { type: 'Email', date: '2023-12-31' },
    },
    {
        name: 'Company C',
        lastCommunications: [
          { type: "Email", date: "2024-12-27", notes: "Follow-up on feedback." },
          { type: "Email", date: "2024-12-24", notes: "Sent new proposal draft." },
          { type: "Meeting", date: "2024-12-20", notes: "Discussed requirements." },
        ],
        nextCommunication: { type: 'Email', date: '2023-12-31' },
      },
  ]);

  const [modalData, setModalData] = useState(null);
  const [selectedCompanies, setSelectedCompanies] = useState([]);

  const handleNewCommunication = (data) => {
    const updatedCompanies = companies.map((company) => {
      // Reset highlights for selected companies
      if (selectedCompanies.includes(company.name)) {
        // Calculate a new next communication date, here we add 7 days from the current date
        const nextCommDate = new Date();
        nextCommDate.setDate(nextCommDate.getDate() + 7); // Next communication 7 days later
  
        return {
          ...company,
          lastCommunications: [
            ...company.lastCommunications,
            { type: data.type, date: data.date, notes: data.notes },
          ],
          nextCommunication: { type: data.type, date: nextCommDate.toISOString().split('T')[0] }, // Update next communication date
        };
      }
      return company;
    });
  
    setCompanies(updatedCompanies);
    setModalData(null); // Close modal
    setSelectedCompanies([]); // Clear selected companies
  };
  

  const toggleCompanySelection = (companyName) => {
    setSelectedCompanies((prevSelected) =>
      prevSelected.includes(companyName)
        ? prevSelected.filter((name) => name !== companyName)
        : [...prevSelected, companyName]
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <UserHeader companies={companies}/>
      <main className="p-6 space-y-8">
        {/* Company Grid */}
        <CompanyGrid
          companies={companies}
          setModalData={setModalData}
          selectedCompanies={selectedCompanies}
          toggleCompanySelection={toggleCompanySelection}
        />

        {/* Calendar View */}
        <CalendarView companies={companies} />
      </main>

      {/* Communication Modal */}
      {modalData && (
        <CommunicationModal
          data={modalData}
          onClose={() => setModalData(null)}
          onSave={handleNewCommunication}
        />
      )}
    </div>
  );
};

export default Dashboard;
