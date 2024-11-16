/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        port: '',
        pathname: '/**',
      },  
      {
        protocol: 'https',
        hostname: 'www.mayfairgallery.com',
        port: '',
        pathname: '/**',
      },  {
        protocol: 'https',
        hostname: 'museumqualityart.com',
        port: '',
        pathname: '/**',
      },  
   
    
      {
        protocol: 'https',
        hostname: "i.ebayimg.com",
        port: '',
        pathname: '/**',
      },  {
        protocol: 'https',
        hostname: 'collectionapi.metmuseum.org',
        port: '',
        pathname: '/**',
      },
     
      {
          protocol: 'https',
          hostname: 'encrypted-tbn0.gstatic.com',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: '"i0.wp.com"',
          port: '',
          pathname: '/**',
        },
        {
          protocol: 'https',
          hostname: "img.freepik.com",
          port: '',
          pathname: '/**',
        }, {
          protocol: 'https',
          hostname: 'img.freepik.com',
          port: '',
          pathname: '/account123/**',
        },
        
       
    ],
  },
};
export default nextConfig;