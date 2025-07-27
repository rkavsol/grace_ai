import React from 'react';
import { Heart, Users, Lightbulb, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-2xl mb-8">
            <Heart className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            About GraceUp
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A sanctuary for authentic expression, inner peace, and the shared journey 
            toward mental freedom and emotional well-being.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto">
            GraceUp exists as a peaceful digital space where authentic thoughts and inner wisdom 
            can be shared freely. We believe that by expressing our deepest reflections and 
            vulnerabilities, we create connections that heal, inspire, and remind us that 
            we're never alone in our journey toward inner peace.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: Heart,
              title: "Authentic Expression",
              description: "We celebrate genuine thoughts, emotions, and experiences without judgment or pretense.",
              gradient: "from-rose-400 to-rose-600"
            },
            {
              icon: Users,
              title: "Peaceful Community",
              description: "Creating a calming environment that reduces anxiety and promotes mental well-being.",
              gradient: "from-sky-400 to-sky-600"
            },
            {
              icon: Lightbulb,
              title: "Inner Wisdom",
              description: "Recognizing that everyone carries profound insights worth sharing and hearing.",
              gradient: "from-emerald-400 to-emerald-600"
            },
            {
              icon: BookOpen,
              title: "Daily Growth",
              description: "Encouraging consistent reflection and mindful exploration of our inner landscapes.",
              gradient: "from-violet-400 to-violet-600"
            }
          ].map((value, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${value.gradient} rounded-lg mb-4`}>
                <value.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="bg-gradient-to-r from-sky-50 to-emerald-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">The Story Behind GraceUp</h2>
          <div className="prose prose-lg prose-slate max-w-none">
            <p className="text-slate-700 leading-relaxed mb-6">
              GraceUp was born from a simple recognition: in our fast-paced, constantly connected world, 
              we often lack spaces for genuine reflection and authentic expression. We needed a place 
              where the whispers of our inner voice could be heard, honored, and shared.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              The name "GraceUp" reflects our belief in the power of grace—both the grace we extend 
              to ourselves and the grace we offer others as they navigate their own journeys. 
              "Up" represents our commitment to lifting each other higher, finding hope in shared 
              experiences, and growing together through conscious reflection.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Every post here is an invitation to pause, reflect, and remember that your thoughts 
              and experiences matter. In a world that often demands quick answers, GraceUp offers 
              the gift of slow wisdom and patient understanding.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">Join Our Journey</h2>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            Whether you're seeking peace, sharing wisdom, or simply looking for authentic connection, 
            you're welcome here. Let's grow together, one thoughtful post at a time.
          </p>
          <div className="inline-flex items-center space-x-2 text-sky-600">
            <Heart className="h-5 w-5" />
            <span className="font-medium">With love and grace</span>
          </div>
        </div>
      </div>
    </div>
  );
}