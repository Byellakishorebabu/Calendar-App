import React, { useState } from "react";
import Header from "../components/Layout/Header";
import CompanyForm from "../components/Admin/CompanyForm";
import CompanyTable from "../components/Admin/CompanyTable";

const ManageCompanies = () => {
  const [companies, setCompanies] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addCompany = (company) => {
    if (editIndex !== null) {
      // Update existing company
      const updatedCompanies = [...companies];
      updatedCompanies[editIndex] = company;
      setCompanies(updatedCompanies);
      setEditIndex(null); // Clear edit mode
    } else {
      // Add new company
      setCompanies((prev) => [...prev, company]);
    }
  };

  const deleteCompany = (index) => {
    setCompanies((prev) => prev.filter((_, i) => i !== index));
  };

  const editCompany = (index) => {
    setEditIndex(index);
  };

  return (
    <div>
      <Header />
      <main className="p-6">
        <h2 className="text-2xl font-bold mb-4">Manage Companies</h2>
        <CompanyForm
          onAddCompany={addCompany}
          company={editIndex !== null ? companies[editIndex] : null}
        />
        <CompanyTable
          companies={companies}
          onDeleteCompany={deleteCompany}
          onEditCompany={editCompany}
        />
      </main>
    </div>
  );
};

export default ManageCompanies;
