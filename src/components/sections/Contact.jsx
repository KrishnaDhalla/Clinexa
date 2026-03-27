import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading, Reveal, Button } from "../ui/Components";
import { Phone, Mail, MessageCircle, Clock, CheckCircle2 } from "lucide-react";
import siteData from "../../data/siteData";

function Field({ id, label, required, children }) {
  return (
    <div>
      <label htmlFor={id} className="block text-white/60 text-xs font-medium mb-1.5 ml-1">
        {label}{required && <span className="text-teal ml-0.5">*</span>}
      </label>
      {children}
    </div>
  );
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const d = siteData.brand;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-24 bg-navy relative overflow-hidden scroll-mt-24">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "url(/assets/hero-bg.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title="Let's Build Your Digital Practice"
          subtitle="Book your free demo call today — no payment, no obligation."
          light
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <Reveal className="lg:col-span-3">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field id="name" label="Your Name" required>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Dr. Rajesh Sharma"
                      required
                      className="w-full bg-white rounded-xl px-5 py-3.5 text-navy placeholder:text-text-muted text-sm outline-none focus:ring-2 focus:ring-teal"
                    />
                  </Field>
                  <Field id="phone" label="Phone Number" required>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      required
                      pattern="[\+]?[0-9\s\-]{8,15}"
                      className="w-full bg-white rounded-xl px-5 py-3.5 text-navy placeholder:text-text-muted text-sm outline-none focus:ring-2 focus:ring-teal"
                    />
                  </Field>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field id="email" label="Email Address">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="doctor@example.com"
                      className="w-full bg-white rounded-xl px-5 py-3.5 text-navy placeholder:text-text-muted text-sm outline-none focus:ring-2 focus:ring-teal"
                    />
                  </Field>
                  <Field id="speciality" label="Speciality" required>
                    <select
                      id="speciality"
                      name="speciality"
                      required
                      defaultValue=""
                      className="w-full bg-white rounded-xl px-5 py-3.5 text-navy text-sm outline-none focus:ring-2 focus:ring-teal appearance-none"
                    >
                      <option value="" disabled>Select Speciality</option>
                      {siteData.specialties.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field id="city" label="City">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Mumbai"
                    className="w-full bg-white rounded-xl px-5 py-3.5 text-navy placeholder:text-text-muted text-sm outline-none focus:ring-2 focus:ring-teal"
                  />
                </Field>
                <Field id="message" label="Anything else? (optional)">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your practice..."
                    rows={3}
                    className="w-full bg-white rounded-xl px-5 py-3.5 text-navy placeholder:text-text-muted text-sm outline-none focus:ring-2 focus:ring-teal resize-none"
                  />
                </Field>
                <Button className="w-full justify-center" size="lg">
                  Book Free Demo
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-12 text-center"
              >
                <CheckCircle2 size={56} className="text-teal mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Thanks, Doctor!
                </h3>
                <p className="text-white/60">
                  We'll call you within 24 hours to schedule your free demo.
                </p>
              </motion.div>
            )}
          </Reveal>

          {/* Contact card */}
          <Reveal delay={0.15} className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 h-full flex flex-col justify-center space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Prefer to talk directly?
              </h3>

              <a
                href={`tel:${d.phone}`}
                className="flex items-center gap-4 text-white/80 hover:text-teal transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-teal/15 flex items-center justify-center group-hover:bg-teal/25 transition-colors">
                  <Phone size={20} className="text-teal" />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-0.5">Call us</div>
                  <div className="font-semibold">{d.phone}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${d.phoneClean}?text=${encodeURIComponent(d.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-white/80 hover:text-[#25D366] transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-[#25D366]/15 flex items-center justify-center group-hover:bg-[#25D366]/25 transition-colors">
                  <MessageCircle size={20} className="text-[#25D366]" />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-0.5">WhatsApp</div>
                  <div className="font-semibold">{d.phone}</div>
                </div>
              </a>

              <a
                href={`mailto:${d.email}`}
                className="flex items-center gap-4 text-white/80 hover:text-teal transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-teal/15 flex items-center justify-center group-hover:bg-teal/25 transition-colors">
                  <Mail size={20} className="text-teal" />
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-0.5">Email</div>
                  <div className="font-semibold">{d.email}</div>
                </div>
              </a>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10 text-white/40 text-sm">
                <Clock size={15} />
                <span>Mon-Sat, 10AM – 7PM IST</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
