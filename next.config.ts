import type { NextConfig } from "next";

   const nextConfig = {
     output: 'export',
     images: { unoptimized: true }, // only needed if you use next/image
   };
   export default nextConfig;
   