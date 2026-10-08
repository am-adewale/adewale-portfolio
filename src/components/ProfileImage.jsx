import profileImage from '../assets/profile.jpg'

export function ProfileImage({ size = 'sm', alt = 'Portrait of Adewale Moses' }) {
  const isHero = size === 'hero'

  return (
    <div className={`avatar avatar--${size}`}>
      <img
        src={profileImage}
        alt={alt}
        width={isHero ? 352 : 40}
        height={isHero ? 352 : 40}
        fetchPriority={isHero ? 'high' : 'auto'}
        decoding={isHero ? 'sync' : 'async'}
      />
    </div>
  )
}
