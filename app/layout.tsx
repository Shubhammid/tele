import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "@/components/ConvexClientProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "📞 Tele – Real-time Chat & Video Calling App",
  description:
    "A modern full-stack chatting and video calling application built with Next.js 15, Convex, Clerk, Stream Chat & Video, and TailwindCSS. Secure, scalable, and real-time communication platform with authentication, group chats, HD video calls, and responsive design.",
  keywords: [
    "Tele",
    "Chat App",
    "Video Calling App",
    "Next.js 15",
    "Convex",
    "Clerk",
    "Stream Chat",
    "Stream Video",
    "TailwindCSS",
    "Real-time Messaging",
    "Group Chats",
    "Authentication",
  ],
  authors: [{ name: "Shubham Midgule" }],
  creator: "Shubham Midgule",
  metadataBase: new URL("https://shubhamchat.vercel.app"),
  openGraph: {
    title: "📞 Tele – Real-time Chat & Video Calling App",
    description:
      "Real-time chat and HD video calling app built with Next.js, Convex, Clerk, and Stream, Secure, scalable, and responsive communication platform.",
    url: "https://shubhamchat.vercel.app",
    siteName: "Tele",
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider
          signInFallbackRedirectUrl="/dashboard"
          signUpFallbackRedirectUrl="/dashboard"
        >
          <ConvexClientProvider>{children}</ConvexClientProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
