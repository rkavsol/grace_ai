import React, { useState, useMemo } from 'react';
import { Search, Filter } from 'lucide-react';
import BlogPost, { BlogPostType } from './BlogPost';

const mockPosts: BlogPostType[] = [
  {
    id: '1',
    title: 'Finding Peace in the Storm',
    excerpt: 'When life feels overwhelming, sometimes the greatest act of courage is simply allowing ourselves to be still.',
    content: 'In moments of chaos, our minds often race toward solutions, seeking control over the uncontrollable. But what if the path to peace lies not in fighting the storm, but in finding our center within it? Today I found myself sitting quietly, feeling the weight of uncertainty, and discovered that acceptance doesn\'t mean giving up—it means finding strength in surrender. The storm will pass, but the peace we cultivate within ourselves becomes our permanent shelter.',
    date: 'January 15, 2025',
    readTime: '3 min'
  },
  {
    id: '2',
    title: 'The Art of Letting Go',
    excerpt: 'Releasing what no longer serves us isn\'t about losing something—it\'s about making space for what\'s meant to be.',
    content: 'I\'ve been holding onto so many things: old hurts, expired expectations, versions of myself that no longer fit. Today I realized that letting go isn\'t an act of weakness or abandonment. It\'s an act of love—love for who I\'m becoming and respect for who I\'ve been. Each release creates space for new growth, new possibilities, new versions of grace to enter our lives.',
    date: 'January 14, 2025',
    readTime: '4 min'
  },
  {
    id: '3',
    title: 'Embracing Imperfection',
    excerpt: 'Our flaws aren\'t bugs in the system—they\'re features that make us beautifully human.',
    content: 'Perfect is an illusion that keeps us trapped in cycles of self-criticism and endless striving. But what if our imperfections are actually our greatest gifts? The crack in our voice when we speak our truth, the uncertainty in our steps as we try something new, the messiness of our journey toward growth—these aren\'t flaws to fix but humanity to celebrate. Today I choose to embrace the beautiful imperfection of being perfectly me.',
    date: 'January 13, 2025',
    readTime: '3 min'
  },
  {
    id: '4',
    title: 'The Whisper of Intuition',
    excerpt: 'In a world full of noise, our inner voice often speaks in whispers. Learning to listen is an act of self-love.',
    content: 'We live in a world that rewards quick decisions and loud opinions, but wisdom often comes as a gentle whisper. That quiet knowing in your chest, the pause before you speak, the hesitation that makes you reconsider—these aren\'t signs of weakness or indecision. They\'re your intuition speaking, your inner compass pointing toward truth. Today I practiced the art of listening to the whispers, trusting that the quietest voice often carries the most important message.',
    date: 'January 12, 2025',
    readTime: '4 min'
  }
];

export default function DailyPosts() {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredPosts = useMemo(() => {
    if (!searchTerm) return mockPosts;
    
    return mockPosts.filter(post =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleShare = (type: 'email' | 'copy' | 'message', post: BlogPostType) => {
    const url = `${window.location.origin}/post/${post.id}`;
    const text = `Check out this thoughtful post: "${post.title}" - ${post.excerpt}`;
    
    switch (type) {
      case 'email':
        window.open(`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(`${text}\n\n${url}`)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          alert('Link copied to clipboard!');
        });
        break;
      case 'message':
        if (navigator.share) {
          navigator.share({
            title: post.title,
            text: text,
            url: url,
          });
        } else {
          navigator.clipboard.writeText(`${text}\n\n${url}`).then(() => {
            alert('Message copied to clipboard!');
          });
        }
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-emerald-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            Daily Thoughts & Reflections
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Explore authentic expressions of inner wisdom, peaceful insights, 
            and the journey toward mental freedom.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent shadow-sm"
            />
          </div>
        </div>

        {/* Posts */}
        <div className="space-y-8">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <BlogPost
                key={post.id}
                post={post}
                onShare={handleShare}
              />
            ))
          ) : (
            <div className="text-center py-12">
              <Filter className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 mb-2">
                No posts found
              </h3>
              <p className="text-slate-500">
                Try adjusting your search terms to find more content.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}