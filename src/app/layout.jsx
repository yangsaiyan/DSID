"use client";
import "./globals.css";
import { Providers } from "./Providers";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <body
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          backgroundImage: `linear-gradient(145deg, rgba(73,73,73,0.6) 0%, rgba(0,0,0,1) 100%), 
          url("/assets/images/indexBackground.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
