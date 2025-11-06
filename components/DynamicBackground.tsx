"use client";

export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Minimal black background - no colors */}
      <div className="absolute inset-0 bg-background" />
    </div>
  );
}
