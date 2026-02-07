import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Users from "./Users";
import Layout from "./Layout";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />

      {/* Protected */}
      <Route element={<ProtectedRoute />}>
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
        </Route>
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
