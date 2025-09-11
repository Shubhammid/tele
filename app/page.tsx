import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignInButton, SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="flex-1 flex flex-col items-center px-4 py-16 sm:px-6 text-center gap-20">
        <div className="max-w-4xl space-y-8 relative">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-950/20 dark:via-indigo-950/20 dark:to-purple-950/20 rounded-3xl blur-3xl scale-150 opacity-60"></div>

          <div className="max-w-4xl space-y-8 relative">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
              Connect Instanly.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                Chat Smarter
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              The Modern Messaging Platform that combines lighting-fast chat and
              crystal-clear video calls in one seamless experience
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-6">
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="lg" className="text-lg px-8 py-8 h-auto">
                  Start Chatting Free
                </Button>
              </SignInButton>
            </SignedOut>
          </div>

          <div className="pt-1 text-center">
            <p className="text-sm text-muted-foreground mb-6 tracking-wide">
              🌍 Trusted by thousands of users worldwide
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border max-w-3xl mx-auto">
              <div className="px-6 py-4 space-y-2">
                <div className="text-4xl font-bold text-foreground">50K+</div>
                <p className="text-sm text-muted-foreground">Active Users</p>
              </div>
              <div className="px-6 py-4 space-y-2">
                <div className="text-4xl font-bold text-foreground">1M+</div>
                <p className="text-sm text-muted-foreground">Messages Sent</p>
              </div>
              <div className="px-6 py-4 space-y-2">
                <div className="text-4xl font-bold text-foreground">99.9%</div>
                <p className="text-sm text-muted-foreground">Uptime</p>
              </div>
            </div>
          </div>

          
        </div>
      </main>
    </div>
  );
}
