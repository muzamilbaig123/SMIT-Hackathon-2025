"use client";

import { useState } from "react";

const AdminDashboard = () => {
  const [filter, setFilter] = useState({ city: "", country: "" });

  // Static application data for frontend demonstration
  const applications = [
    {
      id: "1",
      applicantName: "John Doe",
      loanCategory: "Personal Loan",
      amount: 5000,
      status: "Pending",
      city: "New York",
      country: "USA",
    },
    {
      id: "2",
      applicantName: "Jane Smith",
      loanCategory: "Home Loan",
      amount: 20000,
      status: "Approved",
      city: "Los Angeles",
      country: "USA",
    },
    {
      id: "3",
      applicantName: "Ali Khan",
      loanCategory: "Car Loan",
      amount: 15000,
      status: "Rejected",
      city: "Karachi",
      country: "Pakistan",
    },
  ];

  // Handle filter changes
  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  // Filter applications based on city and country
  const filteredApplications = applications.filter((app) => {
    return (
      app.city.toLowerCase().includes(filter.city.toLowerCase()) &&
      app.country.toLowerCase().includes(filter.country.toLowerCase())
    );
  });

  return (
    <div className="p-4">
      {/* Filter Section */}
      <div className="mb-4">
        <input
          type="text"
          name="city"
          placeholder="Filter by city"
          value={filter.city}
          onChange={handleFilterChange}
          className="mr-2 p-2 border rounded"
        />
        <input
          type="text"
          name="country"
          placeholder="Filter by country"
          value={filter.country}
          onChange={handleFilterChange}
          className="p-2 border rounded"
        />
      </div>

      {/* Applications Table */}
      <table className="min-w-full bg-white border-collapse border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Application ID</th>
            <th className="py-2 px-4 border-b">Applicant Name</th>
            <th className="py-2 px-4 border-b">Loan Category</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredApplications.map((app) => (
            <tr key={app.id}>
              <td className="py-2 px-4 border-b">{app.id}</td>
              <td className="py-2 px-4 border-b">{app.applicantName}</td>
              <td className="py-2 px-4 border-b">{app.loanCategory}</td>
              <td className="py-2 px-4 border-b">${app.amount}</td>
              <td className="py-2 px-4 border-b">{app.status}</td>
              <td className="py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
                  View
                </button>
                <button className="bg-green-500 text-white px-2 py-1 rounded">
                  Approve
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
