import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { EngravedDivider } from '../Botanical/BotanicalFrame';
import { invitationData } from '../../data/invitationData';

export const GiftRegistry: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyIban = () => {
    navigator.clipboard.writeText(invitationData.registry.bankDetails.iban);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 md:py-32 px-6 bg-[var(--cream-light)] relative border-t border-[var(--olive)]/15">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-14">
          <span className="font-sans text-[11px] uppercase tracking-[0.22em] text-[var(--sage)] font-medium">
            HONEYMOON FUND &amp; WELL WISHES
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-[var(--ink)] mt-2 mb-4 font-normal">
            {invitationData.registry.title}
          </h2>
          <EngravedDivider className="w-48 h-8 text-[var(--sage)]" />
        </div>

        {/* Registry Info Card */}
        <div className="stationery-card p-8 sm:p-12 max-w-2xl mx-auto rounded-xs text-center">
          <p className="font-sans text-sm md:text-base text-[var(--ink)]/85 leading-relaxed font-light mb-8">
            {invitationData.registry.description}
          </p>

          {/* Bank Details Block */}
          <div className="bg-[var(--paper)] border border-[var(--olive)]/20 p-6 rounded-xs text-left max-w-lg mx-auto space-y-3 font-sans text-xs sm:text-sm">
            <div className="flex justify-between border-b border-[var(--olive)]/15 pb-2">
              <span className="text-[var(--sage)] uppercase tracking-wider text-[11px]">Account Holder</span>
              <span className="font-medium text-[var(--ink)]">{invitationData.registry.bankDetails.accountHolder}</span>
            </div>
            <div className="flex justify-between border-b border-[var(--olive)]/15 pb-2">
              <span className="text-[var(--sage)] uppercase tracking-wider text-[11px]">Bank Name</span>
              <span className="font-medium text-[var(--ink)]">{invitationData.registry.bankDetails.bankName}</span>
            </div>
            <div className="flex items-center justify-between pt-1">
              <div>
                <span className="text-[var(--sage)] uppercase tracking-wider block text-[11px]">IBAN</span>
                <span className="font-mono text-xs text-[var(--ink)] font-semibold">{invitationData.registry.bankDetails.iban}</span>
              </div>
              <button
                onClick={handleCopyIban}
                className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 border border-[var(--olive)]/40 text-[var(--olive)] hover:bg-[var(--olive)] hover:text-[var(--paper)] transition-all duration-300 rounded-none text-xs font-medium cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                <span className="uppercase tracking-wider text-[10px]">{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
          </div>

          <p className="font-sans text-xs text-[var(--taupe)] italic mt-6">
            {invitationData.registry.honeymoonFundNote}
          </p>
        </div>
      </div>
    </section>
  );
};
