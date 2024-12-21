// App1/src/App.jsx
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

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
            <NavLink
              end
              to="/app1"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-100" : ""
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              end
              to="/app1/settings"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-100" : ""
                }`
              }
            >
              Settings
            </NavLink>
            <NavLink
              end
              to="/app1/profile"
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                  isActive ? "bg-gray-100" : ""
                }`
              }
            >
              Profile
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="p-4">
        <Routes>
          <Route path="" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="profile" element={<Profile />} />
          {/* Redirect invalid app1 routes to main app's 404 */}
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
