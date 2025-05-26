import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"
import { ArrowLeft, Mail, Shield } from "lucide-react"

export default function PrivacyPage() {
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
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-gray-700" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">OathOS Privacy Policy</h1>
            <p className="text-lg text-gray-600 mb-2">
              <strong>Effective Date:</strong> May 8, 2025
            </p>
            <p className="text-lg">Thank you for using OathOS!</p>
            <p className="text-lg text-gray-600">This privacy policy explains how we handle your data.</p>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            {/* Section 1: Information We Collect */}
            <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-xl shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">1. Information We Collect</h2>

              <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-8">
                <p className="text-lg font-bold text-green-800">
                  Currently, OathOS does not collect, store, or share any personal data.
                </p>
              </div>

              <p className="text-lg mb-6 text-gray-700">
                We do not use analytics tools, advertising networks, or third-party SDKs that collect data from your app
                usage.
              </p>

              <p className="text-lg text-gray-700">
                If you contact us via email (brandon.james.moffitt@gmail.com), we will only use your information to
                respond to your inquiry.
              </p>
            </div>

            {/* Section 2: Future Updates */}
            <div className="bg-gray-50 border border-gray-200 p-8 md:p-12 rounded-xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">2. Future Updates</h2>

              <p className="text-lg mb-6 text-gray-700">
                As we improve OathOS, we may integrate optional features like analytics or account services.
              </p>

              <p className="text-lg text-gray-700">
                If we do, this privacy policy will be updated, and we will notify you inside the app or via the App
                Store.
              </p>
            </div>

            {/* Section 3: Contact Us */}
            <div className="bg-white border border-gray-200 p-8 md:p-12 rounded-xl shadow-sm">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
                <Mail className="h-8 w-8 text-gray-700" />
                3. Contact Us
              </h2>

              <p className="text-lg mb-6 text-gray-700">
                If you have any questions or concerns, feel free to reach out:
              </p>

              <div className="bg-gray-50 border border-gray-200 p-6 rounded-lg">
                <p className="text-lg">
                  <strong>📧 Email:</strong>{" "}
                  <span className="font-bold text-gray-900">brandon.james.moffitt@gmail.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
