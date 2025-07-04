import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// import { ClerkProvider, SignIn, SignUp, SignedIn, SignedOut } from '@clerk/nextjs'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PDF Chat",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <ClerkProvider>
    //   <html lang="en">
    //     <body
    //       className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    //     >
    //       <section className="min-h-screen w-screen flex items-center justify-center">
    //         <SignedOut>
    //           <SignIn />
    //         </SignedOut>
    //       </section>
    //       <SignedIn>
    //         {children}
    //       </SignedIn>
    //     </body>
    //   </html>
    // </ClerkProvider>
    <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            {children}
        </body>
      </html>
  );
}
