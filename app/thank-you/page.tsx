import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, CheckCircle, Heart, Users } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-[#3D405B]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-[#F2CC8F]/30">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#E07A5F] flex items-center justify-center text-white font-bold">
              O
            </div>
            <span className="text-xl font-bold">OathOS</span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-[#81B29A] text-[#81B29A] hover:bg-[#81B29A] hover:text-white">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-12 md:py-16">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <div className="w-16 h-16 rounded-full bg-[#F2CC8F] flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-[#3D405B]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Thank You for Downloading OathOS</h1>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Welcome Message */}
            <div className="bg-[#F4F1DE]/30 p-6 md:p-8 rounded-xl shadow-sm border border-[#F2CC8F]/20">
              <p className="text-lg mb-4">
                <strong>Hi there!</strong>
              </p>
              <p className="text-lg mb-4">
                Thank you so much for downloading <strong>OathOS</strong> — I'm incredibly grateful you're here.
              </p>
              <p className="text-lg mb-4">
                This app is currently in <strong>beta</strong>, and I'm the founder, Brandon.
              </p>
              <p className="text-lg mb-4">
                I genuinely want to hear from you so I can make this the <strong>best possible experience</strong> — UX,
                UI, and everything in between.
              </p>
              <p className="text-lg mb-6">
                If you run into issues, have feedback, or just want to share how it's working for you, please email me
                directly at:
              </p>
              <div className="bg-white p-4 rounded-lg border border-[#F2CC8F]/30">
                <p className="font-bold text-[#E07A5F] text-lg">brandon.james.moffitt@gmail.com</p>
              </div>
            </div>

            {/* Why OathOS Exists */}
            <div className="bg-[#81B29A]/10 p-6 md:p-8 rounded-xl shadow-sm border border-[#81B29A]/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <Heart className="h-8 w-8 text-[#E07A5F]" />
                Why OathOS Exists
              </h2>

              <p className="text-lg mb-4">At its core, OathOS is built on a simple but powerful idea:</p>

              <p className="text-xl font-bold mb-4 text-[#E07A5F]">
                Accountability works best when you pick someone you love and respect.
              </p>

              <p className="text-lg mb-4">It's easy to let ourselves off the hook.</p>

              <p className="text-lg mb-6">
                It's much harder when we know someone else is counting on us —{" "}
                <strong>especially someone whose opinion we care about.</strong>
              </p>

              <div className="space-y-4">
                <p className="text-lg font-semibold mb-4">OathOS helps you:</p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F2CC8F] flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-[#3D405B]" />
                    </div>
                    <p className="text-lg">
                      <strong>Commit to habits and actions that matter</strong>
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F2CC8F] flex items-center justify-center mt-0.5">
                      <Users className="h-4 w-4 text-[#3D405B]" />
                    </div>
                    <p className="text-lg">
                      <strong>Loop in a trusted partner</strong> — someone you don't want to let down
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#F2CC8F] flex items-center justify-center mt-0.5">
                      <CheckCircle className="h-4 w-4 text-[#3D405B]" />
                    </div>
                    <p className="text-lg">
                      <strong>Stay consistent</strong> through accountability
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-[#F4F1DE]/50 p-6 md:p-8 rounded-xl shadow-sm border border-[#F2CC8F]/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Philosophy</h2>

              <p className="text-lg mb-4">Simple solutions are usually the best.</p>

              <p className="text-lg mb-4">
                That's why OathOS is designed to stay <strong>lightweight and focused</strong>.
              </p>

              <p className="text-lg">
                No bloat, no unnecessary features — just the tools you need to turn intentions into reality.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 bg-[#3D405B] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-[#E07A5F] flex items-center justify-center text-white font-bold">
                O
              </div>
              <span className="text-xl font-bold">OathOS</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="hover:text-[#F2CC8F]">
                Privacy
              </Link>
              <Link href="#" className="hover:text-[#F2CC8F]">
                Terms
              </Link>
              <Link href="mailto:brandon.james.moffitt@gmail.com" className="hover:text-[#F2CC8F]">
                Contact
              </Link>
            </div>
            <p className="text-sm text-white/70">© 2025 OathOS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
