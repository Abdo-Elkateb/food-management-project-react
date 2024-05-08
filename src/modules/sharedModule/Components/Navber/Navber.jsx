
import logoNavber from "/src/assets/images/3.png";
import { useMyContext } from "../../../contextApi/MyContext";

export default function Navber() {
  const { loginData } = useMyContext()

  return (
    
    <>
    
      <div className='container-navbar mt-2'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="form-inline my-2 my-lg-0 w-75">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <div className=''>
              <a className="navbar-brand" href="#">Hey {loginData?.userName}</a>
              <img src={logoNavber} alt="logoNavber" />


            </div>



          </div>
        </nav>

      </div>


    </>
  )
}
