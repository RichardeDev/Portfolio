/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "upload.wikimedia.org",
          port: "",
          pathname: "/wikipedia/commons/thumb/b/bc/Flag_of_Madagascar.svg/langfr-225px-Flag_of_Madagascar.svg.png",
        },
        {
          protocol: "https",
          hostname: "avatars.githubusercontent.com",
          port: "",
          pathname: "/{username}/v/{version}",
        },
      ],
    },
  };
  
  export default nextConfig;
  