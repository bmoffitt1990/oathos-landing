import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calendar, CheckCircle, Clock, MessageSquare, Star, Users } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F4F1DE] text-[#3D405B]">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full bg-[#F4F1DE]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F4F1DE]/60 border-b border-[#F2CC8F]">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-[#E07A5F] flex items-center justify-center text-white font-bold">
              O
            </div>
            <span className="text-xl font-bold">OathOS</span>
          </div>
          <Button className="bg-[#E07A5F] hover:bg-[#E07A5F]/90 text-white">Start Free</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-16 bg-[#F4F1DE]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold tracking-tighter">
                Stay true to your goals—with help from someone who cares.
              </h1>
              <p className="text-lg md:text-xl text-[#3D405B]/80 max-w-[600px]">
                OathOS turns your habits into commitments, backed by real accountability.
              </p>
              <Button className="mt-4 bg-[#E07A5F] hover:bg-[#E07A5F]/90 text-white text-lg px-8 py-6">
                Start Free
              </Button>
              <div className="w-full max-w-3xl mt-8">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  width={800}
                  height={400}
                  alt="Two people supporting each other"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-[800px] mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold">Most Habits Fail in Isolation</h2>
              <p className="text-lg text-[#3D405B]/80 max-w-[600px]">
                We break promises to ourselves all the time. But when someone else is counting on us? We show up.
              </p>
              <div className="bg-[#F2CC8F]/20 p-4 rounded-lg flex items-center gap-2 mt-4">
                <CheckCircle className="h-6 w-6 text-[#81B29A]" />
                <p className="font-medium">You're 65% more likely to follow through when someone checks in.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
                <div className="bg-[#F4F1DE] p-6 rounded-xl">
                  <h3 className="font-bold mb-2">Going it alone</h3>
                  <div className="aspect-square relative bg-white rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      width={300}
                      height={300}
                      alt="Person struggling alone with habits"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-[#3D405B]/80">
                    Motivation fades, excuses pile up, and habits fall by the wayside.
                  </p>
                </div>
                <div className="bg-[#81B29A]/10 p-6 rounded-xl">
                  <h3 className="font-bold mb-2">With accountability</h3>
                  <div className="aspect-square relative bg-white rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      width={300}
                      height={300}
                      alt="Two people supporting each other"
                      className="object-cover"
                    />
                  </div>
                  <p className="mt-4 text-[#3D405B]/80">
                    Commitment strengthens, support arrives when needed, and habits stick.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="w-full py-12 md:py-16 bg-[#F4F1DE]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">How OathOS Works</h2>
              <p className="text-lg text-[#3D405B]/80 max-w-[600px]">
                Three simple steps to build lasting habits through accountability
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#F2CC8F] flex items-center justify-center mb-2">
                  <Calendar className="h-8 w-8 text-[#3D405B]" />
                </div>
                <h3 className="text-xl font-bold">Step 1</h3>
                <p className="text-[#3D405B]/80">Choose the habits you care about</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#F2CC8F] flex items-center justify-center mb-2">
                  <Users className="h-8 w-8 text-[#3D405B]" />
                </div>
                <h3 className="text-xl font-bold">Step 2</h3>
                <p className="text-[#3D405B]/80">Invite a partner (or get matched)</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#F2CC8F] flex items-center justify-center mb-2">
                  <MessageSquare className="h-8 w-8 text-[#3D405B]" />
                </div>
                <h3 className="text-xl font-bold">Step 3</h3>
                <p className="text-[#3D405B]/80">Get reminders + support to stay on track</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">Built for Real Commitment</h2>
              <p className="text-lg text-[#3D405B]/80 max-w-[600px]">
                Features designed to help you follow through on what matters
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-[#81B29A] bg-[#F4F1DE] shadow-sm">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-[#F2CC8F] flex items-center justify-center mb-2">
                    <Clock className="h-5 w-5 text-[#3D405B]" />
                  </div>
                  <CardTitle className="text-lg">Set your own habit rules and reminders</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#3D405B]/80">
                    Customize when and how you want to be reminded about your commitments.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#81B29A] bg-[#F4F1DE] shadow-sm">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-[#F2CC8F] flex items-center justify-center mb-2">
                    <MessageSquare className="h-5 w-5 text-[#3D405B]" />
                  </div>
                  <CardTitle className="text-lg">Prewritten texts make checking in frictionless</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#3D405B]/80">
                    Quick templates make it easy to check in with your accountability partner.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-[#81B29A] bg-[#F4F1DE] shadow-sm">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-[#F2CC8F] flex items-center justify-center mb-2">
                    <CheckCircle className="h-5 w-5 text-[#3D405B]" />
                  </div>
                  <CardTitle className="text-lg">Timely nudges when habits are missed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#3D405B]/80">Get gentle reminders when you need them most to stay on track.</p>
                </CardContent>
              </Card>
              <Card className="border-[#81B29A] bg-[#F4F1DE] shadow-sm">
                <CardHeader className="pb-2">
                  <div className="w-10 h-10 rounded-full bg-[#F2CC8F] flex items-center justify-center mb-2">
                    <Star className="h-5 w-5 text-[#3D405B]" />
                  </div>
                  <CardTitle className="text-lg">Track completions and earn your integrity</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#3D405B]/80">
                    Build a visual record of your commitment and celebrate your consistency.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-16 bg-[#F4F1DE]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-10">
              <h2 className="text-2xl md:text-3xl font-bold">What Our Users Say</h2>
              <p className="text-lg text-[#3D405B]/80 max-w-[600px]">
                Real stories from people building better habits with OathOS
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      width={48}
                      height={48}
                      alt="User avatar"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Jamie K.</h3>
                    <p className="text-sm text-[#3D405B]/70">Morning Runner</p>
                  </div>
                </div>
                <p className="italic text-[#3D405B]/80">
                  "Having my sister check in on my morning runs has been a game-changer. I've gone from 2 days a week to
                  5, and I feel amazing."
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      width={48}
                      height={48}
                      alt="User avatar"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Alex T.</h3>
                    <p className="text-sm text-[#3D405B]/70">Meditation Practitioner</p>
                  </div>
                </div>
                <p className="italic text-[#3D405B]/80">
                  "I've tried to build a meditation habit for years. With OathOS and my accountability partner, I've
                  finally made it stick for over 3 months."
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=48&width=48"
                      width={48}
                      height={48}
                      alt="User avatar"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">Morgan L.</h3>
                    <p className="text-sm text-[#3D405B]/70">Writer</p>
                  </div>
                </div>
                <p className="italic text-[#3D405B]/80">
                  "The difference between OathOS and other habit apps is the human element. Knowing my friend will see
                  if I skip my writing practice keeps me showing up daily. I've written more in the last month than the
                  previous six."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Works */}
        <section className="w-full py-12 md:py-16 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-[800px] mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold">Why OathOS Works</h2>
              <p className="text-lg text-[#3D405B]/80 max-w-[600px]">
                Backed by behavioral science and the power of social commitment
              </p>
              <div className="bg-[#F4F1DE] p-6 rounded-xl mt-6 text-left">
                <p className="italic text-lg border-l-4 border-[#F2CC8F] pl-4">
                  "When we make commitments to others, we're 2-3x more likely to follow through than when we only make
                  promises to ourselves."
                </p>
                <p className="text-right mt-2 text-sm text-[#3D405B]/70">— Journal of Behavioral Psychology, 2023</p>
              </div>
              <Button className="mt-6 bg-[#81B29A] hover:bg-[#81B29A]/90 text-white">Learn More</Button>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="w-full py-12 md:py-16 bg-[#F2CC8F]">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 max-w-[600px] mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold">Ready to Show Up?</h2>
              <p className="text-lg text-[#3D405B]/80">Make a promise. Then keep it—with OathOS.</p>
              <Button className="mt-6 bg-[#E07A5F] hover:bg-[#E07A5F]/90 text-white text-lg px-8 py-6">
                Make Your First Oath <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
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
              <Link href="#" className="hover:text-[#F2CC8F]">
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
