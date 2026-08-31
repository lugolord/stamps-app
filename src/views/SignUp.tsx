import { Link } from 'react-router'

function SignUp () {
  return (
    <div className='flex flex-col items-center justify-evenly h-screen'>
      <h1 className='text-4xl'>L'aura café</h1>
      <p className='text-gray-500'>Crea tu cuenta y empieza a acumular sellos 😄</p>
      <form className='flex flex-col border w-9/10 p-5 rounded'>
        <label htmlFor="name">Name</label>
        <input className='border mb-3 p-2 rounded' id='name' type="text" placeholder='Pepito' />
        <label htmlFor="lastname">Last name</label>
        <input className='border mb-3 p-2 rounded' id='lastname' type="text" placeholder='Perez' />
        <label htmlFor="email">Email</label>
        <input className='border mb-3 p-2 rounded' id='email' type="email" placeholder='user@email.com' />
        <label htmlFor="password">Password</label>
        <input className='border mb-3 p-2 rounded' id='password' type="password" placeholder='password' />
        <button className='bg-black text-white rounded py-2 cursor-pointer'>Crear cuenta</button>
      </form>
      <Link to='/'>Volver al login</Link>
    </div>
  )
}

export default SignUp
