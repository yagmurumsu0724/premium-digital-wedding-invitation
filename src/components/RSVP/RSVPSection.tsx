import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import { EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    attendance: 'accept', // 'accept' | 'decline'
    guests: '1',
    dietary: 'None',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  return (
    <section id="rsvp" className="py-24 md:py-36 px-6 bg-[var(--paper)] relative">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--sage)] font-medium">
            KINDLY RESPOND BY {invitationData.rsvp.deadline}
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[var(--ink)] mt-2 mb-4 font-normal">
            Will You Join Us?
          </h2>
          <EngravedDivider className="w-48 h-8 text-[var(--sage)]" />
        </div>

        {/* Printed Editorial Form Container */}
        <div className="stationery-card-double p-8 sm:p-14 rounded-xs">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center flex flex-col items-center space-y-4"
              >
                <span className="font-serif italic text-3xl text-[var(--olive)]">
                  Thank You, {formData.fullName.split(' ')[0]}!
                </span>
                <p className="font-sans text-base text-[var(--ink)]/85 max-w-md font-light leading-relaxed">
                  {formData.attendance === 'accept'
                    ? "We are delighted that you will be joining us for our wedding celebration! Further details will be shared via email."
                    : "Thank you for letting us know. You will be warmly missed on our special day."}
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', email: '', attendance: 'accept', guests: '1', dietary: 'None', message: '' });
                    }}
                    className="font-sans text-xs uppercase tracking-[0.22em] text-[var(--olive)] border-b border-[var(--olive)] pb-1 hover:text-[var(--olive-deep)] transition-colors cursor-pointer"
                  >
                    Submit another response
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Attendance Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'accept' })}
                    className={`p-5 border rounded-none text-center transition-all cursor-pointer ${
                      formData.attendance === 'accept'
                        ? 'border-[var(--olive)] bg-[var(--cream)] text-[var(--ink)] font-medium'
                        : 'border-[var(--olive)]/20 text-[var(--taupe)] hover:border-[var(--olive)]/50'
                    }`}
                  >
                    <span className="font-serif text-lg block text-[var(--ink)]">JOYFULLY ACCEPT</span>
                    <span className="font-sans text-[10px] text-[var(--sage)] tracking-wider uppercase mt-1 block">I will be attending</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'decline' })}
                    className={`p-5 border rounded-none text-center transition-all cursor-pointer ${
                      formData.attendance === 'decline'
                        ? 'border-[var(--olive)] bg-[var(--cream)] text-[var(--ink)] font-medium'
                        : 'border-[var(--olive)]/20 text-[var(--taupe)] hover:border-[var(--olive)]/50'
                    }`}
                  >
                    <span className="font-serif text-lg block text-[var(--ink)]">REGRETFULLY DECLINE</span>
                    <span className="font-sans text-[10px] text-[var(--sage)] tracking-wider uppercase mt-1 block">Attending in spirit</span>
                  </button>
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block font-sans text-xs uppercase tracking-[0.2em] text-[var(--ink)] font-medium mb-2">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className={`w-full px-4 py-3 bg-[var(--cream-light)] border-b-2 ${
                      errors.fullName ? 'border-red-400' : 'border-[var(--olive)]/30'
                    } font-sans text-sm focus:outline-none focus:border-[var(--olive)] transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="font-sans text-xs text-red-500 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block font-sans text-xs uppercase tracking-[0.2em] text-[var(--ink)] font-medium mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="eleanor@example.com"
                    className={`w-full px-4 py-3 bg-[var(--cream-light)] border-b-2 ${
                      errors.email ? 'border-red-400' : 'border-[var(--olive)]/30'
                    } font-sans text-sm focus:outline-none focus:border-[var(--olive)] transition-colors`}
                  />
                  {errors.email && (
                    <p className="font-sans text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {formData.attendance === 'accept' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Guest Count */}
                    <div>
                      <label htmlFor="guests" className="block font-sans text-xs uppercase tracking-[0.2em] text-[var(--ink)] font-medium mb-2">
                        NUMBER OF GUESTS
                      </label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-4 py-3 bg-[var(--cream-light)] border-b-2 border-[var(--olive)]/30 font-sans text-sm focus:outline-none focus:border-[var(--olive)] transition-colors cursor-pointer"
                      >
                        {[...Array(invitationData.rsvp.maxGuests)].map((_, i) => (
                          <option key={i + 1} value={i + 1}>
                            {i + 1} {i === 0 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Dietary Requirements */}
                    <div>
                      <label htmlFor="dietary" className="block font-sans text-xs uppercase tracking-[0.2em] text-[var(--ink)] font-medium mb-2">
                        DIETARY REQUIREMENTS
                      </label>
                      <select
                        id="dietary"
                        value={formData.dietary}
                        onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                        className="w-full px-4 py-3 bg-[var(--cream-light)] border-b-2 border-[var(--olive)]/30 font-sans text-sm focus:outline-none focus:border-[var(--olive)] transition-colors cursor-pointer"
                      >
                        {invitationData.rsvp.dietaryOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Personal Message */}
                <div>
                  <label htmlFor="message" className="block font-sans text-xs uppercase tracking-[0.2em] text-[var(--ink)] font-medium mb-2">
                    A MESSAGE FOR THE COUPLE (OPTIONAL)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share a wish or song recommendation..."
                    className="w-full px-4 py-3 bg-[var(--cream-light)] border-b-2 border-[var(--olive)]/30 font-sans text-sm focus:outline-none focus:border-[var(--olive)] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-10 py-4 border border-[var(--olive)] text-[var(--ink)] text-xs uppercase tracking-[0.25em] font-medium hover:bg-[var(--olive)] hover:text-[var(--paper)] transition-all duration-500 rounded-none cursor-pointer disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'SUBMITTING...' : 'SEND RSVP'}</span>
                    {!isSubmitting && <Send className="w-3.5 h-3.5 stroke-[1.5]" />}
                  </button>
                </div>
              </form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
