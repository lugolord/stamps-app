import { Link, useNavigate } from 'react-router'
import { getUserByDni } from '../firebase/db'

function UserSearch () {
  const navigate = useNavigate()

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target
    const userDni = form.dni.value
    const user = await getUserByDni(userDni)

    if (user) navigate(`user/${userDni}`)
    else alert('Usuario no registrado')
  }

  return (
    <div className='flex flex-col items-center justify-evenly h-screen'>
      <h1 className='text-4xl'>L'aura café</h1>
      <h2 className='text-2xl'>Bienvenido</h2>
      <form className='flex flex-col border w-9/10 md:w-4/10 p-5 rounded' onSubmit={handleSubmit}>
        <label htmlFor="dni" className='mb-1'>DNI</label>
        <input className='border mb-3 p-2 rounded' id='dni' type="text" placeholder='Ingresa tu DNI aca' />
        <button className='bg-black text-white rounded py-2 cursor-pointer'>Consultar sellos</button>
      </form>
      <p>No tienes cuenta? <Link to='/register'>Registrate</Link></p>
    </div>
  )
}

export default UserSearch
