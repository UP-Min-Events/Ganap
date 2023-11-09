/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
            {
                // Apply these headers to all routes in your application.
                source: '/(.*)',
                headers: [
                    {
                        key: 'Referrer-Policy',
                        value: 'no-referrer-when-downgrade',
                    },
                ],
            },
        ]
    },
    experimental: {
        swcPlugins: [['@swc-jotai/react-refresh', {}]],
    },
}

module.exports = nextConfig
