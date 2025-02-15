import { cn } from '@frontend/lib/utils'
import React from 'react'

type ArrowDownProps = {
  className?: string
}

const ArrowDown: React.FC<ArrowDownProps> = ({ className }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className={cn('lucide lucide-chevrons-down', className)}
    >
      <path d='m7 6 5 5 5-5' />
      <path d='m7 13 5 5 5-5' />
    </svg>
  )
}

export default ArrowDown
