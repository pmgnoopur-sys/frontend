'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { getBlogBySlug } from '@/lib/blogStorage';
import AudioPlayer from '@/components/AudioPlayer';
import { Mic, Play, Square, Upload } from 'lucide-react';

// Function to format plain text content to HTML if needed
const formatContent = (content: string) => {
  // If content already has HTML tags, return as is
  if (/<[a-z][\s\S]*>/i.test(content)) {
    return content;
  }
  
  // Convert plain text to HTML with proper paragraphs
  return content
    .split(/\n\s*\n/) // Split by double newlines to identify paragraphs
    .map(paragraph => paragraph.trim())
    .filter(paragraph => paragraph.length > 0)
    .map(paragraph => `<p>${paragraph.replace(/\n/g, '<br>')}</p>`)
    .join('\n\n');
};

export default function BlogPost() {
  const params = useParams();
  const slug = params.slug as string;
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [audioData, setAudioData] = useState<{ audioUrl: string; speakerName: string } | null>(null);
  const [imageLoadingStates, setImageLoadingStates] = useState<{ [key: number]: boolean }>({});
  const [showAudioUpload, setShowAudioUpload] = useState(false);
  const [isUsingTextToSpeech, setIsUsingTextToSpeech] = useState(false);
  const [textToSpeechEnabled, setTextToSpeechEnabled] = useState(false);

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

  // Load audio data from localStorage (frontend-only feature)
  useEffect(() => {
    if (slug) {
      try {
        const savedAudioData = localStorage.getItem(`blog_audio_${slug}`);
        if (savedAudioData) {
          setAudioData(JSON.parse(savedAudioData));
        }
      } catch (error) {
        console.error('Error loading audio data from localStorage:', error);
      }
    }
  }, [slug]);

  // Auto-play text-to-speech if enabled
  useEffect(() => {
    if (blog && textToSpeechEnabled && !loading && !error) {
      // Small delay to ensure page is fully loaded
      const timer = setTimeout(() => {
        speakContent();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [blog, textToSpeechEnabled, loading, error]);

  // Cleanup speech synthesis on unmount
  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  // Image loading handlers
  const handleImageLoad = (index: number) => {
    setImageLoadingStates(prev => ({ ...prev, [index]: false }));
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, index: number) => {
    console.error(`Image failed to load at index ${index}`);
    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect fill='%23f3f4f6' width='800' height='400'/%3E%3Ctext fill='%236b7280' font-size='16' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EImage unavailable%3C/text%3E%3C/svg%3E";
    setImageLoadingStates(prev => ({ ...prev, [index]: false }));
  };

  const handleImageLoadStart = (index: number) => {
    setImageLoadingStates(prev => ({ ...prev, [index]: true }));
  };

  // Text-to-Speech functionality
  const speakContent = useCallback(() => {
    if (!blog) return;
    
    // Stop any existing speech
    window.speechSynthesis.cancel();
    
    // Get text content (strip HTML tags)
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = formatContent(blog.content);
    const textToSpeak = tempDiv.textContent || tempDiv.innerText || "";
    
    if (!textToSpeak) return;
    
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = 1; // Normal speed
    utterance.pitch = 1; // Normal pitch
    utterance.volume = 1; // Full volume
    
    utterance.onstart = () => setIsUsingTextToSpeech(true);
    utterance.onend = () => setIsUsingTextToSpeech(false);
    utterance.onerror = () => setIsUsingTextToSpeech(false);
    
    window.speechSynthesis.speak(utterance);
  }, [blog]);

  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
    setIsUsingTextToSpeech(false);
  };

  const toggleTextToSpeech = () => {
    if (isUsingTextToSpeech) {
      stopSpeaking();
    } else {
      speakContent();
    }
  };

  // Handle reader audio upload
  const handleReaderAudioUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('audio/')) {
        alert('Please select an audio file');
        return;
      }
      
      if (file.size > 20 * 1024 * 1024) {
        alert('Audio size must be less than 20MB');
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setAudioData({ audioUrl: base64String, speakerName: 'Reader Upload' });
        // Save to localStorage for this blog
        try {
          localStorage.setItem(`blog_audio_${slug}`, JSON.stringify({ 
            audioUrl: base64String, 
            speakerName: 'Reader Upload' 
          }));
        } catch (error) {
          console.error('Error saving reader audio to localStorage:', error);
        }
      };
      reader.readAsDataURL(file);
    }
  };

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
              {imageLoadingStates[0] && (
                <div className="w-full h-64 bg-gray-200 animate-pulse flex items-center justify-center">
                  <div className="text-gray-400">Loading image...</div>
                </div>
              )}
              <img
                src={blog.images[0].url}
                alt={blog.images[0].altText || blog.title}
                className="w-full h-auto"
                onLoadStart={() => handleImageLoadStart(0)}
                onLoad={() => handleImageLoad(0)}
                onError={(e) => handleImageError(e, 0)}
                style={{ display: imageLoadingStates[0] ? 'none' : 'block' }}
              />
            </div>
          )}

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-10">
            <div 
              className="prose prose-lg prose-headings:font-bold prose-headings:text-gray-900 prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-p:my-4 prose-a:text-[#FECB0F] prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-[#FECB0F] prose-pre:bg-gray-100 prose-ul:my-4 prose-ol:my-4 prose-li:my-2 prose-blockquote:my-4 prose-blockquote:border-l-4 prose-blockquote:border-[#FECB0F] prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(blog.content) }} 
            />
          </div>

          {/* Additional Images */}
          {blog.images && blog.images.length > 1 && (
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {blog.images.slice(1).map((image: any, index: number) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
                  {imageLoadingStates[index + 1] && (
                    <div className="w-full h-48 bg-gray-200 animate-pulse flex items-center justify-center">
                      <div className="text-gray-400">Loading image...</div>
                    </div>
                  )}
                  <img
                    src={image.url}
                    alt={image.altText || blog.title}
                    className="w-full h-auto"
                    onLoadStart={() => handleImageLoadStart(index + 1)}
                    onLoad={() => handleImageLoad(index + 1)}
                    onError={(e) => handleImageError(e, index + 1)}
                    style={{ display: imageLoadingStates[index + 1] ? 'none' : 'block' }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Excerpt if available */}
          {blog.excerpt && (
            <div className="bg-gradient-to-r from-[#FECB0F]/10 to-[#F5A623]/10 rounded-2xl p-6 border border-[#FECB0F]/20 mb-10">
              <h3 className="font-semibold text-gray-900 mb-2">Summary</h3>
              <p className="text-gray-700">{blog.excerpt}</p>
            </div>
          )}

          {/* Audio Section */}
          <div className="bg-black rounded-2xl p-6 md:p-8 shadow-lg border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#FECB0F] rounded-full flex items-center justify-center flex-shrink-0">
                <Mic className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-lg">Listen to this Article</h4>
                <p className="text-sm text-gray-400">Choose your preferred listening option</p>
              </div>
            </div>

            {/* Audio Player if available */}
            {audioData?.audioUrl && (
              <div className="mb-4">
                <AudioPlayer audioUrl={audioData.audioUrl} speakerName={audioData.speakerName} />
              </div>
            )}

            {/* Text-to-Speech Option */}
            <div className="bg-gray-900 rounded-xl p-4 mb-4 border border-gray-800">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={toggleTextToSpeech}
                    className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
                      isUsingTextToSpeech
                        ? 'bg-[#FECB0F] hover:bg-[#F5A623]'
                        : 'bg-white hover:bg-gray-200'
                    }`}
                    title={isUsingTextToSpeech ? 'Stop Reading' : 'Read Aloud'}
                  >
                    {isUsingTextToSpeech ? (
                      <Square className="w-5 h-5 text-black" fill="currentColor" />
                    ) : (
                      <Play className="w-5 h-5 text-black ml-0.5" fill="currentColor" />
                    )}
                  </button>
                  <div>
                    <p className="font-medium text-white">Text-to-Speech</p>
                    <p className="text-sm text-gray-400">
                      {isUsingTextToSpeech ? 'Reading...' : 'Have this article read aloud'}
                    </p>
                  </div>
                </div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={textToSpeechEnabled}
                    onChange={(e) => setTextToSpeechEnabled(e.target.checked)}
                    className="w-4 h-4 accent-[#FECB0F] rounded focus:ring-[#FECB0F]"
                  />
                  <span className="text-sm text-gray-300">Auto-play on load</span>
                </label>
              </div>
            </div>

            {/* Upload Your Own Audio */}
            <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
              <div className="flex items-center justify-between mb-3">
                <p className="font-medium text-white">Upload Your Own Audio</p>
                <button
                  onClick={() => setShowAudioUpload(!showAudioUpload)}
                  className="flex items-center gap-1.5 text-[#FECB0F] hover:text-[#F5A623] text-sm font-medium transition-colors"
                >
                  {!showAudioUpload && <Upload className="w-4 h-4" />}
                  {showAudioUpload ? 'Cancel' : 'Add Audio'}
                </button>
              </div>

              {showAudioUpload && (
                <div>
                  <input
                    type="file"
                    accept="audio/*"
                    onChange={handleReaderAudioUpload}
                    className="w-full px-3 py-2 bg-black border border-gray-700 text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FECB0F] focus:border-transparent text-sm file:mr-3 file:py-1.5 file:px-3 file:rounded-md file:border-0 file:bg-[#FECB0F] file:text-black file:font-medium"
                  />
                  <p className="text-xs text-gray-500 mt-2">Upload your own audio version (MP3, WAV, M4A - Max 20MB)</p>
                </div>
              )}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
