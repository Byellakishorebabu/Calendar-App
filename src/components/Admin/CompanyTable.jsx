import React from "react";

const CompanyTable = ({ companies, onDeleteCompany, onEditCompany }) => (
  <table className="table-auto w-full border">
    <thead>
      <tr>
        <th className="border px-4 py-2">Name</th>
        <th className="border px-4 py-2">Location</th>
        <th className="border px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {companies.map((company, index) => (
        <tr key={index}>
          <td className="border px-4 py-2">{company.name}</td>
          <td className="border px-4 py-2">{company.location}</td>
          <td className="border px-4 py-2">
            <button
              onClick={() => onEditCompany(index)}
              className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
            >
              Edit
            </button>
            <button
              onClick={() => onDeleteCompany(index)}
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CompanyTable;
