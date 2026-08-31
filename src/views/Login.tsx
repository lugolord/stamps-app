function Login () {
  return (
    <div className='flex flex-col items-center justify-evenly h-screen'>
      <h1 className='text-4xl'>L'aura café</h1>
      <h2 className='text-2xl'>Bienvenido</h2>
      <form className='flex flex-col border w-9/10 p-5 rounded'>
        <label htmlFor="email">Email</label>
        <input className='border mb-3 p-2 rounded' id='email' type="email" placeholder='user@email.com' />
        <label htmlFor="password">Password</label>
        <input className='border mb-3 p-2 rounded' id='password' type="password" placeholder='password' />
        <button className='bg-black text-white rounded py-2 cursor-pointer'>login</button>
      </form>
      <p>No tienes cuenta? Registrate</p>
    </div>
  )
}

export default Login
