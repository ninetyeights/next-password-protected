import {redirect} from 'next/navigation';
import {cookies} from 'next/headers';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/auth';

export default async function SignIn() {
    const session = await getServerSession(authOptions);
    const cookieStore = cookies()

    if (session) {
        redirect('/')
    }

    const csrfTokenCookie = `${process.env.NODE_ENV == 'production' ? '__Host-' : ''}next-auth.csrf-token`
    const csrfToken = cookieStore.get(csrfTokenCookie)?.value.split('|')[0]

    return (
        <div>
            <h2 className="mt-32 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Please enter
                your password.</h2>

            <form method="POST" action="/api/auth/callback/credentials">
                <div className="mt-6 flex flex-col justify-center items-center">
                    <input type="hidden" name="csrfToken" defaultValue={csrfToken}/>
                    <input name="password" type="password"
                           className="rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-3"/>
                    <button type="submit" className="px-8 mt-6 flex justify-center rounded-md bg-indigo-600 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">Confirm</button>
                </div>
            </form>
        </div>
    )
}