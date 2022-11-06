import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CourseContext } from "../../Root/Root";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [refresh, setRefresh] = useState(false);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  const pages = Math.ceil(count / size);

  //data load to view / data Read----------------------
  useEffect(() => {
    fetch(`http://localhost:5000/users?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers(data.data.users);
          setCount(data.data.count);

          //   setRefresh(!refresh);
        } else {
          swal("Data loading failed");
        }
      })
      .catch((error) => {
        swal("error.message");
      });
  }, [refresh, page, size]);
  console.log(count);

  //data Delete---------------------------------------------

  return (
    <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-2xl md:px-24 lg:px-8 ">
      <div>
        <p className="text-3xl text-cyan-900 text-center font-semibold bg-yellow-50 p-4 mx-6 rounded">
          User Information: Total Student- {users.length}
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
                <col className="w-50" />
              </colgroup>
              <thead className="dark:bg-gray-400">
                <tr className="">
                  <th className="p-3 text-left">Class Roll</th>
                  <th className="p-3 text-left">Name</th>
                  <th className="p-3 text-left">Fathers Name</th>
                  <th className="p-3 text-left">Mothers Name</th>
                  <th className="p-3 text-left">Group</th>
                  <th className="p-3 text-center">Subject Code</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr className="border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-200 text-left">
                    <td className="p-3">
                      <p>{user.Roll}</p>
                    </td>
                    <td className="p-3">
                      <p>{user.Name}</p>
                    </td>
                    <td className="p-3">
                      <p>{user.Fathers_Name}</p>
                    </td>
                    <td className="p-3">{user.Mother_Name}</td>
                    <td className="p-3 ">
                      <p>{user.Group}</p>
                    </td>
                    <td className="p-3 ">
                      <p>{user.Subject_Code}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="text-center mb-5">
      <span className="text-center text-xl font-semibold text-cyan-900">Current selection : {page}</span>
      <select onChange={event=>{
        setSize(event.target.value)
        setPage(0)
        }}  
        className="px-10 text-xl font-semibold bg-orange-300 rounded ml-5" name="" id="">
                    
                
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
                
            </select>
      </div>
      <div className="  text-gray-100 mx-6 text-center">
      
        
      
        {[...Array(pages).keys()].map((pageNo) => (
          <button
          key={pageNo}
          onClick={()=>{
            setPage(pageNo)
            
        }}
            type="button"
            title="Page"
            className={page===pageNo?" selected w-10 h-8 text-sm font-semibold border rounded shadow-md bg-orange-600 text-violet-900 border-violet-400":"w-10 h-8 text-sm font-semibold border rounded shadow-md bg-gray-900 text-violet-400 border-violet-400" }
          >
           {pageNo+1}
          </button>
        ))}

            
        
       
      </div>
      
    </div>
  );
};

export default Home;
