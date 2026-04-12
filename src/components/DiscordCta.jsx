import { DISCORD_INVITE_URL } from '../config/links.js'

const base =
  'inline-flex items-center justify-center gap-2 text-sm font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-950'

const variants = {
  primary:
    'border border-neutral-950 bg-neutral-950 px-8 py-3 text-white hover:bg-neutral-900',
  outline:
    'border border-neutral-950 bg-transparent px-8 py-3 text-neutral-950 hover:bg-neutral-950 hover:text-white',
  compact:
    'border border-neutral-950 bg-transparent px-5 py-2.5 text-neutral-950 hover:bg-neutral-950 hover:text-white',
  link: 'border-0 bg-transparent px-0 py-0 text-neutral-700 underline decoration-neutral-300 underline-offset-4 hover:text-neutral-950 hover:decoration-neutral-950',
}

/**
 * Discord invite — uses DISCORD_INVITE_URL from ../config/links.js
 */
export default function DiscordCta({
  variant = 'outline',
  className = '',
  children = 'Join Discord',
}) {
  return (
    <a
      href={DISCORD_INVITE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant] ?? variants.outline} ${className}`.trim()}
    >
      {children}
    </a>
  )
}
