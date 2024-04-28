import React from "react";
import logo from "/src/assets/images/4 4.svg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';


export default function Login() {
  const navigate = useNavigate()
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      let respone = await axios.post("https://upskilling-egypt.com:3006/api/v1/Users/Login", data);
      localStorage.setItem("token",respone.data.token)
        toast.success('login successfully')
        navigate('/dashborad')
      // }

    }
    catch (error) {
      toast.error(error.response.data.message)

    }


  };
  return (
    <>
      <div className="auth-container">
        <div className="container-fluid vh-100 bg-overlay">
          <div className="row  vh-100 justify-content-center align-items-center">
            <div className="col-md-6 bg-light p-4">
              <div className="text-center">
                <img className="logo" src={logo} alt="logo" />
              </div>
              <h3>Login in</h3>
              <p>Welcome Back! Please enter your details </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-ddon1">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <div>
                    </div>
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your E-mail"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invlid mail"
                      }
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="alert alert-danger">{errors.email.message} </p>
                )}

                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <FontAwesomeIcon icon={faLock} />
                  </span>

                  <input
                    type="text"
                    className="form-control"
                    id="floatingInputGroup1"
                    placeholder="Enter your E-mail"
                    {...register("password", {
                      required: "password is required",
                      pattern: {
                        message: "Invlid password",
                      },
                    })}
                  />
                </div>

                {errors.password && (
                  <p className="alert alert-danger">{errors.password.message} </p>
                )}

                <div className="links d-flex justify-content-between">
                  <span>Register Now?</span>
                  <Link className="forgetpass" to="forgetpass">Forgot Password?</Link>
                </div>  
                <div className="login p-3">
                  <button className="bg-success text-light w-100 p-3 rounded-top border-0 ">
                    login
                    <i className="fa-solid fa-envelope"></i>
                  </button>
                  <i className="fa-solid fa-envelope"></i>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
