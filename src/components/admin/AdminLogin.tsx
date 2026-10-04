type AdminLoginProps = {
  handleSubmit: (e: React.SubmitEvent<HTMLFormElement>) => void
}

function AdminLogin ({ handleSubmit } : AdminLoginProps) {
  return (
    <div className='flex flex-col gap-5 justify-center items-center h-screen'>
      <h1 className='text-2xl font-medium'>L'aura</h1>
      <p>Autenticate para poder acceder al dashboard de admin</p>
      <form className='flex flex-col border w-9/10 md:w-4/10 p-5 rounded' onSubmit={handleSubmit}>
        <label htmlFor="email" className='mb-1'>Email</label>
        <input className='border mb-3 p-2 rounded' id='email' type="email" placeholder='pepito@gmail.com' />
        <label htmlFor="password" className='mb-1'>Password</label>
        <input className='border mb-3 p-2 rounded' id='password' type="text" placeholder='password' />
        <button className='bg-black text-white rounded py-2 cursor-pointer'>Consultar sellos</button>
      </form>
    </div>
  )
}

export default AdminLogin
