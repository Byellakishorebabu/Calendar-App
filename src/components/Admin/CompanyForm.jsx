import React, { useState, useEffect } from "react";

const CompanyForm = ({ onAddCompany, company }) => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    linkedin: "",
    emails: "",
    phone: "",
    comments: "",
    periodicity: "",
  });

  useEffect(() => {
    if (company) {
      setFormData(company);
    }
  }, [company]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCompany(formData);
    setFormData({
      name: "",
      location: "",
      linkedin: "",
      emails: "",
      phone: "",
      comments: "",
      periodicity: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-gray-100 p-4 rounded w-1/2 mx-auto shadow">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 ">Company Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter company name"
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="Enter company location"
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">LinkedIn Profile</label>
        <input
          type="url"
          name="linkedin"
          value={formData.linkedin}
          onChange={handleChange}
          placeholder="Enter LinkedIn profile URL"
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Emails</label>
        <input
          type="text"
          name="emails"
          value={formData.emails}
          onChange={handleChange}
          placeholder="Enter email(s), separated by commas"
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Phone Numbers</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter phone number(s), separated by commas"
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Comments</label>
        <textarea
          name="comments"
          value={formData.comments}
          onChange={handleChange}
          placeholder="Add comments or additional information"
          className="border p-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Communication Periodicity</label>
        <select
          name="periodicity"
          value={formData.periodicity}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="">Select periodicity</option>
          <option value="Weekly">Weekly</option>
          <option value="Bi-Weekly">Bi-Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Quarterly">Quarterly</option>
        </select>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {company ? "Update Company" : "Add Company"}
      </button>
    </form>
  );
};

export default CompanyForm;
