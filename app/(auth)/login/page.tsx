// Components
import GoogleSignIn from './GoogleSignIn'

// Utilities
import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
	return (
		<main className="container min-h-screen flex flex-col justify-between items-center py-[20%] lg:py-[10%]">
			<header className="flex flex-col align-center justify-center text-center">
				<figure className='flex justify-center'>
					<Image src="/icon-512x512.png" width={200} height={200} alt="Ganap Logo" />
				</figure>
				<section>
					<h1 className="text-[3rem] lg:text-[5rem] text-red-500 font-extrabold leading-12">Ganap</h1>
					<h3 className='text-lg lg:text-2xl leading-6'>Your one-stop guide for all events in UP Mindanao.</h3>
				</section>
			</header>
			<section className="flex flex-col gap-2 justify-center lg:max-w-[30%]">
				<GoogleSignIn />	
				<h3 className="text-[0.875rem] lg:text-base text-neutral-300">
					<span className="italic">Anong ganap? </span> 
					Catch up now by accessing the app through your 
					<Link href="https://itdc.up.edu.ph/uis/the-up-mail" target="_blank" className='text-red-500 font-semibold hover:underline'> UP mail</Link>.
				</h3>
			</section>
		</main>
	)
}