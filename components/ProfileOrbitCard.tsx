'use client';

// Adapted from Uiverse.io by Darlley — icons swapped for B2B marketing/lead-gen themes
import React from 'react';
import {
  Mail,
  Users,
  BarChart3,
  Target,
  Database,
  PhoneCall,
  Globe,
  ShieldCheck,
  Building2,
} from 'lucide-react';

const orbitItems = [
  { icon: Mail, label: 'Email Marketing' },
  { icon: Users, label: 'Account-Based Marketing' },
  { icon: BarChart3, label: 'Data & Analytics' },
  { icon: Target, label: 'Precision Targeting' },
  { icon: Globe, label: 'Global Reach' },
  { icon: Database, label: 'Verified Databases' },
  { icon: ShieldCheck, label: 'Data Compliance' },
  { icon: PhoneCall, label: 'Telemarketing & Outreach' },
];

const RADIUS_PERCENT = 44;

export default function ProfileOrbitCard() {
  const total = orbitItems.length;

  return (
    <div className="relative h-full w-full flex items-center justify-center">
      <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]">
        {/* Outer dashed ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FECB0F]/40" />
        {/* Inner subtle ring for depth */}
        <div className="absolute inset-6 rounded-full border border-[#FECB0F]/15" />

        {orbitItems.map(({ icon: Icon, label }, index) => {
          const angle = (index * 360) / total - 90;
          const rad = (angle * Math.PI) / 180;
          const top = 50 + RADIUS_PERCENT * Math.sin(rad);
          const left = 50 + RADIUS_PERCENT * Math.cos(rad);

          return (
            <button
              key={label}
              aria-label={label}
              title={label}
              style={{ top: `${top}%`, left: `${left}%`, transform: 'translate(-50%, -50%)' }}
              className="absolute rounded-full cursor-pointer border border-[#FECB0F]/40 bg-black p-[3px] shadow-lg shadow-black/30 hover:scale-110 hover:border-[#FECB0F] active:scale-95 transition-all duration-300"
            >
              <span className="flex items-center justify-center w-[38px] h-[38px] sm:w-[44px] sm:h-[44px] rounded-full bg-black">
                <Icon className="w-5 h-5 text-[#FECB0F]" strokeWidth={2} />
              </span>
            </button>
          );
        })}

        {/* Center avatar */}
        <button
          aria-label="PMG B2B"
          title="PMG B2B"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] p-1.5 rounded-full border-2 border-[#FECB0F]/50 bg-black cursor-pointer hover:border-[#FECB0F] transition-all duration-500 z-[2] shadow-xl shadow-black/40 overflow-hidden"
        >
          <div className="relative w-full h-full flex items-center justify-center rounded-full bg-gradient-to-br from-[#FECB0F] to-[#F5A623] active:scale-95 hover:scale-95 transition-all duration-500 z-[2]">
            <Building2 className="w-12 h-12 sm:w-16 sm:h-16 text-black" strokeWidth={1.5} />
          </div>
        </button>
      </div>
    </div>
  );
}
