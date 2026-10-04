import LoyaltyCard from '../components/LoyaltyCard'
import { useParams } from 'react-router'
import { getUserByDni } from '../firebase/db'
import { useEffect, useState } from 'react'
import type { DocumentData } from 'firebase/firestore'

function UserDashboard () {
  const [user, setUser] = useState<DocumentData | undefined>()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      getUserByDni(id)
        .then(data => setUser(data))
    }
  }, [id])

  return (
    <div className='md:mx-40 lg:mx-96'>
      <header className='flex gap-5 mb-10 py-10 px-5'>
        <div>
          {/* <div className='size-15 rounded-full bg-gray-400'></div> */}
          <img src={`https://api.dicebear.com/10.x/lorelei/svg?seed=${id}`} className='size-15 rounded-full bg-gray-400'></img>
        </div>
        <div>
          <p>Hola {user?.name},</p>
          <p>Bienvenido de vuelta</p>
        </div>
      </header>
      <main className='flex justify-center'>
        <LoyaltyCard stampsCount={user?.stampsCount} />
      </main>
    </div>
  )
}

export default UserDashboard
