import pristineWhite from "../../public/white-logos/pristine-wht.png"
import kenmeetWhite from '../../public/white-logos/kenmeet-wht.png'
import kentalkWhite from '../../public/white-logos/kentalk-wht.png'
import coupezonewhite from "../../public/white-logos/coupzone-wht.png"
import kenzaihub from "../../public/white-logos/kenzaihub-wht.png"
import kenzaudit from "../../public/white-logos/kenzaudit-wht.png"
import kenzinnovations from "../../public/white-logos/kenzinnovations-wht.png"
import kenzintent from "../../public/white-logos/kenzintent-wht.png"
import kiacademy from "../../public/white-logos/kiacademy-wht.png"
import cxpro from "../../public/white-logos/cxpro.png"
import smartidp from "../../public/white-logos/smartidp.png"
import gpu from "../../public/images/gpu-img.webp"
import cpu from "../../public/images/cpu-img.webp"
import network from "../../public/images/network-img.webp"
import dataCenter1 from "../../public/images/data-center-img.webp"
import dataCenter2 from "../../public/images/data-center-img2.webp"
import bareMetal from "../../public/images/bare-metal.webp"
import Multicloud from "../../public/images/multi-cloud.png"
import networking from "../../public/images/networking-img.webp"

export const PARTNER_LOGOS = [
    { name: 'Kenz Pristine', src: pristineWhite },
  { name: 'KenMeet', src: kenmeetWhite },
  { name: 'KenTalk', src: kentalkWhite },
  { name: 'kenzaihub', src: kenzaihub },
  { name: 'kenzaudit', src: kenzaudit },
  { name: 'kenzinnovations', src: kenzinnovations },
  { name: 'kenintent', src: kenzintent },
  { name: 'kiacademy', src: kiacademy },
  { name: 'cxpro', src: cxpro },
  { name: 'smartidp', src: smartidp },
];

export const DEVICE_SPECS = [
  {
    icon: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a1021db59811d607c926338_Frame-4.svg',
    title: '4,608 actively cooled dual LEDs',
    desc: 'for consistent, even output across the whole body.'
  },
  {
    icon: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a1021dc026551468ed4a884_Frame-3.svg',
    title: '630–1060 nm wavelength range',
    desc: '(Red + NIR), scientifically optimized.'
  },
  {
    icon: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a1021dbd60716b3d69acacc_Frame-2.svg',
    title: 'Zero-EMF & zero-flicker',
    desc: 'for a calm, restorative experience.'
  },
  {
    icon: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a1021db026551468ed4a85d_Frame-1.svg',
    title: 'Quiet, low-maintenance',
    desc: 'engineered for continuous commercial uptime.'
  },
  {
    icon: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a1021dc7b45cce35b22bb0b_Frame.svg',
    title: 'Architectural finish options',
    desc: 'designed to seamlessly complement luxury spaces.'
  }
];

export const DEVICE_STATS = [
  { label: 'Dimensions', value: '3m × 2.2m' },
  { label: 'Power', value: '2.8 kW' },
  { label: 'Installation', value: '1 day' }
];

export const MORE_THAN_DEVICE = [
  {
    id: 'Bare Metal',
    tag: 'Bare Metal',
    headline: 'Dedicated compute. Zero noisy neighbors.',
    image: bareMetal,
    bullets: [
      'Intel Xeon & AMD EPYC',
      'Enterprise NVMe',
      '1–10 Gbps networking'
    ]
  },
  {
    id: 'MultiCloud',
    tag: 'MultiCloud',
    headline: 'We design the foundational AWS, Azure and GCP environments your applications depend on.',
    image: Multicloud,
    bullets: [
      'VPC / VNet architecture',
      'Public & private subnets',
      'Hybrid cloud integration'
    ]
  },
  {
    id: 'Network',
    tag: 'Network',
    headline: 'Enterprise network architecture designed around performance, redundancy, and security.',
    image: networking,
    bullets: [
      'VLAN architecture',
      'BGP / OSPF',
      'Load balancing',
      'Firewall infrastructure'
    ]
  }
];

export const OPERATOR_VALUES = [
  {
    title: 'Reliability without compromise.',
    desc: 'Dedicated infrastructure, resilient networks, and proactive monitoring designed for mission-critical workloads.'
  },
  {
    title: 'Control without lock-in.',
    desc: 'Full administrative access, transparent architecture, and complete visibility into the infrastructure you depend on.'
  },
  {
    title: 'Security by architecture.',
    desc: 'Hardened hardware, networks, operating systems, and access boundaries designed to protect your environment from the ground up.'
  },
  {
    title: 'Scale without disruption.',
    desc: 'Expand compute, storage, networking, virtualization, and cloud capacity as your infrastructure requirements evolve.'
  }
];

export const GUIDED_FLOW_STEPS = [
  {
    step: '01',
    title: 'Welcome & safety',
    screen: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a3407446100555314046985_rgm-sl-1.avif',
    alt: 'Login screen for Redgevity Master 4608 full-body red light experience with sign-in button.',
    caption: 'Intuitive touch check-in and quick safety orientation.'
  },
  {
    step: '02',
    title: 'Goal selection',
    screen: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a33fb0fa1b5076f775286ee_rgm-sg-3.avif',
    alt: 'Luminous Labs screen asking "What\'s your focus today?" with buttons for Your Protocol and Mind.',
    caption: 'Guests choose target outcome (Recovery, Skin, Mind, Energy).'
  },
  {
    step: '03',
    title: 'Program explanation',
    screen: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a300eab36edf7f806f3c527_rm-sl__03.avif',
    alt: 'Screen with health protocol menu and a description for a near-infrared session to support mental clarity.',
    caption: 'Scientific rationale and customized wavelength dosing breakdown.'
  },
  {
    step: '04',
    title: 'Session guidance',
    screen: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a300eab066a939cadf2a65c_rm-sl__04.avif',
    alt: 'App screen showing eye protection warning and a start session button with countdown timer.',
    caption: 'Clear positioning tips, countdown timer, and calming ambience.'
  },
  {
    step: '05',
    title: 'Completion',
    screen: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a316acb3f00751f1c951f9d_rm-sl__05.avif',
    alt: 'Session completed screen with protocol timing options and nervous system calming summary.',
    caption: 'Post-session summary, recovery metrics, and rebooking prompt.'
  }
];

export const LOCATION_CATEGORIES = [
    {
    id: 'Servers',
    name: 'Servers',
    image: dataCenter2,
    desc: 'AI-ready infrastructure with high-density racks, advanced cooling, and direct fiber connectivity.'
  },
  {
    id: 'gpu',
    name: 'GPU Compute',
    image:gpu,
    desc: 'AI/ML Training · High-Performance Computing'
  },
  {
    id: 'cpu',
    name: 'CPU Compute',
    image:cpu,
    desc: 'High-performance computing for complex workloads.'
  },
  {
    id: 'networking',
    name: 'Networking',
    image: network,
    desc: 'Enterprise network architecture designed around performance, redundancy, and security.'
  },
  {
    id: 'Data Center ',
    name: 'Data Center ',
    image: dataCenter1,
    desc: 'High-performance computing, data storage, and enterprise-grade infrastructure.'
  },
];

export const LIVE_STATS_LOCATIONS = [
  { city: 'Frankfurt', desc: 'The next launch is in 2026.', sessions: 'Upcoming', growth: 'New' },
  { city: 'RedUp Munich', sessions: '4', growth: '4%', isSession: true },
  { city: 'Biogena Linz', sessions: '26', growth: '12%', isSession: true },
  { city: 'Biogena Plaza Salzburg', sessions: '6', growth: '100%', isSession: true },
  { city: 'Luminous Labs Graz', sessions: '12', growth: '50%', isSession: true },
  { city: 'Biogena Wien', sessions: '26', growth: '24%', isSession: true }
];

export const DIRECTORY_LOCATIONS = [
  {
    name: 'BIOGENA PLAZA Düsseldorf',
    locName: 'Düsseldorf',
    address: 'Königsallee 88; 40212 Düsseldorf',
    bookUrl: 'https://biogena-biohacking.com/de-de/book/products/de-dus-koenigsallee'
  },
  {
    name: 'BIOGENA Plaza Salzburg Neutorstraße',
    locName: 'Neutorstraße',
    address: 'Neutorstraße 13; 5020 Salzburg',
    bookUrl: 'https://biogena-biohacking.com/de-at/book/products/at-salzburg-neutorstrasse?service=first-infra'
  },
  {
    name: 'BIOGENA PLAZA WIEN Mariahilfer Straße',
    locName: 'Wien',
    address: 'Mariahilferstraße 50; 1070 Wien',
    bookUrl: 'https://biogena-biohacking.com/de-at/book/products/at-vienna-mariahilfstrasse'
  },
  {
    name: 'BIOGENA PLAZA Wien Operngasse',
    locName: 'Wien',
    address: 'Operngasse 8; 1010 Wien',
    bookUrl: 'https://biogena-biohacking.com/de-at/book/products/vie-opg'
  },
  {
    name: 'BIOGENA Store & Lab Linz',
    locName: 'Linz',
    address: 'Schillerstraße 48; 4020 Linz',
    bookUrl: 'https://biogena-biohacking.com/de-at/book/products/at-linz-schillerstrasse'
  },
  {
    name: 'BIOGENA Store & Lab Wien Millergasse',
    locName: 'Wien',
    address: 'Millergasse 35; 1060 Wien',
    bookUrl: 'https://biogena-biohacking.com/de-at/red-light-treatment'
  },
  {
    name: 'BIOGENA Store & Longevity Lab London',
    locName: 'London',
    address: 'Quadrant Arcade, Regent Street 80; London',
    bookUrl: 'https://biogena-biohacking.com/en-uk/book/products/gb-london-regentstreet'
  },
  {
    name: 'PulseHealth',
    locName: 'Dublin',
    address: 'Unit 1, Marina Malahide, Co. Dublin, K36XH75',
    bookUrl: 'https://pulsehealth.ie/red-light-therapy/#book'
  },
  {
    name: 'RedUp Studio München',
    locName: 'München',
    address: 'Baaderstraße 59, 80469 München',
    bookUrl: 'https://red-up.de/buchung/'
  },
  {
    name: 'Vaya Health Club',
    locName: 'Wien',
    address: 'Friedrichstraße 6, Wien, AT, 1010',
    bookUrl: 'https://www.treatwell.at/ort/vaya-health-club/?utm_source=google&utm_medium=rwg'
  },
  {
    name: 'Waldhof Fuschlsee Resort, Salzburg',
    locName: 'Salzburg',
    address: 'Seestraße 30, 5330 Fuschl am See, Österreich',
    bookUrl: 'https://www.waldhof-fuschlsee.at/de/wellnesshotel-salzkammergut/kryo-kaeltekammer-rotlichttherapie'
  }
];

export const WHY_STANDS_ALONE = [
  {
    title: 'Architectural OpenFrame.',
    desc: 'A premium PBM system designed to feel integrated into your space — not added as an afterthought.',
    image: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a687cb69b53a7d10ff794d9_lumi-1-l1.webp'
  },
  {
    title: 'Customized Protocols.',
    desc: 'Precision-calibrated light blends for repeatable outcomes and high guest retention.',
    image: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a687cb7689a211b67f19178_lumi-2-l1.webp'
  },
  {
    title: 'Bespoke Execution.',
    desc: 'No two RGM are identical: Each installation is planned around your room, guest journey, team workflow, and monetization model.',
    image: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a687cb7568c79d9ff1b8a31_lumi-3-l1.webp'
  },
  {
    title: 'Self-Service Autonomy.',
    desc: 'Guests can start safely via tablet guidance, reducing staff dependency and improving scalability.',
    image: 'https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/6a687cb870400c7e558af82d_722667e1331744681c3195e7047a1323_lumi-4-bg1.webp'
  }
];

export const ONBOARDING_STEPS = [
  {
    num: '01',
    title: 'Personal Consultation',
    desc: 'Book a call with our Head of Sales to define your vision. We analyze your space and timeline to deliver a tailored offer and a preliminary ROI snapshot.'
  },
  {
    num: '02',
    title: 'Bespoke Configuration',
    desc: 'Once the plan is set, we finalize your custom elements: branding, signature protocols, multilingual UI, and sensory upgrades. Your system is configured specifically for your brand’s ecosystem.'
  },
  {
    num: '03',
    title: 'Austrian Craftsmanship & Engineering',
    desc: 'Production begins in Austria (~3 months). Each system is handmade using high-end materials, undergoing rigorous component testing, aging tests, and full IoT integration.'
  },
  {
    num: '04',
    title: 'White-Glove Deployment',
    desc: 'We handle the logistics. To ensure absolute precision, assembly is performed exclusively by our internal experts—no external contractors. Every installation concludes with a final check by our CTO and Founder, Thomas.'
  },
  {
    num: '05',
    title: 'Onboarding & Growth Support',
    desc: 'We don\'t just install; we launch. This includes full team training and ongoing support: marketing assets, web copy, light-science know-how, and workshops to ensure long-term success.'
  }
];

export const TESTIMONIALS = [
  {
    quote: '“Charging by body, mind, and spirit with Luminous Labs and meditation is one of my favourite health stacks.”',
    author: 'Carrie',
    role: 'Habit Change Coach',
    tag: 'Wanted increased resilience',
    handle: '@nurturedhealing',
    avatar: 'https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/6745d86fc98201a5ad90d71d_carrie_nurturedhealing.webp',
    instagramUrl: 'https://www.instagram.com/nurturedhealing/'
  },
  {
    quote: '“I love using RLT as an athlete and trainer: better performance, less soreness, and faster recovery.”',
    author: 'Kern',
    role: 'Certified Health Coach',
    tag: 'Looked for increased sports performance',
    handle: '@kernhealthfitnesshealth',
    avatar: 'https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/6745d80a68aa5f7427410f40_kern_kernhealthfitnesshealth.webp',
    instagramUrl: '#'
  },
  {
    quote: '“I love my Luminous Labs device for general wellness, skin health, and healing from surgery.”',
    author: 'Shani',
    role: 'Whole30 Coach',
    tag: 'Wanted to support skin health and overall wellness',
    handle: '@simplewholepaleo',
    avatar: 'https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/6745d7c9185f784b932ce621_shani_simplewholepaleo.webp',
    instagramUrl: 'https://www.instagram.com/simplewholepaleo/'
  },
  {
    quote: '“This has to be one of the most helpful recovery tools I’ve ever used. Today I am using it for my ankle and overall muscle soreness due to a hard weekend of training.”',
    author: 'Dimitri',
    role: 'Fitness trainer',
    tag: 'Looked for muscle recovery',
    handle: '@dimitribergados',
    avatar: 'https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/6745d7ae98de39f322a6931e_dimitri_dimitribergados.webp',
    instagramUrl: 'https://www.instagram.com/dimitribergados/'
  },
  {
    quote: '“For me, red light therapy has become indispensable, as the application has a positive effect on my system, partly measurable and partly subjective. Especially in winter, in the early morning hours, during a meditation or a relaxing session on the acupressure mat, there is hardly anything better than the combination of near-infrared light and red light on the body.”',
    author: 'Marco',
    role: 'Biohacker & Consultant',
    tag: 'Wanted to support his daily performance',
    handle: '@minimalist_biohacker',
    avatar: 'https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/6745d753b9fd8070329f0005_marco_minimalistbiohacker.webp',
    instagramUrl: 'https://www.instagram.com/minimalist_biohacker/'
  },
  {
    quote: '“It’s my first winter season with a red light device, and I have to say I’m thrilled. The dark season has always bothered me. This season was different and I was able to keep my energy constant. The purchase was worth it for me.”',
    author: 'Mel',
    role: 'Wellness Creator',
    tag: 'Looked for increased energy and mood',
    handle: '@mrs.lifeofmel',
    avatar: 'https://cdn.prod.website-files.com/671b3356a4bc707cb991d139/6745d71cbd54df1b06d341f0_mel_mrslifeofmel.webp',
    instagramUrl: 'https://www.instagram.com/mrs.lifeofmel/'
  }
];

export const FAQ_ITEMS = [
  {
    category: 'B2B',
    question: 'Does Geeks on Tap build websites, mobile apps, or write custom software?',
    answer: 'No. We are an infrastructure-only provider. We do not write application code, develop software, or build user interfaces. We configure, secure, rent, and operate the physical servers, cloud tenancy (AWS/Azure), network routing, and cybersecurity perimeters that run your existing software and workloads.'
  },
  {
    category: 'B2B',
    question: 'What does Infrastructure as a Service (IaaS) and Managed Operations mean for my company?',
    answer: 'It means you offload server hardware procurement, hypervisor setups, operating system kernel maintenance, network routing, firewall configurations, and 24/7 uptime monitoring to our certified systems engineers. Your developers focus purely on building your product while we ensure the underlying platform never goes down.'
  },
  {
    category: 'B2B',
    question: 'Can Geeks on Tap manage our on-premise servers, or do you only provide cloud hosting?',
    answer: 'We handle both. We engineer hybrid environments connecting on-premise hardware to cloud providers, manage hardware in your private colocation racks, or provide rented dedicated bare-metal servers hosted in our Tier-III+ partner data centers.'
  },
  {
    category: 'B2B',
    question: 'Why choose bare metal server rentals over standard public cloud instances?',
    answer: 'Bare metal delivers 100% dedicated physical compute with zero noisy neighbor resource contention, consistent high-IOPS NVMe disk speeds, and predictable monthly billing without unpredictable data egress fees.'
  },
  {
    category: 'Guest',
    question: 'What hypervisors and operating systems come supported?',
    answer: 'We provision clean bare metal or pre-configure hypervisors including Proxmox VE, VMware ESXi/vSphere, KVM/QEMU, and Windows Server Hyper-V. Supported base operating systems include Ubuntu LTS, Red Hat Enterprise Linux (RHEL), Debian, AlmaLinux, Rocky Linux, and Windows Server.'
  },
  {
    category: 'Guest',
    question: 'Do we receive root / IPMI access to our rented servers?',
    answer: 'Yes. You retain full administrative root/administrator privileges alongside dedicated out-of-band IPMI / iDRAC management interfaces for lights-out hardware-level control.'
  },
  {
    category: 'Guest',
    question: 'How quickly are replacement parts installed if a hardware component fails?',
    answer: 'Under our standard Hardware SLA, physical component failures (power supplies, RAM sticks, storage drives, or motherboards) are diagnosed and replaced within 4 hours.'
  },
  {
    category: 'Guest',
    question: 'What exactly do you implement inside our AWS or Azure environments?',
    answer: 'We engineer the structural foundation: multi-Availability Zone Virtual Private Clouds (VPCs/VNets), public/private subnet architectures, route tables, internet/NAT gateways, transit peering, and Identity & Access Management (IAM) least-privilege policies'
  },
  {
    category: 'Guest',
    question: 'Can you connect our branch offices directly to our cloud servers?',
    answer: ': Yes. We build site-to-site IPsec and WireGuard cryptographic VPN tunnels, implement SD-WAN path redundancy, and configure private cloud interconnects (AWS Direct Connect / Azure ExpressRoute).'
  },
  {
    category: 'Guest',
    question: 'Do you provide network diagrams and asset documentation?',
    answer: 'A: Every project includes full Visio/Lucidchart architectural topology schematics, IP Address Management (IPAM) allocation schedules, and firewall rule matrix documentation'
  },
  {
    category: 'General',
    question: 'How do you harden servers against brute-force attacks and ransomware?',
    answer: ': We enforce Center for Internet Security (CIS) Level 1 and 2 benchmark hardening on the OS level, deploy Next-Gen Firewalls with Intrusion Prevention (IPS/IDS), disable insecure protocols/ports, enforce Zero-Trust access, and set up air-gapped immutable backup repositories.'
  },
  {
    category: 'General',
    question: 'Do your engineers inspect our corporate databases or application payloads?',
    answer: 'Never. Geeks on Tap enforces a strict Zero-Payload Inspection guarantee. We monitor network throughput, port traffic, and hardware diagnostics, but we never access, view, or parse client database records, files, or proprietary application contents.'
  },
  {
    category: 'General',
    question: 'Are your infrastructure environments compliant with industry standards?',
    answer: 'Our operations and partner data center facilities align with SOC 2 Type II controls, ISO/IEC 27001 ISMS, HIPAA physical security requirements, and PCI-DSS v4.0 colocation standards.'
  },
  {
    category: 'Guest',
    question: 'What is your guaranteed network uptime SLA?',
    answer: ': We provide a 99.995% Network Availability SLA across all primary switch fabrics and core routing backbones in our enterprise data center suites.'
  },
  {
    category: 'Guest',
    question: 'How does your 24/7 Network Operations Center (NOC) alert system work?',
    answer: 'Our automated monitoring platform ingests synthetic telemetry 24/7/365. When a critical threshold anomaly occurs, an on-call Tier-2/Tier-3 systems engineer investigates within 15 minutes.'
  },
  {
    category: 'Guest',
    question: 'How does onboarding and contract billing work?',
    answer: 'Infrastructure rentals and managed operations retain predictable monthly recurring charges (MRC) billed in advance. Engagements start with an infrastructure audit, followed by staging, burn-in validation, and structured migration schedules.'
  },
];


export const PARTNERS_LOGOS = [
     { name: 'Kenz Pristine', src: pristineWhite },
  { name: 'KenMeet', src: kenmeetWhite },
  { name: 'KenTalk', src: kentalkWhite },
  { name: 'kenzaihub', src: kenzaihub },
  { name: 'kenzaudit', src: kenzaudit },
  { name: 'kenzinnovations', src: kenzinnovations },
  { name: 'kenintent', src: kenzintent },
  { name: 'kiacademy', src: kiacademy },
  { name: 'cxpro', src: cxpro },
  { name: 'smartidp', src: smartidp },
];
