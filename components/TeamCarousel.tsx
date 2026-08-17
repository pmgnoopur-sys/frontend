'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import './TeamCarousel.css';

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  description?: string;
}

export interface TeamCarouselProps {
  members: TeamMember[];
  eyebrow?: string;
  title?: React.ReactNode;
}

export default function TeamCarousel({
  members,
  eyebrow,
  title,
}: TeamCarouselProps) {
  return (
    <section className="team">
      <div className="team__head">
        <div>
          <p className="team__eyebrow">{eyebrow}</p>
          <h2 className="team__title">{title}</h2>
        </div>
      </div>

      <div className="team__accordion">
        {members.map((member, i) => (
          <div
            key={member.name + i}
            className="accordion-card"
          >
            <div className="accordion-panel">
              <img
                src={member.imageUrl}
                alt={member.name}
                className="accordion-image"
              />
              <div className="accordion-content">
                <div className="accordion-number">{(i + 1).toString().padStart(2, '0')}</div>
                <h3 className="accordion-name">{member.name}</h3>
                <p className="accordion-role">{member.role}</p>
                {member.description && <p className="accordion-description">{member.description}</p>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
