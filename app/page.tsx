import FeaturedCard from "@/components/FeatureCard";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { SignInButton, SignUpButton, SignedOut } from "@clerk/nextjs";
import { Globe, MessageCircle, Shield, Users, Video, Zap } from "lucide-react";

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

          <div className="w-full max-w-6xl">
            <div className="w-full flex items-center justify-center mb-16">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
              <div className="px-6">
                <div className="w-2 h-2 rounded-full bg-primary/60"></div>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
            </div>

            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Everything you need to stay Connected
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful Features designed for seamless Communications, whether
                you&apos;re chatting with friends or collaborating with Teams.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              <FeaturedCard
                icon={MessageCircle}
                title="Instant Messaging"
                description="Chat in real-time with lightning-fast delivery."
              />
              <FeaturedCard
                icon={Video}
                title="Crystal-Clear Video Calls"
                description="Seamless HD video meetings without lag."
              />
              <FeaturedCard
                icon={Shield}
                title="Enterprise-Grade Security"
                description="End-to-end encryption to protect your data."
              />
              <FeaturedCard
                icon={Users}
                title="Team Collaboration"
                description="Connect, share, and collaborate with your team."
              />
              <FeaturedCard
                icon={Zap}
                title="Blazing Fast Performance"
                description="Optimized for speed and reliability worldwide."
              />
              <FeaturedCard
                icon={Globe}
                title="Cross-Platform Access"
                description="Use Beam on web, desktop, and mobile seamlessly."
              />
            </div>
          </div>

          <div className="w-full max-w-4xl">
            <div className="rounded-2xl border bg-gradient-to-br from-primary/5 to-primary/10 p-12 text-center">
              <h2 className="text-3xl  sm:text-4xl font-bold mb-4">
                Ready to Transform your Conversations?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of users who’ve already discovered a smarter way
                to connect. Start your journey with{" "}
                <span className="font-semibold">Beam</span> today — it’s
                completely free.
              </p>

              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <SignedOut>
                  <SignUpButton mode="modal">
                    <Button size="lg" className="text-lg px-8 py-8 h-auto">
                      Get Started Free
                    </Button>
                  </SignUpButton>
                </SignedOut>
              </div>

              <div className="flex justify-center flex-col sm:flex-row items-center gap-6 mt-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  No Credit Card Required
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  No Credit Card Required
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  No Credit Card Required
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div>
              <span className="text-xl font-bold tracking-tight">Beam</span>
              <p className="text-sm text-muted-foreground mt-1">
                The Future of Communications
              </p>
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Support
              </a>
            </div>
          </div>
          <div className="border-t mt-8 pt-6 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Beam. This is a demo project and we
              are not affiliated with any of the brands mentioned in the video,
              including Beam. All usage is purely educational. If you believe
              any content infringes on rights, please contact us and we will
              promptly remove or update it.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
