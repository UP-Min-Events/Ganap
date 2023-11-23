import GoogleSignIn from './GoogleSignIn'

export default function Login() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-around">
            <header>
                <h1 className="text-[4.5rem] lg:text-[5rem] text-red-600 font-extrabold">Ganap</h1>
            </header>
            <GoogleSignIn />
        </main>
    )
}