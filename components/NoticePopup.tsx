"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Notice = {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  is_active: boolean;
  created_at: string;
};

export default function NoticePopup() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNotices = async () => {
      const { data, error } = await supabase
        .from("notices")
        .select(
          "id, title, description, image_url, is_active, created_at"
        )
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching notices:", error);
        setLoading(false);
        return;
      }

      if (data && data.length > 0) {
        setNotices(data);
        setCurrentIndex(0);
        setIsOpen(true);
      }

      setLoading(false);
    };

    getNotices();
  }, []);

  const handleClose = () => {
    if (currentIndex < notices.length - 1) {
      setCurrentIndex((previous) => previous + 1);
    } else {
      setIsOpen(false);
    }
  };

  if (loading || !isOpen || notices.length === 0) {
    return null;
  }

  const notice = notices[currentIndex];

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-6">

      {/* Dark blended background */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-md" />

      {/* Purple background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/20 blur-[120px]" />

      {/* Popup */}
      <div className="relative max-h-[90vh] w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#0d0d12]/95 shadow-[0_25px_100px_rgba(0,0,0,0.7)] backdrop-blur-2xl">

        {/* Purple glow inside card */}
        <div className="pointer-events-none absolute -right-32 -top-32 h-64 w-64 rounded-full bg-purple-600/20 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close notice"
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 backdrop-blur-md transition hover:border-white/20 hover:bg-white/10 hover:text-white"
        >
          <span className="text-2xl font-light leading-none">
            ×
          </span>
        </button>

        {/* Image */}
        {notice.image_url && (
          <div className="relative w-full overflow-hidden bg-black/20">
            <img
              src={notice.image_url}
              alt={notice.title}
              className="max-h-[55vh] w-full object-contain"
            />

            {/* Image fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0d0d12] to-transparent" />
          </div>
        )}

        {/* Content */}
        <div className="relative p-7 sm:p-8">

          {/* Notice counter */}
          {notices.length > 1 && (
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_10px_rgba(167,139,250,0.8)]" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-300/70">
                Notice {currentIndex + 1} of {notices.length}
              </p>
            </div>
          )}

          {/* Title */}
          <h2 className="mb-4 bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl">
            {notice.title}
          </h2>

          {/* Description */}
          {notice.description && (
            <p className="whitespace-pre-line text-sm leading-7 text-white/55 sm:text-base">
              {notice.description}
            </p>
          )}

          {/* Button */}
          <button
            type="button"
            onClick={handleClose}
            className="btn-primary mt-7 w-full rounded-xl px-6 py-3.5 font-semibold"
          >
            {currentIndex < notices.length - 1
              ? "Next Notice"
              : "Continue to Website"}
          </button>

        </div>
      </div>
    </div>
  );
}