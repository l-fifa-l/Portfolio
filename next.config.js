// @ts-check
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{protocol: 'https', hostname: 'img.icons8.com'},{protocol: 'https', hostname: 'images.unsplash.com'} ],
      },
  }
   
  module.exports = nextConfig