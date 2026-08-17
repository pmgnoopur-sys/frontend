'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getBlogBySlug } from '@/lib/blogStorage';

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const blogData = await getBlogBySlug(slug);
        if (blogData) {
          setBlog(blogData);
        } else {
          setError('Blog post not found');
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load blog post');
        setLoading(false);
      }
    };
    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{error || 'Blog post not found'}</h1>
          <Link href="/blog" className="text-[#FECB0F] hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-24 pb-16">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <header className="mb-10">
            <Link href="/blog" className="inline-flex items-center text-[#FECB0F] hover:text-[#F5A623] transition-colors mb-6 font-medium">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{blog.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#FECB0F] rounded-full flex items-center justify-center text-white font-bold text-xs">
                  {blog.author.charAt(0)}
                </div>
                <span className="font-medium text-gray-900">{blog.author}</span>
              </div>
              <span className="text-gray-300">•</span>
              <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              {blog.readingTime && (
                <>
                  <span className="text-gray-300">•</span>
                  <span>{blog.readingTime} min read</span>
                </>
              )}
              {blog.tags && blog.tags.length > 0 && (
                <>
                  <span className="text-gray-300">•</span>
                  <div className="flex gap-2">
                    {blog.tags.map((tag: string, index: number) => (
                      <span key={index} className="px-3 py-1 bg-[#FECB0F]/10 text-[#FECB0F] text-xs font-semibold rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          {/* Featured Image */}
          {blog.images && blog.images.length > 0 && (
            <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={blog.images[0].url}
                alt={blog.images[0].altText || blog.title}
                className="w-full h-auto"
              />
            </div>
          )}

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-10">
            <div 
              className="prose prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-[#FECB0F] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-[#FECB0F] prose-pre:bg-gray-100 max-w-none"
              dangerouslySetInnerHTML={{ __html: blog.content }} 
            />
          </div>

          {/* Additional Images */}
          {blog.images && blog.images.length > 1 && (
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {blog.images.slice(1).map((image: any, index: number) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={image.url}
                    alt={image.altText || blog.title}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Excerpt if available */}
          {blog.excerpt && (
            <div className="bg-gradient-to-r from-[#FECB0F]/10 to-[#F5A623]/10 rounded-2xl p-6 border border-[#FECB0F]/20">
              <h3 className="font-semibold text-gray-900 mb-2">Summary</h3>
              <p className="text-gray-700">{blog.excerpt}</p>
            </div>
          )}
        </article>
      </main>
      <Footer />
    </div>
  );
}
