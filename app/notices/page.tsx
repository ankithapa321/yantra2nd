"use client";

import { useEffect, useState } from "react";

import { supabase } from "@/lib/supabase";

type Notice = {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  created_at: string;
};

export default function NoticesPage() {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNotices = async () => {
      const { data, error } = await supabase
        .from("notices")
        .select(
          "id, title, description, image_url, created_at"
        )
        .eq("is_active", true)
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error loading notices:", error);
      } else {
        setNotices(data || []);
      }

      setLoading(false);
    };

    getNotices();
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <header className="relative z-20 border-b border-white/10 bg-black/30 backdrop-blur-xl">
  <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

    {/* Yantra AI Logo */}
    <a
      href="/"
      className="flex items-center gap-2"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600">
        <span className="font-bold text-white">
          Y
        </span>
      </div>

      <span className="text-xl font-bold tracking-tight text-white">
        Yantra<span className="text-purple-400">AI</span>
      </span>
    </a>

    {/* Back Home */}
    <a
      href="/"
      className="rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-medium text-white/70 transition hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
    >
      ← Back to Home
    </a>

  </div>
</header>

      {/* Background */}
      <section className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8">

        <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-60" />

        <div className="hero-glow pointer-events-none left-1/2 top-40 -translate-x-1/2" />

        <div className="relative z-10 mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-purple-400">
              Yantra AI
            </p>

            <h1 className="section-title">
              Latest Notices
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-white/45">
              Stay updated with the latest announcements,
              updates and important information from Yantra AI.
            </p>
          </div>

          {/* Loading */}
          {loading && (
            <div className="flex justify-center py-20">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-purple-400" />
            </div>
          )}

          {/* No notices */}
          {!loading && notices.length === 0 && (
            <div className="glass mx-auto max-w-xl rounded-3xl p-10 text-center">
              <div className="mb-4 text-4xl">✦</div>

              <h2 className="text-xl font-semibold">
                No notices yet
              </h2>

              <p className="mt-2 text-sm text-white/40">
                Check back later for new announcements.
              </p>
            </div>
          )}

          {/* Notices */}
          {!loading && notices.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2">

              {notices.map((notice) => (
                <article
                  key={notice.id}
                  className="glass-card overflow-hidden rounded-3xl"
                >

                  {/* Image */}
                  {notice.image_url && (
                    <div className="overflow-hidden bg-black/20">
                      <img
                        src={notice.image_url}
                        alt={notice.title}
                        className="max-h-[400px] w-full object-contain"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">

                    <p className="mb-3 text-xs uppercase tracking-wider text-purple-400/70">
                      Notice
                    </p>

                    <h2 className="text-xl font-semibold text-white">
                      {notice.title}
                    </h2>

                    {notice.description && (
                      <p className="mt-3 whitespace-pre-line text-sm leading-7 text-white/50">
                        {notice.description}
                      </p>
                    )}

                    <p className="mt-5 text-xs text-white/25">
                      {new Date(
                        notice.created_at
                      ).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>

                  </div>
                </article>
              ))}

            </div>
          )}

        </div>
      </section>

     
    </main>
  );
}