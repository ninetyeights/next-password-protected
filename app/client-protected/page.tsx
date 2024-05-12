'use client'

import {useSession} from 'next-auth/react';

export default function Protected() {
    const {status} = useSession({required: true})

    if (status == 'loading') {
        return 'Loading...'
    }

    return (
        <main className="flex justify-center items-center flex-col min-h-screen bg-purple-200">
            <h1 className="font-semibold text-3xl mb-10 -mt-32">🔒️ Protected page - Client</h1>
            <p>This page is password protected!</p>
        </main>
    )
}