// Utilities
import Link from 'next/link'

export default function EventInstance() {
  return (
    <Link href='/event'>
      <div className="bg-green-100 text-black rounded text-xs lg:text-sm mb-1 p-[0.125rem] cursor-pointer">
        Meeting
      </div>
    </Link>
  )
}