import logo from '../assets/laura-logo.png'
import { resetStamps } from '../firebase/db'
import { useParams } from 'react-router'

interface LoyaltyCardProps {
  stampsCount: number
  totalStamps?: number
}

function LoyaltyCard ({ stampsCount, totalStamps = 5 }: LoyaltyCardProps) {
  const stamps = Array.from({ length: totalStamps })
  const { id } = useParams()

  return (
    <div className='aura aura-holo w-9/10 mb-10'>
      <div className='bg-white card p-5 flex flex-col gap-5'>
        <div className='flex justify-center'>
          <img className='size-18 bg-white rounded-full' src={logo} alt='logo' />
        </div>
        <p className='text-black text-2xl font-medium'>L'aura</p>
        <p className='text-black text-xs font-light'>Av. Hipólito Yrigoyen 4259, CABA</p>
        
        <p className='text-black font-semibold'>
          Tus sellos ({stampsCount}/{totalStamps})
        </p>

        <div className='grid grid-cols-5 gap-3 justify-items-center'>
          {stamps.map((_, index) => {
            const isStamped = index < stampsCount;

            return (
              <div
                key={index}
                className={`size-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                  isStamped
                    ? 'text-black bg-white scale-105 border border-gray-300'
                    : 'bg-stone-800 dark:bg-stone-200 text-stone-500 border border-dashed border-stone-600'
                }`}
              >
                {isStamped ? <img className='size-10' src={logo} alt="logo" /> : index + 1}
              </div>
            );
          })}
        </div>

        <p className='text-black'>
          {stampsCount >= totalStamps
            ? '🎉 ¡Tenes 1 cafe gratis!'
            : '1 café gratis al completar los 5 sellos'}
        </p>

        <button 
          className='btn w-full disabled:opacity-50' 
          disabled={stampsCount < totalStamps}
          onClick={() => id && resetStamps(id)}
        >
          Reclamar
        </button>
      </div>
    </div>
  )
}

export default LoyaltyCard
