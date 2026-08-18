'use client';

import { useState } from 'react';
import { contactContent } from '@/lib/content';
import { supabase } from '@/lib/supabase';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const company = formData.get('company') as string;
    const message = formData.get('message') as string;

    const { error } = await supabase.from('contacts').insert([
      {
        name,
        email,
        company,
        message,
      },
    ]);

    setLoading(false);

    if (error) {
      console.error('Supabase error:', error);
      setError('Something went wrong. Please try again.');
      return;
    }

    setSubmitted(true);
    form.reset();
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-[#0a0a0a]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-sm font-semibold text-purple-400 tracking-wider uppercase mb-3">
            {contactContent.badge}
          </span>

          <h2 className="section-title text-white mb-5">
            {contactContent.title}
            <br />
            <span className="gradient-text">
              {contactContent.highlight}
            </span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed">
            {contactContent.description}
          </p>
        </div>

        {/* Contact Area */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left - Contact Information */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-3">
              Let&apos;s Talk
            </h3>

            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you are exploring your first AI project or scaling an
              existing system, our team is ready to help.
            </p>

            <div className="space-y-5">
              {contactContent.info.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/5 hover:border-purple-500/30 transition-colors"
                >
                  <div className="w-11 h-11 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    {item.title === 'Email Us' && (
                      <svg
                        className="w-5 h-5 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    )}

                    {item.title === 'Call Us' && (
                      <svg
                        className="w-5 h-5 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.49 1.96a2 2 0 01-.55 1.87L8.09 9.41a16 16 0 006.5 6.5l1.065-1.07a2 2 0 011.87-.55l1.96.49A2 2 0 0121 16.72V19a2 2 0 01-2 2C9.61 21 3 14.39 3 6V5z"
                        />
                      </svg>
                    )}

                    {item.title === 'Visit Us' && (
                      <svg
                        className="w-5 h-5 text-purple-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 21s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"
                        />
                        <circle
                          cx="12"
                          cy="10"
                          r="2.5"
                          strokeWidth={1.5}
                        />
                      </svg>
                    )}
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      {item.title}
                    </p>
                    <p className="text-sm font-medium text-white">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-white mb-6">
              Start a Conversation
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center min-h-[350px] text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mb-5">
                  <svg
                    className="w-8 h-8 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>

                <h4 className="text-xl font-bold text-white mb-2">
                  Message Received
                </h4>

                <p className="text-gray-400">
                  Thanks for reaching out. We&apos;ll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <div className="grid sm:grid-cols-2 gap-5">

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      placeholder={contactContent.form.name}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Email
                    </label>

                    <input
                      type="email"
                      name="email"
                      placeholder={contactContent.form.email}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 outline-none focus:border-purple-500/50 transition-colors"
                    />
                  </div>

                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    placeholder={contactContent.form.company}
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 outline-none focus:border-purple-500/50 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">
                    Message
                  </label>

                  <textarea
                    name="message"
                    rows={5}
                    placeholder={contactContent.form.message}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-gray-600 outline-none focus:border-purple-500/50 transition-colors resize-none"
                  />
                </div>

                {/* Error */}
                {error && (
                  <p className="text-red-400 text-sm">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-3.5 rounded-xl text-base font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : contactContent.form.button}
                </button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}