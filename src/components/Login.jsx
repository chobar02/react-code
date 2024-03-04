import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const Login = () => {


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting},
  } = useForm()

  const onSubmit = (data) =>{ 
    console.log(data)
  }


  return (
    <form className='flex flex-col items-center gap-3 justify-center min-h-[70vh]' action="" onSubmit={handleSubmit(onSubmit)}>

    {isSubmitting && <div>Submitting...</div> }
      <div className='email flex flex-col '>
        <label className='text-[#17171f]' htmlFor="email">Email</label>
        <input className='py-1 px-1  border border-gray-700 focus:border-blue-800 focus:border-solid shadow-md rounded-sm bg-[#f9f4f4] border-solid text-[#17171f] text-[17px]' {...register("email", {required: {value: true, message:"This field is required"}})} type="email" name='email' placeholder='Email Address' />
        {errors.email && <div className='max-w-[14vw]'>{errors.email.message}</div> }
      </div>

      <div className='password flex flex-col '>
        <label className='text-[#17171f]' htmlFor="password">Password</label>
        <input className='py-1 px-1  border border-gray-700 focus:border-blue-800 focus:border-solid shadow-md rounded-sm bg-[#f9f4f4] border-solid text-[#17171f] text-[17px]' {...register("password", {required: {value:true, message:"This Field is Required"}, minLength:{value:8, message:" Password is too short Minimum Length should be 8" }, maxLength:{value: 16, message:"Password is too Long max length is 16"}})} type="password" placeholder='Password' />
        {errors.password && <div className='max-w-[14vw]'>{errors.password.message}</div> }
      </div>

      <div className='flex gap-3'>
        <input disabled={isSubmitting} className='bg-[#17171f] text-[#f9f4f4] px-2 py-1 rounded-md font-semibold cursor-pointer' type="submit" value="Log In" />
        <Link to="/signin">
        <button className='bg-[#17171f] text-[#f9f4f4] px-2 py-1 rounded-md font-semibold cursor-pointer'>Sign In</button>
        </Link>
      </div>
    </form>
  )
}

export default Login
