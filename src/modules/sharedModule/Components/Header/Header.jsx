import React from 'react'




export default function Header({title,description,urlImg}) {
  return (
    <>
    <div className='container-fluid rounded container-header'>
      <div className="row justify-content-center align-items-center p-4">
        <div className="col-md-8">
          <div className="content">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          
        </div>
        <div className='col-md-4'>
          <div className="img">
            <img src={urlImg} alt="Vector"/>


          </div>

        </div>
      </div>

    </div>

    </>
  )
}
