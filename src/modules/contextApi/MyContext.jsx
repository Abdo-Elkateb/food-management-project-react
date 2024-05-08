import { useEffect, useState } from 'react';
import { createContext } from 'react';
import { useContext } from 'react';
import { jwtDecode } from "jwt-decode";



export const MyContext = createContext("");



const ContTextApi = ({ children }) => {

    const [loginData, setLoginData] = useState(null)
    let saveLoginData = () => {
        let encodedToken = localStorage.getItem("token")
        let decodedToken = jwtDecode(encodedToken)
        setLoginData(decodedToken)
        // console.log(loginData,"it come from navber")
        return loginData
        

    }
    useEffect(() => {
        if (localStorage.getItem("token")) {
            saveLoginData()
        }

    }, [])
    return (

        <div>
            <MyContext.Provider
                value={{
                    saveLoginData,
                    loginData

                }}>
                {children}
            </MyContext.Provider>
        </div>
    )
}





export default ContTextApi

export const useMyContext = () => {
    return useContext(MyContext);
};






