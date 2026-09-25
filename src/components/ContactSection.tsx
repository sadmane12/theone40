import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Clock, Send, CheckCircle2,
  ShieldCheck, ArrowUpRight
} from 'lucide-react';
import { ContactFormData, CATEGORY_LABELS, ENQUIRY_INBOX } from '../data/playerAgencyData';

export const ContactSection: React.FC = () => {
  const emptyForm: ContactFormData = {
    fullName: '',
    email: '',
    phone: '',
    organisation: '',
    category: 'club',
    message: '',
  };
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${ENQUIRY_INBOX}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Website Enquiry — ${CATEGORY_LABELS[formData.category]} — ${formData.fullName}`,
          _template: 'table',
          _captcha: 'false',
          Classification: CATEGORY_LABELS[formData.category],
          'Full Name': formData.fullName,
          Email: formData.email,
          Phone: formData.phone || '—',
          'Club / Organisation': formData.organisation || '—',
          Message: formData.message,
        }),
      });
      if (!res.ok) throw new Error('delivery failed');
      setSubmitted(true);
      setFormData(emptyForm);
    } catch {
      setError('Transmission failed. Please email us directly at info@myscosports.co.uk');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-void overflow-hidden">
      {/* Aerial London at night — cinematic backdrop */}
      <div className="absolute inset-0 z-0">
        <img
          src="/london-night-aerial.jpg"
          alt="London at night from above"
          className="h-full w-full object-cover opacity-45 [animation:slowPan_40s_ease-in-out_infinite_alternate]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,6,8,0.96)_0%,rgba(6,6,8,0.72)_30%,rgba(6,6,8,0.66)_70%,rgba(6,6,8,0.98)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_50%_40%,rgba(201,168,76,0.08),transparent_70%)]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-[10px] tracking-[0.45em] text-gold-dim uppercase mb-4">Confidential Advisory</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-[5.5rem] leading-[0.92] tracking-[-0.03em] mb-6">
            Executive <span className="italic font-editorial font-light text-gold-bright">Consultation</span>
          </h2>
          <div className="gold-rule max-w-xs mx-auto mb-6" />
          <p className="font-editorial text-lg md:text-xl text-fog/75 font-light italic leading-relaxed">
            Direct, privileged line for sporting directors, club executives, professional athletes, and national federations.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Office Details */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="relative rounded-sm overflow-hidden border border-white/[0.08] shadow-2xl">
              <img
                src="/london-office.jpg"
                alt="Mysco Sports London Office"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                <div>
                  <span className="text-[9px] tracking-[0.25em] text-gold uppercase font-mono block">Global Headquarters</span>
                  <span className="font-display text-lg text-cream">Mayfair & Stratford, London</span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" title="Office Active" />
              </div>
            </div>

            <div className="bg-charcoal/85 backdrop-blur-md border border-white/[0.08] p-7 md:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="chamfer-sm w-10 h-10 border border-gold/30 bg-gold/[0.07] flex items-center justify-center shrink-0 text-gold">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-body tracking-[0.2em] text-gold-dim">London Headquarters</h4>
                  <p className="font-display text-base text-cream mt-1">Mysco Sports Ltd</p>
                  <p className="text-xs font-light text-fog/70 mt-0.5 leading-relaxed">
                    Mayfair, London, United Kingdom
                  </p>
                  <span className="text-[10px] text-dusk font-mono mt-1 block">Registered in England & Wales</span>
                  <div className="mt-3 flex items-start gap-4 border-l border-gold/30 pl-3">
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.22em] text-gold-dim font-body block">Istanbul Office</span>
                      <span className="text-[11px] font-light text-fog/60 block mt-0.5">Levent, Istanbul · Türkiye</span>
                    </div>
                    <div className="h-8 w-px bg-gold/20 shrink-0" />
                    <div>
                      <span className="text-[9px] uppercase tracking-[0.22em] text-gold-dim font-body block">Brussels Office</span>
                      <span className="text-[11px] font-light text-fog/60 block mt-0.5">Brussels · Belgium</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="h-px bg-white/[0.04]" />

              <div className="flex items-start gap-4">
                <div className="chamfer-sm w-10 h-10 border border-gold/30 bg-gold/[0.07] flex items-center justify-center shrink-0 text-gold">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-body tracking-[0.2em] text-gold-dim">Electronic Dispatch</h4>
                  <a
                    href="mailto:info@myscosports.co.uk"
                    className="font-display text-sm md:text-base text-cream hover:text-gold transition-colors mt-1 block"
                  >
                    info@myscosports.co.uk
                  </a>
                  <span className="text-[10px] text-fog/60 block mt-0.5">Response within one business day · Strictly confidential</span>
                </div>
              </div>

              <div className="h-px bg-white/[0.04]" />

              <div className="flex items-start gap-4">
                <div className="chamfer-sm w-10 h-10 border border-gold/30 bg-gold/[0.07] flex items-center justify-center shrink-0 text-gold">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-xs uppercase font-body tracking-[0.2em] text-gold-dim">Telephone</h4>
                  <p className="font-display text-base font-normal text-cream mt-1">Available on request</p>
                  <span className="text-[10px] text-fog/60 block mt-0.5">Direct line shared upon initial written enquiry</span>
                </div>
              </div>

              <div className="h-px bg-white/[0.04]" />

              <div className="flex items-center justify-between text-[10px] tracking-[0.18em] text-dusk uppercase pt-1">
                <span className="flex items-center gap-1.5">
                  <Clock size={12} className="text-gold/70" /> GMT London Time
                </span>
                <span className="flex items-center gap-1.5 text-gold/80">
                  <ShieldCheck size={12} /> Strictly Confidential
                </span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 bg-charcoal/85 backdrop-blur-md border border-white/[0.09] p-8 md:p-12 relative"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-5">
                <div className="chamfer w-16 h-16 border border-gold/40 bg-gold/[0.08] mx-auto flex items-center justify-center text-gold">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-cream">Enquiry Received</h3>
                <p className="font-editorial text-lg text-fog/80 max-w-md mx-auto italic">
                  Thank you. Our London intermediary desk reviews every communication discreetly. A partner will connect with you within 4 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-gold hover:text-gold-bright transition-colors"
                >
                  Send another message <ArrowUpRight size={14} />
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] tracking-[0.3em] text-gold-dim uppercase block mb-3">Enquiry Classification</span>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      { id: 'club', label: 'Club / Team Operations' },
                      { id: 'player', label: 'Player Agency' },
                      { id: 'camps', label: 'Training Camp' },
                      { id: 'uefa', label: 'UEFA Fixture Support' },
                      { id: 'federation', label: 'National Federation' },
                      { id: 'partnership', label: 'Brand / Commercial' },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, category: opt.id as any })}
                        className={`py-2.5 px-3 text-[11px] font-body tracking-[0.1em] border transition-all text-left ${
                          formData.category === opt.id
                            ? 'border-gold bg-gold/10 text-gold-bright font-medium'
                            : 'border-white/[0.08] text-fog/60 hover:text-cream hover:border-white/20'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-fog/60 mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Marcus Vance"
                      className="w-full bg-void/80 border border-white/[0.08] focus:border-gold px-4 py-3 text-sm text-cream placeholder:text-dusk focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-fog/60 mb-2">
                      Official Email *
                    </label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@club.com or personal"
                      className="w-full bg-void/80 border border-white/[0.08] focus:border-gold px-4 py-3 text-sm text-cream placeholder:text-dusk focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-fog/60 mb-2">
                      Direct Contact Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+44 7000 000000"
                      className="w-full bg-void/80 border border-white/[0.08] focus:border-gold px-4 py-3 text-sm text-cream placeholder:text-dusk focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-fog/60 mb-2">
                      Club / Organisation / Agency
                    </label>
                    <input
                      type="text"
                      value={formData.organisation}
                      onChange={(e) => setFormData({ ...formData, organisation: e.target.value })}
                      placeholder="e.g. Sporting CP / Independent"
                      className="w-full bg-void/80 border border-white/[0.08] focus:border-gold px-4 py-3 text-sm text-cream placeholder:text-dusk focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-fog/60 mb-2">
                    Scope of Requirement / Executive Brief *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="To expedite your request, please provide specifics regarding strategic consultancy, sponsorships, acquisitions, or operational details such as camp locations, fixture dates, and player Transfermarkt links..."
                    className="w-full bg-void/80 border border-white/[0.08] focus:border-gold px-4 py-3 text-sm text-cream placeholder:text-dusk focus:outline-none transition-colors resize-none font-light"
                  />
                </div>

                {error && (
                  <p className="border border-red-900/60 bg-red-950/40 px-4 py-3 text-xs text-red-200">
                    {error}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-3">
                  <span className="text-[10px] tracking-[0.1em] text-dusk flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-gold/80 shrink-0" />
                    Protected by non-disclosure & intermediary privilege.
                  </span>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-void text-[11px] tracking-[0.25em] uppercase font-body font-semibold hover:bg-gold-bright transition-all duration-300 shadow-[0_0_30px_rgba(201,168,76,0.25)] hover:shadow-[0_0_45px_rgba(230,200,120,0.35)] cursor-pointer disabled:opacity-60"
                  >
                    {loading ? (
                      'Transmitting...'
                    ) : (
                      <>
                        Dispatch Enquiry
                        <Send size={14} />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
