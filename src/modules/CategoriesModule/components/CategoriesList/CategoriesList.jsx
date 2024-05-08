import Header from '../../../sharedModule/Components/Header/Header'
import catg from "/src/assets/images/Group catg.png";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import NoData from '../../../sharedModule/Components/NoData/NoData';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import DeleteData from '../../../sharedModule/Components/deleteData/DeleteData';


export default function CategoriesList() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [categories, setCategories] = useState([])

  const [showDelete, setShowDelete] = useState(false);


  const handleDeleteClose = () => setShowDelete(false);
  const handleDeleteShow = () => setShowDelete(true);



  const getCategories = async () => {

    try {
      let respone = await axios.get("https://upskilling-egypt.com:3006/api/v1/Category/?pageSize=10&pageNumber=1",
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      setCategories(respone.data.data);
      console.log(categories)
    }
    catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {
    getCategories()
  }, [])


  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      let respone = await axios.post("https://upskilling-egypt.com:3006/api/v1/Category/",
        data,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      );

      console.log(respone)
      toast.success('Add New Category successfully')
      handleClose()
      getCategories()
      // }

    }
    catch (error) {
      toast.error(error)

    }


  };


  return (
    <div>


      <Header title="Categories" description="You can now add your items that any user can order it from the Application and you can edit" urlImg={catg} />
      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-md-6">
            <h3>Categories Table Details</h3>
            <p>You can check all details</p>

          </div>
          <div className="col-md-6 d-flex justify-content-end">
            <button onClick={handleShow} className="add-new-Category">Add New Category</button>
            <div className='container-modal'>
              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <h3>Add Category</h3>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-group mb-3">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Category Name"
                        {...register("name", {
                          required: "name is required",
                        })}
                      />
                    </div>
                    {errors.name && (
                      <p className="alert alert-danger">{errors.name.message} </p>
                    )}
                    <div>
                      <button className="bg-success text-light w-100 p-3 rounded-top border-0 ">
                        login
                      </button>

                    </div>


                  </form>
                </Modal.Body>
              </Modal>


              

              <Modal show={showDelete} onHide={handleDeleteClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>
                    <h3>Delete Category</h3>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <DeleteData deleteItem={"Category"} />
                </Modal.Body>
                <Modal.Footer>
   <button type="button" className="btn btn-danger p-2">Delete</button>
                </Modal.Footer>
                
                
              </Modal>

            </div>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Category Name</th>
              <th scope="col">Category Dade</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.length > 0 ? categories.map((item, index) => (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.creationDate}</td>
                <td>
                  <FontAwesomeIcon className="text-warning mx-2" icon={faPenToSquare} />
                  <FontAwesomeIcon onClick={handleDeleteShow} className="text-danger" icon={faTrash} />
                </td>
              </tr>
            )
            ) : <NoData />}
            





          </tbody>
        </table>



      </div>

    </div>
  )
}
