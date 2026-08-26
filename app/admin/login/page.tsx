"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function AdminLogin() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    router.push("/admin/notices");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a] px-4 py-12">

      {/* Background grid */}
      <div className="bg-grid-pattern absolute inset-0 opacity-60" />

      {/* Purple glow */}
      <div className="hero-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />

      {/* Decorative circles */}
      <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl" />

      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-600/10 blur-3xl" />

      {/* Main container */}
      <div className="relative z-10 w-full max-w-md animate-in">

        {/* Logo */}
        <div className="mb-8 text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 shadow-[0_0_40px_rgba(139,92,246,0.15)]">
            <span className="gradient-text text-3xl font-bold">
              Y
            </span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white">
            Yantra AI
          </h1>

          <p className="mt-2 text-sm text-white/40">
            Administration Portal
          </p>

        </div>

        {/* Login card */}
        <div className="glass rounded-3xl p-8 shadow-2xl">

          {/* Header */}
          <div className="mb-7">

            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />

              <span className="text-xs font-medium text-purple-300">
                Admin Access
              </span>
            </div>

            <h2 className="text-2xl font-semibold text-white">
              Welcome back
            </h2>

            <p className="mt-2 text-sm leading-6 text-white/40">
              Sign in to manage your Yantra AI notices.
            </p>

          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-white/70"
              >
                Email address
              </label>

              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@example.com"
                className="!w-full !rounded-xl !border-white/10 !bg-white/[0.03] !px-4 !py-3.5 !text-white outline-none transition placeholder:!text-white/20 focus:!border-purple-400/40 focus:!bg-white/[0.05] focus:!shadow-[0_0_0_3px_rgba(139,92,246,0.08)]"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-white/70"
              >
                Password
              </label>

              <div className="relative">

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="!w-full !rounded-xl !border-white/10 !bg-white/[0.03] !px-4 !py-3.5 !pr-20 !text-white outline-none transition placeholder:!text-white/20 focus:!border-purple-400/40 focus:!bg-white/[0.05] focus:!shadow-[0_0_0_3px_rgba(139,92,246,0.08)]"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg px-2 py-1 text-xs font-medium text-white/30 transition hover:text-white/80"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>

              </div>
            </div>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3">
                <p className="text-sm leading-5 text-red-300">
                  {error}
                </p>
              </div>
            )}

            {/* Sign in */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full rounded-xl px-6 py-3.5 font-semibold disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Signing in...
                </span>
              ) : (
                "Sign in to Dashboard"
              )}
            </button>

          </form>

          {/* Security */}
          <div className="mt-7 flex items-center justify-center gap-2 border-t border-white/5 pt-6">
            <span className="h-1.5 w-1.5 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]" />

            <span className="text-xs text-white/30">
              Secure administrator access
            </span>
          </div>

        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs text-white/20">
          © {new Date().getFullYear()} Yantra AI
        </p>

      </div>
    </main>
  );
}