import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { ProfileImage } from './ProfileImage'

export function ProfileHeader() {
  return (
    <header className="profile-header">
      <Link to="/" className="profile-header__identity" aria-label="Adewale Moses — Home">
        <ProfileImage size="sm" />
        <span className="profile-header__text">
          <span className="profile-header__name">{profile.name}</span>
          <span className="profile-header__meta">
            {profile.role} · {profile.location}
          </span>
        </span>
      </Link>
    </header>
  )
}
