function StampsCard () {
  return (
    <div className="hover-3d">
      {/* content */}
      <figure className="max-w-100 rounded-2xl bg-white">
        <div className='flex flex-col justify-center items-center gap-5 h-50 w-90'>
          <div className='flex gap-5'>
            <div className='size-20 rounded-full bg-black'></div>
            <div className='size-20 rounded-full bg-black'></div>
            <div className='size-20 rounded-full bg-black'></div>
          </div>
          <div className='flex gap-5'>
            <div className='size-20 rounded-full bg-black'></div>
            <div className='size-20 rounded-full bg-black'></div>
            <div className='size-20 rounded-full bg-black flex justify-center items-center'>free</div>
          </div>
        </div>
      </figure>
      {/* 8 empty divs needed for the 3D effect */}
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default StampsCard
