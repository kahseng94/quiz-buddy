import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FileText, Bot, Brain, TrendingUp, GraduationCap, BookOpen, Target, Users } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">QB</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Quiz Buddy</span>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </Link>
              <Link href="#who-its-for" className="text-gray-600 hover:text-gray-900 transition-colors">
                Who It's For
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                Reviews
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>

            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started Free</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-white py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Turn Your Notes into <span className="text-blue-600">Smart Practice Quizzes</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                The easiest way for university students to self-learn and test their knowledge using AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Get Started Free
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-3 text-lg">
                  Watch Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Everything You Need to Master Your Studies
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Transform any study material into personalized quizzes and track your progress with AI-powered insights.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Upload Notes or PDFs</h3>
                  <p className="text-gray-600">
                    Convert any material into quiz-ready content. Simply upload your notes, textbooks, or PDFs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Bot className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Generated Quizzes</h3>
                  <p className="text-gray-600">
                    Smart, topic-based questions at different difficulty levels tailored to your learning needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Brain className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Practice</h3>
                  <p className="text-gray-600">
                    Reinforce weak areas with adaptive testing that focuses on topics you need to improve.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Track Your Progress</h3>
                  <p className="text-gray-600">
                    Visualize improvement over time with detailed analytics and performance insights.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Who It's For Section */}
        <section id="who-its-for" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Perfect for Every Type of Learner</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Whether you're cramming for exams or building long-term knowledge, Quiz Buddy adapts to your learning
                style.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">University Students</h3>
                <p className="text-gray-600">
                  Master course material and ace your exams with personalized practice quizzes.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Self-Learners & MOOC Takers</h3>
                <p className="text-gray-600">Enhance your online learning experience with interactive quiz practice.</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Exam Preppers</h3>
                <p className="text-gray-600">
                  Prepare for GRE, MCAT, CS exams, and more with targeted practice questions.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Instructors & TAs</h3>
                <p className="text-gray-600">
                  Create quick quizzes for your students and enhance classroom engagement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Loved by Students Everywhere</h2>
              <p className="text-xl text-gray-600">See what students are saying about Quiz Buddy</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    "Quiz Buddy transformed how I study for my computer science courses. The AI-generated questions are
                    spot-on and really help me identify knowledge gaps."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      S
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Sarah Chen</p>
                      <p className="text-sm text-gray-600">CS Major, Stanford</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    "I used Quiz Buddy to prepare for my MCAT and it was incredible. The adaptive testing feature helped
                    me focus on my weak areas."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold">
                      M
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Marcus Johnson</p>
                      <p className="text-sm text-gray-600">Pre-Med, UCLA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-0 shadow-lg rounded-2xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    "As a TA, Quiz Buddy saves me hours of work. I can quickly generate practice quizzes for my students
                    from lecture materials."
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      E
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold text-gray-900">Emily Rodriguez</p>
                      <p className="text-sm text-gray-600">PhD Student, MIT</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Transform Your Study Sessions?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who are already using Quiz Buddy to master their academic content.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Get Started Free Today
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">QB</span>
                </div>
                <span className="text-xl font-bold">Quiz Buddy</span>
              </div>
              <p className="text-gray-400">Empowering students to learn smarter with AI-powered quiz generation.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms & Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>Made with ❤️ for self-learners</p>
            <p className="mt-2">© {new Date().getFullYear()} Quiz Buddy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
