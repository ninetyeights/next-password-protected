'use client'

import {useSession} from 'next-auth/react';

export default function ClientProtected() {
    const {status} = useSession()

    if (status === 'loading') {
        return <main className="flex justify-center items-center flex-col min-h-screen bg-purple-200">
            <p>Loading</p>
        </main>
    }

    return (
        <main className="flex justify-center items-center flex-col min-h-screen bg-purple-200">
            <p>This content is unprotected!</p>
            {status === 'authenticated' ?
                <>
                    <h1 className="font-semibold text-3xl my-4">🔒️ Protected page - Client</h1>
                    <p>This page is password protected!</p>
                </>
                : <a href="/api/auth/signin?callbackUrl=/client-protected" className="bg-gray-900 text-white hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Sign In</a>}
            <p>This content is unprotected!</p>
        </main>
    )
}