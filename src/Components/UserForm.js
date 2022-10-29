import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserForm = () => {
  const [students, setStudents] = useState([])
  const [error, setError] = useState("");
  const [RegistrationNo, setRegistrationNo] = useState("");
  const [Name, setName] = useState("");
  const [FathersName, setFathersName] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Age, setAge] = useState("");
  const [DateOfBirth, setDateOfBirth] = useState("");

  const navigate = useNavigate();

  const handleRegNo = (event) => {
    const RegistrationNo = event.target.value;
    setRegistrationNo(RegistrationNo);
    console.log(RegistrationNo);
  };
  const handleName = (event) => {
    const name = event.target.value;
    setName(name);
    console.log(name);
  };
  const handleFathersName = (event) => {
    const FathersName  = event.target.value;
    setFathersName(FathersName);
    console.log(FathersName);
  };
  const handlePhoneNumber = (event) => {
    const PhoneNumber = event.target.value;
    setPhoneNumber(PhoneNumber);
    console.log(PhoneNumber);
  };
  const handleAge = (event) => {
    const Age= event.target.value;
    setAge(Age);
    console.log(Age);
  };
  const handleDob = (event) => {
    const DateOfBirth= event.target.value;
    setDateOfBirth(DateOfBirth);
    console.log(DateOfBirth);
  };

  const handleAddUser = () => {
    const user = {RegistrationNo, Name, FathersName, Age, DateOfBirth }
    fetch('http://localhost:5000/', {
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(user)
      
    })
    .then(res=>res.json())
    .then(data =>{
           
      console.log(data)
      const newUsers = [...students, data]
      setStudents(newUsers)
    })
    .catch(error=>console.error(error))
    console.log(user)
  };

  

  useEffect(()=>{
    fetch('http://localhost:5000/')
    .then(res=>res.json())
    .then(data => setStudents(data))
    
  }, [])


  return (
    <div className="grid grid-cols-2 m-12">
      <div className="flex justify-center my-12">
        <div className="flex flex-col w-full max-w-md p-6 shadow rounded-md sm:p-10 bg-gray-100 text-gray-900">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Student Data Form</h1>
            
          </div>
          <div className="space-y-12 ng-untouched ng-pristine ng-valid">
            <div className="space-y-4">
              <div>
                <label forHTML="email" className="block mb-2 text-sm">
                  Registration No
                </label>
                <input
                  onChange={handleRegNo}
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Registration No"
                  className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900"
                />
              </div>
              <div className="space-y-4">
                <div>
                  <label forHTML="email" className="block mb-2 text-sm">
                    Name
                  </label>
                  <input
                    onChange={handleName}
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Your full name"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900"
                  />
                </div>
                <div>
                  <label forHTML="email" className="block mb-2 text-sm">
                   Father's Name
                  </label>
                  <input
                    onChange={handleFathersName}
                    type="fname"
                    name="fname"
                    id="fname"
                    placeholder="Father's Name"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900"
                  />
                </div>
                
                <div>
                  <label forHTML="email" className="block mb-2 text-sm">
                   Phone Number
                  </label>
                  <input
                    onChange={handlePhoneNumber}
                    type="phone"
                    name="phone"
                    id="phone"
                    placeholder="Phone Number"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label forHTML="password" className="text-sm">
                      Age
                    </label>
                  </div>
                  <input
                    onChange={handleAge}
                    type="age"
                    name="age"
                    id="age"
                    placeholder="Age in Year"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900"
                  />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <label forHTML="password" className="text-sm">
                      Date of Birth
                    </label>
                  </div>
                  <input
                    onChange={handleDob}
                    type="date"
                    name="dob"
                    id="dob"
                    placeholder="Date of Birth"
                    className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900"
                  />
                </div>
              </div>
              <p className="text-red-500 text-center">{error}</p>
              <div className="space-y-2">
                <div>
                  <button
                    onClick={handleAddUser}
                    type="button"
                    className="w-full px-8 py-3 font-semibold rounded-md dark:bg-orange-400 dark:text-gray-900"
                  >
                    Submit
                  </button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div className="">
          <p className="text-3xl text-center text-purple-300 font-bold p-5 rounded bg-gray-600">
            Student Information
          </p>
          <div>
            <ol style={{listStyle:'decimal'}}>
              {
                students.map(student=><li>{student.Name}, {student.RegistrationNo},{student.FathersName}</li>)
              }
              </ol>
            
            
            </div>
        </div>
    </div>
  );
};

export default UserForm;
