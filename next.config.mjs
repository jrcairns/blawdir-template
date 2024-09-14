/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                hostname: 'lh3.googleusercontent.com',
                protocol: 'https',
            },
        ],
    },
};

export default nextConfig;
