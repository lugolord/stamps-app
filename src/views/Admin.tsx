import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import { login } from '../firebase/auth'
import { getUserByDni, addStamp } from '../firebase/db'
import AdminSidebar from '../components/admin/AdminSidebar'
import AdminCreateUser from '../components/admin/AdminCreateUser'
import AdminLogin from '../components/admin/AdminLogin'

export default function Admin () {
  const [search, setSearch] = useState('')
  const [stamps, setStamps] = useState(0)
  const [username, setUsername] = useState('')
  const maxStamps = 5
  const { user } = useAuth()

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

      {/* Contenido Principal */}
      <main className="flex-1 p-8">
        {/* Encabezado */}
        <header className="mb-8">
          <h2 className="text-3xl font-extrabold text-[#1C130D] tracking-tight">Panel de Control</h2>
          <p className="text-[#65584D] text-sm mt-1">Gestión de lealtad y clientes.</p>
        </header>

        {/* Rejilla de Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Tarjeta 2: Agregar Sello */}
          <div className="md:col-span-6 bg-white/60 backdrop-blur-sm p-6 rounded-2xl border border-[#EFE8DC] shadow-sm">
            <h3 className="text-lg font-bold text-[#1C130D] mb-4">Agregar Sello</h3>
            
            {/* Campo Buscar Cliente */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-[#65584D] mb-1.5">
                Buscar Cliente
              </label>
              <div className="relative">
                <svg className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C7A6B]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Buscar por nombre o ID..."
                  className="w-full pl-10 pr-4 py-2.5 bg-[#FAF7F2] border border-[#E3D9CC] rounded-lg text-sm text-[#1C130D] focus:outline-none focus:ring-2 focus:ring-[#C89B7B]"
                />
              </div>
            </div>
            <button 
              onClick={handleClick} 
              className='btn'
            >
              Buscar
            </button>

            {/* Tarjeta del Cliente Encontrado */}
            <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#E3D9CC]">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#EAD8CD] text-[#703B2B] flex items-center justify-center font-bold text-sm">
                    JP
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1C130D] text-sm leading-tight">{username}</h4>
                    <p className="text-xs text-[#8C7A6B]">ID: #10482</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-base font-black text-[#1C130D]">{stamps} / {maxStamps}</span>
                  <p className="text-[10px] font-bold text-[#8C7A6B] tracking-wider uppercase">SELLOS</p>
                </div>
              </div>

              {/* Barra de Progreso de Sellos */}
              <div className="w-full bg-[#E8DEC2]/40 h-3 rounded-full overflow-hidden mb-5">
                <div 
                  className="bg-[#C89B7B] h-full rounded-full transition-all duration-300"
                  style={{ width: `${(stamps / maxStamps) * 100}%` }}
                />
              </div>

              {/* Botón Agregar Sello */}
              <button
                onClick={handleAddStamp}
                disabled={stamps >= maxStamps}
                className="w-full bg-[#1C130D] hover:bg-[#332318] text-white py-3 px-4 rounded-xl font-medium text-sm flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                + Agregar Sello
              </button>
            </div>
          </div>

          <AdminCreateUser  />
        </div>
      </main>
    </div>
  )
}
