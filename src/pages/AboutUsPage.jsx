// import React, { useState } from 'react';
// import { 
//   Shield, 
//   Cpu, 
//   Server, 
//   Lock, 
//   Clock, 
//   PhoneCall, 
//   Send, 
//   CheckCircle2, 
//   XCircle, 
//   Zap, 
//   Network, 
//   Activity, 
//   Layers, 
//   FileText,
//   Flame,
//   KeyRound
// } from 'lucide-react';

// export default function AboutUsPage() {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     workEmail: '',
//     requirementType: '',
//     currentTopology: '',
//     deploymentTimeline: ''
//   });
//   const [formSubmitted, setFormSubmitted] = useState(false);
//   const [submitting, setSubmitting] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitting(true);
//     setTimeout(() => {
//       setSubmitting(false);
//       setFormSubmitted(true);
//       setFormData({
//         fullName: '',
//         workEmail: '',
//         requirementType: '',
//         currentTopology: '',
//         deploymentTimeline: ''
//       });
//     }, 600);
//   };

//   return (
//     <div className="w-full bg-[#faf8f5] text-[#2c2416] antialiased">
//       {/* SECTION 1: HERO & EXECUTIVE NARRATIVE */}
//       <section className="relative w-full overflow-hidden bg-[#fcf9f2] pt-28 sm:pt-36 pb-16 sm:pb-24 ">
//         {/* Architectural Ambient Glow */}
//         <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-[#b08c4f]/10 blur-3xl pointer-events-none" />
//         <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#eddec8]/30 blur-3xl pointer-events-none" />

//         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
//           <div className="flex flex-col gap-8">
//             {/* Monospace Status Header */}
//             <div className="flex flex-wrap items-center gap-3">
//               <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E9E7E2] text-black font-mono text-xs uppercase tracking-wider font-semibold">
//                 {/* <span className="w-2 h-2 font-sans rounded-full bg-[#b08c4f] animate-ping" /> */}
//                 OUR PHILOSOPHY & ENGINEERING RATIONALE
//               </div>
//               <div className=" font-sans text-xs text-[#706553]">
//                 ARCHIVAL_REF: GOT-CORP-MAN-2025 // NOC LEVEL-4
//               </div>
//             </div>

//             {/* Headline & Main Thesis */}
//             <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
//               <div className="lg:col-span-7 flex flex-col gap-6">
//                 <h1 className="font-display font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14120e] tracking-tight leading-[1.15]">
//                   Why We Refuse to Write a Single Line of Application Code
//                 </h1>
//                 <p className="text-base sm:text-lg text-[#4e4639] leading-relaxed">
//                   In an era of full-stack sprawl and superficial cloud abstractions, Geeks on Tap was founded on a singular radical thesis: Enterprise infrastructure demands undivided, obsessive focus. When providers try to build your apps while managing your physical hypervisors, neither receives the rigor it warrants.
//                 </p>

//                 {/* 3 Metric Chips */}
//                 <div className="flex flex-wrap items-center gap-4 pt-2">
//                   <div className="px-5 py-3.5 rounded-xl bg-[#efeeeb] border border-[#e6ded3] flex items-center gap-3.5 shadow-sm">
//                     <Server className="w-6 h-6 text-[#785921]" />
//                     <div className="flex flex-col">
//                       <span className="font-display text-xl font-bold text-[#14120e]">100%</span>
//                       <span className="font-mono text-[11px] text-[#706553] uppercase tracking-wider">Hardware & Fabric</span>
//                     </div>
//                   </div>

//                   <div className="px-5 py-3.5 rounded-xl bg-[#efeeeb] border border-[#e6ded3] flex items-center gap-3.5 shadow-sm">
//                     <XCircle className="w-6 h-6 text-[#be0d13]" />
//                     <div className="flex flex-col">
//                       <span className="font-display text-xl font-bold text-[#14120e]">0 LOC</span>
//                       <span className="font-mono text-[11px] text-[#706553] uppercase tracking-wider">Frontend / Backend Code</span>
//                     </div>
//                   </div>

//                   <div className="px-5 py-3.5 rounded-xl bg-[#efeeeb] border border-[#e6ded3] flex items-center gap-3.5 shadow-sm">
//                     <Shield className="w-6 h-6 text-[#785921]" />
//                     <div className="flex flex-col">
//                       <span className="font-display text-xl font-bold text-[#14120e]">Tier-III+</span>
//                       <span className="font-mono text-[11px] text-[#706553] uppercase tracking-wider">Standard Facilities</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Executive Quote & Facility Photo Block */}
//               <div className="lg:col-span-5 flex flex-col gap-6">
//                 <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-[#e6ded3] group">
//                   <img
//                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                     alt="Modern mission critical data center server room corridor with cold aisle containment"
//                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3tuKJZBx7aKA6FSzf1JhIZ8CKu9vWyQDACG0Ip7SYckNjynGw0Ev1HAMWBH2ZBB0KIadH7le-e_arKCP9k_UOImUASwsB_o1FrN7AV6RULXKIIFJCtvBZrP84sBJrYeWJesK9HGrpfH7jkRFzZMEOx4cKYYCsbLXQpTbt_eY2lkLSqcnbauBiJaP8mxPmZnKw_o0W_6qil-h_DC6NFGyxvS6zwMt2XlBMH8NcG0kJoqBNwwtjcyVlow"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
//                     <div className="flex items-center gap-2 text-white font-mono text-xs bg-black/70 px-3 py-1.5 rounded-lg backdrop-blur border border-white/10">
//                       <span className="w-2 h-2 rounded-full bg-[#ffdeab]" />
//                       PHOENIX-01 FACILITY // AISLE 04B COLOCATION
//                     </div>
//                   </div>
//                 </div>

//                 {/* Quote Container */}
//                 <div className="p-6 rounded-2xl bg-[#f5f3f0] border border-[#e6ded3] shadow-sm flex flex-col gap-4">
//                   <div className="flex items-center justify-between">
//                     <span className="font- text-xs text-[#785921] uppercase font-bold tracking-wider">
//                       LEADERSHIP STATEMENT
//                     </span>
//                     <span className="w-2 h-2 rounded-full bg-[#248a3d]" />
//                   </div>
//                   <p className="text-[#2c2416] italic leading-relaxed text-sm sm:text-base font-normal">
//                     “We treat bare metal, power distribution, optical routing, and kernel virtualization as sacred disciplines. When your software handles millions of transactions, you don’t need generalists—you need infrastructure specialists.”
//                   </p>
//                   <div className="flex items-center gap-3.5 pt-2 border-t border-[#e6ded3]">
//                     <div className="w-11 h-11 rounded-full bg-[#eddec8] text-[#785921] font-bold font-display text-sm flex items-center justify-center border border-[#d1c5b5]">
//                       MH
//                     </div>
//                     <div className="flex flex-col">
//                       <span className="font-display font-bold text-sm text-[#14120e]">Marcus H. Vance</span>
//                       <span className="font-mono text-[11px] text-[#706553] uppercase tracking-wider">
//                         VP of Systems Engineering, Geeks on Tap
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 2: THE NO-DEV MANIFESTO (COMPARATIVE MATRIX) */}
//       <section className="w-full bg-[#fcf9f2] py-16 sm:py-24 ">
//         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
//           <div className="flex flex-col gap-12">
//             {/* Section Title & Descriptor */}
//             <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
//               <div className="flex flex-col gap-2 max-w-2xl">
//                 <span className="font-sans text-xs text-[#785921] uppercase tracking-widest font-bold">
//                   ARCHITECTURE PRINCIPLE // SEC-02
//                 </span>
//                 <h2 className="font-display font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14120e] tracking-tight">
//                   The “No-Dev” Engineering Manifesto
//                 </h2>
//                 <p className="text-sm sm:text-base text-[#4e4639]">
//                   High uptime requires radical boundaries. We do not drift into product design, marketing analytics, or feature sprints. We maintain the bedrock so your engineering team can construct without anxiety.
//                 </p>
//               </div>
//               <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fdfbf7] rounded-xl border border-[#e6ded3] shadow-sm font-mono text-xs text-[#706553] font-semibold font-sans">
//                 <Shield className="w-4 h-4 text-[#785921]" />
//                 ZERO CROSS-DOMAIN DILUTION GUARANTEE
//               </div>
//             </div>

//             {/* 2-Column High-Contrast Matrix */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Column 1: What We NEVER Touch */}
//               <div className="flex flex-col rounded-2xl bg-[#efeeeb] border border-[#e6ded3] p-6 sm:p-8 shadow-sm gap-6">
//                 <div className="flex items-center justify-between pb-3 border-b border-[#e6ded3]">
//                   <div className="flex items-center gap-3">
//                     <div className="w-9 h-9 rounded-xl bg-[#be0d13]/10 flex items-center justify-center text-[#be0d13]">
//                       <XCircle className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h3 className="font-display font-sans text-xl font-bold text-[#14120e]">What We NEVER Touch</h3>
//                       <span className="font-sans text-xs text-[#be0d13] uppercase font-bold tracking-wider">
//                         Zero Distraction Zone
//                       </span>
//                     </div>
//                   </div>
//                   <span className="font-sans text-xs text-[#be0d13] px-2.5 py-1 rounded bg-white border border-[#be0d13]/20 font-bold">
//                     PROHIBITED
//                   </span>
//                 </div>
//                 <p className="font-sans text-sm text-[#4e4639]">
//                   We strictly decline client requests to modify product codebases. Diluting operational rigor with application debugging compromises SLA posture.
//                 </p>

//                 <ul className="flex flex-col gap-3">
//                   {[
//                     {
//                       title: 'Application Frontend & Backend Code',
//                       desc: 'React, Vue, Django, Ruby on Rails, Node.js, microservice CRUD logic, or database schema migration scripts.'
//                     },
//                     {
//                       title: 'Product Feature Roadmaps & UX/UI Design',
//                       desc: 'Figma mockups, customer onboarding journeys, feature scoping, and interactive interface work.'
//                     },
//                     {
//                       title: 'Content Marketing, Pixels & Tracking SDKs',
//                       desc: 'Google Tag Manager, marketing automation tools, CMS page builders, or behavioral ad analytics.'
//                     },
//                     {
//                       title: 'Mobile Applications & Client Software',
//                       desc: 'iOS/Android native builds, app store submissions, and end-user device client debugging.'
//                     },
//                     {
//                       title: 'Superficial Third-Party SaaS Reselling',
//                       desc: 'No turnkey SaaS wrappers or middleman billing markups. We control physical silicon and carrier transit.'
//                     }
//                   ].map((item, idx) => (
//                     <li key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#faf8f5] border border-[#e6ded3]/70 hover:border-[#be0d13]/30 transition-colors">
//                       <XCircle className="w-5 h-5 text-[#be0d13] shrink-0 mt-0.5" />
//                       <div className="flex flex-col">
//                         <span className="font-display font-sans text-sm font-bold text-[#14120e]">{item.title}</span>
//                         <span className="font-sans text-xs text-[#706553] mt-0.5 leading-relaxed">{item.desc}</span>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Column 2: What We Obsessively MASTER */}
//               <div className="flex flex-col rounded-2xl bg-[#fdfbf7] border-2 border-[#E7E2D8] p-6 sm:p-8 shadow-md gap-6">
//                 <div className="flex items-center justify-between pb-3 border-b border-[#e6ded3]">
//                   <div className="flex items-center gap-3">
//                     <div className="w-9 h-9 rounded-xl bg-[#E9E7E2] flex items-center justify-center text-black">
//                       <CheckCircle2 className="w-5 h-5" />
//                     </div>
//                     <div>
//                       <h3 className="font-display font-sans text-xl font-bold text-[#14120e]">What We Obsessively MASTER</h3>
//                       <span className="font-sans text-xs text-[#785921] uppercase font-bold tracking-wider">
//                         100% Core Discipline
//                       </span>
//                     </div>
//                   </div>
//                   <span className="font-sans text-xs text-[#271900] bg-[#ffdeab] px-2.5 py-1 rounded font-bold">
//                     OPERATIONAL CORE
//                   </span>
//                 </div>
//                 <p className="font-sans text-sm text-[#4e4639]">
//                   Every engineer on our roster holds certified credentials in optical networking, physical layer diagnostics, hypervisor virtualization, and low-latency storage.
//                 </p>

//                 <ul className="flex flex-col gap-3">
//                   {[
//                     {
//                       title: 'Enterprise Bare Metal & Custom Chassis',
//                       desc: 'Supermicro & Dell PowerEdge nodes, custom PCIe backplanes, NVMe over Fabrics (NVMe-oF), and dual-socket Xeon/EPYC configurations.'
//                     },
//                     {
//                       title: 'Hypervisor Tuning (Proxmox, VMware, KVM)',
//                       desc: 'Bare-metal hypervisor kernel tuning, SR-IOV network passthrough, NUMA memory node balancing, and zero-downtime live migrations.'
//                     },
//                     {
//                       title: 'Terabit BGP Routing & Anycast Packet Filtering',
//                       desc: 'Global AS210984 routing mesh, autonomous multi-homed BGP peering, scrubbing centers, and wire-speed hardware L4 firewalling.'
//                     },
//                     {
//                       title: 'Fiber Cross-Connects & Low-Latency SAN Fabric',
//                       desc: 'Single-mode 100G/400G optical interconnects, redundant 32Gb Fibre Channel SAN arrays, and microsecond-level Ceph block rings.'
//                     },
//                     {
//                       title: 'High-Density Thermal & N+2 Power Redundancy',
//                       desc: 'Up to 35kW per rack containment, dual ATS STS transfer switches, continuous harmonic filter conditioning, and N+2 chiller redundancy.'
//                     },
//                     {
//                       title: '24/7/365 NOC & 15-Minute Critical Dispatch',
//                       desc: 'Direct physical hands on chassis, live console diagnostics, zero outsourced call centers, guaranteed tier-3 engineer answering.'
//                     }
//                   ].map((item, idx) => (
//                     <li key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#f5f3f0] border border-[#e6ded3] hover:bg-[#eddec8]/40 transition-colors">
//                       <CheckCircle2 className="w-5 h-5 text-[#785921] shrink-0 mt-0.5" />
//                       <div className="flex flex-col">
//                         <span className="font-display text-sm font-bold text-[#14120e]">{item.title}</span>
//                         <span className="text-xs text-[#706553] mt-0.5 leading-relaxed">{item.desc}</span>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 3: DATA CENTER FACILITY STANDARDS */}
//       <section className="w-full bg-[#fcf9f2] py-16 sm:py-24 ">
//         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
//           <div className="flex flex-col gap-12">
//             {/* Header with SLA Ring */}
//             <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
//               <div className="flex flex-col gap-2 max-w-2xl">
//                 <div className="flex items-center gap-2">
//                   <span className="w-2.5 h-2.5 rounded-full bg-[#b08c4f]" />
//                   <span className="font-sans text-xs text-[#706553] uppercase font-bold tracking-wider">
//                     FACILITY STANDARDS AUDIT
//                   </span>
//                 </div>
//                 <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14120e] tracking-tight">
//                   Tier-III+ Engineering Specifications & Hardware Integrity
//                 </h2>
//                 <p className="font-sans text-sm sm:text-base text-[#4e4639]">
//                   Physical uptime cannot be programmed away with software retries. Our audited facilities are engineered to withstand continuous primary grid failure without dropped packets.
//                 </p>
//               </div>

//               <div className="flex items-center gap-4 p-4 bg-[#efeeeb] border border-[#e6ded3] rounded-2xl shadow-sm">
//                 {/* SVG SLA Ring */}
//                 <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">
//                   <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
//                     <path
//                       className="text-[#d1c5b5]"
//                       d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="3.5"
//                     />
//                     <path
//                       className="text-[#785921]"
//                       d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeDasharray="99.995, 100"
//                       strokeLinecap="round"
//                       strokeWidth="3.5"
//                     />
//                   </svg>
//                   <span className="absolute font-mono text-xs font-bold text-[#14120e]">99.995%</span>
//                 </div>
//                 <div className="flex flex-col">
//                   <span className="font-sans text-xs text-[#785921] uppercase font-bold">POWER & THERMAL SLA</span>
//                   <span className="text-xs font-sans text-[#2c2416] font-medium">Audited by Uptime Institute Standards</span>
//                 </div>
//               </div>
//             </div>

//             {/* 4 Structural Technical Spec Cards */}
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//               {[
//                 {
//                   mod: 'MODULE // 01',
//                   title: 'Power & Cooling',
//                   icon: Zap,
//                   desc: 'Dual independent A+B utility substation feeds. N+1 diesel rotary UPS architecture with continuous conditioned sine-wave output.',
//                   stat1Label: 'Generator Reserve',
//                   stat1Val: '96-Hr Guaranteed',
//                   stat2Label: 'Cooling Design',
//                   stat2Val: 'In-Row CRAC (N+2)'
//                 },
//                 {
//                   mod: 'MODULE // 02',
//                   title: 'Perimeter Security',
//                   icon: Shield,
//                   desc: 'Multi-layer zero-trust physical access. Biometric retinal scanners, anti-tailgating mantrap chambers, and steel-reinforced private cages.',
//                   stat1Label: 'CCTV Telemetry',
//                   stat1Val: '360° 90-Day Archival',
//                   stat2Label: 'Access Verification',
//                   stat2Val: 'Dual-Factor Bio'
//                 },
//                 {
//                   mod: 'MODULE // 03',
//                   title: 'Network Transit',
//                   icon: Network,
//                   desc: 'Carrier-neutral meet-me rooms. Diverse dark fiber conduits from 6 Tier-1 carriers: Cogent, Lumen, Telia, Zayo, HE, and NTT Communications.',
//                   stat1Label: 'Total Transit Cap',
//                   stat1Val: '2.4 Tbps Multi-BGP',
//                   stat2Label: 'Fiber Entry',
//                   stat2Val: 'Redundant Vaults'
//                 },
//                 {
//                   mod: 'MODULE // 04',
//                   title: 'Hardware MTBF',
//                   icon: Layers,
//                   desc: 'Enterprise-only component stocking on-site. Hot-swappable enterprise power modules, enterprise SAS/NVMe drives, and ECC RAM spares.',
//                   stat1Label: 'On-Site Spares',
//                   stat1Val: '100% Chassis Parity',
//                   stat2Label: 'Hardware Replacement',
//                   stat2Val: '< 30 Minutes'
//                 }
//               ].map((spec, idx) => {
//                 const IconComponent = spec.icon;
//                 return (
//                   <div
//                     key={idx}
//                     className="flex flex-col justify-between p-6 rounded-2xl bg-[#f5f3f0] border border-[#e6ded3] shadow-sm hover:shadow-md transition-shadow"
//                   >
//                     <div className="flex flex-col gap-4">
//                       <div className="w-10 h-10 rounded-xl bg-[#efeeeb] border border-[#e6ded3] flex items-center justify-center text-[#785921] shadow-sm">
//                         <IconComponent className="w-5 h-5" />
//                       </div>
//                       <div className="flex flex-col gap-1">
//                         <span className="font-sans text-xs text-[#706553] uppercase">{spec.mod}</span>
//                         <h3 className="font-sans text-lg font-bold text-[#14120e]">{spec.title}</h3>
//                       </div>
//                       <p className="text-xs font-sans text-[#4e4639] leading-relaxed">{spec.desc}</p>
//                     </div>

//                     <div className="mt-6 pt-4 border-t border-[#e6ded3] bg-[#efeeeb] p-3.5 rounded-xl flex flex-col gap-2">
//                       <div className="flex justify-between items-center text-xs font-sans">
//                         <span className="text-[#706553]">{spec.stat1Label}</span>
//                         <span className="text-[#14120e] font-bold">{spec.stat1Val}</span>
//                       </div>
//                       <div className="flex justify-between items-center text-xs font-sans">
//                         <span className="text-[#706553]">{spec.stat2Label}</span>
//                         <span className="text-[#14120e] font-bold">{spec.stat2Val}</span>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Secondary Visual Showcase: MTBF Hardware Policy */}
//             <div className="w-full rounded-2xl bg-[#efeeeb] border border-[#e6ded3] p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
//               <div className="flex flex-col gap-3 max-w-xl">
//                 <span className="font-sans text-xs text-[#785921] uppercase font-bold tracking-wider">
//                   AUDITED MTBF COMPONENT POLICY
//                 </span>
//                 <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#14120e]">
//                   We Never Source Consumer or Prosumer Hardware
//                 </h3>
//                 <p className="text-sm font-sans text-[#4e4639] leading-relaxed">
//                   Every capacitor, transceiver, and backplane in our inventory undergoes continuous burn-in qualification. We refuse ‘gaming’ GPUs or desktop processors in mission environments. Reliability is rooted in deliberate engineering decisions.
//                 </p>
//                 <div className="flex flex-wrap items-center gap-4 pt-2 font-sans text-xs text-[#785921] font-semibold">
//                   <span className="flex items-center gap-1.5">• ECC DDR5 Registered</span>
//                   <span className="flex items-center gap-1.5">• Broadcom Tomahawk ASICs</span>
//                   <span className="flex items-center gap-1.5">• Micron Enterprise Solidigm</span>
//                 </div>
//               </div>

//               <div className="w-full lg:w-80 h-48 rounded-xl overflow-hidden shadow-sm relative border border-[#e6ded3] shrink-0">
//                 <img
//                   className="w-full h-full object-cover"
//                   alt="Enterprise rack mount fiber optic patch panel"
//                   src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfpXXPkCd9UoeTTURDClispuQJc_ehA2ShAjm4vzO5kRhveoGmzvZ43x9gmq02Uyk77SVlXDFG0l4RTUczlyRPMVQ7LbIIkLv9SqtwTW6eL7AlWa3j9amMwseNsWG6Ug6ACHywVVib-ooZ4ddYYrmuG_6A82eW2Vo2-qobFP7IJAMrUlA4TN2xk8FzR6t8eSAE0Exf8HZmWMIEtTocudhr0yAoLrAFscwKgLZmMF0X-0mh0TxucY-Hgw"
//                 />
//                 <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                   <div className="px-3.5 py-1.5 bg-[#faf8f5]/95 rounded-lg text-[#14120e] font-sans text-xs font-bold backdrop-blur border border-white/20">
//                     FIBER_PATCH_400G_MMR
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* SECTION 4: INTEGRATED QUICK ASSESSMENT FORM BLOCK */}
//       <section className="w-full bg-[#fcf9f2] py-16 sm:py-24">
//         <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
//             {/* Left Column: Direct Engineering Channel */}
//             <div className="lg:col-span-5 flex flex-col gap-6">
//               <div className="flex flex-col gap-2">
//                 <span className="font-sans text-xs text-[#785921] uppercase tracking-widest font-bold">
//                   DIRECT ENGAGEMENT // TIER-3 DISPATCH
//                 </span>
//                 <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#14120e] tracking-tight">
//                   Direct Line to Principal Engineers
//                 </h2>
//                 <p className="text-sm font-sans text-[#4e4639] leading-relaxed">
//                   No junior commission salespeople. When you submit your infrastructure requirements, your architecture blueprint is reviewed directly by a systems architect.
//                 </p>
//               </div>

//               {/* Highlight Cards */}
//               <div className="flex flex-col gap-3.5">
//                 {[
//                   {
//                     icon: Cpu,
//                     title: 'Architect-to-Architect Briefing',
//                     desc: 'Discuss chassis layouts, BGP routing tables, latency tolerances, and power loads directly with our infrastructure leads.'
//                   },
//                   {
//                     icon: Lock,
//                     title: 'Strict Non-Disclosure Guarantee',
//                     desc: 'We execute bilateral NDAs before accessing network topology documents or data transit estimations.'
//                   },
//                   {
//                     icon: Clock,
//                     title: '15-Minute Critical Turnaround',
//                     desc: 'Emergency cutovers and egress evacuations can be provisioned in our staging cages within hours.'
//                   }
//                 ].map((item, idx) => {
//                   const Icon = item.icon;
//                   return (
//                     <div key={idx} className="p-4 rounded-xl bg-[#faf8f5] border border-[#e6ded3] shadow-sm flex items-start gap-4">
//                       <div className="w-10 h-10 rounded-xl bg-[#eddec8] text-[#785921] flex items-center justify-center shrink-0 border border-[#d1c5b5]">
//                         <Icon className="w-5 h-5" />
//                       </div>
//                       <div className="flex flex-col">
//                         <span className="font-sans font-bold text-sm text-[#14120e]">{item.title}</span>
//                         <span className="text-xs text-[#706553] mt-0.5 leading-relaxed">{item.desc}</span>
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>

//               {/* Hotline Pill */}
//               <div className="p-5 rounded-2xl bg-[#efeeeb] border border-[#e6ded3] flex items-center justify-between">
//                 <div className="flex flex-col">
//                   <span className="font-sans text-xs text-[#706553] uppercase font-bold">DIRECT NOC HOTLINE</span>
//                   <a href="tel:18004227662" className="font-sans text-lg text-[#785921] font-bold hover:underline">
//                   +1 (343) 297‑6786
//                   </a>
//                 </div>
//                 <div className="flex items-center gap-2 text-[#248a3d] font-sans text-xs font-bold">
//                   <span className="w-2.5 h-2.5 rounded-full bg-[#248a3d] animate-pulse" />
//                   DUTY ENGINEER ONLINE
//                 </div>
//               </div>
//             </div>

//             {/* Right Column: 5-Field Quick Assessment Form */}
//             <div className="lg:col-span-7 rounded-2xl bg-[#ffffff] border border-[#e6ded3] p-6 sm:p-10 shadow-xl flex flex-col gap-6">
//               <div className="flex flex-col gap-1 pb-2 border-b border-[#e6ded3]">
//                 <span className="font-sans text-xs text-[#785921] uppercase font-bold">PRE-ENGAGEMENT SCOPING</span>
//                 <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#14120e]">
//                   Request Infrastructure Technical Assessment
//                 </h3>
//                 <p className="text-xs sm:text-sm text-[#706553]">
//                   Provide your high-level parameters below. A Principal Infrastructure Engineer will evaluate capacity availability within 4 business hours.
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//                 {/* Row 1: Full Name & Corporate Email */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="flex flex-col gap-1.5">
//                     <label htmlFor="about-fullName" className="font-sans text-xs text-[#4e4639] uppercase font-bold">
//                       Field 01 // Full Name *
//                     </label>
//                     <input
//                       id="about-fullName"
//                       type="text"
//                       required
//                       value={formData.fullName}
//                       onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                       placeholder="e.g. Alex Thorne, VP Infrastructure"
//                       className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm focus:outline-none focus:ring-2 focus:ring-[#b08c4f] shadow-inner"
//                     />
//                   </div>

//                   <div className="flex flex-col gap-1.5">
//                     <label htmlFor="about-workEmail" className="font-sans text-xs text-[#4e4639] uppercase font-bold">
//                       Field 02 // Corporate Email *
//                     </label>
//                     <input
//                       id="about-workEmail"
//                       type="email"
//                       required
//                       value={formData.workEmail}
//                       onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
//                       placeholder="alex.t@enterprise.com"
//                       className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#b08c4f] shadow-inner"
//                     />
//                   </div>
//                 </div>

//                 {/* Field 3: Infrastructure Requirement */}
//                 <div className="flex flex-col gap-1.5">
//                   <label htmlFor="about-reqType" className="font-sans text-xs text-[#4e4639] uppercase font-bold">
//                     Field 03 // Primary Infrastructure Requirement *
//                   </label>
//                   <select
//                     id="about-reqType"
//                     required
//                     value={formData.requirementType}
//                     onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
//                     className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm focus:outline-none focus:ring-2 focus:ring-[#b08c4f] shadow-inner cursor-pointer"
//                   >
//                     <option value="" disabled>Select Core Architecture Focus...</option>
//                     <option value="dedicated-metal">Dedicated Bare Metal (Custom Chassis / High Compute)</option>
//                     <option value="cloud-virtualization">Managed Hypervisor Virtualization (Proxmox / KVM / VMware)</option>
//                     <option value="network-transit">Multi-Gigabit Network Transit & BGP Anycast Routing</option>
//                     <option value="noc-management">24/7 Outsourced Physical NOC Management & Colocation</option>
//                   </select>
//                 </div>

//                 {/* Field 4: Current Setup / Pain Point */}
//                 <div className="flex flex-col gap-1.5">
//                   <label htmlFor="about-topology" className="font-sans text-xs text-[#4e4639] uppercase font-bold">
//                     Field 04 // Current Setup & Migration Drivers *
//                   </label>
//                   <input
//                     id="about-topology"
//                     type="text"
//                     required
//                     value={formData.currentTopology}
//                     onChange={(e) => setFormData({ ...formData, currentTopology: e.target.value })}
//                     placeholder="e.g. AWS/Azure egress cost migration, aging on-premise racks, or hybrid private cloud"
//                     className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm focus:outline-none focus:ring-2 focus:ring-[#b08c4f] shadow-inner"
//                   />
//                 </div>

//                 {/* Field 5: Target Timeline */}
//                 <div className="flex flex-col gap-1.5">
//                   <label htmlFor="about-timeline" className="font-sans text-xs text-[#4e4639] uppercase font-bold">
//                     Field 05 // Target Deployment Timeline *
//                   </label>
//                   <select
//                     id="about-timeline"
//                     required
//                     value={formData.deploymentTimeline}
//                     onChange={(e) => setFormData({ ...formData, deploymentTimeline: e.target.value })}
//                     className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm focus:outline-none focus:ring-2 focus:ring-[#b08c4f] shadow-inner cursor-pointer"
//                   >
//                     <option value="" disabled>Select Deployment Urgency...</option>
//                     <option value="immediate">Immediate Emergency Deployment (&lt; 7 Days)</option>
//                     <option value="30-days">Standard 30 Days Provisioning Window</option>
//                     <option value="60-90-days">Strategic Migration (60 – 90 Days)</option>
//                     <option value="exploratory">Exploratory Architectural Review / RFI Phase</option>
//                   </select>
//                 </div>

//                 {/* Submit Action & Privacy Note */}
//                 <div className="flex flex-col gap-3 pt-2">
//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     className="w-full py-3.5 px-6 rounded-xl bg-[#b08c4f] hover:bg-[#947642] text-white font-sans font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
//                   >
//                     <Send className="w-4 h-4" />
//                     <span>{submitting ? 'Submitting Specification...' : 'Request Engineering Consultation'}</span>
//                   </button>

//                   <div className="flex items-center justify-center gap-2 text-center text-[#706553] font-sans text-[11px]">
//                     <Shield className="w-3.5 h-3.5 text-[#785921]" />
//                     <span>Protected by Mutual Non-Disclosure. No sales SPAM. Zero app-dev solicitation.</span>
//                   </div>

//                   {/* Success Alert */}
//                   {formSubmitted && (
//                     <div className="p-4 rounded-xl bg-[#eddec8] text-[#2c2416] font-mono text-xs flex items-center gap-3 border border-[#b08c4f]/40 shadow-sm animate-in fade-in duration-300">
//                       <CheckCircle2 className="w-5 h-5 text-[#248a3d] shrink-0" />
//                       <span>Inquiry logged to NOC Ticketing Queue. A Senior Systems Engineer is reviewing your parameters.</span>
//                     </div>
//                   )}
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import React, { useState } from 'react';
import {
  Shield,
  Cpu,
  Server,
  Lock,
  Clock,
  PhoneCall,
  Send,
  CheckCircle2,
  XCircle,
  Zap,
  Network,
  Activity,
  Layers,
  FileText,
  Flame,
  KeyRound
} from 'lucide-react';

export default function AboutUsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    requirementType: '',
    currentTopology: '',
    deploymentTimeline: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);

      setFormData({
        fullName: '',
        workEmail: '',
        requirementType: '',
        currentTopology: '',
        deploymentTimeline: ''
      });
    }, 600);
  };

  return (
    <div className="w-full bg-[#faf8f5] text-[#2c2416] antialiased">

      {/* SECTION 1: HERO & EXECUTIVE NARRATIVE */}
      <section className="relative w-full overflow-hidden bg-[#fcf9f2] pt-28 sm:pt-36 pb-16 sm:pb-24">

        {/* Architectural Ambient Glow */}
        <div className="absolute -top-32 right-0 w-96 h-96 rounded-full bg-[#b08c4f]/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#E9E7E2]/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
          <div className="flex flex-col gap-8">

            {/* Monospace Status Header */}
            <div className="flex flex-wrap items-center gap-3">

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E9E7E2] text-[#14120e] font-sans text-xs uppercase tracking-wider font-semibold">
                OUR PHILOSOPHY & ENGINEERING RATIONALE
              </div>

              <div className="font-sans text-xs text-[#706553]">
                ARCHIVAL_REF: GOT-CORP-MAN-2025 // NOC LEVEL-4
              </div>

            </div>

            {/* Headline & Main Thesis */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

              <div className="lg:col-span-7 flex flex-col gap-6">

                <h1 className="font-display font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14120e] tracking-tight leading-[1.15]">
                  Why We Refuse to Write a Single Line of Application Code
                </h1>

                <p className="text-base sm:text-lg text-[#4e4639] leading-relaxed">
                  In an era of full-stack sprawl and superficial cloud abstractions, Geeks on Tap was founded on a singular radical thesis: Enterprise infrastructure demands undivided, obsessive focus. When providers try to build your apps while managing your physical hypervisors, neither receives the rigor it warrants.
                </p>

                {/* 3 Metric Chips */}
                <div className="flex flex-wrap items-center gap-4 pt-2">

                  <div className="px-5 py-3.5 rounded-xl bg-[#efeeeb] border border-[#DDD9D1] flex items-center gap-3.5 shadow-sm">
                    <Server className="w-6 h-6 text-[#8A6A2F]" />

                    <div className="flex flex-col">
                      <span className="font-display text-xl font-bold text-[#14120e]">
                        100%
                      </span>

                      <span className="font-mono text-[11px] text-[#706553] uppercase tracking-wider">
                        Hardware & Fabric
                      </span>
                    </div>
                  </div>

                  <div className="px-5 py-3.5 rounded-xl bg-[#efeeeb] border border-[#DDD9D1] flex items-center gap-3.5 shadow-sm">
                    <XCircle className="w-6 h-6 text-[#BD0009]" />

                    <div className="flex flex-col">
                      <span className="font-display text-xl font-bold text-[#14120e]">
                        0 LOC
                      </span>

                      <span className="font-mono text-[11px] text-[#706553] uppercase tracking-wider">
                        Frontend / Backend Code
                      </span>
                    </div>
                  </div>

                  <div className="px-5 py-3.5 rounded-xl bg-[#efeeeb] border border-[#DDD9D1] flex items-center gap-3.5 shadow-sm">
                    <Shield className="w-6 h-6 text-[#8A6A2F]" />

                    <div className="flex flex-col">
                      <span className="font-display text-xl font-bold text-[#14120e]">
                        Tier-III+
                      </span>

                      <span className="font-mono text-[11px] text-[#706553] uppercase tracking-wider">
                        Standard Facilities
                      </span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Executive Quote & Facility Photo Block */}
              <div className="lg:col-span-5 flex flex-col gap-6">

                <div className="relative w-full h-64 rounded-2xl overflow-hidden shadow-lg border border-[#DDD9D1] group">

                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    alt="Modern mission critical data center server room corridor with cold aisle containment"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3tuKJZBx7aKA6FSzf1JhIZ8CKu9vWyQDACG0Ip7SYckNjynGw0Ev1HAMWBH2ZBB0KIadH7le-e_arKCP9k_UOImUASwsB_o1FrN7AV6RULXKIIFJCtvBZrP84sBJrYeWJesK9HGrpfH7jkRFzZMEOx4cKYYCsbLXQpTbt_eY2lkLSqcnbauBiJaP8mxPmZnKw_o0W_6qil-h_DC6NFGyxvS6zwMt2XlBMH8NcG0kJoqBNwwtjcyVlow"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">

                    <div className="flex items-center gap-2 text-white font-mono text-xs bg-black/70 px-3 py-1.5 rounded-lg backdrop-blur border border-white/10">
                      <span className="w-2 h-2 rounded-full bg-[#E9E7E2]" />
                      PHOENIX-01 FACILITY // AISLE 04B COLOCATION
                    </div>

                  </div>
                </div>

                {/* Quote Container */}
                <div className="p-6 rounded-2xl bg-[#f5f3f0] border border-[#DDD9D1] shadow-sm flex flex-col gap-4">

                  <div className="flex items-center justify-between">

                    <span className="text-xs text-[#8A6A2F] uppercase font-bold tracking-wider">
                      LEADERSHIP STATEMENT
                    </span>

                    <span className="w-2 h-2 rounded-full bg-[#2E8B4A]" />

                  </div>

                  <p className="text-[#2c2416] italic leading-relaxed text-sm sm:text-base font-normal">
                    “We treat bare metal, power distribution, optical routing, and kernel virtualization as sacred disciplines. When your software handles millions of transactions, you don’t need generalists—you need infrastructure specialists.”
                  </p>

                  <div className="flex items-center gap-3.5 pt-2 border-t border-[#DDD9D1]">

                    <div className="w-11 h-11 rounded-full bg-[#E9E7E2] text-[#8A6A2F] font-bold font-display text-sm flex items-center justify-center border border-[#D4D1CB]">
                      MH
                    </div>

                    <div className="flex flex-col">

                      <span className="font-display font-bold text-sm text-[#14120e]">
                        Marcus H. Vance
                      </span>

                      <span className="font-mono text-[11px] text-[#706553] uppercase tracking-wider">
                        VP of Systems Engineering, Geeks on Tap
                      </span>

                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* SECTION 2: THE NO-DEV MANIFESTO */}
      <section className="w-full bg-[#fcf9f2] py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          <div className="flex flex-col gap-12">

            {/* Section Title & Descriptor */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">

              <div className="flex flex-col gap-2 max-w-2xl">

                <span className="font-sans text-xs text-[#8A6A2F] uppercase tracking-widest font-bold">
                  ARCHITECTURE PRINCIPLE // SEC-02
                </span>

                <h2 className="font-display font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14120e] tracking-tight">
                  The “No-Dev” Engineering Manifesto
                </h2>

                <p className="text-sm sm:text-base text-[#4e4639]">
                  High uptime requires radical boundaries. We do not drift into product design, marketing analytics, or feature sprints. We maintain the bedrock so your engineering team can construct without anxiety.
                </p>

              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#fdfbf7] rounded-xl border border-[#DDD9D1] shadow-sm font-mono text-xs text-[#706553] font-semibold font-sans">

                <Shield className="w-4 h-4 text-[#8A6A2F]" />

                ZERO CROSS-DOMAIN DILUTION GUARANTEE

              </div>

            </div>


            {/* 2-Column High-Contrast Matrix */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Column 1: What We NEVER Touch */}
              <div className="flex flex-col rounded-2xl bg-[#efeeeb] border border-[#DDD9D1] p-6 sm:p-8 shadow-sm gap-6">

                <div className="flex items-center justify-between pb-3 border-b border-[#DDD9D1]">

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-xl bg-[#BD0009]/10 flex items-center justify-center text-[#BD0009]">
                      <XCircle className="w-5 h-5" />
                    </div>

                    <div>

                      <h3 className="font-display font-sans text-xl font-bold text-[#14120e]">
                        What We NEVER Touch
                      </h3>

                      <span className="font-sans text-xs text-[#BD0009] uppercase font-bold tracking-wider">
                        Zero Distraction Zone
                      </span>

                    </div>
                  </div>

                  <span className="font-sans text-xs text-[#BD0009] px-2.5 py-1 rounded bg-white border border-[#BD0009]/20 font-bold">
                    PROHIBITED
                  </span>

                </div>

                <p className="font-sans text-sm text-[#4e4639]">
                  We strictly decline client requests to modify product codebases. Diluting operational rigor with application debugging compromises SLA posture.
                </p>

                <ul className="flex flex-col gap-3">

                  {[
                    {
                      title: 'Application Frontend & Backend Code',
                      desc: 'React, Vue, Django, Ruby on Rails, Node.js, microservice CRUD logic, or database schema migration scripts.'
                    },
                    {
                      title: 'Product Feature Roadmaps & UX/UI Design',
                      desc: 'Figma mockups, customer onboarding journeys, feature scoping, and interactive interface work.'
                    },
                    {
                      title: 'Content Marketing, Pixels & Tracking SDKs',
                      desc: 'Google Tag Manager, marketing automation tools, CMS page builders, or behavioral ad analytics.'
                    },
                    {
                      title: 'Mobile Applications & Client Software',
                      desc: 'iOS/Android native builds, app store submissions, and end-user device client debugging.'
                    },
                    {
                      title: 'Superficial Third-Party SaaS Reselling',
                      desc: 'No turnkey SaaS wrappers or middleman billing markups. We control physical silicon and carrier transit.'
                    }
                  ].map((item, idx) => (

                    <li
                      key={idx}
                      className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#faf8f5] border border-[#DDD9D1]/70 hover:border-[#BD0009]/30 transition-colors"
                    >

                      <XCircle className="w-5 h-5 text-[#BD0009] shrink-0 mt-0.5" />

                      <div className="flex flex-col">

                        <span className="font-display font-sans text-sm font-bold text-[#14120e]">
                          {item.title}
                        </span>

                        <span className="font-sans text-xs text-[#706553] mt-0.5 leading-relaxed">
                          {item.desc}
                        </span>

                      </div>

                    </li>

                  ))}

                </ul>
              </div>


              {/* Column 2: What We Obsessively MASTER */}
              <div className="flex flex-col rounded-2xl bg-[#fdfbf7] border-2 border-[#D8D4CD] p-6 sm:p-8 shadow-md gap-6">

                <div className="flex items-center justify-between pb-3 border-b border-[#DDD9D1]">

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-xl bg-[#E9E7E2] flex items-center justify-center text-[#8A6A2F]">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>

                    <div>

                      <h3 className="font-display font-sans text-xl font-bold text-[#14120e]">
                        What We Obsessively MASTER
                      </h3>

                      <span className="font-sans text-xs text-[#8A6A2F] uppercase font-bold tracking-wider">
                        100% Core Discipline
                      </span>

                    </div>
                  </div>

                  <span className="font-sans text-xs text-[#14120e] bg-[#E9E7E2] px-2.5 py-1 rounded font-bold">
                    OPERATIONAL CORE
                  </span>

                </div>

                <p className="font-sans text-sm text-[#4e4639]">
                  Every engineer on our roster holds certified credentials in optical networking, physical layer diagnostics, hypervisor virtualization, and low-latency storage.
                </p>

                <ul className="flex flex-col gap-3">

                  {[
                    {
                      title: 'Enterprise Bare Metal & Custom Chassis',
                      desc: 'Supermicro & Dell PowerEdge nodes, custom PCIe backplanes, NVMe over Fabrics (NVMe-oF), and dual-socket Xeon/EPYC configurations.'
                    },
                    {
                      title: 'Hypervisor Tuning (Proxmox, VMware, KVM)',
                      desc: 'Bare-metal hypervisor kernel tuning, SR-IOV network passthrough, NUMA memory node balancing, and zero-downtime live migrations.'
                    },
                    {
                      title: 'Terabit BGP Routing & Anycast Packet Filtering',
                      desc: 'Global AS210984 routing mesh, autonomous multi-homed BGP peering, scrubbing centers, and wire-speed hardware L4 firewalling.'
                    },
                    {
                      title: 'Fiber Cross-Connects & Low-Latency SAN Fabric',
                      desc: 'Single-mode 100G/400G optical interconnects, redundant 32Gb Fibre Channel SAN arrays, and microsecond-level Ceph block rings.'
                    },
                    {
                      title: 'High-Density Thermal & N+2 Power Redundancy',
                      desc: 'Up to 35kW per rack containment, dual ATS STS transfer switches, continuous harmonic filter conditioning, and N+2 chiller redundancy.'
                    },
                    {
                      title: '24/7/365 NOC & 15-Minute Critical Dispatch',
                      desc: 'Direct physical hands on chassis, live console diagnostics, zero outsourced call centers, guaranteed tier-3 engineer answering.'
                    }
                  ].map((item, idx) => (

                    <li
                      key={idx}
                      className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#f5f3f0] border border-[#DDD9D1] hover:bg-[#E9E7E2]/60 transition-colors"
                    >

                      <CheckCircle2 className="w-5 h-5 text-[#8A6A2F] shrink-0 mt-0.5" />

                      <div className="flex flex-col">

                        <span className="font-display text-sm font-bold text-[#14120e]">
                          {item.title}
                        </span>

                        <span className="text-xs text-[#706553] mt-0.5 leading-relaxed">
                          {item.desc}
                        </span>

                      </div>

                    </li>

                  ))}

                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* SECTION 3: DATA CENTER FACILITY STANDARDS */}
      <section className="w-full bg-[#fcf9f2] py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          <div className="flex flex-col gap-12">

            {/* Header with SLA Ring */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">

              <div className="flex flex-col gap-2 max-w-2xl">

                <div className="flex items-center gap-2">

                  <span className="w-2.5 h-2.5 rounded-full bg-[#8A6A2F]" />

                  <span className="font-sans text-xs text-[#706553] uppercase font-bold tracking-wider">
                    FACILITY STANDARDS AUDIT
                  </span>

                </div>

                <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14120e] tracking-tight">
                  Tier-III+ Engineering Specifications & Hardware Integrity
                </h2>

                <p className="font-sans text-sm sm:text-base text-[#4e4639]">
                  Physical uptime cannot be programmed away with software retries. Our audited facilities are engineered to withstand continuous primary grid failure without dropped packets.
                </p>

              </div>

              <div className="flex items-center gap-4 p-4 bg-[#efeeeb] border border-[#DDD9D1] rounded-2xl shadow-sm">

                {/* SVG SLA Ring */}
                <div className="relative w-16 h-16 shrink-0 flex items-center justify-center">

                  <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 36 36"
                  >

                    <path
                      className="text-[#D8D4CD]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                    />

                    <path
                      className="text-[#8A6A2F]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="99.995, 100"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                    />

                  </svg>

                  <span className="absolute font-mono text-xs font-bold text-[#14120e]">
                    99.995%
                  </span>

                </div>

                <div className="flex flex-col">

                  <span className="font-sans text-xs text-[#8A6A2F] uppercase font-bold">
                    POWER & THERMAL SLA
                  </span>

                  <span className="text-xs font-sans text-[#2c2416] font-medium">
                    Audited by Uptime Institute Standards
                  </span>

                </div>

              </div>

            </div>


            {/* 4 Structural Technical Spec Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

              {[
                {
                  mod: 'MODULE // 01',
                  title: 'Power & Cooling',
                  icon: Zap,
                  desc: 'Dual independent A+B utility substation feeds. N+1 diesel rotary UPS architecture with continuous conditioned sine-wave output.',
                  stat1Label: 'Generator Reserve',
                  stat1Val: '96-Hr Guaranteed',
                  stat2Label: 'Cooling Design',
                  stat2Val: 'In-Row CRAC (N+2)'
                },
                {
                  mod: 'MODULE // 02',
                  title: 'Perimeter Security',
                  icon: Shield,
                  desc: 'Multi-layer zero-trust physical access. Biometric retinal scanners, anti-tailgating mantrap chambers, and steel-reinforced private cages.',
                  stat1Label: 'CCTV Telemetry',
                  stat1Val: '360° 90-Day Archival',
                  stat2Label: 'Access Verification',
                  stat2Val: 'Dual-Factor Bio'
                },
                {
                  mod: 'MODULE // 03',
                  title: 'Network Transit',
                  icon: Network,
                  desc: 'Carrier-neutral meet-me rooms. Diverse dark fiber conduits from 6 Tier-1 carriers: Cogent, Lumen, Telia, Zayo, HE, and NTT Communications.',
                  stat1Label: 'Total Transit Cap',
                  stat1Val: '2.4 Tbps Multi-BGP',
                  stat2Label: 'Fiber Entry',
                  stat2Val: 'Redundant Vaults'
                },
                {
                  mod: 'MODULE // 04',
                  title: 'Hardware MTBF',
                  icon: Layers,
                  desc: 'Enterprise-only component stocking on-site. Hot-swappable enterprise power modules, enterprise SAS/NVMe drives, and ECC RAM spares.',
                  stat1Label: 'On-Site Spares',
                  stat1Val: '100% Chassis Parity',
                  stat2Label: 'Hardware Replacement',
                  stat2Val: '< 30 Minutes'
                }
              ].map((spec, idx) => {

                const IconComponent = spec.icon;

                return (
                  <div
                    key={idx}
                    className="flex flex-col justify-between p-6 rounded-2xl bg-[#f5f3f0] border border-[#DDD9D1] shadow-sm hover:shadow-md transition-shadow"
                  >

                    <div className="flex flex-col gap-4">

                      <div className="w-10 h-10 rounded-xl bg-[#E9E7E2] border border-[#DDD9D1] flex items-center justify-center text-[#8A6A2F] shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="flex flex-col gap-1">

                        <span className="font-sans text-xs text-[#706553] uppercase">
                          {spec.mod}
                        </span>

                        <h3 className="font-sans text-lg font-bold text-[#14120e]">
                          {spec.title}
                        </h3>

                      </div>

                      <p className="text-xs font-sans text-[#4e4639] leading-relaxed">
                        {spec.desc}
                      </p>

                    </div>

                    <div className="mt-6 pt-4 border-t border-[#DDD9D1] bg-[#E9E7E2] p-3.5 rounded-xl flex flex-col gap-2">

                      <div className="flex justify-between items-center text-xs font-sans">

                        <span className="text-[#706553]">
                          {spec.stat1Label}
                        </span>

                        <span className="text-[#14120e] font-bold">
                          {spec.stat1Val}
                        </span>

                      </div>

                      <div className="flex justify-between items-center text-xs font-sans">

                        <span className="text-[#706553]">
                          {spec.stat2Label}
                        </span>

                        <span className="text-[#14120e] font-bold">
                          {spec.stat2Val}
                        </span>

                      </div>

                    </div>

                  </div>
                );
              })}

            </div>


            {/* Secondary Visual Showcase */}
            <div className="w-full rounded-2xl bg-[#E9E7E2] border border-[#DDD9D1] p-6 sm:p-10 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">

              <div className="flex flex-col gap-3 max-w-xl">

                <span className="font-sans text-xs text-[#8A6A2F] uppercase font-bold tracking-wider">
                  AUDITED MTBF COMPONENT POLICY
                </span>

                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#14120e]">
                  We Never Source Consumer or Prosumer Hardware
                </h3>

                <p className="text-sm font-sans text-[#4e4639] leading-relaxed">
                  Every capacitor, transceiver, and backplane in our inventory undergoes continuous burn-in qualification. We refuse ‘gaming’ GPUs or desktop processors in mission environments. Reliability is rooted in deliberate engineering decisions.
                </p>

                <div className="flex flex-wrap items-center gap-4 pt-2 font-sans text-xs text-[#8A6A2F] font-semibold">
                  <span>• ECC DDR5 Registered</span>
                  <span>• Broadcom Tomahawk ASICs</span>
                  <span>• Micron Enterprise Solidigm</span>
                </div>

              </div>

              <div className="w-full lg:w-80 h-48 rounded-xl overflow-hidden shadow-sm relative border border-[#DDD9D1] shrink-0">

                <img
                  className="w-full h-full object-cover"
                  alt="Enterprise rack mount fiber optic patch panel"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfpXXPkCd9UoeTTURDClispuQJc_ehA2ShAjm4vzO5kRhveoGmzvZ43x9gmq02Uyk77SVlXDFG0l4RTUczlyRPMVQ7LbIIkLv9SqtwTW6eL7AlWa3j9amMwseNsWG6Ug6ACHywVVib-ooZ4ddYYrmuG_6A82eW2Vo2-qobFP7IJAMrUlA4TN2xk8FzR6t8eSAE0Exf8HZmWMIEtTocudhr0yAoLrAFscwKgLZmMF0X-0mh0TxucY-Hgw"
                />

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">

                  <div className="px-3.5 py-1.5 bg-[#faf8f5]/95 rounded-lg text-[#14120e] font-sans text-xs font-bold backdrop-blur border border-white/20">
                    FIBER_PATCH_400G_MMR
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* SECTION 4: INTEGRATED QUICK ASSESSMENT FORM BLOCK */}
      <section className="w-full bg-[#fcf9f2] py-16 sm:py-24">

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

            {/* Left Column: Direct Engineering Channel */}
            <div className="lg:col-span-5 flex flex-col gap-6">

              <div className="flex flex-col gap-2">

                <span className="font-sans text-xs text-[#8A6A2F] uppercase tracking-widest font-bold">
                  DIRECT ENGAGEMENT // TIER-3 DISPATCH
                </span>

                <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#14120e] tracking-tight">
                  Direct Line to Principal Engineers
                </h2>

                <p className="text-sm font-sans text-[#4e4639] leading-relaxed">
                  No junior commission salespeople. When you submit your infrastructure requirements, your architecture blueprint is reviewed directly by a systems architect.
                </p>

              </div>


              {/* Highlight Cards */}
              <div className="flex flex-col gap-3.5">

                {[
                  {
                    icon: Cpu,
                    title: 'Architect-to-Architect Briefing',
                    desc: 'Discuss chassis layouts, BGP routing tables, latency tolerances, and power loads directly with our infrastructure leads.'
                  },
                  {
                    icon: Lock,
                    title: 'Strict Non-Disclosure Guarantee',
                    desc: 'We execute bilateral NDAs before accessing network topology documents or data transit estimations.'
                  },
                  {
                    icon: Clock,
                    title: '15-Minute Critical Turnaround',
                    desc: 'Emergency cutovers and egress evacuations can be provisioned in our staging cages within hours.'
                  }
                ].map((item, idx) => {

                  const Icon = item.icon;

                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#faf8f5] border border-[#DDD9D1] shadow-sm flex items-start gap-4"
                    >

                      <div className="w-10 h-10 rounded-xl bg-[#E9E7E2] text-[#8A6A2F] flex items-center justify-center shrink-0 border border-[#D4D1CB]">
                        <Icon className="w-5 h-5" />
                      </div>

                      <div className="flex flex-col">

                        <span className="font-sans font-bold text-sm text-[#14120e]">
                          {item.title}
                        </span>

                        <span className="text-xs text-[#706553] mt-0.5 leading-relaxed">
                          {item.desc}
                        </span>

                      </div>

                    </div>
                  );
                })}

              </div>


              {/* Hotline Pill */}
              <div className="p-5 rounded-2xl bg-[#efeeeb] border border-[#DDD9D1] flex items-center justify-between">

                <div className="flex flex-col">

                  <span className="font-sans text-xs text-[#706553] uppercase font-bold">
                    DIRECT NOC HOTLINE
                  </span>

                  <a
                    href="tel:18004227662"
                    className="font-sans text-lg text-[#8A6A2F] font-bold hover:underline"
                  >
                    +1 (343) 297-6786
                  </a>

                </div>

                <div className="flex items-center gap-2 text-[#2E8B4A] font-sans text-xs font-bold">

                  <span className="w-2.5 h-2.5 rounded-full bg-[#2E8B4A] animate-pulse" />

                  DUTY ENGINEER ONLINE

                </div>

              </div>

            </div>


            {/* Right Column: 5-Field Quick Assessment Form */}
            <div className="lg:col-span-7 rounded-2xl bg-[#ffffff] border border-[#DDD9D1] p-6 sm:p-10 shadow-xl flex flex-col gap-6">

              <div className="flex flex-col gap-1 pb-2 border-b border-[#DDD9D1]">

                <span className="font-sans text-xs text-[#8A6A2F] uppercase font-bold">
                  PRE-ENGAGEMENT SCOPING
                </span>

                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#14120e]">
                  Request Infrastructure Technical Assessment
                </h3>

                <p className="text-xs sm:text-sm text-[#706553]">
                  Provide your high-level parameters below. A Principal Infrastructure Engineer will evaluate capacity availability within 4 business hours.
                </p>

              </div>


              <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                {/* Row 1: Full Name & Corporate Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                  <div className="flex flex-col gap-1.5">

                    <label
                      htmlFor="about-fullName"
                      className="font-sans text-xs text-[#4e4639] uppercase font-bold"
                    >
                      Field 01 // Full Name *
                    </label>

                    <input
                      id="about-fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          fullName: e.target.value
                        })
                      }
                      placeholder="e.g. Alex Thorne, VP Infrastructure"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#D4D1CB] text-[#14120e] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A6A2F] shadow-inner"
                    />

                  </div>


                  <div className="flex flex-col gap-1.5">

                    <label
                      htmlFor="about-workEmail"
                      className="font-sans text-xs text-[#4e4639] uppercase font-bold"
                    >
                      Field 02 // Corporate Email *
                    </label>

                    <input
                      id="about-workEmail"
                      type="email"
                      required
                      value={formData.workEmail}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          workEmail: e.target.value
                        })
                      }
                      placeholder="alex.t@enterprise.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#D4D1CB] text-[#14120e] text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#8A6A2F] shadow-inner"
                    />

                  </div>

                </div>


                {/* Field 3: Infrastructure Requirement */}
                <div className="flex flex-col gap-1.5">

                  <label
                    htmlFor="about-reqType"
                    className="font-sans text-xs text-[#4e4639] uppercase font-bold"
                  >
                    Field 03 // Primary Infrastructure Requirement *
                  </label>

                  <select
                    id="about-reqType"
                    required
                    value={formData.requirementType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        requirementType: e.target.value
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#D4D1CB] text-[#14120e] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A6A2F] shadow-inner cursor-pointer"
                  >

                    <option value="" disabled>
                      Select Core Architecture Focus...
                    </option>

                    <option value="dedicated-metal">
                      Dedicated Bare Metal (Custom Chassis / High Compute)
                    </option>

                    <option value="cloud-virtualization">
                      Managed Hypervisor Virtualization (Proxmox / KVM / VMware)
                    </option>

                    <option value="network-transit">
                      Multi-Gigabit Network Transit & BGP Anycast Routing
                    </option>

                    <option value="noc-management">
                      24/7 Outsourced Physical NOC Management & Colocation
                    </option>

                  </select>

                </div>


                {/* Field 4: Current Setup / Pain Point */}
                <div className="flex flex-col gap-1.5">

                  <label
                    htmlFor="about-topology"
                    className="font-sans text-xs text-[#4e4639] uppercase font-bold"
                  >
                    Field 04 // Current Setup & Migration Drivers *
                  </label>

                  <input
                    id="about-topology"
                    type="text"
                    required
                    value={formData.currentTopology}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        currentTopology: e.target.value
                      })
                    }
                    placeholder="e.g. AWS/Azure egress cost migration, aging on-premise racks, or hybrid private cloud"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#D4D1CB] text-[#14120e] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A6A2F] shadow-inner"
                  />

                </div>


                {/* Field 5: Target Timeline */}
                <div className="flex flex-col gap-1.5">

                  <label
                    htmlFor="about-timeline"
                    className="font-sans text-xs text-[#4e4639] uppercase font-bold"
                  >
                    Field 05 // Target Deployment Timeline *
                  </label>

                  <select
                    id="about-timeline"
                    required
                    value={formData.deploymentTimeline}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        deploymentTimeline: e.target.value
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#D4D1CB] text-[#14120e] text-sm focus:outline-none focus:ring-2 focus:ring-[#8A6A2F] shadow-inner cursor-pointer"
                  >

                    <option value="" disabled>
                      Select Deployment Urgency...
                    </option>

                    <option value="immediate">
                      Immediate Emergency Deployment (&lt; 7 Days)
                    </option>

                    <option value="30-days">
                      Standard 30 Days Provisioning Window
                    </option>

                    <option value="60-90-days">
                      Strategic Migration (60 – 90 Days)
                    </option>

                    <option value="exploratory">
                      Exploratory Architectural Review / RFI Phase
                    </option>

                  </select>

                </div>


                {/* Submit Action & Privacy Note */}
                <div className="flex flex-col gap-3 pt-2">

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-xl bg-[#BD0009] hover:bg-[#A80008] text-white font-sans font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >

                    <Send className="w-4 h-4" />

                    <span>
                      {submitting
                        ? 'Submitting Specification...'
                        : 'Request Engineering Consultation'}
                    </span>

                  </button>


                  <div className="flex items-center justify-center gap-2 text-center text-[#706553] font-sans text-[11px]">

                    <Shield className="w-3.5 h-3.5 text-[#8A6A2F]" />

                    <span>
                      Protected by Mutual Non-Disclosure. No sales SPAM. Zero app-dev solicitation.
                    </span>

                  </div>


                  {/* Success Alert */}
                  {formSubmitted && (
                    <div className="p-4 rounded-xl bg-[#E9E7E2] text-[#2c2416] font-mono text-xs flex items-center gap-3 border border-[#8A6A2F]/30 shadow-sm animate-in fade-in duration-300">

                      <CheckCircle2 className="w-5 h-5 text-[#2E8B4A] shrink-0" />

                      <span>
                        Inquiry logged to NOC Ticketing Queue. A Senior Systems Engineer is reviewing your parameters.
                      </span>

                    </div>
                  )}

                </div>

              </form>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
