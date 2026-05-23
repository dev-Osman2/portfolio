import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


// استخدام خط Inter العصري والنظيف
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdo | Full Stack Developer",
  description: "I build web applications using modern tools. I write clean code and focus on making things that work well.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={cn("dark", "font-sans", geist.variable)}>
      <body className={`${inter.className} bg-[#0a0a0a] text-zinc-100 antialiased selection:bg-cyan-500/30`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col relative overflow-hidden">
            {/* سنضيف الـ Navbar هنا لاحقاً */}
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}