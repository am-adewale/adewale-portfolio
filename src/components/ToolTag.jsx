import {
  SiFirebase,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiThemoviedatabase,
} from 'react-icons/si'
import {
  MdAccessibilityNew,
  MdApi,
  MdDevices,
  MdLanguage,
  MdSpeed,
  MdViewModule,
  MdWeb,
} from 'react-icons/md'
import { TbSeo } from 'react-icons/tb'
import { VscSync } from 'react-icons/vsc'
import { FaRobot, FaCss3Alt, FaHtml5} from 'react-icons/fa'
import { HiOutlineSquares2X2 } from 'react-icons/hi2'

const icons = {
  'react.js': SiReact,
  react: SiReact,
  'javascript (es6+)': SiJavascript,
  javascript: SiJavascript,
  html5: FaHtml5,
  css3: FaCss3Alt,
  'tailwind css': SiTailwindcss,
  'rest apis': MdApi,
  php: SiPhp,
  mysql: SiMysql,
  supabase: SiSupabase,
  firebase: SiFirebase,
  'tmdb api': SiThemoviedatabase,
  accessibility: MdAccessibilityNew,
  performance: MdSpeed,
  seo: TbSeo,
  'ci/cd': VscSync,
  'cross-browser': MdLanguage,
  'cross-browser consistency': MdLanguage,
  'reusable components': MdViewModule,
  'mobile-first': MdDevices,
  'mobile-first layouts': MdDevices,
  'frontend development': MdWeb,
  'stack forthcoming': HiOutlineSquares2X2,
  'ai stack forthcoming': FaRobot,
}

function resolveIcon(label) {
  return icons[label.trim().toLowerCase()] ?? HiOutlineSquares2X2
}

export function ToolTag({ label }) {
  const Icon = resolveIcon(label)

  return (
    <span className="tag tag--tool">
      <Icon className="tag__icon" aria-hidden="true" />
      {label}
    </span>
  )
}
