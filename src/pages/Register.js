import React,{useState} from 'react'
import useAuth from '../hooks/useAuth'


const Register = () => {
  const { createUserUsingPassowrd } = useAuth();
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const changeData = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }
  // console.log(data)

  const creatAccount = ()=>{
  
      createUserUsingPassowrd(data.email,data.password)
    
    
  }
  return (



    <section className="text-blueGray-700">
      <div className="container items-center px-5 py-12 lg:px-20">
        <div className="
   flex flex-col
   w-full
   max-w-md
   p-10
   mx-auto
   my-6
   transition
   duration-500
   ease-in-out
   transform
   bg-white
   rounded-lg
   md:mt-0
 ">
          <div className="mt-8">
            <div className="mt-6">
              <div action="#" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-600"> Email address </label>
                  <div className="mt-1">
                    <input id="email" onChange={(e)=>changeData(e)} name="email" type="email" autoComplete="email" required="" placeholder="Your Email" className="
               block
               w-full
               px-5
               py-3
               text-base text-neutral-600
               placeholder-gray-300
               transition
               duration-500
               ease-in-out
               transform
               border border-transparent
               rounded-lg
               bg-gray-50
               focus:outline-none
               focus:border-transparent
               focus:ring-2
               focus:ring-white
               focus:ring-offset-2
               focus:ring-offset-gray-300
             " />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="password" className="block text-sm font-medium text-neutral-600"> Password </label>
                  <div className="mt-1">
                    <input id="password" onChange={(e)=>changeData(e)} name="password" type="password" autoComplete="current-password" required="" placeholder="Your Password" className="
               block
               w-full
               px-5
               py-3
               text-base text-neutral-600
               placeholder-gray-300
               transition
               duration-500
               ease-in-out
               transform
               border border-transparent
               rounded-lg
               bg-gray-50
               focus:outline-none
               focus:border-transparent
               focus:ring-2
               focus:ring-white
               focus:ring-offset-2
               focus:ring-offset-gray-300
             " />
                  </div>
                </div>
                <div>
                  <button onClick={creatAccount} type="submit" className="
             flex
             items-center
             justify-center
             w-full
             px-10
             py-4
             text-base
             font-medium
             text-center text-white
             transition
             duration-500
             ease-in-out
             transform
             bg-blue-400
             rounded-xl
             hover:bg-blue-500
             focus:outline-none
             focus:ring-2
             focus:ring-offset-2
             focus:ring-blue-500
           "> Create A account
                  </button>
                </div>
              </div>
              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Register
