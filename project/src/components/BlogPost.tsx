import React from 'react';
import { Calendar, Share2, Mail, Copy, MessageCircle, Heart } from 'lucide-react';

export interface BlogPostType {
  id: string;
  title: string;
  content: string;
  date: string;
  excerpt: string;
  readTime: string;
}

interface BlogPostProps {
  post: BlogPostType;
  onShare: (type: 'email' | 'copy' | 'message', post: BlogPostType) => void;
}

export default function BlogPost({ post, onShare }: BlogPostProps) {
  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-sky-100">
      <div className="p-8">
        <div className="flex items-center space-x-4 text-sm text-slate-500 mb-4">
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="h-4 w-4" />
            <span>{post.readTime} read</span>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-slate-800 mb-4 leading-tight hover:text-sky-600 transition-colors cursor-pointer">
          {post.title}
        </h2>

        <p className="text-slate-600 leading-relaxed mb-6 text-lg">
          {post.excerpt}
        </p>

        <div className="prose prose-slate max-w-none mb-8">
          <p className="text-slate-700 leading-relaxed">
            {post.content}
          </p>
        </div>

        {/* Share Options */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-100">
          <div className="flex items-center space-x-1">
            <Share2 className="h-4 w-4 text-slate-400" />
            <span className="text-sm text-slate-500">Share this post:</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => onShare('email', post)}
              className="flex items-center space-x-2 px-4 py-2 bg-sky-50 text-sky-600 rounded-lg hover:bg-sky-100 transition-colors text-sm font-medium"
            >
              <Mail className="h-4 w-4" />
              <span>Email</span>
            </button>
            
            <button
              onClick={() => onShare('copy', post)}
              className="flex items-center space-x-2 px-4 py-2 bg-emerald-50 text-emerald-600 rounded-lg hover:bg-emerald-100 transition-colors text-sm font-medium"
            >
              <Copy className="h-4 w-4" />
              <span>Copy Link</span>
            </button>
            
            <button
              onClick={() => onShare('message', post)}
              className="flex items-center space-x-2 px-4 py-2 bg-violet-50 text-violet-600 rounded-lg hover:bg-violet-100 transition-colors text-sm font-medium"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Message</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}