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
} from "lucide-react";

interface BlogFormProps {
  blog?: Blog;
  onSubmit: (data: Omit<Blog, "id" | "createdAt" | "updatedAt">) => void;
  onCancel: () => void;
}

type TabType = "content" | "seo" | "preview";

export default function BlogFormSEO({ blog, onSubmit, onCancel }: BlogFormProps) {
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

  // Images state
  const [images, setImages] = useState<{ url: string; altText: string }[]>(blog?.images || []);
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newImageAlt, setNewImageAlt] = useState("");

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

  // Generate share link
  useEffect(() => {
    if (slug) {
      setShareLink(`${window.location.origin}/blog/${slug}`);
    }
  }, [slug]);

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

  const handleAddImage = () => {
    if (newImageUrl && newImageAlt) {
      setImages([...images, { url: newImageUrl, altText: newImageAlt }]);
      setNewImageUrl("");
      setNewImageAlt("");
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
      images,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
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
                      value={slug}
                      onChange={(e) => setSlug(e.target.value)}
                      placeholder="auto-generated-from-title"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">Auto-generated from title</p>
                  </div>
                </div>

                <div>
                  <label htmlFor="content" className="block text-sm font-semibold text-gray-900 mb-2">
                    Blog Content
                  </label>
                  <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={12}
                    placeholder="Write your blog content here..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-sm"
                    required
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {content.length} characters (~{Math.ceil(content.length / 5)} words)
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                      <div>
                        <label htmlFor="image-url" className="block text-sm font-medium text-gray-700 mb-1">
                          Image URL
                        </label>
                        <input
                          type="url"
                          id="image-url"
                          value={newImageUrl}
                          onChange={(e) => setNewImageUrl(e.target.value)}
                          placeholder="https://example.com/image.jpg"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="image-alt" className="block text-sm font-medium text-gray-700 mb-1">
                          Alt Text
                        </label>
                        <input
                          type="text"
                          id="image-alt"
                          value={newImageAlt}
                          onChange={(e) => setNewImageAlt(e.target.value)}
                          placeholder="Describe the image for accessibility"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                        />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddImage}
                      disabled={!newImageUrl || !newImageAlt}
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
                                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80'%3E%3Crect fill='%23e5e7eb' width='80' height='80'/%3E%3Ctext fill='%236b7280' font-size='12' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3ENo Image%3C/text%3E%3C/svg%3E";
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">{image.url}</p>
                            <p className="text-xs text-gray-500 mt-1">Alt: {image.altText}</p>
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
                    value={metaDescription}
                    onChange={(e) => setMetaDescription(e.target.value)}
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
                    value={focusKeyword}
                    onChange={(e) => setFocusKeyword(e.target.value)}
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
                      value={tags}
                      onChange={(e) => setTags(e.target.value)}
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
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
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
                        value={ogImage}
                        onChange={(e) => setOgImage(e.target.value)}
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
                        value={canonicalUrl}
                        onChange={(e) => setCanonicalUrl(e.target.value)}
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
                      value={shareLink}
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
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-semibold flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                {blog ? "Update Blog Post" : "Publish Blog Post"}
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