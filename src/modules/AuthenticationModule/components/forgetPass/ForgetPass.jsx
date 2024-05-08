import logo from "/src/assets/images/4 4.svg";
import { useForm } from "react-hook-form";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgetPass() {
  let navigate = useNavigate()
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      let respone = await axios.post("https://upskilling-egypt.com:3006/api/v1/Users/Reset/Request", data);
        toast.success('Your request is being processed, please check your email')
        navigate('/restpass')


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
            <h3 className="mt-4">Forgot Your Password?</h3>
            <p className="mb-4">No worries! Please enter your email and we will send a password reset link </p>
            <form onSubmit={handleSubmit(onSubmit)
            
            }>
              <div className="input-group mb-5">
                <span className="input-group-text" id="basic-ddon1">
                  <FontAwesomeIcon icon={faEnvelope} />
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
              <button className="bg-success text-light w-100 p-3 rounded-top border-0 ">
                Submit
                <i className="fa-solid fa-envelope"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
