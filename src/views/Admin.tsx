import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { login } from '../firebase/auth'
import { getUserByDni, addStamp } from '../firebase/db'
import AdminSidebar from '../components/admin/AdminSidebar'
import AdminCreateUser from '../components/admin/AdminCreateUser'
import AdminLogin from '../components/admin/AdminLogin'
import UserFoundCard from '../components/admin/UserFoundCard'

export default function Admin () {
  const [search, setSearch] = useState('')
  const [stamps, setStamps] = useState(0)
  const [username, setUsername] = useState('')
  const { user } = useAuth()
  const maxStamps = 5

  const handleAddStamp = () => {
    if (stamps < maxStamps) {
      setStamps(stamps + 1)
      addStamp(search)
    }
  }

  const handleAdminLogin = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value
    login(email, password)
  }

  const handleClick = async () => {
    const client = await getUserByDni(search)
    setStamps(client?.stampsCount)
    setUsername(client?.name)
  }

  if (!user) {
    return (
      <AdminLogin handleSubmit={handleAdminLogin} />
    )
  }

  return (
    <div className="flex min-h-screen bg-[#FAF7F2] text-[#2D241E] font-sans">
      <AdminSidebar />

      <main className="flex-1 p-8">
        <header className="mb-8">
          <h2 className="text-3xl font-extrabold text-[#1C130D] tracking-tight">Panel de Control</h2>
          <p className="text-[#65584D] text-sm mt-1">Gestión de lealtad y clientes.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-6 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#EFE8DC] shadow-sm">
            <h3 className="text-lg font-bold text-[#1C130D] mb-4">Agregar Sello</h3>
    
            <div className="mb-5">
              <label className="block text-xs font-semibold text-[#65584D] mb-1.5">
                Buscar Cliente
              </label>
              <div className='flex gap-1'>
                <div className="relative w-9/10">
                  <svg className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7A6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar por DNI"
                    className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] border border-[#E3D9CC] rounded-lg text-sm text-[#1C130D] focus:outline-none focus:ring-2 focus:ring-[#C89B7B]"
                  />
                </div>
                <button 
                  onClick={handleClick} 
                  className='btn'
                >
                  Buscar
                </button>
              </div>
            </div>

            {username ? (
              <UserFoundCard 
                handleAddStamp={handleAddStamp}
                maxStamps={maxStamps}
                search={search}
                stamps={stamps}
                username={username}
              />
            ) : ''}
          </div>
          <AdminCreateUser  />
        </div>
      </main>
    </div>
  )
}
