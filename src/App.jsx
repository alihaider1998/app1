// App1/src/App.jsx
import { Routes, Route, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">App1 Dashboard</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="p-4 rounded-lg bg-blue-50">
          <h3 className="mb-2 font-semibold">Overview</h3>
          <p>Welcome to App1 dashboard view</p>
        </div>
        <div className="p-4 rounded-lg bg-green-50">
          <h3 className="mb-2 font-semibold">Statistics</h3>
          <p>Some sample statistics here</p>
        </div>
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">App1 Settings</h2>
      <div className="p-4 rounded-lg bg-gray-50">
        <h3 className="mb-2 font-semibold">Configuration</h3>
        <p>Sample settings page for App1</p>
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-xl font-bold">App1 Profile</h2>
      <div className="p-4 rounded-lg bg-yellow-50">
        <h3 className="mb-2 font-semibold">User Profile</h3>
        <p>Sample profile page for App1</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-white rounded-lg shadow">
      <nav className="border-b border-gray-200">
        <div className="px-4 py-3">
          <div className="flex space-x-4">
            <Link
              to=""
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
            >
              Dashboard
            </Link>
            <Link
              to="settings"
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
            >
              Settings
            </Link>
            <Link
              to="profile"
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100"
            >
              Profile
            </Link>
          </div>
        </div>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
