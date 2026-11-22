import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Server, 
  Cpu, 
  HardDrive, 
  Network, 
  Activity, 
  Zap, 
  ShieldCheck, 
  Terminal, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Headphones, 
  Send, 
  Gauge, 
  Sliders, 
  Rocket, 
  Wrench,
  ChevronDown,
  Cloud,
  Lock,
  Boxes
} from 'lucide-react';
import { SERVICES_DATA, getServiceBySlug } from '../data/servicesData';
import BorderGlow from '../components/ui/BorderGlow';
import OrbitImages from '../components/ui/OrbitImages';
import TiltedCard from '../components/ui/TiltedCard';
import Logo from "../../public/images/got-logo.webp"

const CLOUD_LOGOS = [
  { src: 'https://zonalogo.com/assets/aws-logo-png-svg.webp', alt: 'AWS (Amazon Web Services)' },
  { src: 'https://zonalogo.com/assets/azure-logo-png-svg.webp', alt: 'Microsoft Azure' },
  { src: 'https://p1.hiclipart.com/preview/463/423/777/google-logo-cloud-computing-google-cloud-platform-cloud-storage-zadara-storage-sada-systems-inc-google-compute-engine-data-center-png-clipart.jpg', alt: 'Google Cloud Platform' },
  { src: 'https://zonalogo.com/assets/alibaba-cloud-logo.webp', alt: 'Alibaba Cloud' }
];

export default function ServicesPage() {
  const { serviceId } = useParams();
  const service = getServiceBySlug(serviceId);
  const isCloudService = service.id === 'cloud-infrastructure' || service.slug === 'cloud-infrastructure' || serviceId === 'cloud-infrastructure' || serviceId === 'cloud';

  // Initialize selected interactive item to first key in interactiveSection
  const itemKeys = Object.keys(service.interactiveSection.items);
  const [selectedItemKey, setSelectedItemKey] = useState(itemKeys[0]);

  // Update selected item key when route changes
  useEffect(() => {
    const keys = Object.keys(service.interactiveSection.items);
    setSelectedItemKey(keys[0]);
  }, [serviceId]);

  const [scopeForm, setScopeForm] = useState({
    serviceType: service.id,
    nodeQuantity: 1,
    cpuSilicon: 'epyc-genoa',
    ramSpec: '512gb',
    bandwidthSpec: '10gbps',
    provisionDate: '',
    engineerEmail: '',
    workloadNotes: ''
  });

  // Keep form serviceType in sync with active service
  useEffect(() => {
    setScopeForm((prev) => ({ ...prev, serviceType: service.id }));
  }, [service.id]);

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const activeInteractive = service.interactiveSection.items[selectedItemKey] || service.interactiveSection.items[itemKeys[0]];

  const handleScopeSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setFormSubmitted(true);
      const banner = document.getElementById('form-success-banner');
      if (banner) {
        banner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }, 600);
  };

  return (
    <div className="w-full bg-[#faf8f5] text-[#2c2416] antialiased">
      {/* Top Command Telemetry Bar */}
      <section className="w-full bg-[#fcf9f2]  pt-24 sm:pt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-3 text-xs font-sans">
          <div className="flex items-center gap-3 text-[#706553] flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#eae8e5] text-black font-bold font-sans">
              {/* <span className="w-2 h-2 rounded-full bg-[#b08c4f] animate-pulse" /> */}
              {service.telemetryBar.status}
            </span>
            <span className="hidden md:inline text-[#d1c5b5]">/</span>
            <span className="hidden md:inline">{service.telemetryBar.datacenters}</span>
            <span className="hidden lg:inline text-[#d1c5b5]">/</span>
            <span className="hidden lg:inline">{service.telemetryBar.latency}</span>
          </div>

          <div className="flex items-center gap-4 text-[#4e4639]">
            <span className="flex items-center gap-1 font-semibold text-[#14120e]">
              <Terminal className="w-3.5 h-3.5 text-[#785921]" />
              {service.telemetryBar.badge1}
            </span>
            <span className="px-2 py-0.5 rounded bg-[#eae8e5] text-black font-bold">
              {service.telemetryBar.badge2}
            </span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="w-full bg-[#fcf9f2] py-14 sm:py-20 ">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex flex-wrap items-center gap-2 font-sans text-xs text-[#706553]">
                <Link to="/services" className="text-[#785921] font-bold hover:underline">
                  SERVICES
                </Link>
                <span className="text-[#d1c5b5]">/</span>
                <span className="uppercase">{service.shortName}</span>
              </div>

              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-lg bg-[#eae8e5] text-black font-sans text-xs font-bold tracking-wider">
                {/* <span className="w-2 h-2 rounded-full bg-[#b08c4f]" /> */}
                {service.tagline}
              </div>

              <h1 className="font-sans text-3xl sm:text-4xl lg:text-5xl font-bold text-[#14120e] tracking-tight leading-[1.15]">
                {service.title}
              </h1>

              <p className="text-base sm:text-lg text-[#4e4639] max-w-2xl leading-relaxed">
                {service.heroDescription}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#scoping-section"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#BD0009] hover:bg-[#A80008] text-white font-sans font-bold text-sm transition-all shadow-md"
                >
                  <Server className="w-4 h-4" />
                  Configure Service
                </a>
                <a
                  href="#benchmarks-table"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#efeeeb] hover:bg-[#eae8e5] text-[#14120e] border border-[#e6ded3] font-sans font-semibold text-sm transition-all shadow-sm"
                >
                  <Gauge className="w-4 h-4 text-[#785921]" />
                  View Specification Matrix
                </a>
              </div>

              {/* 3 Metric Cards */}
              <div className="pt-4 grid grid-cols-3 gap-3 sm:gap-4">
                {service.stats.map((st, sidx) => (
                  <div key={sidx} className="p-4 rounded-xl bg-[#f5f3f0] border border-[#e6ded3] shadow-sm">
                    <span className="font-sans text-[11px] text-[#706553] uppercase block">{st.label}</span>
                    <p className="font-sans text-xl sm:text-2xl font-bold text-[#14120e] my-0.5">{st.value}</p>
                    <span className="text-[11px] text-[#785921] font-semibold">{st.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Graphic card / Cloud Orbit Animation */}
            <div className="lg:col-span-5 relative">
              {isCloudService ? (
                <div className="relative w-full rounded-2xl overflow-hidden flex flex-col items-center justify-between min-h-full">

                  {/* Circular Orbit Area */}
                    <OrbitImages
                      images={CLOUD_LOGOS}
                      shape="circle"
                      radius={150}
                      itemSize={100}
                      duration={22}
                      showPath={true}
                      pathColor="rgba(120, 89, 33, 0.25)"
                      pathWidth={1.5}
                      pathDasharray="5 5"
                      responsive={true}
                      className="w-full max-w-[670px] sm:max-w-[770px] "
                      centerContent={
                        <div className="w-40 h-40 sm:w-72 sm:h-72 flex flex-col items-center justify-center p-2 text-center group transition-all duration-300 hover:scale-105">
                          <img src={Logo} alt="Cloud Logo" className='p-0 w-full' />
                        </div>
                      }
                    />
                </div>
              ) : (
                <TiltedCard
                  scaleOnHover={1.03}
                  rotateAmplitude={12}
                  containerHeight="auto"
                  containerWidth="100%"
                  showMobileWarning={false}
                  showTooltip={false}
                >
                  <div className="relative w-full rounded-2xl overflow-hidden bg-[#efeeeb] border border-[#e6ded3] shadow-xl">
                    <div 
                      className="h-64 sm:h-80 w-full bg-cover bg-center"
                      style={{ backgroundImage: `url('${service.topRackCard.image}')` }}
                    />
                    <div className="p-4 bg-[#f5f3f0] border-t border-[#e6ded3] flex flex-col gap-2.5">
                      <div className="flex items-center justify-between font-sans text-xs">
                        <span className="text-[#14120e] font-bold flex items-center gap-1.5">
                          <Cpu className="w-4 h-4 text-black" />
                          {service.topRackCard.tag}
                        </span>
                        <span className="px-2 py-0.5 rounded bg-[#eae8e5] text-black font-bold">
                          {service.topRackCard.badge}
                        </span>
                      </div>
                      <div className="w-full bg-[#eae8e5] h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-black h-full rounded-full transition-all duration-1000" 
                          style={{ width: service.topRackCard.loadWidth }} 
                        />
                      </div>
                      <div className="flex justify-between font-sans text-[11px] text-[#706553]">
                        <span>{service.topRackCard.temp}</span>
                        <span className="font-semibold text-[#248a3d]">{service.topRackCard.power}</span>
                      </div>
                    </div>
                  </div>
                </TiltedCard>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Tier / Service Pillars Breakdown Grid */}
      <section className="w-full bg-[#fcf9f2] py-16 sm:py-24 ">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="flex flex-col gap-2 mb-12 text-center md:text-left">
            <span className="font-sans text-xs text-[#785921] font-bold uppercase tracking-wider">
              {service.tierSection.preHeader}
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14120e]">
              {service.tierSection.header}
            </h2>
            <p className="text-sm sm:text-base text-[#4e4639] max-w-3xl">
              {service.tierSection.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {service.tierSection.tiers.map((tier, tidx) => (
              <div
                key={tidx}
                className={`flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all ${
                  tier.isPopular
                    ? 'bg-[#ffffff] border-2 border-[#bd0009]/30 shadow-xl relative scale-[1.02]'
                    : 'bg-[#efeeeb] border border-[#e6ded3] shadow-sm hover:shadow-md'
                }`}
              >
                {tier.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#bd0009] text-white font-sans text-xs font-bold tracking-wider shadow-md">
                    RECOMMENDED // MISSION-CRITICAL
                  </div>
                )}

                <div className={`flex flex-col gap-5 ${tier.isPopular ? 'pt-2' : ''}`}>
                  <div className="flex items-center justify-between">
                    <span className={`font-sans text-xs px-2.5 py-1 rounded-md font-bold ${
                      tier.isPopular ? 'bg-[#bd0009]/30 text-black' : 'bg-[#eae8e5] text-[#706553]'
                    }`}>
                      {tier.tierLabel}
                    </span>
                    <span className="font-sans text-xs text-[#706553]">{tier.chassis}</span>
                  </div>

                  <div>
                    <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#14120e]">{tier.title}</h3>
                    <p className="text-xs text-[#706553] mt-1">{tier.subtitle}</p>
                  </div>

                  <div className={`p-4 rounded-xl border ${
                    tier.isPopular ? 'bg-[#faf8f5] border-[#b08c4f]/30' : 'bg-[#faf8f5] border-[#e6ded3]'
                  }`}>
                    <div className="flex items-baseline gap-1.5">
                      <span className="font-sans text-3xl font-bold text-[#14120e]">{tier.price}</span>
                      {tier.priceUnit && <span className="text-xs text-[#706553]">{tier.priceUnit}</span>}
                    </div>
                    <span className="font-sans text-[11px] text-[#785921] font-semibold block mt-0.5">
                      {tier.priceNote}
                    </span>
                  </div>

                  <div className="flex flex-col gap-2.5 text-xs text-[#2c2416]">
                    {tier.specs.map((sp, sidx) => (
                      <div key={sidx} className="p-2.5 rounded-lg bg-[#faf8f5] border border-[#e6ded3] flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#785921] shrink-0 mt-0.5" />
                        <div>
                          <strong className="block text-[#14120e]">{sp.title}</strong>
                          <span className="text-[#706553] font-sans text-[11px]">{sp.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-[#e6ded3]">
                  <a
                    href="#scoping-section"
                    className={`w-full py-3.5 rounded-xl font-sans font-bold text-xs transition-all shadow-sm flex items-center justify-center gap-2 ${
                      tier.isPopular
                        ? 'bg-[#BD0009] hover:bg-[#A80008] text-white text-white shadow-md'
                        : 'bg-[#eae8e5] hover:bg-[#e4e2df] text-[#14120e] border border-[#d1c5b5]'
                    }`}
                  >
                    <span>{tier.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Selector Component with Live Reactive Terminal */}
      <section className="w-full bg-[#fcf9f2] py-16 sm:py-24 ">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <span className="font-sans text-xs text-[#785921] font-bold uppercase tracking-wider">
              {service.interactiveSection.preHeader}  
            </span>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#14120e]">
              {service.interactiveSection.header}
            </h2>
            <p className="text-sm sm:text-base text-[#4e4639] max-w-3xl">
              {service.interactiveSection.description}
            </p>
          </div>

          {/* Selector Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.entries(service.interactiveSection.items).map(([key, item]) => {
              const isSelected = selectedItemKey === key;
              return (
                <div
                  key={key}
                  onClick={() => setSelectedItemKey(key)}
                  className="cursor-pointer h-full border border-[#e6ded3] rounded-xl"
                >
                  {/* <BorderGlow
                    colors={['#831655', '#ea0060', '#ea0060']}
                    glowColor="350 97 54"
                    backgroundColor={isSelected ? '#ffffff' : '#f5f3f0'}
                    borderRadius={16}
                    className={`h-full transition-all group ${
                      isSelected ? 'ring-2 ring-[#fc143b]/40 shadow-md' : ''
                    }`}
                  > */}
                    <div className="p-6 flex flex-col justify-between h-full">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between">
                          <span className="w-10 h-10 rounded-xl bg-[#efeeeb] border border-[#e6ded3] flex items-center justify-center text-black">
                            <Layers className="w-5 h-5" />
                          </span>
                          <span className="px-2.5 py-1 rounded-md bg-[#BD0009]/80 text-white font-mono text-[10px] font-bold uppercase">
                            {item.badge}
                          </span>
                        </div>

                        <div>
                          <h3 className="font-sans text-base font-bold text-[#14120e]">{item.name}</h3>
                          <p className="text-xs text-[#706553] mt-1 leading-relaxed">{item.desc}</p>
                        </div>

                        <ul className="font-sans text-xs text-[#4e4639] flex flex-col gap-1.5 pt-2 border-t border-[#e6ded3]">
                          {item.points.map((pt, pidx) => (
                            <li key={pidx} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#785921]" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-3 flex items-center justify-between text-[#785921] font-sans text-xs font-bold border-t border-[#e6ded3]">
                        <span>{isSelected ? 'ACTIVE PREVIEW' : 'CLICK TO TEST'}</span>
                        <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1' : 'group-hover:translate-x-1'}`} />
                      </div>
                    </div>
                  {/* </BorderGlow> */}
                </div>
              );
            })}
          </div>

          {/* Live Terminal Preview */}
          {activeInteractive && (
            <div className="rounded-2xl bg-[#1e1c1a] text-white p-5 sm:p-6 shadow-2xl border border-white/10 font-sans text-xs sm:text-sm">
              <div className="flex items-center justify-between pb-3 border-b border-white/15">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ba1a1a]" />
                  <span className="w-3 h-3 rounded-full bg-[#e9c07e]" />
                  <span className="w-3 h-3 rounded-full bg-[#248a3d]" />
                  <span className="ml-3 text-white/90 font-bold">NOC_ORCHESTRATOR // TELEMETRY-v4.1</span>
                </div>
                <span className="text-[#e9c07e] font-bold">Active: {activeInteractive.name}</span>
              </div>

              <div className="pt-4 space-y-2 text-white/80 font-mono">
                {activeInteractive.terminalLines.map((line, idx) => (
                  <p key={idx} className="flex items-start gap-2">
                    {line.type === 'INFO' && <span className="text-[#e9c07e] font-bold shrink-0">[INFO]</span>}
                    {line.type === 'OK' && <span className="text-[#248a3d] font-bold shrink-0">[OK]</span>}
                    {line.type === 'ALERT' && <span className="text-[#ba1a1a] font-bold shrink-0">[ALERT]</span>}
                    {line.type === 'PROMPT' && <span className="text-[#e9c07e] font-bold shrink-0">&gt;</span>}
                    <span className={line.type === 'PROMPT' ? 'text-[#e9c07e] font-semibold' : ''}>
                      {line.text.replace(/\[INFO\]|\[OK\]|\[ALERT\]|>/g, '').trim()}
                    </span>
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technical Specifications Table */}
      <section className="w-full bg-[#fcf9f2] py-16 sm:py-24 " id="benchmarks-table">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex flex-col gap-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="font-sans text-xs text-[#785921] font-bold uppercase tracking-wider">
                {service.tableSection.preHeader}
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#14120e]">
                {service.tableSection.header}
              </h2>
              <p className="text-sm sm:text-base text-[#4e4639] max-w-2xl">
                {service.tableSection.description}
              </p>
            </div>
            <div className="flex items-center gap-2 font-sans text-xs">
              <span className="px-3.5 py-1.5 rounded-lg bg-[#faf8f5] text-[#14120e] font-bold border border-[#e6ded3]">
                {service.tableSection.badge}
              </span>
            </div>
          </div>

          {/* Spec Comparison Table */}
          <div className="overflow-x-auto rounded-2xl bg-[#ffffff] border border-[#e6ded3] shadow-md">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#eae8e5] text-[#14120e] font-sans text-xs uppercase tracking-wider border-b border-[#e6ded3]">
                <tr>
                  <th className="py-4 px-6 font-bold font-sans" scope="col">Specification Dimension</th>
                  <th className="py-4 px-6 font-bold font-sans" scope="col">Tier 1: Standard Core</th>
                  <th className="py-4 px-6 font-bold bg-[#eddec8] text-[#785921] font-sans" scope="col">Tier 2: High Performance</th>
                  <th className="py-4 px-6 font-bold font-sans" scope="col">Tier 3: Enterprise Custom</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e6ded3] text-[#2c2416]">
                {service.tableSection.rows.map((row, ridx) => (
                  <tr key={ridx} className="hover:bg-[#faf8f5] transition-colors">
                    <td className="py-3.5 px-6 font-bold text-[#14120e] font-sans">{row.dim}</td>
                    <td className="py-3.5 px-6 font-mono text-xs font-sans">{row.t1}</td>
                    <td className="py-3.5 px-6 font-mono text-xs font-bold bg-[#fdfbf7] font-sans">{row.t2}</td>
                    <td className="py-3.5 px-6 font-mono text-xs font-sans">{row.t3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Technical Validation / Facility Showcase */}
      <section className="w-full bg-[#fcf9f2] py-16 sm:py-24 ">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="font-sans text-xs text-[#785921] font-bold uppercase tracking-wider">
                {service.facilitySection.preHeader}
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#14120e]">
                {service.facilitySection.header}
              </h2>
              <p className="text-sm text-[#4e4639] leading-relaxed">
                {service.facilitySection.description}
              </p>

              <div className="flex flex-col gap-3 pt-2 text-xs text-[#2c2416]">
                {service.facilitySection.features.map((ft, fidx) => (
                  <div key={fidx} className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#785921] shrink-0" />
                    <span>{ft}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.facilitySection.cards.map((card, cidx) => (
                <div key={cidx} className="rounded-2xl overflow-hidden bg-[#f5f3f0] border border-[#e6ded3] shadow-md flex flex-col">
                  <div 
                    className="h-48 w-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${card.image}')` }}
                  />
                  <div className="p-4 bg-[#efeeeb]">
                    <h4 className="font-sans font-bold text-sm text-[#14120e]">{card.title}</h4>
                    <p className="text-xs font-sans text-[#706553] mt-0.5">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inline Service Assessment & Scoping Form */}
      <section className="w-full bg-[#fcf9f2] py-16 sm:py-24" id="scoping-section">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-5 flex flex-col gap-6">
              <span className="font-sans text-xs text-[#785921] font-bold uppercase tracking-wider">
                DIRECT NOC ACCESS
              </span>
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-[#14120e]">
                {service.scopingTitle}
              </h2>
              <p className="text-sm text-[#4e4639] leading-relaxed">
                {service.scopingSubtitle}
              </p>

              <div className="p-5 rounded-2xl bg-[#faf8f5] border border-[#e6ded3] flex flex-col gap-2 shadow-sm">
                <div className="flex items-center gap-2 text-[#14120e] font-sans font-bold text-sm">
                  <Headphones className="w-4 h-4 text-[#785921]" />
                  Need Immediate Emergency Spares?
                </div>
                <p className="text-xs font-sans text-[#706553]">
                  If you are facing hardware failure or active downtime, call our emergency infrastructure desk directly:
                </p>
                <a href="tel:18004227662" className="font-sans font-bold text-sm text-[#785921] hover:underline pt-1">
                +1 (343) 297‑6786
                </a>
              </div>
            </div>

            {/* Form Container */}
            <div className="lg:col-span-7 bg-[#ffffff] border border-[#e6ded3] p-6 sm:p-10 rounded-2xl shadow-xl">
              <form onSubmit={handleScopeSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="services-domain-select" className="font-sans text-xs text-[#4e4639] font-bold uppercase">
                    Service Domain Selection
                  </label>
                  <select
                    id="services-domain-select"
                    value={scopeForm.serviceType}
                    onChange={(e) => setScopeForm({ ...scopeForm, serviceType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm focus:outline-none focus:ring-2 focus:ring-[#b08c4f] shadow-inner cursor-pointer"
                  >
                    {SERVICES_DATA.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.shortName}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="scope-nodes" className="font-sans text-xs text-[#4e4639] font-bold uppercase">
                      Node / Environment Quantity
                    </label>
                    <input
                      id="scope-nodes"
                      type="number"
                      min="1"
                      max="100"
                      value={scopeForm.nodeQuantity}
                      onChange={(e) => setScopeForm({ ...scopeForm, nodeQuantity: parseInt(e.target.value) || 1 })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#b08c4f] shadow-inner"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="scope-silicon" className="font-sans text-xs text-[#4e4639] font-bold uppercase">
                      Preferred Architecture / Provider
                    </label>
                    <select
                      id="scope-silicon"
                      value={scopeForm.cpuSilicon}
                      onChange={(e) => setScopeForm({ ...scopeForm, cpuSilicon: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm focus:outline-none focus:ring-2 focus:ring-[#b08c4f] shadow-inner cursor-pointer"
                    >
                      <option value="epyc-genoa">AMD EPYC 9654 (Genoa DDR5)</option>
                      <option value="epyc-milan">AMD EPYC 7543 (Milan DDR4)</option>
                      <option value="intel-xeon">Intel Xeon Platinum 4th Gen</option>
                      <option value="aws-tenancy">AWS Multi-AZ VPC Tenancy</option>
                      <option value="azure-tenancy">Azure Hub-and-Spoke Tenancy</option>
                      <option value="gpu-accelerated">Liquid-Cooled GPU Compute</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="scope-ram" className="font-sans text-xs text-[#4e4639] font-bold uppercase">
                      RAM / Capacity Allocation
                    </label>
                    <select
                      id="scope-ram"
                      value={scopeForm.ramSpec}
                      onChange={(e) => setScopeForm({ ...scopeForm, ramSpec: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm focus:outline-none focus:ring-2 focus:ring-[#b08c4f] shadow-inner cursor-pointer"
                    >
                      <option value="128gb">128GB ECC Registered</option>
                      <option value="256gb">256GB ECC Registered</option>
                      <option value="512gb">512GB ECC Registered</option>
                      <option value="1tb">1TB+ High Capacity</option>
                      <option value="cloud-custom">Dynamic Cloud Sizing</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="scope-bandwidth" className="font-sans text-xs text-[#4e4639] font-bold uppercase">
                      Port Bandwidth / Interconnect
                    </label>
                    <select
                      id="scope-bandwidth"
                      value={scopeForm.bandwidthSpec}
                      onChange={(e) => setScopeForm({ ...scopeForm, bandwidthSpec: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm focus:outline-none focus:ring-2 focus:ring-[#b08c4f] shadow-inner cursor-pointer"
                    >
                      <option value="1gbps">1Gbps Dedicated Unmetered</option>
                      <option value="10gbps">10Gbps Redundant LACP Uplinks</option>
                      <option value="25gbps">25Gbps SFP28 Core Port</option>
                      <option value="100gbps">100Gbps InfiniBand Fabric</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="scope-date" className="font-sans text-xs text-[#4e4639] font-bold uppercase">
                      Target Provisioning Date
                    </label>
                    <input
                      id="scope-date"
                      type="date"
                      value={scopeForm.provisionDate}
                      onChange={(e) => setScopeForm({ ...scopeForm, provisionDate: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#b08c4f] shadow-inner"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="scope-email" className="font-sans text-xs text-[#4e4639] font-bold uppercase">
                      Technical Contact Email *
                    </label>
                    <input
                      id="scope-email"
                      type="email"
                      required
                      value={scopeForm.engineerEmail}
                      onChange={(e) => setScopeForm({ ...scopeForm, engineerEmail: e.target.value })}
                      placeholder="devops@company.corp"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#b08c4f] shadow-inner"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="scope-notes" className="font-sans text-xs text-[#4e4639] font-bold uppercase">
                    Workload Topology Notes & Requirements
                  </label>
                  <textarea
                    id="scope-notes"
                    rows={3}
                    value={scopeForm.workloadNotes}
                    onChange={(e) => setScopeForm({ ...scopeForm, workloadNotes: e.target.value })}
                    placeholder="e.g. Specific SLA parameters, compliance deadlines, BGP peering ASN, or storage IOPS thresholds."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f5f3f0] border border-[#d1c5b5] text-[#14120e] text-sm focus:outline-none focus:ring-2 focus:ring-[#b08c4f] shadow-inner"
                  />
                </div>

                <div className="pt-2 flex flex-col gap-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 rounded-xl bg-[#BD0009] hover:bg-[#A80008] text-white font-sans font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                  >
                    <Send className="w-4 h-4" />
                    <span>{submitting ? 'Transmitting Specification...' : 'Submit Hardware Specification to NOC'}</span>
                  </button>

                  <span className="block text-center font-sans text-[11px] text-[#706553]">
                    2-Hour Technical Proposal SLA · Verified via PGP if Requested
                  </span>
                </div>
              </form>

              {/* Success Alert Banner */}
              {formSubmitted && (
                <div id="form-success-banner" className="mt-4 p-4 rounded-xl bg-[#eddec8] text-[#2c2416] font-sans text-xs border border-[#b08c4f]/40 shadow-sm animate-in fade-in duration-300">
                  <div className="flex items-center gap-2 font-bold text-[#785921]">
                    <CheckCircle2 className="w-4 h-4 text-[#248a3d]" />
                    <span>SPECIFICATION TRANSMITTED TO NOC QUEUE</span>
                  </div>
                  <p className="mt-1 text-[#4e4639]">
                    Ticket #GOT-IAAS-8842 opened for {service.shortName}. A principal systems architect is reviewing capacity and port allocation.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
