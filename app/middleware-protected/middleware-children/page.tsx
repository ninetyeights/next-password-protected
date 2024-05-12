export default function Protected() {
    return (
        <main className="flex justify-center items-center flex-col min-h-screen bg-rose-200">
            <h1 className="font-semibold text-3xl mb-10 -mt-32">🔒️ Protected page - Middleware Children</h1>
            <p>This page is password protected!</p>
        </main>
    )
}