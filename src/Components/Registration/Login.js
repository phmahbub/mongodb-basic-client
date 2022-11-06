import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/Context";


const Login = () => {
  const [error, setError] = useState('')
  console.log(error)
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')
  const {googleSignIn,gitSignIn, signIn, loading} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
  
  const handleGoogleSignIn = () =>{
    googleSignIn()
    .then(result=>{ 
        const user = result.user
        navigate(from, {replace: true})
    console.log(result.user)
    })
       
    .catch(error=>console.error(error))
  }

  const handleGitSignIn = () =>{
    gitSignIn()
    .then(result=>{
        const user = result.user
        navigate(from, {replace: true})
        
    })  
    .catch(error=>{
      setError(error)
      console.error(error)
    })
  }

  const handleEmail =(event)=>{
    const email = event.target.value
    console.log(email)
    setEmail(email)
  }

  const handlePassword =(event)=>{
    const password = event.target.value
    setPassword(password)
  }

  const handleSignIn = () =>{
    signIn(email, password)
    .then(result=>{
        const user = result.user
        navigate(from, {replace: true})
        
    })
    .catch(error=>{
      console.error(error)
      setError(error.message)
    })
  }





  return (
    <div className="flex justify-center my-12">
      <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-100 text-gray-800">
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>
        <p className="text-sm text-center dark:text-gray-400">
          Dont have account?
          <Link
            to="/signup"
            rel="noopener noreferrer"
            className="focus:underline hover:underline"
          >
            <span className="text-orange-500 hover:text-cyan-600"> Sign up here</span>
          </Link>
        </p>
        <div className="my-6 space-y-4">
          <button
            onClick={handleGoogleSignIn}
            aria-label="Login with Google"
            type="button"
            className="hover:bg-green-500 flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
            <p>Login with Google</p>
          </button>
          <button
            onClick={handleGitSignIn}
            aria-label="Login with GitHub"
            role="button"
            className="hover:bg-gray-500 flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-400 focus:ring-violet-400"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg>
            <p>Login with GitHub</p>
          </button>
         
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-400" />
          <p className="px-3 dark:text-gray-400">OR</p>
          <hr className="w-full dark:text-gray-400" />
        </div>
        <div
          noValidate=""
          action=""
          className="space-y-8 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            <div className="space-y-2">
              <label forhtml="email" className="block text-sm">
                Email address
              </label>
              <input
                onChange={handleEmail}
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="text-center w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-gray-100 text-gray-900 focus:dark:border-violet-400"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label forhtml="password" className="text-sm">
                  Password
                </label>
                <Link
                  rel="noopener noreferrer"
                  to = "/resetpassword"
                  className="text-xs hover:underline dark:text-gray-400"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                onChange={handlePassword}
                type="password"
                name="password"
                id="password"
                placeholder="*****"
                className="text-center w-full px-3 py-2 border rounded-md dark:border-gray-700 bg-gray-100 text-gray-900 focus:dark:border-violet-400"
              />
            </div>
            <p className="text-red-600">{error}</p>
          </div>
          <button
            onClick={handleSignIn}
            type="button"
            className="hover:bg-orange-400 w-full px-8 py-3 font-semibold rounded-md bg-slate-500 text-gray-100"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
