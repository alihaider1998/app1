import React, { lazy, Suspense } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

const NotFound = lazy(() => import("host/NotFound"));

function Dashboard() {
  return (
    <div>
      <h1>App1 Dashboard</h1>
      <div>Overview</div>
      <p>Welcome to App1 dashboard view</p>

      <div>Statistics</div>
      <p>Some sample statistics here</p>
    </div>
  );
}

function Settings() {
  return (
    <div>
      <h1>App1 Settings</h1>
      <div>Configuration</div>
      <p>Sample settings page for App1</p>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h1>App1 Profile</h1>
      <div>User Profile</div>
      <p>Sample profile page for App1</p>
    </div>
  );
}

function App() {
  return (
    <div className="flex">
      <Routes>
        <Route
          path="*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {/* Existing routes */}
                <Route
                  path="dashboard"
                  element={
                    <>
                      <nav className="w-64 p-4 bg-gray-100">
                        <NavLink
                          to="dashboard"
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                              isActive ? "bg-gray-100" : ""
                            }`
                          }
                        >
                          Dashboard
                        </NavLink>
                        <NavLink
                          to="settings"
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                              isActive ? "bg-gray-100" : ""
                            }`
                          }
                        >
                          Settings
                        </NavLink>
                        <NavLink
                          to="profile"
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                              isActive ? "bg-gray-100" : ""
                            }`
                          }
                        >
                          Profile
                        </NavLink>
                      </nav>
                      <div className="flex-1 p-4">
                        <Dashboard />
                      </div>
                    </>
                  }
                />
                <Route
                  path="settings"
                  element={
                    <>
                      <nav className="w-64 p-4 bg-gray-100">
                        <NavLink
                          to="dashboard"
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                              isActive ? "bg-gray-100" : ""
                            }`
                          }
                        >
                          Dashboard
                        </NavLink>
                        <NavLink
                          to="settings"
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                              isActive ? "bg-gray-100" : ""
                            }`
                          }
                        >
                          Settings
                        </NavLink>
                        <NavLink
                          to="profile"
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                              isActive ? "bg-gray-100" : ""
                            }`
                          }
                        >
                          Profile
                        </NavLink>
                      </nav>
                      <div className="flex-1 p-4">
                        <Settings />
                      </div>
                    </>
                  }
                />
                <Route
                  path="profile"
                  element={
                    <>
                      <nav className="w-64 p-4 bg-gray-100">
                        <NavLink
                          to="dashboard"
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                              isActive ? "bg-gray-100" : ""
                            }`
                          }
                        >
                          Dashboard
                        </NavLink>
                        <NavLink
                          to="settings"
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                              isActive ? "bg-gray-100" : ""
                            }`
                          }
                        >
                          Settings
                        </NavLink>
                        <NavLink
                          to="profile"
                          className={({ isActive }) =>
                            `block px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-100 ${
                              isActive ? "bg-gray-100" : ""
                            }`
                          }
                        >
                          Profile
                        </NavLink>
                      </nav>
                      <div className="flex-1 p-4">
                        <Profile />
                      </div>
                    </>
                  }
                />

                {/* Redirect invalid app1 routes to main app's 404 */}
                <Route
                  path="404"
                  element={
                    <div className="p-4">
                      <NotFound />
                    </div>
                  }
                />
                <Route path="*" element={<Navigate to="404" replace />} />
              </Routes>
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
