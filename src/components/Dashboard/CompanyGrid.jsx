import React from 'react';

const CompanyGrid = ({ companies, setModalData, selectedCompanies, toggleCompanySelection }) => {
  const getHighlightColor = (date) => {
    const today = new Date();
    const commDate = new Date(date);

    if (commDate < today) return 'bg-red-200';
    if (commDate.toDateString() === today.toDateString()) return 'bg-yellow-200';
    return '';
  };

  return (
    <div className="grid grid-cols-1 w-3/4 mx-auto">
      {companies.map((company, idx) => (
        <div key={idx} className="p-4 border rounded shadow">
          <h3 className="text-lg font-bold">
            <input
              type="checkbox"
              checked={selectedCompanies.includes(company.name)}
              onChange={() => toggleCompanySelection(company.name)}
              className="mr-2"
            />
            {company.name}
          </h3>
          <div>
            <h4 className="mt-2 text-sm font-semibold">Last Five Communications:</h4>
            <ul className="list-disc list-inside">
              {company.lastCommunications
                .slice()
                .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort in descending order
                .map((comm, i) => (
                  <li key={i} className="relative group">
                    <span>{comm.type} - {comm.date}</span>
                    {/* Tooltip for notes on hover */}
                    <div className="absolute left-44 top-0 w-48 bg-gray-100 text-sm p-2 border rounded shadow-md opacity-0 group-hover:opacity-100 group-hover:visible group-hover:bg-gray-300 transition-opacity duration-200 max-w-[200px]">
                      {comm.notes}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className={`mt-4 p-2 rounded ${getHighlightColor(company.nextCommunication.date)}`}>
            <strong>Next Communication:</strong> {company.nextCommunication.type} - {company.nextCommunication.date}
          </div>
          <button
            onClick={() => setModalData(company)}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            Log Communication
          </button>
        </div>
      ))}
    </div>
  );
};

export default CompanyGrid;
