import { Route, Routes } from 'react-router-dom';
import './App.css';
import Admin from './pages/admin-dashboard/Admin';
import Client from "./pages/client-dashboard/Client";
import Login from './pages/login/Login';
import MainLayout from "./components/mainLayout/MainLayout"
// function App() {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Login />} />
//         <Route path="/admin" element={<Admin />} />
//         <Route path="/client" element={<Client />} />
// </Routes>
//     </>
//   );
// }



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
        <Route path="/client" element={<Client />} />
              </Routes>
            </MainLayout>
          
        }
      ></Route>
    </Routes>
    </>
  )
}


export default App;
