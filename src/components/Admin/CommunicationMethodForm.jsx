import React, { useState, useEffect } from "react";

const CommunicationMethodForm = ({ onAddMethod, method }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    sequence: "",
    mandatory: false,
  });

  useEffect(() => {
    if (method) {
      setFormData(method);
    }
  }, [method]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddMethod(formData);
    setFormData({
      name: "",
      description: "",
      sequence: "",
      mandatory: false,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 bg-gray-100 p-4 rounded w-3/4 mx-auto shadow"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Method Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter method name"
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Add description"
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Sequence</label>
        <input
          type="number"
          name="sequence"
          value={formData.sequence}
          onChange={handleChange}
          placeholder="Enter sequence number"
          className="border p-2 w-full"
          required
        />
      </div>
      <div className="mb-4 flex items-center">
        <input
          type="checkbox"
          name="mandatory"
          checked={formData.mandatory}
          onChange={handleChange}
          className="mr-2"
        />
        <label className="text-sm">Mandatory?</label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {method ? "Update Method" : "Add Method"}
      </button>
    </form>
  );
};

export default CommunicationMethodForm;
