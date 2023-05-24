/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'avatar.githubusercontent.com'
        ]
    }

}

module.exports = {
    ...nextConfig,
    env: {
        GITHUB_ID: process.env.GITHUB_ID,
        GITHUB_SECRET: process.env.GITHUB_SECRET,
        NEXT_LOCAL_URL: process.env.NEXT_LOCAL_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    }
}
