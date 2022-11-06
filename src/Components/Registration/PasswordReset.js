import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { AuthContext } from '../../Context/Context';

const PasswordReset = () => {
    const {passwordResetEmail, auth} = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const handleEmail =(event)=>{
        const email = event.target.value
        setEmail(email)
        console.log(email);
      }

      const handlePasswordReset =()=>{
        if(!email){
            swal('Warning: Please Enter Your Email')
            return
        }
        passwordResetEmail(email)
        .then(()=>{
            swal('Password reset email sent. Please check your inbox/spam folder')
        })
        .catch((error)=>{
            console.log(error)
        })
      }
    return (
        <div className="flex justify-center my-12">
      <div className="flex flex-col w-full max-w-md p-6 shadow mb-12 rounded-md sm:p-10 bg-gray-100 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Reset Password</h1>
          
        </div>
        <div
          
          className="space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div className="space-y-4">
            
            <div>
              <label forHTML="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                onBlur={handleEmail}
                type="email"
                name="email"
                id="email"
                placeholder="leroy@jenkins.com"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-100 dark:text-gray-900"
              />
            </div>
            
          </div>
          <div className="space-y-2">
            <div>
              <button
              onClick={handlePasswordReset}
                type="button"
                className="w-full px-8 py-3 font-semibold rounded-md dark:bg-orange-400 dark:text-gray-900"
              >
                Send Password Reset Link
              </button>
            </div>
            <p className="px-6 text-sm text-center dark:text-gray-400">
              Do you have an account?
              <Link
                rel="noopener noreferrer"
                to='/login'
                className="hover:underline dark:text-violet-400"
              >
              <span className="text-purple-500"> Sign in</span>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default PasswordReset;