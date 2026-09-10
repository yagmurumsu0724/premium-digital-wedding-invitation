import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import { EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const RSVPSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    attendance: 'accept',
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
    <section id="rsvp" className="py-20 sm:py-32 px-4 sm:px-6 bg-[#EAE0D0] relative border-t border-[#9E8354]/25 deboss-frame">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14">
          <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-[#7A856E] font-medium">
            GUEST LEDGER • RESPONSE REQUESTED BY {invitationData.rsvp.deadline}
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1E231B] mt-2 mb-4 font-normal letterpress-text">
            Will You Join Us?
          </h2>
          <EngravedDivider className="w-40 sm:w-64 h-8 text-[#9E8354]" />
        </div>

        {/* Antique Guest Ledger Form Container */}
        <div className="stationery-card-double p-6 sm:p-14 rounded-xs bg-[#F4EFE6]">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="py-10 text-center flex flex-col items-center space-y-4"
              >
                <span className="font-serif italic text-2xl sm:text-3xl text-[#3D4433]">
                  Thank You, {formData.fullName.split(' ')[0]}!
                </span>
                <p className="font-sans text-sm sm:text-base text-[#1E231B]/85 max-w-md font-light leading-relaxed">
                  {formData.attendance === 'accept'
                    ? "We are delighted that you will be joining us for our wedding celebration! Further details will be shared via email."
                    : "Thank you for letting us know. You will be warmly missed on our special day."}
                </p>
                <div className="pt-4 sm:pt-6">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ fullName: '', email: '', attendance: 'accept', guests: '1', dietary: 'None', message: '' });
                    }}
                    className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#3D4433] border-b border-[#3D4433] pb-1 hover:text-[#585E49] transition-colors cursor-pointer"
                  >
                    Submit another response
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                {/* Attendance Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 sm:mb-8">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'accept' })}
                    className={`p-4 sm:p-5 border rounded-none text-center transition-all cursor-pointer ${
                      formData.attendance === 'accept'
                        ? 'border-[#9E8354] bg-[#EAE0D0] text-[#1E231B] font-medium'
                        : 'border-[#9E8354]/25 text-[#A79B89] hover:border-[#9E8354]/60'
                    }`}
                  >
                    <span className="font-serif text-base sm:text-lg block text-[#1E231B]">JOYFULLY ACCEPT</span>
                    <span className="font-sans text-[10px] text-[#7A856E] tracking-wider uppercase mt-1 block">I will be attending</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, attendance: 'decline' })}
                    className={`p-4 sm:p-5 border rounded-none text-center transition-all cursor-pointer ${
                      formData.attendance === 'decline'
                        ? 'border-[#9E8354] bg-[#EAE0D0] text-[#1E231B] font-medium'
                        : 'border-[#9E8354]/25 text-[#A79B89] hover:border-[#9E8354]/60'
                    }`}
                  >
                    <span className="font-serif text-base sm:text-lg block text-[#1E231B]">REGRETFULLY DECLINE</span>
                    <span className="font-sans text-[10px] text-[#7A856E] tracking-wider uppercase mt-1 block">Attending in spirit</span>
                  </button>
                </div>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#1E231B] font-medium mb-2">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eleanor Vance"
                    className={`w-full px-3 py-3 bg-[#EAE0D0]/50 border-b-2 ${
                      errors.fullName ? 'border-red-400' : 'border-[#9E8354]/40'
                    } font-sans text-sm focus:outline-none focus:border-[#9E8354] transition-colors`}
                  />
                  {errors.fullName && (
                    <p className="font-sans text-xs text-red-500 mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#1E231B] font-medium mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="eleanor@example.com"
                    className={`w-full px-3 py-3 bg-[#EAE0D0]/50 border-b-2 ${
                      errors.email ? 'border-red-400' : 'border-[#9E8354]/40'
                    } font-sans text-sm focus:outline-none focus:border-[#9E8354] transition-colors`}
                  />
                  {errors.email && (
                    <p className="font-sans text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                {formData.attendance === 'accept' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Guest Count */}
                    <div>
                      <label htmlFor="guests" className="block font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#1E231B] font-medium mb-2">
                        NUMBER OF GUESTS
                      </label>
                      <select
                        id="guests"
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full px-3 py-3 bg-[#EAE0D0]/50 border-b-2 border-[#9E8354]/40 font-sans text-sm focus:outline-none focus:border-[#9E8354] transition-colors cursor-pointer"
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
                      <label htmlFor="dietary" className="block font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#1E231B] font-medium mb-2">
                        DIETARY REQUIREMENTS
                      </label>
                      <select
                        id="dietary"
                        value={formData.dietary}
                        onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                        className="w-full px-3 py-3 bg-[#EAE0D0]/50 border-b-2 border-[#9E8354]/40 font-sans text-sm focus:outline-none focus:border-[#9E8354] transition-colors cursor-pointer"
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
                  <label htmlFor="message" className="block font-sans text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#1E231B] font-medium mb-2">
                    A MESSAGE FOR THE COUPLE (OPTIONAL)
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share a wish or song recommendation..."
                    className="w-full px-3 py-3 bg-[#EAE0D0]/50 border-b-2 border-[#9E8354]/40 font-sans text-sm focus:outline-none focus:border-[#9E8354] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 px-8 sm:px-10 py-3.5 sm:py-4 border border-[#9E8354] text-[#1E231B] text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium hover:bg-[#9E8354] hover:text-[#F4EFE6] transition-all duration-500 rounded-none cursor-pointer disabled:opacity-50"
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
