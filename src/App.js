import { Routes, Route } from "react-router-dom";
import './App.css';
import DashboardPage from "./app/dashboard/index";
import LoginPage from "./app/login/index";
import OrderManagementPage from "./app/ordermanagement/index";
import InventoryManagementPage from "./app/inventory/index";
import EmployeePage from "./app/employee/index";
import RootLayout from "./RootLayout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      {/* RootLayout sẽ là layout chung cho các route con */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/ordermanagement" element={<OrderManagementPage />} />
        <Route path="/inventory" element={<InventoryManagementPage />} />
        <Route path="/employee" element={<EmployeePage />} />
      </Route>
    </Routes>
  );
}

export default App;
