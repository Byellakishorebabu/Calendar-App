import React, { useState } from 'react';

const CommunicationModal = ({ data, onClose, onSave }) => {
  const [form, setForm] = useState({ type: '', date: '', notes: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, company: data.name });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-lg space-y-4 w-96"
      >
        <h2 className="text-lg font-bold">Log Communication</h2>
        <select
          name="type"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          required
          className="w-full border p-2 rounded"
        >
          <option value="">Select Type</option>
          <option value="Email">Email</option>
          <option value="Call">Call</option>
          <option value="Meeting">Meeting</option>
        </select>
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={(e) => setForm({ ...form, date: e.target.value })}
          required
          className="w-full border p-2 rounded"
        />
        <textarea
          name="notes"
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          placeholder="Add Notes"
          className="w-full border p-2 rounded"
        />
        <div className="flex justify-end space-x-2">
          <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 rounded">
            Cancel
          </button>
          <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default CommunicationModal;
