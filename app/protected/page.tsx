import {authOptions} from '@/auth';
import {getServerSession} from 'next-auth';
import {redirect} from 'next/navigation';

export default async function Protected() {
    const session = await getServerSession(authOptions);

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/protected')
    }

    return (
        <main className="flex justify-center items-center flex-col min-h-screen bg-amber-200">
            <h1 className="font-semibold text-3xl mb-10 -mt-32">🔒️ Protected page - Server</h1>
            <p>This page is password protected!</p>
        </main>
    )
}