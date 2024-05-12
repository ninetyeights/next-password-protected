import {withAuth} from 'next-auth/middleware';

export default withAuth({
    secret: 'testingsecret'
})

export const config = {matcher: ['/middleware-protected/:path*']}