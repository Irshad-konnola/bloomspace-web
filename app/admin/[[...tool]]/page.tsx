'use client';

import dynamic from 'next/dynamic';
import config from '../../../sanity.config';

// This is the key: it forces the component to ONLY load in the browser.
const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { 
    ssr: false,
    loading: () => (
      <div className="flex h-screen w-full items-center justify-center bg-white">
        <p className="text-lg font-medium text-gray-500">Loading Studio...</p>
      </div>
    )
  }
);

export default function StudioPage() {
  return <NextStudio config={config} />;
}