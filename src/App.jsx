
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MasterLayout from "./modules/sharedModule/Components/masterLayout/MasterLayout";
import NotFound from "./modules/sharedModule/Components/NotFound/NotFound";
import Dashborad from "./modules/HomeMoudels/componets/Dashborad/Dashborad";
import RecpiceList from "./modules/RecpiceMouels/components/recpiceList/RecpiceList";
import CategoriesList from "./modules/CategoriesModule/components/CategoriesList/CategoriesList";
import UsersList from "./modules/UserModule/components/UsersList/UsersList";
import AuthLayout from "./modules/sharedModule/Components/AuthLayout/AuthLayout";
import Register from "./modules/AuthenticationModule/components/register/Rgister";
import ForgetPass from "./modules/AuthenticationModule/components/forgetPass/ForgetPass";
import RestPass from "./modules/AuthenticationModule/components/resetPass/RestPass";
import Login from "./modules/AuthenticationModule/components/login/Login";
import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react";
import { get } from "react-hook-form";
import { jwtDecode } from "jwt-decode";

function App() {
  const [loginData, setLoginData] = useState(null)
  let saveLoginData = ()=> {
    let encodedToken = localStorage.getItem("token")
    let decodedToken = jwtDecode(encodedToken)
    setLoginData(decodedToken)

  }
  useEffect(()=> {
    if(localStorage.getItem("token")) {
      saveLoginData()
    }

  }, [])
  let routes = createBrowserRouter([
    {
      path: "dashborad",
      element: <MasterLayout />,
      errorElement: <NotFound />,
      children: [
        {
          path: "",
          element: <Dashborad />,
        },
        {
          path: "recipes",
          element: <RecpiceList />,
        },
        {
          path: "categories",
          element: <CategoriesList />,
        },
        {
          path: "users",
          element: <UsersList />,
        }
      ],
    },
    {
      path: "/",
      element: <AuthLayout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true, element: <Login saveLoginData={saveLoginData} />
        },
        {
          path: "login",
          element: <Login aveLoginData={saveLoginData} />
        },
        {
          path: "register",
          element: <Register />,
        },
        {
          path: "forgetpass",
          element: <ForgetPass />,
        },
        {
          path: "restpass",
          element: <RestPass />,
        }

      ],

    },

  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes}></RouterProvider>
    </>

  )

}

export default App;
