import StampsCard from '../components/StampsCard'

function UserDashboard () {
  return (
    <div>
      <header className='flex justify-between mb-20 p-5'>
        <p className='text-2xl'>Hola, Pepito</p>
        <button>logout</button>
      </header>
      <main>
        <h1 className='text-center text-4xl'>Tus sellos</h1>
        <p className='text-center mb-20'>Disfruta de tu café. Nosotros te invitamos el sexto.</p>
        <div className='flex flex-col justify-center items-center'>
          <p className='mb-5 text-2xl'>Progreso actual 4/5 sellos</p>
          <StampsCard />
        </div>
      </main>
    </div>
  )
}

export default UserDashboard
