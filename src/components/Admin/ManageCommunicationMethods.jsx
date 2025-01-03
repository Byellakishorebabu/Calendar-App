import React, { useState } from "react";
import CommunicationMethodForm from "./CommunicationMethodForm";

const ManageCommunicationMethods = () => {
  const [methods, setMethods] = useState([
    { name: "LinkedIn Post", description: "Post on LinkedIn", sequence: 1, mandatory: true },
    { name: "LinkedIn Message", description: "Send a message on LinkedIn", sequence: 2, mandatory: true },
    { name: "Email", description: "Send an email", sequence: 3, mandatory: true },
    { name: "Phone Call", description: "Call via phone", sequence: 4, mandatory: false },
    { name: "Other", description: "Other communication methods", sequence: 5, mandatory: false },
  ]);

  const [editIndex, setEditIndex] = useState(null);

  const addMethod = (method) => {
    if (editIndex !== null) {
      // Update existing method
      const updatedMethods = [...methods];
      updatedMethods[editIndex] = method;
      setMethods(updatedMethods);
      setEditIndex(null); // Clear edit mode
    } else {
      // Add new method
      setMethods((prev) => [...prev, method]);
    }
  };

  const deleteMethod = (index) => {
    setMethods((prev) => prev.filter((_, i) => i !== index));
  };

  const editMethod = (index) => {
    setEditIndex(index);
  };

  return (
    <div className="p-4 w-3/4 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Manage Communication Methods</h1>
      <CommunicationMethodForm
        onAddMethod={addMethod}
        method={editIndex !== null ? methods[editIndex] : null}
      />
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Description</th>
            <th className="border p-2">Sequence</th>
            <th className="border p-2">Mandatory</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {methods.map((method, index) => (
            <tr key={index}>
              <td className="border p-2">{method.name}</td>
              <td className="border p-2">{method.description}</td>
              <td className="border p-2">{method.sequence}</td>
              <td className="border p-2">{method.mandatory ? "Yes" : "No"}</td>
              <td className="border p-2">
                <button
                  onClick={() => editMethod(index)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteMethod(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCommunicationMethods;
