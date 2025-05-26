import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="w-full py-8 bg-white border-t border-gray-200">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Image src="/oathos-icon.png" alt="OathOS" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold">OathOS</span>
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Terms
            </Link>
            <Link href="mailto:brandon.james.moffitt@gmail.com" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </div>
          <p className="text-sm text-gray-500">© 2025 OathOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
