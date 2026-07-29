'use client';

import React, { useRef, useState, useEffect } from 'react';

interface ContentItem {
  title: string;
  description: string;
  content: React.ReactNode;
}

interface StickyScrollProps {
  content: ContentItem[];
}

export function StickyScroll({ content }: StickyScrollProps) {
  return (
    <div className="w-full">
      {content.map((item, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="md:w-1/2 md:sticky md:top-20 h-fit">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
            <p className="text-gray-600 leading-relaxed">{item.description}</p>
          </div>
          <div className="md:w-1/2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
