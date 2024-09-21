import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './pages/admin-dashboard/Admin';
import Client from "./pages/client-dashboard/Client";
import Login from './pages/login/Login';
import MainLayout from "./components/mainLayout/MainLayout"
import ClientTable from './pages/client-dashboard/client-table/ClientTable';
import AdminTable from './pages/admin-dashboard/admin-table/AdminTable';
const App = () => {
  return (
    <>
        <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route
        path="/*"
        element={
            <MainLayout>
              <Routes>
              <Route path="/admin" element={<Admin />} />
               <Route path="/admin/admin-table" element={<AdminTable />} />
              <Route path="/client" element={<Client />} />
              <Route path="/client/client-table" element={<ClientTable />} />
              </Routes>
            </MainLayout>
          
        }
      ></Route>
    </Routes>
    </>
  )
}


export default App;
