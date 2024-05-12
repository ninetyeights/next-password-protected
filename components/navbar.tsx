'use client'

import {getSession, signOut} from 'next-auth/react';
import {useEffect, useState} from 'react';
import Link from 'next/link';
import {Session} from 'next-auth';

export default function Navbar() {
    const [session, setSession] = useState<Session | null>(null);
    useEffect(() => {
        (async () => {
            const session = await getSession();
            console.log(session)
            setSession(session)
        })()
    }, [])
    return (
        <div className="flex flex-1 items-center justify-between sm:items-stretch bg-gray-900 p-2">
            <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                    <Link href="/" legacyBehavior>
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            Home</a>
                    </Link>
                    <Link href="/client-protected" legacyBehavior>
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            Client</a>
                    </Link>
                    <Link href="/protected" legacyBehavior>
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            Server</a>
                    </Link>
                    <Link href="/middleware-protected" legacyBehavior>
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            Middleware</a>
                    </Link>
                    <Link href="/unprotected" legacyBehavior>
                        <a className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                            Unprotected</a>
                    </Link>
                </div>
            </div>
            {session ?
                <div>
                    <button
                        onClick={() => signOut()}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium float-right">Sign
                        Out
                    </button>
                </div>
                : null}
        </div>
    )
}