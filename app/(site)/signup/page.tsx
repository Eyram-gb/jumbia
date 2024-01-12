import React from 'react'
import { useFormState } from 'react-dom'
import { createUser } from '../lib/actions/signup'

const Signup = () => {
  return (
    <div className='h-[90vh] flex justify-center items-center'>
      <form action={createUser} className='w-[500px] my-auto p-5 rounded-xl shadow-md border border-teal-100'>
        <div className='space-y-8'>
          <div className='w-full space-y-2'>
            <label htmlFor="" className='pl-4 text-xs text-cyan-500'>Username</label>
            <input type="text" placeholder='Username' className='w-full py-2 px-4 border outline-none rounded-md' />
          </div>
          <div className='w-full space-y-2'>
            <label htmlFor="" className='pl-4 text-xs text-cyan-500'>Password</label>
            <input type="password" placeholder='Password' className='w-full py-2 px-4 border outline-none rounded-md' />
          </div>
          <div className='w-full flex justify-center'>
            <button className='py-2.5 px-8 rounded-lg bg-teal-600 text-white text-sm font-bold tracking-wider'>Register</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup