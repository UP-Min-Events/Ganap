export default function GoogleSignIn() {
    return (
        <form action='/api/auth/signin' method="GET">
            <button className="w-40 lg:w-52 h-[2.5rem] rounded-xl bg-red-500 hover:bg-red-600 font-medium">Sign In</button>
        </form>
    )
}