"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

type Notice = {
  id: string;
  title: string;
  description: string | null;
  image_url: string | null;
  is_active: boolean;
  created_at: string;
};

export default function AdminNotices() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const [notices, setNotices] = useState<Notice[]>([]);

  const [loading, setLoading] = useState(false);
  const [loadingNotices, setLoadingNotices] = useState(true);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // ==========================================
  // LOAD NOTICES
  // ==========================================

  const loadNotices = async () => {
    setLoadingNotices(true);

    const { data, error } = await supabase
      .from("notices")
      .select(
        "id, title, description, image_url, is_active, created_at"
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading notices:", error);
      setError("Unable to load notices.");
    } else {
      setNotices(data || []);
    }

    setLoadingNotices(false);
  };

  // ==========================================
  // CHECK ADMIN LOGIN
  // ==========================================

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/admin/login");
        return;
      }

      setCheckingAuth(false);

      await loadNotices();
    };

    checkUser();
  }, [router]);

  // ==========================================
  // PUBLISH NOTICE
  // ==========================================

  const handlePublish = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      if (!title.trim()) {
        throw new Error("Please enter a notice title.");
      }

      if (!description.trim()) {
        throw new Error("Please enter a notice description.");
      }

      let imageUrl = "";

      // Upload image
      if (image) {
        const fileExtension =
          image.name.split(".").pop()?.toLowerCase() || "jpg";

        const fileName = `${Date.now()}-${Math.random()
          .toString(36)
          .substring(2)}.${fileExtension}`;

        const { error: uploadError } = await supabase.storage
          .from("notice-images")
          .upload(fileName, image);

        if (uploadError) {
          throw uploadError;
        }

        const { data: publicUrlData } = supabase.storage
          .from("notice-images")
          .getPublicUrl(fileName);

        imageUrl = publicUrlData.publicUrl;
      }

      // Insert notice
      const { error: insertError } = await supabase
        .from("notices")
        .insert({
          title: title.trim(),
          description: description.trim(),
          image_url: imageUrl || null,
          is_active: true,
        });

      if (insertError) {
        throw insertError;
      }

      // Reset form
      setTitle("");
      setDescription("");
      setImage(null);

      const fileInput = document.getElementById(
        "notice-image"
      ) as HTMLInputElement | null;

      if (fileInput) {
        fileInput.value = "";
      }

      setSuccess("Notice published successfully!");

      // Reload notices immediately
      await loadNotices();
    } catch (err: any) {
      console.error(err);

      setError(
        err?.message ||
          "Something went wrong while publishing the notice."
      );
    } finally {
      setLoading(false);
    }
  };

  // ==========================================
  // DELETE NOTICE
  // ==========================================

  const handleDelete = async (notice: Notice) => {
    const confirmed = window.confirm(
      `Are you sure you want to delete "${notice.title}"?`
    );

    if (!confirmed) {
      return;
    }

    setDeletingId(notice.id);
    setError("");
    setSuccess("");

    try {
      // ------------------------------------------
      // DELETE IMAGE FROM STORAGE
      // ------------------------------------------

      if (notice.image_url) {
        try {
          const imageUrl = new URL(notice.image_url);

          const path = imageUrl.pathname.split(
            "/notice-images/"
          )[1];

          if (path) {
            const { error: storageError } =
              await supabase.storage
                .from("notice-images")
                .remove([decodeURIComponent(path)]);

            if (storageError) {
              console.warn(
                "Image deletion warning:",
                storageError
              );
            }
          }
        } catch (imageError) {
          console.warn(
            "Could not determine image path:",
            imageError
          );
        }
      }

      // ------------------------------------------
      // DELETE NOTICE FROM DATABASE
      // ------------------------------------------

      const { error: deleteError } = await supabase
        .from("notices")
        .delete()
        .eq("id", notice.id);

      if (deleteError) {
        throw deleteError;
      }

      // Remove from UI immediately
      setNotices((currentNotices) =>
        currentNotices.filter(
          (item) => item.id !== notice.id
        )
      );

      setSuccess("Notice deleted successfully!");
    } catch (err: any) {
      console.error("Delete error:", err);

      setError(
        err?.message || "Unable to delete notice."
      );
    } finally {
      setDeletingId(null);
    }
  };

  // ==========================================
  // LOGOUT
  // ==========================================

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  };

  // ==========================================
  // AUTH LOADING
  // ==========================================

  if (checkingAuth) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0a0a0a] text-white">
        <div className="flex items-center gap-3 text-white/50">
          <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/20 border-t-purple-400" />
          Checking authentication...
        </div>
      </main>
    );
  }

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] px-4 py-8 text-white">

      {/* Background */}
      <div className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-60" />

      <div className="hero-glow pointer-events-none left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2" />

      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* =====================================
            HEADER
        ====================================== */}

        <header className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <div className="mb-3 flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10">
                <span className="gradient-text text-xl font-bold">
                  Y
                </span>
              </div>

              <div>
                <h1 className="text-xl font-bold">
                  Yantra AI
                </h1>

                <p className="text-xs text-white/30">
                  Administration Portal
                </p>
              </div>

            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Notice Management
            </h2>

            <p className="mt-2 text-sm text-white/40">
              Create, publish and manage announcements.
            </p>
          </div>

          {/* Logout */}
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/60 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            Sign out
          </button>

        </header>

        {/* =====================================
            CREATE NOTICE
        ====================================== */}

        <div className="glass rounded-3xl p-6 shadow-2xl sm:p-8">

          <div className="mb-8 flex items-start gap-4">

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10">
              <span className="text-xl">
                ✦
              </span>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Create New Notice
              </h3>

              <p className="mt-1 text-sm text-white/40">
                This notice will appear as a popup on the public website.
              </p>
            </div>

          </div>

          <form
            onSubmit={handlePublish}
            className="space-y-7"
          >

            {/* Title */}
            <div>
              <label
                htmlFor="notice-title"
                className="mb-2 block text-sm font-medium text-white/70"
              >
                Notice Title
              </label>

              <input
                id="notice-title"
                type="text"
                value={title}
                onChange={(e) =>
                  setTitle(e.target.value)
                }
                placeholder="Enter notice title"
                maxLength={150}
                required
                className="!w-full !rounded-xl !border-white/10 !bg-white/[0.03] !px-4 !py-3.5 !text-white placeholder:!text-white/20 focus:!border-purple-400/40 focus:!bg-white/[0.05]"
              />

              <p className="mt-2 text-right text-xs text-white/20">
                {title.length}/150
              </p>
            </div>

            {/* Description */}
            <div>
              <label
                htmlFor="notice-description"
                className="mb-2 block text-sm font-medium text-white/70"
              >
                Notice Description
              </label>

              <textarea
                id="notice-description"
                value={description}
                onChange={(e) =>
                  setDescription(e.target.value)
                }
                placeholder="Write your notice here..."
                rows={6}
                required
                className="!min-h-[150px] !w-full !resize-none !rounded-xl !border-white/10 !bg-white/[0.03] !px-4 !py-3.5 !text-white placeholder:!text-white/20 focus:!border-purple-400/40 focus:!bg-white/[0.05]"
              />
            </div>

            {/* Image */}
            <div>
              <label
                htmlFor="notice-image"
                className="mb-2 block text-sm font-medium text-white/70"
              >
                Notice Image
                <span className="ml-2 text-white/20">
                  Optional
                </span>
              </label>

              <label
                htmlFor="notice-image"
                className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-6 py-10 text-center transition hover:border-purple-400/30 hover:bg-purple-500/[0.03]"
              >

                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl">
                  ↑
                </div>

                <p className="text-sm font-medium text-white/70">
                  {image
                    ? image.name
                    : "Click to upload an image"}
                </p>

                <p className="mt-2 text-xs text-white/30">
                  PNG, JPG, JPEG or WEBP
                </p>

                {image && (
                  <p className="mt-2 text-xs text-purple-300">
                    {(image.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                )}

                <input
                  id="notice-image"
                  type="file"
                  accept="image/png,image/jpeg,image/jpg,image/webp"
                  className="hidden"
                  onChange={(e) => {
                    const selectedFile =
                      e.target.files?.[0] || null;

                    if (selectedFile) {
                      if (
                        selectedFile.size >
                        5 * 1024 * 1024
                      ) {
                        setError(
                          "Image must be smaller than 5MB."
                        );

                        e.target.value = "";
                        setImage(null);
                        return;
                      }

                      setError("");
                      setImage(selectedFile);
                    }
                  }}
                />

              </label>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3">
                <p className="text-sm text-red-300">
                  {error}
                </p>
              </div>
            )}

            {/* Success */}
            {success && (
              <div className="rounded-xl border border-green-400/20 bg-green-500/10 px-4 py-3">
                <p className="text-sm text-green-300">
                  {success}
                </p>
              </div>
            )}

            {/* Publish */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full rounded-xl px-6 py-4 font-semibold disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-3">
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Publishing Notice...
                </span>
              ) : (
                "Publish Notice"
              )}
            </button>

          </form>

        </div>

        {/* =====================================
            PUBLISHED NOTICES
        ====================================== */}

        <div className="glass mt-8 rounded-3xl p-6 shadow-2xl sm:p-8">

          <div className="mb-6">
            <h3 className="text-xl font-semibold">
              Published Notices
            </h3>

            <p className="mt-1 text-sm text-white/40">
              View and delete previously published notices.
            </p>
          </div>

          {/* Loading */}
          {loadingNotices && (
            <div className="flex justify-center py-10">
              <span className="h-7 w-7 animate-spin rounded-full border-2 border-white/10 border-t-purple-400" />
            </div>
          )}

          {/* Empty */}
          {!loadingNotices &&
            notices.length === 0 && (
              <div className="rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center">
                <div className="mb-3 text-3xl">
                  ✦
                </div>

                <p className="text-sm text-white/40">
                  No notices published yet.
                </p>
              </div>
            )}

          {/* Notice List */}
          {!loadingNotices &&
            notices.length > 0 && (
              <div className="space-y-4">

                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className="flex flex-col gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-purple-400/10 hover:bg-white/[0.04] sm:flex-row sm:items-center sm:justify-between"
                  >

                    {/* Left */}
                    <div className="flex min-w-0 items-center gap-4">

                      {/* Image */}
                      {notice.image_url ? (
                        <img
                          src={notice.image_url}
                          alt={notice.title}
                          className="h-16 w-16 shrink-0 rounded-xl object-cover"
                        />
                      ) : (
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-purple-400/10 bg-purple-500/10 text-xl">
                          ✦
                        </div>
                      )}

                      {/* Info */}
                      <div className="min-w-0">

                        <h4 className="truncate font-semibold text-white">
                          {notice.title}
                        </h4>

                        <p className="mt-1 text-xs text-white/30">
                          {new Date(
                            notice.created_at
                          ).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </p>

                        <span className="mt-2 inline-block rounded-full bg-green-500/10 px-2.5 py-1 text-xs text-green-300">
                          Active
                        </span>

                      </div>

                    </div>

                    {/* Delete Button */}
                    <button
                      type="button"
                      onClick={() =>
                        handleDelete(notice)
                      }
                      disabled={
                        deletingId === notice.id
                      }
                      className="flex shrink-0 items-center justify-center gap-2 rounded-xl border border-red-400/20 bg-red-500/5 px-5 py-2.5 text-sm font-medium text-red-300 transition hover:border-red-400/40 hover:bg-red-500/10 hover:text-red-200 disabled:cursor-not-allowed disabled:opacity-50"
                    >

                      {deletingId === notice.id ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-red-300/30 border-t-red-300" />
                          Deleting...
                        </>
                      ) : (
                        <>
                          <span>
                            🗑
                          </span>
                          Delete
                        </>
                      )}

                    </button>

                  </div>
                ))}

              </div>
            )}

        </div>

        {/* =====================================
            INFORMATION
        ====================================== */}

        <div className="mt-6 grid gap-4 sm:grid-cols-3">

          <div className="glass-card rounded-2xl p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-white/30">
              Database
            </p>

            <p className="mt-2 text-sm text-white/70">
              Notice data is stored securely in Supabase.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-white/30">
              Storage
            </p>

            <p className="mt-2 text-sm text-white/70">
              Images are stored in the notice-images bucket.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-white/30">
              Visibility
            </p>

            <p className="mt-2 text-sm text-white/70">
              Notices are displayed from newest to oldest.
            </p>
          </div>

        </div>

        {/* Footer */}
        <p className="py-8 text-center text-xs text-white/20">
          Yantra AI Administration
        </p>

      </div>
    </main>
  );
}