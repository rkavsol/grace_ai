import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50">
      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Banner */}
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-100 to-emerald-100 px-4 py-2 rounded-full">
                <Sparkles className="h-4 w-4 text-sky-600" />
                <span className="text-sm font-medium text-slate-700">
                  Discover Inner Peace & Freedom
                </span>
              </div>

              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-slate-800">Welcome to</span>
                  <br />
                  <span className="bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent">
                    GraceUp
                  </span>
                </h1>
                
                <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                  A sanctuary for daily reflections, inner thoughts, and the journey toward 
                  mental freedom. Find peace in shared wisdom and authentic expressions.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onNavigate('posts')}
                    className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>Explore Daily Posts</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                  
                  <button
                    onClick={() => onNavigate('about')}
                    className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-200 text-slate-700 rounded-xl font-semibold hover:border-sky-300 hover:text-sky-600 transition-all duration-200"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-sky-200 to-emerald-200">
                <img
                  src="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Person with arms raised toward the sky, symbolizing freedom and liberation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white text-lg font-medium leading-relaxed drop-shadow-lg">
                    "In the silence of our hearts, we find the freedom to be truly ourselves"
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-sky-200 rounded-full opacity-60 animate-pulse" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-200 rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">
              A Space for Authentic Expression
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              GraceUp provides a peaceful digital sanctuary where thoughts flow freely 
              and inner wisdom is shared with compassion and understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Daily Reflections",
                description: "Thoughtful posts that explore the depths of human experience and inner growth.",
                gradient: "from-sky-400 to-sky-600"
              },
              {
                title: "Peaceful Community",
                description: "A calming space designed to reduce anxiety and promote mental well-being.",
                gradient: "from-emerald-400 to-emerald-600"
              },
              {
                title: "Share & Connect",
                description: "Easy sharing options to spread meaningful insights with others who need them.",
                gradient: "from-violet-400 to-violet-600"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl mb-6`} />
                <h3 className="text-xl font-semibold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}