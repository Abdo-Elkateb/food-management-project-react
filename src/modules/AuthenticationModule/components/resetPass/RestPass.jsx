import React from "react";
import logo from "/src/assets/images/4 4.svg";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLock } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RestPass() {
  const navigate = useNavigate()
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      let respone = await axios.post("https://upskilling-egypt.com:3006/api/v1/Users/Reset", data);
       toast.success('Password has been updated successfully"')
      navigate('/login')
    }
    catch (error) {
      toast.error(error.response.data.message)
    }


  };
  return (

    <div className="auth-container">
      <div className="container-fluid vh-100 bg-overlay">
        <div className="row  vh-100 justify-content-center align-items-center">
          <div className="col-md-6 bg-light p-4">
            <div className="text-center">
              <img className="logo" src={logo} alt="logo" />
            </div>
            <h3> Reset  Password</h3>
            <p>Please Enter Your Otp  or Check Your Inbox</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-ddon1">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      vlue: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invlid mail"
                    }
                  })}
                />
              </div>
              {errors.email && (
                <p className="alert alert-danger">{errors.email.message} </p>
              )}

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-ddon1">
                  <FontAwesomeIcon icon={faLock} />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="OTP"
                  {...register("seed", {
                    required: "OTP is required",
                    pattern: {
                      message: "Invlid seed"
                    }
                  })}
                />
              </div>
              {errors.password && (
                <p className="alert alert-danger">{errors.password.message} </p>
              )}
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-ddon1">
                  <FontAwesomeIcon icon={faLock} />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="New Password"
                  {...register("password", {
                    required: "password is required",
                    pattern: {
                      message: "Invlid Password"
                    }
                  })}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-ddon1">
                  <FontAwesomeIcon icon={faLock} />
                </span>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Confirm New Password"
                  {...register("confirmPassword", {
                    required: "confirmPassword is required",
                    pattern: {
                      message: "Invlid confirmPassword"
                    }
                  })}
                />
              </div>


              <div className="login p-3">
                <button className="bg-success text-light w-100 p-3 rounded-top border-0 ">
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

