import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Mail, Shield } from "lucide-react"

export default function PrivacyPage() {
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
            <div className="w-16 h-16 rounded-full bg-[#81B29A]/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-[#81B29A]" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">OathOS Privacy Policy</h1>
            <p className="text-lg text-[#3D405B]/80 mb-2">
              <strong>Effective Date:</strong> May 8, 2025
            </p>
            <p className="text-lg">Thank you for using OathOS!</p>
            <p className="text-lg text-[#3D405B]/80">This privacy policy explains how we handle your data.</p>
          </div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Section 1: Information We Collect */}
            <div className="bg-[#F4F1DE]/30 p-6 md:p-8 rounded-xl shadow-sm border border-[#F2CC8F]/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">1. Information We Collect</h2>

              <div className="bg-[#81B29A]/10 p-4 rounded-lg mb-6 border border-[#81B29A]/20">
                <p className="text-lg font-bold text-[#81B29A]">
                  Currently, OathOS does not collect, store, or share any personal data.
                </p>
              </div>

              <p className="text-lg mb-4">
                We do not use analytics tools, advertising networks, or third-party SDKs that collect data from your app
                usage.
              </p>

              <p className="text-lg">
                If you contact us via email (brandon.james.moffitt@gmail.com), we will only use your information to
                respond to your inquiry.
              </p>
            </div>

            {/* Section 2: Future Updates */}
            <div className="bg-[#F2CC8F]/20 p-6 md:p-8 rounded-xl shadow-sm border border-[#F2CC8F]/30">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">2. Future Updates</h2>

              <p className="text-lg mb-4">
                As we improve OathOS, we may integrate optional features like analytics or account services.
              </p>

              <p className="text-lg">
                If we do, this privacy policy will be updated, and we will notify you inside the app or via the App
                Store.
              </p>
            </div>

            {/* Section 3: Contact Us */}
            <div className="bg-[#E07A5F]/10 p-6 md:p-8 rounded-xl shadow-sm border border-[#E07A5F]/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
                <Mail className="h-8 w-8 text-[#E07A5F]" />
                3. Contact Us
              </h2>

              <p className="text-lg mb-4">If you have any questions or concerns, feel free to reach out:</p>

              <div className="bg-white p-4 rounded-lg border border-[#E07A5F]/30">
                <p className="text-lg">
                  <strong>📧 Email:</strong>{" "}
                  <span className="font-bold text-[#E07A5F]">brandon.james.moffitt@gmail.com</span>
                </p>
              </div>
            </div>

            {/* Our Philosophy Section */}
            <div className="bg-[#81B29A]/10 p-6 md:p-8 rounded-xl shadow-sm border border-[#81B29A]/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Philosophy</h2>

              <p className="text-lg mb-4">Simple solutions are usually the best.</p>

              <p className="text-lg mb-4">
                That's why OathOS is designed to stay <strong>lightweight and focused</strong>.
              </p>

              <p className="text-lg">
                No bloat, no unnecessary features — just the tools you need to turn intentions into reality.
              </p>
            </div>

            {/* How to Reach Me */}
            <div className="bg-[#F4F1DE]/50 p-6 md:p-8 rounded-xl shadow-sm border border-[#F2CC8F]/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">How to Reach Me</h2>

              <p className="text-lg mb-4">For any questions, bugs, feature requests, or ideas, please email me at:</p>

              <div className="bg-white p-4 rounded-lg border border-[#F2CC8F]/30 mb-6">
                <p className="font-bold text-[#E07A5F] text-lg">brandon.james.moffitt@gmail.com</p>
              </div>

              <p className="text-lg text-[#3D405B]/80">
                Thank you again for joining this early journey — you're helping shape something truly meaningful.
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
              <Link href="#" className="hover:text-[#F2CC8F]">
                Help
              </Link>
              <Link href="#" className="hover:text-[#F2CC8F]">
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
