import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import logo from '../../assets/laura-logo.png'

function AdminSidebar () {
  const [activeTab, setActiveTab] = useState('clientes')
  const { logOut } = useAuth()

  const handleLogout = () => logOut()
    
  return (
    <aside className="w-64 bg-[#FAF7F2] p-6 flex flex-col justify-between border-r border-[#EFE8DC]">
        <div>
          {/* Logo y Nombre */}
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2">
              {/* Icono Taza de Café */}
              <img className='size-15 rounded-full' src={logo} alt="logo" />
            </div>
            <div>
              <h1 className="font-bold text-lg leading-tight text-[#1C130D]">L'aura</h1>
              <p className="text-sm font-semibold text-[#1C130D]">Admin</p>
            </div>
          </div>

          {/* Navegación */}
          <nav className="space-y-1">
            <button
              onClick={() => setActiveTab('clientes')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                activeTab === 'clientes'
                  ? 'bg-[#F2D7CD] text-[#703B2B]'
                  : 'text-[#65584D] hover:bg-[#EFE8DC]'
              }`}
            >
              {/* Icono Clientes */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0M15 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM7 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0z" />
              </svg>
              Clientes
            </button>

            <button
              onClick={() => setActiveTab('estadisticas')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                activeTab === 'estadisticas'
                  ? 'bg-[#F2D7CD] text-[#703B2B]'
                  : 'text-[#65584D] hover:bg-[#EFE8DC]'
              }`}
            >
              {/* Icono Estadísticas */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              Estadísticas
            </button>

            <button
              onClick={() => setActiveTab('configuracion')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-sm transition-colors ${
                activeTab === 'configuracion'
                  ? 'bg-[#F2D7CD] text-[#703B2B]'
                  : 'text-[#65584D] hover:bg-[#EFE8DC]'
              }`}
            >
              {/* Icono Configuración */}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Configuración
            </button>
          </nav>
        </div>

        {/* Cerrar Sesión */}
        <button onClick={handleLogout} className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-[#65584D] hover:text-[#1C130D] transition-colors">
          {/* Icono Cerrar Sesión */}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Cerrar Sesión
        </button>
      </aside>
  )
}

export default AdminSidebar
