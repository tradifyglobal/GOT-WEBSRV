import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  Building2, 
  Phone, 
  Server, 
  Clock, 
  ShieldCheck, 
  Copy, 
  Check, 
  MapPin, 
  Cpu, 
  Zap, 
  Network, 
  Wrench, 
  Send, 
  Lock, 
  CheckCircle2, 
  AlertCircle,
  Radio,
  FileCode2,
  ChevronDown
} from 'lucide-react';

export default function ContactUsPage() {
  const [copiedPgp, setCopiedPgp] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    primaryRequirement: '',
    currentEnvironment: 'cloud',
    workloadScope: '',
    deploymentTimeline: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const pgpKey = '4A9F 88C1 20B9 E347 D2E5 1904 BC81 09FA 77DE 912B';

  const copyPgpKey = () => {
    navigator.clipboard.writeText(pgpKey).then(() => {
      setCopiedPgp(true);
      setTimeout(() => setCopiedPgp(false), 2500);
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSuccess(true);
      const alertEl = document.getElementById('form-success-alert');
      if (alertEl) {
        alertEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 600);
  };

  return (
    <div className="w-full bg-[#faf8f5] text-[#2c2416] antialiased">
      {/* SUB-HEADER TELEMETRY & HERO CONTEXT */}
      <section className="w-full bg-[#fcf9f2]  pt-24 sm:pt-32 pb-10 sm:pb-14">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#E9E7E2] text-[#14120e] font-sans text-xs uppercase tracking-wider font-bold">
              {/* <span className="w-2 h-2 rounded-full bg-[#b08c4f] animate-pulse" /> */}
              ENTERPRISE DISPATCH & ARCHITECTURE SCOPING
            </span>
            <span className="text-[#706553] font-sans text-xs">// ROUTE-REFLECTOR: US-EAST-ASHBURN</span>
            <span className="text-[#706553] font-sans text-xs">// PGP-STRICT CERTIFIED</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-end">
            <div className="lg:col-span-8 flex flex-col gap-2">
              <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14120e] tracking-tight leading-[1.15]">
                Contact Our Engineering Team & Request Infrastructure Scoping
              </h1>
              <p className="text-base sm:text-lg text-[#4e4639] max-w-3xl leading-relaxed">
                No sales gatekeepers. You speak directly with senior systems architects and NOC network engineers regarding bare metal configs, colocation cage footprint, and multi-gigabit BGP transit.
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-3 sm:gap-4">
              <div className="flex flex-col p-3.5 sm:p-4 rounded-xl bg-[#ffffff] border border-[#e6ded3] shadow-sm">
                <span className="font-sans text-[11px] text-[#706553] uppercase block">NOC Response Queue</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-xl sm:text-2xl font-bold text-[#14120e]">08m 14s</span>
                  <span className="font-sans text-[11px] text-[#248a3d] font-semibold">Avg P1 Acknowledge</span>
                </div>
              </div>

              <div className="flex flex-col p-3.5 sm:p-4 rounded-xl bg-[#ffffff] border border-[#e6ded3] shadow-sm">
                <span className="font-sans text-[11px] text-[#706553] uppercase block">DC L3 Technicians</span>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-xl sm:text-2xl font-bold text-[#14120e]">14 On-Floor</span>
                  <span className="font-sans text-[11px] text-[#785921] font-semibold">Ashburn Vault</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE DUAL-COLUMN INTERFACE */}
      <section className="w-full py-16 sm:py-24 ">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* LEFT COLUMN: EMERGENCY ESCALATION & INFRA DIRECTORY */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* P1 EMERGENCY NOC HIGHLIGHT BOX */}
            <div className="relative overflow-hidden rounded-2xl bg-[#1e1c1a] text-white p-6 sm:p-8 shadow-2xl border border-white/10">
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#be0d13]/20 blur-3xl pointer-events-none" />
              
              <div className="flex flex-col gap-5 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="font-sans text-[11px] text-[#bd0009]  font-semibold">HOTLINE ID: 0-IAAS-PRI</span>
                </div>

                <div className="flex flex-col gap-1.5">
                  <h2 className="font-sans text-xl sm:text-2xl font-bold text-white">
                    Active Infrastructure Outage or Kernel Escalation?
                  </h2>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
                    Direct hotline bypasses front-office queuing straight to Tier-3 Linux kernel and Arista network core engineers.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex flex-col gap-1.5 shadow-inner">
                  <span className="font-sans text-[11px] text-white/60 uppercase tracking-wider">
                    Direct NOC Incident Voice Line
                  </span>
                  <a
                    href="tel:18004227662"
                    className="font-sans text-2xl sm:text-3xl text-[#bd0009] tracking-tight font-bold hover:text-white transition-colors flex items-center gap-2"
                  >
                    <PhoneCall className="w-6 h-6 text-[#bd0009]" />
                   +1 (613) 890-1786
                  </a>
                  <div className="flex items-center gap-1.5 mt-1 text-white/80 font-sans text-xs">
                    <ShieldCheck className="w-4 h-4 text-[#bd0009]" />
                    <span>&lt;15 minute guaranteed response time for P1 critical tickets</span>
                  </div>
                </div>

                {/* PGP Fingerprint Module */}
                <div className="flex flex-col gap-2 p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="font-sans text-[11px] text-white/60 uppercase">Hardware Vault PGP Key</span>
                    <button
                      type="button"
                      onClick={copyPgpKey}
                      className="font-sans text-xs text-[#bd0009] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      {copiedPgp ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#248a3d]" />
                          <span className="text-[#248a3d] font-bold">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Key</span>
                        </>
                      )}
                    </button>
                  </div>
                  <code className="font-mono text-xs text-white/90 bg-black/50 p-2.5 rounded-lg select-all break-all leading-relaxed border border-white/5">
                    {pgpKey}
                  </code>
                  <span className="text-[11px] text-white/50">
                    Sign all out-of-band IPMI root requests and remote hands provisioning instructions.
                  </span>
                </div>

                <div className="flex items-center justify-between pt-1 font-sans text-xs border-t border-white/10">
                  <span className="text-white/60">NOC AUTH: 2FA-FIDO2 ONLY</span>
                  <div className="flex items-center gap-1.5 text-[#248a3d]">
                    <span className="w-2 h-2 rounded-full bg-[#248a3d]" />
                    <span className="font-bold">ALL CONSOLES LIVE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CORPORATE & INFRASTRUCTURE CHANNELS */}
            <div className="flex flex-col gap-5 p-6 sm:p-8 rounded-2xl bg-[#f5f3f0] border border-[#e6ded3] shadow-sm">
              <div className="flex items-center gap-2.5 pb-2 border-b border-[#e6ded3]">
                <Building2 className="w-5 h-5 text-[#785921]" />
                <h3 className="font-sans text-lg font-bold text-[#14120e]">
                  Systems Architecture & Carrier Facilities
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 pb-3 border-b border-[#e6ded3]">
                  <span className="font-sans text-[11px] text-[#706553] uppercase font-bold">Senior Systems Architecture</span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <a href="mailto:systems@geeksontap.com" className="font-sans text-sm font-bold text-[#785921] hover:underline">
                      systems@geeksontap.com
                    </a>
                    <span className="text-xs text-[#706553]">SLA: Under 2h Scope Reply</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 pb-3 border-b border-[#e6ded3]">
                  <span className="font-sans text-[11px] text-[#706553] uppercase font-bold">Standard NOC Escalations</span>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <a href="mailto:noc@geeksontap.com" className="font-sans text-sm font-bold text-[#14120e] hover:text-[#785921] transition-colors">
                      noc@geeksontap.com
                    </a>
                    <span className="text-xs text-[#706553]">24/7 Ticketing Engine</span>
                  </div>
                </div>

                <div className="flex flex-col gap-1 pb-3 border-b border-[#e6ded3]">
                  <span className="font-sans text-[11px] text-[#706553] uppercase font-bold">Tier-III+ Primary Data Center Vault</span>
                  <p className="text-sm font-semibold text-[#14120e]">
                    Geeks on Tap Vault Alpha · 400 Technology Way, Ashburn, VA 20147
                  </p>
                  <span className="text-xs text-[#706553]">
                    Dual 34.5kV utility feeds · N+2 Cummins generators · Biometric iris scanner mantrap
                  </span>
                </div>

                <div className="flex flex-col gap-1 pb-3 border-b border-[#e6ded3]">
                  <span className="font-sans text-[11px] text-[#706553] uppercase font-bold">Carrier Interconnects & MMRs</span>
                  <div className="grid grid-cols-2 gap-3 mt-1">
                    <div className="p-2.5 rounded-lg bg-[#faf8f5] border border-[#e6ded3] shadow-inner">
                      <span className="font-sans text-xs font-bold text-[#14120e] block">Equinix DC2</span>
                      <span className="text-[11px] text-[#706553]">Cross-connect via Dark Fiber</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#faf8f5] border border-[#e6ded3] shadow-inner">
                      <span className="font-sans text-xs font-bold text-[#14120e] block">CoreSite Reston VA2</span>
                      <span className="text-[11px] text-[#706553]">Direct 100G peering ring</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#faf8f5] border border-[#e6ded3] shadow-sm">
                  <Lock className="w-5 h-5 text-[#785921] shrink-0" />
                  <div className="flex flex-col">
                    <span className="font-sans text-xs font-bold text-[#14120e] uppercase">Physical Escort Protocol</span>
                    <span className="text-xs text-[#706553]">Vendor unescorted access strictly prohibited without prior badge clearance.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 8-FIELD INFRASTRUCTURE ASSESSMENT FORM */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="rounded-2xl bg-[#ffffff] border border-[#e6ded3] p-6 sm:p-10 shadow-xl flex flex-col gap-6">
              
              <div className="flex flex-col gap-1 pb-3 border-b border-[#e6ded3]">
                <div className="flex items-center justify-between font-sans text-xs">
                  <span className="text-[#785921] uppercase font-bold tracking-wider">DIRECT SPECIFICATION INTAKE</span>
                  <span className="text-[#706553]">VER: 2025.1-FORM</span>
                </div>
                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#14120e] tracking-tight">
                  Comprehensive Infrastructure Assessment Form
                </h2>
                <p className="text-sm text-[#4e4639] leading-relaxed">
                  Provide your current compute metrics. We will deliver a deterministic hardware scoping document and cost analysis within 24 hours.
                </p>
              </div>

              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                
                {/* ROW 1: NAME & EMAIL */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-name" className="font-sans text-xs text-[#4e4639] uppercase font-bold">
                      1. Full Name <span className="text-[#be0d13]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-[#706553]">
                        <Building2 className="w-4 h-4" />
                      </span>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Marcus Vance"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm shadow-inner focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b08c4f] transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-email" className="font-sans text-xs text-[#4e4639] uppercase font-bold">
                      2. Corporate Email Address <span className="text-[#be0d13]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-[#706553]">
                        <Mail className="w-4 h-4" />
                      </span>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="m.vance@enterprise-network.io"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] font-mono text-sm shadow-inner focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b08c4f] transition-all"
                      />
                    </div>
                    <span className="text-[11px] text-[#706553]">@company corporate domain required for hardware allocation.</span>
                  </div>
                </div>

                {/* ROW 2: ORGANIZATION & PHONE */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-org" className="font-sans text-xs text-[#4e4639] uppercase font-bold">
                      3. Organization / Company Name <span className="text-[#be0d13]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-[#706553]">
                        <Building2 className="w-4 h-4" />
                      </span>
                      <input
                        id="contact-org"
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="Vance Financial Infrastructure LLC"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm shadow-inner focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b08c4f] transition-all"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-phone" className="font-sans text-xs text-[#4e4639] uppercase font-bold">
                      4. Direct Phone Number <span className="text-[#be0d13]">*</span>
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-3 text-[#706553]">
                        <Phone className="w-4 h-4" />
                      </span>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 019-2834"
                        className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] font-mono text-sm shadow-inner focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b08c4f] transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* ROW 3: PRIMARY REQUIREMENT DROPDOWN */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-req" className="font-sans text-xs text-[#4e4639] uppercase font-bold">
                    5. Primary Requirement Track <span className="text-[#be0d13]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-[#706553]">
                      <Server className="w-4 h-4" />
                    </span>
                    <select
                      id="contact-req"
                      required
                      value={formData.primaryRequirement}
                      onChange={(e) => setFormData({ ...formData, primaryRequirement: e.target.value })}
                      className="w-full pl-9 pr-10 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm shadow-inner focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b08c4f] appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select an infrastructure requirement</option>
                      <option value="bare-metal">Dedicated Bare Metal (Custom Chassis / Dual Xeon & EPYC)</option>
                      <option value="hypervisor">Cloud Hypervisor Hosting (Proxmox VE / VMware vSphere Clustered)</option>
                      <option value="bgp-network">BGP Network Engineering & Multi-Homing Anycast</option>
                      <option value="managed-noc">24/7 Managed NOC & L3 Operations Outsource</option>
                      <option value="colocation">Colocation Space (Half / Full / Private Cage in Ashburn)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-3 pointer-events-none text-[#706553]" />
                  </div>
                </div>

                {/* ROW 4: CURRENT ENVIRONMENT (RADIO TILES) */}
                <div className="flex flex-col gap-2">
                  <span className="font-sans text-xs text-[#4e4639] uppercase font-bold">
                    6. Current Infrastructure Environment <span className="text-[#be0d13]">*</span>
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: 'cloud', title: 'Public Cloud Migration', desc: 'AWS / GCP / Azure egress exit' },
                      { id: 'on-prem', title: 'Existing On-Premise Servers', desc: 'Aging physical server closets' },
                      { id: 'hybrid-colo', title: 'Hybrid Colocation', desc: 'Mixed regional cage footprints' },
                      { id: 'other', title: 'Other Provider Migration', desc: 'Underperforming IaaS vendor' }
                    ].map((env) => (
                      <label
                        key={env.id}
                        className={`flex items-start gap-3 p-3.5 rounded-xl border transition-all cursor-pointer shadow-sm ${
                          formData.currentEnvironment === env.id
                            ? 'bg-[#ffffff] border-[#b08c4f] ring-2 ring-[#b08c4f]/20'
                            : 'bg-[#f5f3f0] border-[#e6ded3] hover:bg-[#efeeeb]'
                        }`}
                      >
                        <input
                          type="radio"
                          name="current_env"
                          value={env.id}
                          checked={formData.currentEnvironment === env.id}
                          onChange={() => setFormData({ ...formData, currentEnvironment: env.id })}
                          className="mt-1 text-[#b08c4f] focus:ring-[#b08c4f]"
                        />
                        <div className="flex flex-col">
                          <span className="text-sm font-bold text-[#14120e]">{env.title}</span>
                          <span className="text-xs text-[#706553]">{env.desc}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* ROW 5: TECHNICAL SCOPE WORKLOAD PROFILE */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="contact-scope" className="font-sans text-xs text-[#4e4639] uppercase font-bold">
                      7. Technical Scope & Workload Profile <span className="text-[#be0d13]">*</span>
                    </label>
                    <span className="font-sans text-[11px] text-[#706553]">SPEC RAW TEXT</span>
                  </div>
                  <textarea
                    id="contact-scope"
                    rows={4}
                    required
                    value={formData.workloadScope}
                    onChange={(e) => setFormData({ ...formData, workloadScope: e.target.value })}
                    placeholder="Example: Need 4x nodes each with 128 cores AMD EPYC 9654, 1.5TB DDR5 ECC, 8x 7.68TB NVMe U.3 in ZFS RAID-10. Minimum 10Gbps unmetered commit with BGP multi-homing to Cogent + Telia."
                    className="w-full p-3.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] font-sans text-xs sm:text-sm shadow-inner focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b08c4f] leading-relaxed"
                  />
                  <div className="flex items-center justify-between text-[11px] text-[#706553]">
                    <span>Enter estimated cores, RAM, storage IOPS, monthly bandwidth, or current pain points.</span>
                    <span className="font-sans font-semibold">{formData.workloadScope.length} chars</span>
                  </div>
                </div>

                {/* ROW 6: DEPLOYMENT TIMELINE DROPDOWN */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="contact-timeline" className="font-sans text-xs text-[#4e4639] uppercase font-bold">
                    8. Deployment Timeline <span className="text-[#be0d13]">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-[#706553]">
                      <Clock className="w-4 h-4" />
                    </span>
                    <select
                      id="contact-timeline"
                      required
                      value={formData.deploymentTimeline}
                      onChange={(e) => setFormData({ ...formData, deploymentTimeline: e.target.value })}
                      className="w-full pl-9 pr-10 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm shadow-inner focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#b08c4f] appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Select expected deployment schedule</option>
                      <option value="urgent">Urgent Escalation (&lt; 14 Days) · Immediate hardware allocation</option>
                      <option value="30-days">30 Days · Planned infrastructure migration</option>
                      <option value="60-90-days">60-90 Days · Upcoming contract renewal window</option>
                      <option value="budget">Budget Planning & Architectural Discovery (Q3/Q4)</option>
                    </select>
                    <ChevronDown className="w-4 h-4 absolute right-3 top-3 pointer-events-none text-[#706553]" />
                  </div>
                </div>

                {/* MUTUAL NDA ASSURANCE */}
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#eddec8]/40 border border-[#d1c5b5]">
                  <ShieldCheck className="w-5 h-5 text-[#785921] shrink-0 mt-0.5" />
                  <p className="text-xs text-[#4e4639] leading-relaxed">
                    <span className="font-bold font-sans text-[#14120e]">Non-Disclosure & Security Assurance:</span> All network topology specifications, IP blocks, and compute sizing details provided are legally protected under our automatic mutual pre-sales NDA.
                  </p>
                </div>

                {/* SUBMIT ACTION CTA */}
                <div className="flex flex-col gap-2.5 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full h-12 rounded-xl bg-[#BD0009] hover:bg-[#A80008] text-white font-sans font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    <span>{submitting ? 'Submitting Specification...' : 'Submit Infrastructure Assessment for Engineering Review'}</span>
                    <Send className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[#706553] font-sans text-[11px] flex-wrap">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#248a3d]" />
                      Deterministic 24-Hour Scoping
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#248a3d]" />
                      Direct L3 Systems Architect Review
                    </span>
                  </div>
                </div>
              </form>

              {/* IN-PAGE SUCCESS NOTIFICATION STATE */}
              {formSuccess && (
                <div id="form-success-alert" className="p-5 rounded-2xl bg-[#eddec8] text-[#2c2416] border border-[#b08c4f]/40 shadow-sm flex flex-col gap-2 animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 text-[#248a3d]">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-display font-bold text-base">Specification Packet Received · Ticket Queued</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#4e4639]">
                    Your scoping details have been assigned to Senior Engineering Lead Desk. Incident/Scoping Ticket: <code className="font-mono bg-white/70 px-2 py-0.5 rounded font-bold border border-[#b08c4f]/20">GOT-SPEC-84920</code>. An engineer will follow up within 24 hours.
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>
      </section>

      {/* SECTION: GEOGRAPHIC & DATA CENTER TOPOLOGY VISUAL */}
      <section className="w-full bg-[#fcf9f2] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-sans text-xs text-[#785921] uppercase font-bold tracking-wider">
              PRIMARY INTERCONNECT CO-LOCATION
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14120e] tracking-tight">
              Ashburn & Northern Virginia Low-Latency Edge Footprint
            </h2>
            <p className="text-sm sm:text-base text-[#4e4639] max-w-2xl">
              Direct cross-connects with top tier-1 backbones, dark fiber rings between Ashburn, Reston, and Washington D.C., with sub-millisecond local cross-connect latency.
            </p>
          </div>

          {/* MAP PIPELINE CONTAINER */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-[#e6ded3] relative bg-[#faf8f5]">
            <div 
              className="w-full h-80 bg-cover bg-center"
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDP0Xy67qskiN_mkSGMdGr1IlvxJpCmalL4MCILp8eBtMx4U-ojq8TTw9G12MCJ6ByE7XSY7lzB_GRFMCAg7l-da5oQ1OLCbpjDUUFXyErZd-Z_BAp--u8B-lfX5fMTKzrmQBeqw8JK8gsJqgEDVOwWp0eVIWvq9S13JeGfr-SYC3riIuqxkvKwqTX5RSfHPNj0JFDcJa42HRqfonAGnGugxatNUJppaz0usvkrHChbzCrlCf-zEO29XA')` }}
            />
            <div className="p-4 sm:p-5 bg-[#efeeeb] flex flex-wrap items-center justify-between gap-4 border-t border-[#e6ded3]">
              <div className="flex items-center gap-4 flex-wrap">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#248a3d]" />
                  <span className="font-sans text-xs text-[#14120e] font-bold">VA-ASH-01: OPERATIONAL</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#248a3d]" />
                  <span className="font-sans text-xs text-[#14120e] font-bold">VA-REST-02: OPERATIONAL</span>
                </div>
              </div>

              <div className="flex items-center gap-4 font-sans text-xs text-[#706553] flex-wrap">
                <span>TRANSIT CAPACITY: 400Gbps+ COMMITTED</span>
                <span>OUTSIDE AIR ECONOMIZER PUE: 1.18</span>
              </div>
            </div>
          </div>

          {/* 3-PILLAR FACILITY SPECS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6ded3] shadow-sm flex flex-col gap-2.5">
              <Zap className="w-6 h-6 text-[#785921]" />
              <h3 className="font-sans font-bold text-base text-[#14120e]">2N+1 Redundant Power</h3>
              <p className="text-xs text-[#4e4639] leading-relaxed">
                True dual A/B power whips deliver pure sine-wave conditioned juice from isolated UPS strings and diesel generators with 72-hour fuel reserves on-site.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6ded3] shadow-sm flex flex-col gap-2.5">
              <Network className="w-6 h-6 text-[#785921]" />
              <h3 className="font-sans font-bold text-base text-[#14120e]">Multi-Homed BGP Fabric</h3>
              <p className="text-xs text-[#4e4639] leading-relaxed">
                Arista 7050X3 leaf-spine mesh running auto-healing BGP communities with Cogent, Telia, Lumen, and direct peering at LINX NoVA.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#ffffff] border border-[#e6ded3] shadow-sm flex flex-col gap-2.5">
              <Wrench className="w-6 h-6 text-[#785921]" />
              <h3 className="font-sans font-bold text-base text-[#14120e]">Smart Remote Hands</h3>
              <p className="text-xs text-[#4e4639] leading-relaxed">
                L3 datacenter technicians on premise 24/7/365 to handle optical transceiver changes, drive swaps, serial console capture, and physical hotfixes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
