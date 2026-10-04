import { useState } from 'react'
import logo from '../assets/laura-logo.png'
import { resetStamps } from '../firebase/db'
import { useParams } from 'react-router'
import { triggerFireworks } from '../utils/fireworks'
import UbicationSvg from './UbicationSvg'

interface LoyaltyCardProps {
  stampsCount: number
  totalStamps?: number
  onRewardClaimed?: () => void
}

function LoyaltyCard ({ stampsCount, totalStamps = 5, onRewardClaimed }: LoyaltyCardProps) {
  const { id } = useParams()
  
  const [isClaiming, setIsClaiming] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const displayStamps = isClaiming ? 0 : stampsCount

  const handleClaimReward = async () => {
    if (!id || isSubmitting || stampsCount < totalStamps) return

    setIsSubmitting(true)

    triggerFireworks()
    setIsClaiming(true)

    try {
      await resetStamps(id)
      
      if (onRewardClaimed) {
        onRewardClaimed()
      }
    } catch (error) {
      console.error('Error al resetear sellos:', error)
      
      setIsClaiming(false)
    } finally {
      setIsSubmitting(false)
    }
  }

  const stamps = Array.from({ length: totalStamps })

  return (
    <div className='aura aura-holo w-9/10 mb-10'>
      <div className='bg-white card p-5 flex flex-col gap-5'>
        <div className='flex justify-center'>
          <img className='size-18 bg-white rounded-full' src={logo} alt='logo' />
        </div>
        <p className='text-black text-2xl font-medium font-serif'>L'aura</p>
        <div className='flex items-center gap-1'>
          <UbicationSvg />
          <p className='text-black text-xs font-light'>
            Av. Hipólito Yrigoyen 4259, CABA
          </p>
        </div>
        
        <p className='text-black font-semibold'>
          Tus sellos ({displayStamps}/{totalStamps})
        </p>

        <div className='grid grid-cols-5 gap-3 justify-items-center'>
          {stamps.map((_, index) => {
            const isStamped = index < displayStamps;

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

        <p className='text-black font-medium'>
          {displayStamps >= totalStamps
            ? '🎉 ¡Tenes 1 cafe gratis!'
            : '1 café gratis al completar los 5 sellos'}
        </p>

        <button 
          className='btn w-full disabled:opacity-50' 
          disabled={displayStamps < totalStamps || isSubmitting}
          onClick={handleClaimReward}
        >
          {isSubmitting ? 'Reclamando...' : 'Reclamar'}
        </button>
      </div>
    </div>
  )
}

export default LoyaltyCard