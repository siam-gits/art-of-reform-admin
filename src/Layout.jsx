import { Outlet, Link, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();

  navigate("/login");

  return (
    <div className="flex min-h-screen">
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
}
