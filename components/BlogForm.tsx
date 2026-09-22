"use client";

import { useState, useEffect } from "react";
import { Blog } from "@/types/blog";
import {
  Eye,
  Link2,
  Share2,
  AlertCircle,
  CheckCircle,
  ImagePlus,
  X,
  Bold,
  Link as LinkIcon,
  Minus,
  AlignLeft,
} from "lucide-react";

interface BlogFormProps {
  blog?: Blog;
  onSubmit: (data: Omit<Blog, "id" | "createdAt" | "updatedAt">) => void;
  onCancel: () => void;
  isSaving?: boolean;
  showAudio?: boolean;
}

// Keywords used to detect the most relevant category from a blog's title.
// Listed roughly in priority order for tie-breaking (earlier category wins ties).
const CATEGORY_KEYWORDS: { category: string; keywords: string[] }[] = [
  {
    category: "Email Marketing",
    keywords: ["email", "emails", "newsletter", "inbox", "drip campaign", "cold email"],
  },
  {
    category: "Lead Generation",
    keywords: ["lead", "leads", "prospecting", "prospect", "funnel", "conversion", "outreach"],
  },
  {
    category: "Data Solutions",
    keywords: ["data", "database", "analytics", "big data", "insight", "insights", "dashboard"],
  },
  {
    category: "Sales & Marketing",
    keywords: ["sales", "marketing", "brand", "branding", "advertising", "campaign", "growth", "customer"],
  },
  {
    category: "AI & Technology",
    keywords: ["ai", "artificial intelligence", "technology", "tech", "software", "automation", "machine learning", "chatbot", "algorithm", "digital"],
  },
];

// Scans the title for category keywords and returns the best-matching category,
// or null if no keywords match.
const detectCategoryFromTitle = (title: string): string | null => {
  const lowerTitle = ` ${title.toLowerCase()} `;
  let bestMatch: { category: string; score: number } | null = null;

  for (const { category, keywords } of CATEGORY_KEYWORDS) {
    const score = keywords.reduce((count, keyword) => {
      // Word-boundary-ish match so "ai" doesn't match inside "email" etc.
      const pattern = new RegExp(`\\b${keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i");
      return pattern.test(lowerTitle) ? count + 1 : count;
    }, 0);

    if (score > 0 && (!bestMatch || score > bestMatch.score)) {
      bestMatch = { category, score };
    }
  }

  return bestMatch?.category ?? null;
};

type TabType = "content" | "seo" | "preview";

export default function BlogFormSEO({ blog, onSubmit, onCancel, isSaving = false, showAudio = true }: BlogFormProps) {
  // Main content fields
  const [title, setTitle] = useState(blog?.title || "");
  const [content, setContent] = useState(blog?.content || "");
  const [author, setAuthor] = useState(blog?.author || "");

  // SEO fields
  const [metaDescription, setMetaDescription] = useState(blog?.metaDescription || "");
  const [focusKeyword, setFocusKeyword] = useState(blog?.focusKeyword || "");
  const [slug, setSlug] = useState(blog?.slug || "");
  const [keywords, setKeywords] = useState(blog?.keywords?.join(", ") || "");
  const [tags, setTags] = useState(blog?.tags?.join(", ") || "");
  const [ogImage, setOgImage] = useState(blog?.ogImage || "");
  const [canonicalUrl, setCanonicalUrl] = useState(blog?.canonicalUrl || "");

  // New content options
  const [category, setCategory] = useState(blog?.category || "AI & Technology");
  // Tracks whether the user has manually picked a category, so auto-detection
  // from the title doesn't override an intentional choice.
  const [categoryManuallySet, setCategoryManuallySet] = useState(!!blog?.category);
  const [excerpt, setExcerpt] = useState(blog?.excerpt || "");
  const [readingTime, setReadingTime] = useState(blog?.readingTime || 0);
  const [scheduledDate, setScheduledDate] = useState(() => {
    if (blog?.scheduledDate) {
      // Convert Date object to string format for datetime-local input
      const date = new Date(blog.scheduledDate);
      return date.toISOString().slice(0, 16);
    }
    return "";
  });
  const [status, setStatus] = useState(blog?.status || "draft");

  // Images state
  const [images, setImages] = useState<{ url: string; altText: string }[]>(blog?.images || []);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newImageAlt, setNewImageAlt] = useState("");
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [imageError, setImageError] = useState("");
  const [imageInputMode, setImageInputMode] = useState<'url' | 'upload'>('url');

  // Audio state
  const [speakerName, setSpeakerName] = useState(blog?.speakerName || "");
  const [audioUrl, setAudioUrl] = useState(blog?.audioUrl || "");
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isUploadingAudio, setIsUploadingAudio] = useState(false);

  const [activeTab, setActiveTab] = useState<TabType>("content");
  const [shareLink, setShareLink] = useState("");

  // Auto-generate slug from title
  useEffect(() => {
    if (!blog && title && !slug) {
      const generated = title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-");
      setSlug(generated);
    }
  }, [title, blog, slug]);

  // Auto-detect category from the title's keywords
  useEffect(() => {
    if (categoryManuallySet || !title) return;

    const detected = detectCategoryFromTitle(title);
    if (detected) {
      setCategory(detected);
    }
  }, [title, categoryManuallySet]);

  // Auto-calculate reading time (average 200 words per minute)
  useEffect(() => {
    const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
    const calculatedTime = Math.ceil(wordCount / 200);
    setReadingTime(calculatedTime);
  }, [content]);

  // Generate share link
  useEffect(() => {
    if (slug) {
      setShareLink(`${window.location.origin}/blog/${slug}`);
    }
  }, [slug]);

  // Load audio data from localStorage for frontend-only audio feature
  useEffect(() => {
    if (slug) {
      try {
        const savedAudioData = localStorage.getItem(`blog_audio_${slug}`);
        if (savedAudioData) {
          const audioData = JSON.parse(savedAudioData);
          setSpeakerName(audioData.speakerName || "");
          setAudioUrl(audioData.audioUrl || "");
        }
      } catch (error) {
        console.error('Error loading audio data from localStorage:', error);
      }
    }
  }, [slug]);

  // Save audio data to localStorage
  useEffect(() => {
    if (slug && (audioUrl || speakerName)) {
      try {
        const audioData = { speakerName, audioUrl };
        localStorage.setItem(`blog_audio_${slug}`, JSON.stringify(audioData));
      } catch (error) {
        console.error('Error saving audio data to localStorage:', error);
      }
    }
  }, [slug, speakerName, audioUrl]);

  // Cleanup audio data when component unmounts if it was a new blog
  useEffect(() => {
    return () => {
      // Only cleanup if this was a new blog (no existing blog prop)
      if (!blog && slug && !audioUrl && !speakerName) {
        localStorage.removeItem(`blog_audio_${slug}`);
      }
    };
  }, [blog, slug, audioUrl, speakerName]);

  // SEO Validation
  const getSEOScore = () => {
    let score = 0;
    if (title && title.length >= 30 && title.length <= 60) score += 25;
    else if (title && title.length > 0) score += 15;

    if (metaDescription && metaDescription.length >= 120 && metaDescription.length <= 160) score += 25;
    else if (metaDescription && metaDescription.length > 0) score += 15;

    if (focusKeyword && focusKeyword.length > 0) score += 20;
    if (slug && slug.includes(focusKeyword?.toLowerCase().replace(/\s+/g, "-") || "")) score += 15;
    if (keywords && keywords.split(",").length >= 3) score += 15;

    return Math.min(score, 100);
  };

  const seoScore = getSEOScore();

  const getSEORecommendations = () => {
    const recommendations = [];

    if (!title) recommendations.push("Add a compelling title");
    else if (title.length < 30) recommendations.push("Title should be at least 30 characters");
    else if (title.length > 60) recommendations.push("Title should be under 60 characters");

    if (!metaDescription) recommendations.push("Add a meta description (120-160 characters)");
    else if (metaDescription.length < 120) recommendations.push("Meta description should be at least 120 characters");
    else if (metaDescription.length > 160) recommendations.push("Meta description should be under 160 characters");

    if (!focusKeyword) recommendations.push("Define a focus keyword");
    if (!tags) recommendations.push("Add tags for better categorization");
    if (!ogImage) recommendations.push("Add an OG image for social sharing");

    return recommendations;
  };

  const getPendingImage = () => {
    if (isUploading) throw new Error('Please wait for the image file to finish loading.');
    if (imageError) throw new Error(imageError);
    const url = newImageUrl.trim();
    if (!url) return null;

    // Validate image URL if it's not base64
    if (!/^data:image\/[a-z0-9.+-]+[;,]/i.test(url)) {
      let parsed: URL;
      try {
        parsed = new URL(url);
      } catch {
        throw new Error('Please provide a valid image URL.');
      }
      if (!['https:', 'http:'].includes(parsed.protocol)) {
        throw new Error('Please use an HTTP(S) image URL or upload an image file.');
      }
    }

    return { url, altText: newImageAlt.trim() || title.trim() || 'Blog image' };
  };

  const handleAddImage = () => {
    try {
      const image = getPendingImage();
      if (!image) {
        alert('Please provide an image URL or upload an image first');
        return;
      }
      setImages(prev => [...prev, image]);
      setNewImageUrl("");
      setNewImageAlt("");
      setUploadedFile(null);
      setImageError("");

      // Show success feedback
      alert('Image attached. Save the blog to publish it.');
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Unable to add the image.');
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }
      
      // Validate file size (max 2MB for better performance)
      if (file.size > 2 * 1024 * 1024) {
        alert('Image size must be less than 2MB for optimal performance');
        return;
      }

      setUploadedFile(file);
      setNewImageUrl("");
      setImageError("");
      setIsUploading(true);

      // Convert file to base64
      const reader = new FileReader();
      reader.onload = () => {
        if (typeof reader.result === 'string' && reader.result.startsWith('data:image/')) {
          setNewImageUrl(reader.result);
        } else {
          setImageError('Failed to process the image. Please select it again.');
        }
        setIsUploading(false);
      };
      reader.onerror = () => {
        console.error('Error reading file');
        setImageError('Failed to read the image. Please select it again.');
        setIsUploading(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleAudioUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type (audio files)
      if (!file.type.startsWith('audio/')) {
        alert('Please select an audio file');
        return;
      }
      
      // Validate file size (max 20MB for audio)
      if (file.size > 20 * 1024 * 1024) {
        alert('Audio size must be less than 20MB');
        return;
      }

      setAudioFile(file);
      setIsUploadingAudio(true);

      // Convert file to base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        setAudioUrl(base64String);
        setIsUploadingAudio(false);
      };
      reader.onerror = () => {
        console.error('Error reading audio file');
        alert('Failed to read the audio file');
        setIsUploadingAudio(false);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveAudio = () => {
    setAudioUrl("");
    setSpeakerName("");
    setAudioFile(null);
    // Clean up localStorage
    if (slug) {
      localStorage.removeItem(`blog_audio_${slug}`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSaving) return;

    let submittedImages = images;
    try {
      const pendingImage = getPendingImage();
      if (pendingImage) submittedImages = [...images, pendingImage];
    } catch (error) {
      setActiveTab('content');
      alert(error instanceof Error ? error.message : 'Please check the image before saving.');
      return;
    }

    // Save audio data to localStorage before submission
    if (slug && (audioUrl || speakerName)) {
      try {
        const audioData = { speakerName, audioUrl };
        localStorage.setItem(`blog_audio_${slug}`, JSON.stringify(audioData));
      } catch (error) {
        console.error('Error saving audio data to localStorage:', error);
      }
    }
    
    onSubmit({
      title,
      content,
      author,
      metaDescription,
      focusKeyword,
      slug,
      keywords: keywords.split(",").map((k) => k.trim()).filter(Boolean),
      tags: tags.split(",").map((t) => t.trim()).filter(Boolean),
      ogImage,
      canonicalUrl,
      images: submittedImages,
      category,
      excerpt,
      readingTime,
      scheduledDate,
      status,
      // Note: audioUrl and speakerName are frontend-only features
      // They are not sent to the backend
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  // Insert HTML tag at cursor position
  const insertTag = (before: string, after: string = "") => {
    const textarea = document.getElementById('content') as HTMLTextAreaElement;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    
    const newText = content.substring(0, start) + before + selectedText + after + content.substring(end);
    setContent(newText);
    
    // Restore cursor position after the inserted tag
    setTimeout(() => {
      textarea.focus();
      const newCursorPos = start + before.length + selectedText.length;
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handleBold = () => {
    insertTag('<strong>', '</strong>');
  };

  const handleLink = () => {
    const url = prompt('Enter URL:');
    if (url) {
      insertTag(`<a href="${url}">`, '</a>');
    }
  };

  const handleLineBreak = () => {
    insertTag('<br>', '');
  };

  const handleHorizontalRule = () => {
    insertTag('<hr>', '');
  };

  const handleParagraph = () => {
    insertTag('<p>', '</p>');
  };

  // Helper function to apply formatting rules to a paragraph
  const applyFormattingRules = (paragraph: string): string => {
    let processedParagraph = paragraph.replace(/\n/g, '<br>');
    
    // Bold text that's in ALL CAPS (likely headings)
    processedParagraph = processedParagraph.replace(/\b([A-Z]{2,})\b/g, '<strong>$1</strong>');
    
    // Bold text between asterisks (*text*)
    processedParagraph = processedParagraph.replace(/\*([^*]+)\*/g, '<strong>$1</strong>');
    
    // Bold the first sentence of each paragraph (up to first period)
    const firstSentenceEnd = processedParagraph.indexOf('.');
    if (firstSentenceEnd > 10 && firstSentenceEnd < 200) { // Reasonable sentence length
      const firstSentence = processedParagraph.substring(0, firstSentenceEnd + 1);
      const restOfParagraph = processedParagraph.substring(firstSentenceEnd + 1);
      processedParagraph = `<strong>${firstSentence}</strong>${restOfParagraph}`;
    }
    
    // Bold short emphasized phrases in quotes
    processedParagraph = processedParagraph.replace(/"([^"]{3,30})"/g, '<strong>"$1"</strong>');
    
    return `<p>${processedParagraph}</p>`;
  };

  // Auto-format plain text to HTML with proper paragraphs and line breaks
  const autoFormatContent = () => {
    // If content already has HTML tags, don't reformat
    if (/<[a-z][\s\S]*>/i.test(content)) {
      alert('Content already contains HTML tags. Auto-format is skipped to preserve existing formatting.');
      return;
    }

    // Convert plain text to HTML with proper paragraphs
    const formatted = content
      .split(/\n\s*\n/) // Split by double newlines to identify paragraphs
      .map(paragraph => paragraph.trim())
      .filter(paragraph => paragraph.length > 0)
      .map(paragraph => applyFormattingRules(paragraph))
      .join('\n\n');

    setContent(formatted);
  };

  // Handle paste event to auto-format
  const handlePaste = (e: React.ClipboardEvent<HTMLTextAreaElement>) => {
    // Get pasted content
    const pastedText = e.clipboardData.getData('text');
    
    // Check if it's plain text (no HTML tags)
    if (!/<[a-z][\s\S]*>/i.test(pastedText)) {
      // Convert plain text to HTML using the same formatting rules
      const formatted = pastedText
        .split(/\n\s*\n/) // Split by double newlines to identify paragraphs
        .map(paragraph => paragraph.trim())
        .filter(paragraph => paragraph.length > 0)
        .map(paragraph => applyFormattingRules(paragraph))
        .join('\n\n');
      
      // Prevent default paste and insert formatted content
      e.preventDefault();
      const textarea = e.target as HTMLTextAreaElement;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      
      const newContent = content.substring(0, start) + formatted + content.substring(end);
      setContent(newContent);
      
      // Restore cursor position
      setTimeout(() => {
        textarea.focus();
        const newCursorPos = start + formatted.length;
        textarea.setSelectionRange(newCursorPos, newCursorPos);
      }, 0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {blog ? "Edit Blog Post" : "Create New Blog Post"}
          </h1>
          <p className="text-gray-600">
            Optimize your content for search engines and social media
          </p>
        </div>

        {/* Main Form Container */}
        <div className="bg-white rounded-lg shadow-lg">
          {/* Tab Navigation */}
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab("content")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === "content"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Content
            </button>
            <button
              onClick={() => setActiveTab("seo")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === "seo"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              SEO & Keywords
            </button>
            <button
              onClick={() => setActiveTab("preview")}
              className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                activeTab === "preview"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Preview & Share
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-8">
            {/* CONTENT TAB */}
            {activeTab === "content" && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-semibold text-gray-900 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title || ""}
                    onChange={(e) => setTitle(e.target.value || "")}
                    placeholder="Enter blog post title..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {title.length} characters (Ideal: 30-60)
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="author" className="block text-sm font-semibold text-gray-900 mb-2">
                      Author Name
                    </label>
                    <input
                      type="text"
                      id="author"
                      value={author || ""}
                      onChange={(e) => setAuthor(e.target.value || "")}
                      placeholder="Your name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="slug" className="block text-sm font-semibold text-gray-900 mb-2">
                      URL Slug
                    </label>
                    <input
                      type="text"
                      id="slug"
                      value={slug || ""}
                      onChange={(e) => setSlug(e.target.value || "")}
                      placeholder="auto-generated-from-title"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">Auto-generated from title</p>
                  </div>
                </div>

                {/* Content Options */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Content Options</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                        Category
                      </label>
                      <select
                        id="category"
                        value={category}
                        onChange={(e) => {
                          setCategory(e.target.value);
                          setCategoryManuallySet(true);
                        }}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      >
                        <option value="AI & Technology">AI & Technology</option>
                        <option value="Lead Generation">Lead Generation</option>
                        <option value="Sales & Marketing">Sales & Marketing</option>
                        <option value="Data Solutions">Data Solutions</option>
                        <option value="Email Marketing">Email Marketing</option>
                      </select>
                      <p className="text-xs text-gray-500 mt-1">
                        {categoryManuallySet
                          ? "This determines which category tab the blog appears under on the public blog page"
                          : "Auto-detected from title — pick a category to lock it in"}
                      </p>
                    </div>

                    <div>
                      <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                        Publication Status
                      </label>
                      <select
                        id="status"
                        value={status}
                        onChange={(e) => setStatus(e.target.value as "draft" | "published" | "scheduled")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      >
                        <option value="draft">Draft</option>
                        <option value="published">Published</option>
                        <option value="scheduled">Scheduled</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="scheduled-date" className="block text-sm font-medium text-gray-700 mb-1">
                        Scheduled Date
                      </label>
                      <input
                        type="datetime-local"
                        id="scheduled-date"
                        value={scheduledDate || ""}
                        onChange={(e) => setScheduledDate(e.target.value || "")}
                        disabled={status !== 'scheduled'}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                      <p className="text-xs text-gray-500 mt-1">Required when status is 'Scheduled'</p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Reading Time
                      </label>
                      <div className="px-3 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm text-gray-600">
                        {readingTime} minute{readingTime !== 1 ? 's' : ''} (auto-calculated)
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 mb-1">
                      Excerpt / Summary
                    </label>
                    <textarea
                      id="excerpt"
                      value={excerpt || ""}
                      onChange={(e) => setExcerpt(e.target.value || "")}
                      rows={3}
                      placeholder="Brief summary for blog listing pages (150-200 characters recommended)..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                    />
                    <p className="text-xs text-gray-500 mt-1">
                      {excerpt.length} characters (Optional: used in blog previews)
                    </p>
                  </div>
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-semibold text-gray-900 mb-2">
                    Blog Content
                  </label>
                  
                  {/* Formatting Toolbar */}
                  <div className="flex flex-wrap gap-2 mb-2">
                    <button
                      type="button"
                      onClick={handleBold}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
                      title="Bold (Ctrl+B)"
                    >
                      <Bold className="w-4 h-4" />
                      Bold
                    </button>
                    <button
                      type="button"
                      onClick={handleLink}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
                      title="Insert Link"
                    >
                      <LinkIcon className="w-4 h-4" />
                      Link
                    </button>
                    <button
                      type="button"
                      onClick={handleLineBreak}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
                      title="Line Break"
                    >
                      <AlignLeft className="w-4 h-4" />
                      Break
                    </button>
                    <button
                      type="button"
                      onClick={handleHorizontalRule}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
                      title="Horizontal Rule"
                    >
                      <Minus className="w-4 h-4" />
                      Divider
                    </button>
                    <button
                      type="button"
                      onClick={handleParagraph}
                      className="px-3 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
                      title="Paragraph"
                    >
                      <span className="w-4 h-4 font-bold text-gray-600">¶</span>
                      Paragraph
                    </button>
                    <button
                      type="button"
                      onClick={autoFormatContent}
                      className="px-3 py-2 bg-blue-100 hover:bg-blue-200 border border-blue-300 rounded-lg transition-colors flex items-center gap-2 text-sm font-medium"
                      title="Auto Format Content (includes paragraphs, line breaks, and smart bold formatting)"
                    >
                      <span className="w-4 h-4 font-bold text-blue-600">✨</span>
                      Auto Format
                    </button>
                  </div>

                  <textarea
                    id="content"
                    value={content || ""}
                    onChange={(e) => setContent(e.target.value || "")}
                    onPaste={handlePaste}
                    rows={20}
                    placeholder="Write your blog content here... (HTML tags supported, paste text for auto-formatting)"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {content.length} characters (~{Math.ceil(content.length / 5)} words) • HTML tags supported
                  </p>
                </div>

                {/* Images Section */}
                <div className="border-t pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <ImagePlus className="w-4 h-4" />
                    Blog Images
                  </h3>

                  {/* Add New Image */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    {/* Upload or URL Toggle */}
                    <div className="flex gap-2 mb-4">
                      <button
                        type="button"
                        onClick={() => {
                          setImageInputMode('url');
                          setUploadedFile(null);
                          setNewImageUrl('');
                          setNewImageAlt('');
                          setImageError('');
                        }}
                        disabled={isUploading || isSaving}
                        className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors disabled:opacity-50 ${imageInputMode === 'url' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                      >
                        URL
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setImageInputMode('upload');
                          setUploadedFile(null);
                          setNewImageUrl('');
                          setNewImageAlt('');
                          setImageError('');
                        }}
                        disabled={isUploading || isSaving}
                        className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors disabled:opacity-50 ${imageInputMode === 'upload' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
                      >
                        Upload
                      </button>
                    </div>

                    {/* The two branches render the same element shape, so React
                        would reuse the same input DOM node and flip it between
                        controlled (url) and uncontrolled (file). Distinct keys
                        force a remount instead. */}
                    {imageInputMode === 'url' ? (
                      <div className="mb-3" key="image-url-mode">
                        <label htmlFor="image-url" className="block text-sm font-medium text-gray-700 mb-1">
                          Image URL
                        </label>
                        <input
                          type="url"
                          id="image-url"
                          value={newImageUrl || ""}
                          onChange={(e) => {
                            setNewImageUrl(e.target.value || "");
                            setImageError("");
                          }}
                          placeholder="https://example.com/image.jpg"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                      </div>
                    ) : (
                      <div className="mb-3" key="image-upload-mode">
                        <label htmlFor="file-upload" className="block text-sm font-medium text-gray-700 mb-1">
                          Upload Image
                        </label>
                        <input
                          type="file"
                          id="file-upload"
                          accept="image/*"
                          onChange={handleFileUpload}
                          disabled={isUploading || isSaving}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                        {isUploading && (
                          <p className="text-xs text-blue-600 mt-1">Reading image file...</p>
                        )}
                      </div>
                    )}
                    
                    {/* Alt Text - shared between both modes */}
                    <div className="mb-3">
                      <label htmlFor="image-alt" className="block text-sm font-medium text-gray-700 mb-1">
                        Alt Text (optional; defaults to the blog title)
                      </label>
                      <input
                        type="text"
                        id="image-alt"
                        value={newImageAlt || ""}
                        onChange={(e) => setNewImageAlt(e.target.value || "")}
                        placeholder="Describe the image for accessibility"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>
                    
                    {/* Image Preview */}
                    {newImageUrl && (
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Image Preview
                        </label>
                        <div className="border border-gray-300 rounded-lg overflow-hidden">
                          {newImageUrl.startsWith('data:') && (
                            <div className="text-xs text-blue-600 bg-blue-50 px-2 py-1">
                              Base64 image ({(newImageUrl.length / 1024).toFixed(1)} KB)
                            </div>
                          )}
                          <img
                            key={newImageUrl.trim()}
                            src={newImageUrl.trim()}
                            alt="Preview"
                            className="w-full h-48 object-cover"
                            onError={() => setImageError('This image could not be loaded. Use a direct, publicly accessible image URL or upload a supported image file.')}
                          />
                        </div>
                      </div>
                    )}
                    
                    {imageError && <p role="alert" className="mb-3 text-sm text-red-600">{imageError}</p>}
                    <p className="mb-3 text-xs text-gray-600">
                      The image above is included when you save the blog. Use Add Image to attach it now and select another. The first image is the blog cover.
                    </p>
                    <button
                      type="button"
                      onClick={handleAddImage}
                      disabled={!newImageUrl.trim() || !!imageError || isUploading || isSaving}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm disabled:bg-gray-300 disabled:cursor-not-allowed"
                    >
                      Add Image
                    </button>
                  </div>

                  {/* Existing Images List */}
                  {images.length > 0 && (
                    <div className="space-y-3">
                      <p className="text-sm font-medium text-gray-700">Added Images ({images.length})</p>
                      {images.map((image, index) => (
                        <div key={index} className="flex items-start gap-3 bg-white border border-gray-200 rounded-lg p-3">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={image.url}
                              alt={image.altText}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                console.error(`Failed to load image at index ${index}`);
                                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect fill='%23e5e7eb' width='80' height='80'/%3E%3Ctext fill='%236b7280' font-size='12' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";
                              }}
                              onLoad={() => console.log(`Image at index ${index} loaded successfully`)}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                              {image.url.startsWith('data:') ? 'Base64 Image' : image.url}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">Alt: {image.altText}</p>
                            {image.url.startsWith('data:') && (
                              <p className="text-xs text-blue-600 mt-1">
                                {(image.url.length / 1024).toFixed(1)} KB
                              </p>
                            )}
                          </div>
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(index)}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Audio Section */}
                {showAudio && (
                  <div className="border-t pt-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="text-lg">🎙️</span>
                      Audio Version
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Frontend Only</span>
                    </h3>
                    <p className="text-xs text-gray-500 mb-4">Audio files are stored locally in your browser and not sent to the server.</p>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="mb-4">
                      <label htmlFor="speaker-name" className="block text-sm font-medium text-gray-700 mb-1">
                        Speaker Name
                      </label>
                      <input
                        type="text"
                        id="speaker-name"
                        value={speakerName || ""}
                        onChange={(e) => setSpeakerName(e.target.value || "")}
                        placeholder="Name of the speaker/narrator"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="audio-upload" className="block text-sm font-medium text-gray-700 mb-1">
                        Upload Audio File
                      </label>
                      <input
                        type="file"
                        id="audio-upload"
                        accept="audio/*"
                        onChange={handleAudioUpload}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                      />
                      {isUploadingAudio && (
                        <p className="text-xs text-blue-600 mt-1">Uploading audio...</p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">Supported formats: MP3, WAV, M4A (Max 20MB)</p>
                    </div>

                    {/* Audio Preview */}
                    {audioUrl && (
                      <div className="mt-4 p-3 bg-white border border-gray-200 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <p className="text-sm font-medium text-gray-700">Audio Preview</p>
                          <button
                            type="button"
                            onClick={handleRemoveAudio}
                            className="text-red-600 hover:text-red-800 text-sm font-medium"
                          >
                            Remove
                          </button>
                        </div>
                        <audio controls className="w-full">
                          <source src={audioUrl} type="audio/mpeg" />
                          Your browser does not support the audio element.
                        </audio>
                      </div>
                    )}
                  </div>
                </div>
                )}
              </div>
            )}

            {/* SEO TAB */}
            {activeTab === "seo" && (
              <div className="space-y-6">
                {/* SEO Score Card */}
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-semibold text-gray-900">SEO Score</h3>
                    <span className={`text-3xl font-bold ${
                      seoScore >= 80 ? "text-green-600" : seoScore >= 50 ? "text-yellow-600" : "text-red-600"
                    }`}>
                      {seoScore}/100
                    </span>
                  </div>
                  <div className="w-full bg-gray-300 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all ${
                        seoScore >= 80 ? "bg-green-500" : seoScore >= 50 ? "bg-yellow-500" : "bg-red-500"
                      }`}
                      style={{ width: `${seoScore}%` }}
                    />
                  </div>

                  {/* Recommendations */}
                  {getSEORecommendations().length > 0 && (
                    <div className="mt-4 space-y-2">
                      {getSEORecommendations().map((rec, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500" />
                          <span>{rec}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Meta Description */}
                <div>
                  <label htmlFor="meta-description" className="block text-sm font-semibold text-gray-900 mb-2">
                    Meta Description
                  </label>
                  <textarea
                    id="meta-description"
                    value={metaDescription || ""}
                    onChange={(e) => setMetaDescription(e.target.value || "")}
                    rows={3}
                    placeholder="Write a compelling description that will appear in search results (120-160 characters)..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs text-gray-500">
                      {metaDescription.length} characters
                    </p>
                    <span
                      className={`text-xs font-medium ${
                        metaDescription.length >= 120 && metaDescription.length <= 160
                          ? "text-green-600"
                          : "text-orange-600"
                      }`}
                    >
                      {metaDescription.length >= 120 && metaDescription.length <= 160
                        ? "✓ Perfect"
                        : "Ideal: 120-160"}
                    </span>
                  </div>
                </div>

                {/* Focus Keyword */}
                <div>
                  <label htmlFor="focus-keyword" className="block text-sm font-semibold text-gray-900 mb-2">
                    Focus Keyword
                  </label>
                  <input
                    type="text"
                    id="focus-keyword"
                    value={focusKeyword || ""}
                    onChange={(e) => setFocusKeyword(e.target.value || "")}
                    placeholder="e.g., web development tips"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    The primary keyword you want to rank for
                  </p>
                </div>

                {/* Tags and Keywords */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="tags" className="block text-sm font-semibold text-gray-900 mb-2">
                      Tags
                    </label>
                    <input
                      type="text"
                      id="tags"
                      value={tags || ""}
                      onChange={(e) => setTags(e.target.value || "")}
                      placeholder="e.g., web, development, tutorial"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">Comma-separated tags</p>
                  </div>

                  <div>
                    <label htmlFor="keywords" className="block text-sm font-semibold text-gray-900 mb-2">
                      Keywords
                    </label>
                    <input
                      type="text"
                      id="keywords"
                      value={keywords || ""}
                      onChange={(e) => setKeywords(e.target.value || "")}
                      placeholder="e.g., technology, ai, web development"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">Comma-separated keywords</p>
                  </div>
                </div>

                {/* Advanced Options */}
                <div className="border-t pt-6">
                  <h3 className="text-sm font-semibold text-gray-900 mb-4">Advanced SEO Options</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="og-image" className="block text-sm font-semibold text-gray-900 mb-2">
                        Open Graph Image URL
                      </label>
                      <input
                        type="url"
                        id="og-image"
                        value={ogImage || ""}
                        onChange={(e) => setOgImage(e.target.value || "")}
                        placeholder="https://example.com/image.jpg"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Image displayed when sharing on social media (1200x630px recommended)
                      </p>
                    </div>

                    <div>
                      <label htmlFor="canonical-url" className="block text-sm font-semibold text-gray-900 mb-2">
                        Canonical URL (Optional)
                      </label>
                      <input
                        type="url"
                        id="canonical-url"
                        value={canonicalUrl || ""}
                        onChange={(e) => setCanonicalUrl(e.target.value || "")}
                        placeholder="https://example.com/original-post"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Use if this content is republished or syndicated
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* PREVIEW TAB */}
            {activeTab === "preview" && (
              <div className="space-y-8">
                {/* Google Search Preview */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Google Search Preview
                  </h3>
                  <div className="bg-white border border-gray-300 rounded-lg p-4 space-y-2">
                    <div className="text-blue-600 text-sm">{slug ? `yoursite.com/blog/${slug}` : "yoursite.com/blog/..."}</div>
                    <div className="text-lg text-blue-900 font-semibold line-clamp-2">
                      {title || "Your blog post title"}
                    </div>
                    <div className="text-gray-600 text-sm line-clamp-2">
                      {metaDescription || "Add a meta description to see how it appears in search results..."}
                    </div>
                  </div>
                </div>

                {/* Social Media Preview */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Share2 className="w-4 h-4" />
                    Social Media Preview
                  </h3>
                  <div className="bg-gray-100 border border-gray-300 rounded-lg overflow-hidden">
                    {ogImage && (
                      <div className="w-full h-48 bg-gray-300 flex items-center justify-center">
                        <img
                          src={ogImage}
                          alt="Preview"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      </div>
                    )}
                    <div className="p-4 space-y-2">
                      <div className="text-sm text-gray-600">Your Website</div>
                      <div className="font-semibold text-gray-900 line-clamp-2">
                        {title || "Your blog post title"}
                      </div>
                      <div className="text-sm text-gray-600 line-clamp-2">
                        {metaDescription || "Meta description will appear here"}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Share Link */}
                <div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Link2 className="w-4 h-4" />
                    Share Link
                  </h3>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={shareLink || ""}
                      readOnly
                      className="flex-1 px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-sm text-gray-600"
                    />
                    <button
                      type="button"
                      onClick={() => copyToClipboard(shareLink)}
                      className="px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                    >
                      Copy Link
                    </button>
                  </div>
                </div>

                {/* Keywords Summary */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">Keywords Summary</h3>
                  <div className="space-y-2">
                    <div>
                      <span className="text-xs text-gray-600">Focus Keyword:</span>
                      <div className="text-sm font-medium text-gray-900">
                        {focusKeyword || "Not set"}
                      </div>
                    </div>
                    <div>
                      <span className="text-xs text-gray-600">Tags:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {tags
                          .split(",")
                          .filter(Boolean)
                          .map((tag, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                            >
                              #{tag.trim()}
                            </span>
                          ))}
                        {!tags && <span className="text-sm text-gray-500">No tags added</span>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Form Actions */}
            <div className="flex gap-3 mt-8 pt-6 border-t">
              <button
                type="submit"
                disabled={isSaving || isUploading}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSaving ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {blog ? "Updating..." : "Publishing..."}
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    {blog ? "Update Blog Post" : "Publish Blog Post"}
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors font-semibold"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}