import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const FAQs = () => {
  const navigate = useNavigate()
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);

  //data load to view / data Read----------------------
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.data);
          setRefresh(!refresh);
        } else {
          swal("Data loading failed");
        }
      })
      .catch((error) => {
        swal("error.message");
      });
  }, [refresh]);
  //   console.log(users);

  //data Delete---------------------------------------------
  const handleDelete = (user) => {
    const agree = window.confirm(
      `Are You Sure You Want to Delete : ${user.name}`
    );
    if (agree) {
      fetch(`http://localhost:5000/users/${user._id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            swal(data.message);
            
          } else {
            swal(data.error);
          }
        })
        .catch((error) => swal(error.message));
    } 
  };


  const handleUpdate=(user)=>{
    navigate(`/update/${user._id}`)

  }

  return (
    <div>
      <p className="text-3xl text-cyan-900 text-center font-semibold bg-yellow-50 p-4 mx-6 rounded">
        User Information: Total User - {users.length}
      </p>

      <div className="container p-2 mx-auto sm:p-4 dark:text-gray-900">
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <colgroup>
              <col />
              <col />
              <col />
              <col />
              <col />
              <col className="w-24" />
            </colgroup>
            <thead className="dark:bg-gray-400">
              <tr className="text-left">
                <th className="p-3">User ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Email</th>
                <th className="p-3">Photo</th>
                <th className="p-3">Address</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-200 ">
                  <td className="p-3">
                    <p>{user._id}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.name}</p>
                  </td>
                  <td className="p-3">
                    <p>{user.email}</p>
                  </td>
                  <td className="p-3">
                    <img
                      src={user.image}
                      className="w-10 rounded-full"
                      alt=""
                    />
                  </td>
                  <td className="p-3 ">
                    <p>{user.address}</p>
                  </td>
                  <td className="p-3 ">
                    <div className="flex justify-between">
                      <button
                        onClick={() => handleDelete(user)}
                        type="button"
                        className="px-6 py-3 mr-2 font-semibold rounded dark:bg-red-500 dark:text-white"
                      >
                        delete
                      </button>
                      <button
                        onClick={() => handleUpdate(user)}
                        type="button"
                        className="px-8 py-3 font-semibold rounded dark:bg-cyan-400 dark:text-gray-800"
                      >
                        Update
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default FAQs;
