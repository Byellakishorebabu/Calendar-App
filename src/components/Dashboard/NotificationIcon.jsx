import React from 'react';

const NotificationIcon = ({ companies }) => {
  const overdueCount = companies.filter(
    (c) => new Date(c.nextCommunication.date) < new Date()
  ).length;

  const dueTodayCount = companies.filter(
    (c) => new Date(c.nextCommunication.date).toDateString() === new Date().toDateString()
  ).length;

  return (
    <div className="relative">
      <button className="relative bg-blue-900 p-2 rounded shadow">
        <span className="material-icons">notifications</span>
        {(overdueCount > 0 || dueTodayCount > 0) && (
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
            {overdueCount + dueTodayCount}
          </span>
        )}
      </button>
    </div>
  );
};

export default NotificationIcon;
