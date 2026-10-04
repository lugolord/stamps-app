type Props = {
  search: string
  username: string
  stamps: number
  maxStamps: number
  handleAddStamp: () => void
}

function UserFoundCard ({ search, username, stamps, maxStamps, handleAddStamp } : Props) {
  return (
    <div className="bg-[#FAF7F2] p-5 rounded-xl border border-[#E3D9CC]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div>
            <h4 className="font-bold text-[#1C130D] text-sm leading-tight">{username}</h4>
            <p className="text-xs text-[#8C7A6B]">ID: #{search}</p>
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
  )
}

export default UserFoundCard
