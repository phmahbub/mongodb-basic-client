import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

const UpdateProduct = () => {
    const router = useParams()
    let {id} = router
    const [user, setUser] = useState({});
    const [updatedUser, setUpdatedUser] = useState({})
    const navigate = useNavigate()

    // console.log(user)

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${id}`)
        .then(res=>res.json())
        .then(data=>{
            if(data.success){
                setUser(data.data)
            }else{
                swal(data.error)
            }
        })
        .catch(error=>swal(error.message))
    }, [id])



//     const handleUpdateUser = (event) => {
//     event.preventDefault();
//     // console.log(user)

    
//   };
const handleInputChange = (event) => {
    const value = event.target.value;
    const field = event.target.name;
    const newUser = { ...user };
    newUser[field] = value;
    setUpdatedUser(newUser);
    console.log(value)
    // console.log(newUser)
  };
const handleUpdate =(event)=>{
    event.preventDefault()
    console.log(updatedUser)

    fetch(`http://localhost:5000/users/${updatedUser._id}`, {
        method: "PATCH",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(updatedUser)
    }).then(res=>res.json())
    .then(data=>{
        if(data.success){
            swal("data.message")
            navigate('/faqs') 
        } else{
            swal(data.error)
        }
    }).catch(error=>swal(error.message))
  
}
  return (
    <section className="p-6 dark:text-gray-800 dark:bg-gray-50">
      <form
        onSubmit={handleUpdate}
        novalidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-200">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">Profile</p>
            <p className="text-xs">Personal Information</p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-2">
              <label for="username" className="text-sm">
                Username
              </label>
              <input
                onChange={handleInputChange}
                defaultValue={user.name}
                name="name"
                type="text"
                required
                placeholder="Username"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-400 dark:text-gray-700"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="email" className="text-sm">
                Email
              </label>
              <input
                onChange={handleInputChange}
                defaultValue={user.email}
                name="email"
                type="email"
                required
                placeholder="email"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-400 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="website" className="text-sm">
                Website
              </label>
              <input
                onChange={handleInputChange}
                defaultValue={user.image}
                name="image"
                type="url"
                required
                placeholder="https://"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-400 dark:text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label for="Address" className="text-sm">
                Address
              </label>
              <input
                onChange={handleInputChange}
                defaultValue={user.address}
                name="address"
                type="address"
                required
                placeholder="Address"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-400 dark:text-gray-900"
              ></input>
            </div>
            <button
              type="submit"
              className=" text-center px-4 py-2 border rounded-md dark:border-gray-700 bg-orange-600 text-white font-bold"
            >
              Update
            </button>

            <div className="col-span-full">
              <label for="bio" className="text-sm">
                Photo
              </label>
              <div className="flex items-center space-x-2">
                <img
                  src={user?.image}
                  alt=""
                  className="w-10 h-10 rounded-full dark:bg-gray-500 dark:bg-gray-700"
                />
                <span>{user?.name}</span>
              </div>
            </div>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default UpdateProduct;
