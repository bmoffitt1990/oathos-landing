import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { ArrowLeft, CheckCircle, Heart, Users } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/images/oathos-icon.png" alt="OathOS" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold">OathOS</span>
          </Link>
          <Link href="/">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="flex-1 py-16 md:py-24">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Thank You for Downloading OathOS</h1>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Welcome Message */}
            <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-xl shadow-sm">
              <p className="text-xl mb-6">
                <strong>Hi there!</strong>
              </p>
              <p className="text-lg mb-6 text-gray-700">
                Thank you so much for downloading <strong>OathOS</strong> — I'm incredibly grateful you're here.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                This app is currently in <strong>beta</strong>, and I'm the founder, Brandon.
              </p>
              <p className="text-lg mb-6 text-gray-700">
                I genuinely want to hear from you so I can make this the <strong>best possible experience</strong> — UX,
                UI, and everything in between.
              </p>
              <p className="text-lg mb-8 text-gray-700">
                If you run into issues, have feedback, or just want to share how it's working for you, please email me
                directly at:
              </p>
              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <p className="font-bold text-gray-900 text-lg">brandon.james.moffitt@gmail.com</p>
              </div>
            </div>

            {/* Why OathOS Exists */}
            <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-xl shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <Heart className="h-8 w-8 text-gray-700" />
                Why OathOS Exists
              </h2>

              <p className="text-lg mb-6 text-gray-700">At its core, OathOS is built on a simple but powerful idea:</p>

              <p className="text-2xl font-bold mb-6 text-gray-900">
                Accountability works best when you pick someone you love and respect.
              </p>

              <p className="text-lg mb-6 text-gray-700">It's easy to let ourselves off the hook.</p>

              <p className="text-lg mb-8 text-gray-700">
                It's much harder when we know someone else is counting on us —{" "}
                <strong>especially someone whose opinion we care about.</strong>
              </p>

              <div className="space-y-6">
                <p className="text-lg font-semibold mb-6">OathOS helps you:</p>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-lg text-gray-700">
                      <strong>Commit to habits and actions that matter</strong>
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center mt-1">
                      <Users className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-lg text-gray-700">
                      <strong>Loop in a trusted partner</strong> — someone you don't want to let down
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center mt-1">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-lg text-gray-700">
                      <strong>Stay consistent</strong> through accountability
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-gray-50 border border-gray-200 p-8 md:p-12 rounded-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Philosophy</h2>

              <p className="text-lg mb-6 text-gray-700">Simple solutions are usually the best.</p>

              <p className="text-lg mb-6 text-gray-700">
                That's why OathOS is designed to stay <strong>lightweight and focused</strong>.
              </p>

              <p className="text-lg text-gray-700">
                No bloat, no unnecessary features — just the tools you need to turn intentions into reality.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
