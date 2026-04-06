type BankIconProps = {
  initial: string
  bgColor: string   // tailwind bg class e.g. 'bg-red-600'
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-10 h-10 text-base',
  lg: 'w-12 h-12 text-lg',
}

export default function BankIcon({ initial, bgColor, size = 'md' }: BankIconProps) {
  return (
    <div
      className={`${sizes[size]} ${bgColor} rounded-xl flex items-center justify-center text-white font-black flex-shrink-0 select-none`}
    >
      {initial}
    </div>
  )
}
