import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Footer } from "@/components/footer"
import { ArrowRight, Calendar, CheckCircle, Clock, MessageSquare, Star, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image src="/oathos-icon.png" alt="OathOS" width={32} height={32} className="w-8 h-8" />
            <span className="text-xl font-bold">OathOS</span>
          </div>
          <Link href="https://apps.apple.com/us/app/oathos/id6745340539?platform=iphone" target="_blank" rel="noopener noreferrer">
            <Image 
              src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" 
              alt="Download on the App Store" 
              width={120} 
              height={40} 
              className="h-10 w-auto"
            />
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Stay true to your goals—with help from someone who cares.
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl">
                OathOS turns your habits into commitments, backed by real accountability.
              </p>
              <Link href="https://apps.apple.com/us/app/oathos/id6745340539?platform=iphone" target="_blank" rel="noopener noreferrer" className="mt-8">
                <Image 
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" 
                  alt="Download on the App Store" 
                  width={160} 
                  height={53} 
                  className="h-14 w-auto hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold">Most Habits Fail in Isolation</h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                We break promises to ourselves all the time. But when someone else is counting on us? We show up.
              </p>
              <div className="bg-green-50 border border-green-200 p-6 rounded-xl flex items-center gap-3 mt-8">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <p className="font-medium text-green-800">
                  You're 65% more likely to follow through when someone checks in.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-12">
                <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
                  <h3 className="font-bold text-xl mb-4">Doing it alone</h3>
                  <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/image1.png"
                      width={300}
                      height={300}
                      alt="Person struggling alone with habits"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-gray-600">Motivation fades, excuses pile up, and habits fall by the wayside.</p>
                </div>
                <div className="bg-white border border-gray-200 p-8 rounded-xl shadow-sm">
                  <h3 className="font-bold text-xl mb-4">With accountability</h3>
                  <div className="aspect-square relative bg-gray-100 rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/image2.png"
                      width={300}
                      height={300}
                      alt="Two people supporting each other"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <p className="text-gray-600">
                    Commitment strengthens, support arrives when needed, and habits stick.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">How OathOS Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                Three simple steps to build lasting habits through accountability
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-4 p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Step 1</h3>
                <p className="text-gray-600">Choose the habits you care about.</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Step 2</h3>
                <p className="text-gray-600">Invite a partner. Preferrably someone you're close with!</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4 p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 rounded-full bg-gray-900 flex items-center justify-center mb-4">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold">Step 3</h3>
                <p className="text-gray-600">Get reminders + support to stay on track.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">Built for Real Commitment</h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                Features designed to help you follow through on what matters
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <Card className="border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl">Set your own habit rules and reminders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Customize when and how you want to be reminded about your commitments.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl">Prewritten texts make checking in frictionless</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Quick templates make it easy to check in with your accountability partner.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl">Timely nudges when habits are missed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Get gentle reminders when you need them most to stay on track.</p>
                </CardContent>
              </Card>
              <Card className="border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <Star className="h-6 w-6 text-gray-700" />
                  </div>
                  <CardTitle className="text-xl">Track completions and earn your integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Build a visual record of your commitment and celebrate your consistency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 mb-16">
              <h2 className="text-3xl md:text-5xl font-bold">What Our Users Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                Real stories from people building better habits with OathOS
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/woman1.png"
                      width={48}
                      height={48}
                      alt="Jamie K. avatar"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Jamie K.</h3>
                    <p className="text-sm text-[#3D405B]/70">Morning Runner</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "Having my sister check in on my morning runs has been a game-changer. I've gone from 2 days a week to
                  5, and I feel amazing."
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/man1.png"
                      width={48}
                      height={48}
                      alt="Alex T. avatar"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Alex T.</h3>
                    <p className="text-sm text-[#3D405B]/70">Meditation Practitioner</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "I've tried to build a meditation habit for years. With OathOS and my accountability partner, I've
                  finally made it stick for over 3 months."
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-200 p-8 rounded-xl md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/man2.png"
                      width={48}
                      height={48}
                      alt="Morgan L. avatar"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Morgan L.</h3>
                    <p className="text-sm text-[#3D405B]/70">Writer</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  "The difference between OathOS and other habit apps is the human element. Knowing my friend will see
                  if I skip my writing practice keeps me showing up daily. I've written more in the last month than the
                  previous six."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Works */}
        <section className="w-full py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold">Why OathOS Works</h2>
              <p className="text-xl text-gray-600 max-w-3xl">
                Backed by behavioral science and the power of social commitment
              </p>
              <div className="bg-white border border-gray-200 p-8 rounded-xl mt-8 text-left shadow-sm max-w-3xl">
                <p className="text-xl text-gray-700 border-l-4 border-gray-900 pl-6 leading-relaxed">
                  "When we make commitments to others, we're 2-3x more likely to follow through than when we only make
                  promises to ourselves."
                </p>
                <p className="text-right mt-4 text-sm text-gray-500">— Journal of Behavioral Psychology, 2023</p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-16 md:py-24 bg-gray-900 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold">Ready to Show Up?</h2>
              <p className="text-xl text-gray-300">Make a promise to yourself. Then keep it—with OathOS.</p>
              <Link href="https://apps.apple.com/us/app/oathos/id6745340539?platform=iphone" target="_blank" rel="noopener noreferrer" className="mt-8">
                <Image 
                  src="/Download_on_the_App_Store_Badge_US-UK_RGB_wht_092917.svg" 
                  alt="Download on the App Store" 
                  width={160} 
                  height={53} 
                  className="h-14 w-auto hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
