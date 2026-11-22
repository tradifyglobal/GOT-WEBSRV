export const SERVICES_DATA = [
  {
    id: 'bare-metal',
    slug: 'bare-metal',
    title: 'Enterprise Bare Metal Server Rentals & High-Performance Compute',
    shortName: 'Bare Metal Server Rentals',
    tagline: 'Dedicated Compute // Zero Noisy Neighbors // Raw Silicon Control',
    category: 'Hardware & Compute',
    seoTitle: 'Enterprise Bare Metal Server Rentals | High-Performance Dedicated Compute | Geeks on Tap',
    seoDescription: 'Rent enterprise-grade bare metal servers with Geeks on Tap. High-frequency Intel Xeon & AMD EPYC processors, enterprise NVMe storage, custom hypervisors, and zero noisy neighbors.',
    breadcrumb: 'SERVICES / BARE METAL SERVER RENTALS',
    heroDescription: 'Bypass public cloud virtualization penalties. Provision dedicated AMD EPYC™ and Intel® Xeon® silicon with raw PCIe Gen5 NVMe storage, unmetered multi-gigabit uplinks, and root IPMI/KVM out-of-band control.',
    stats: [
      { label: 'Uptime SLA', value: '99.995%', note: 'Financially Backed' },
      { label: 'IOPS Ceiling', value: '2.4M+', note: 'PCIe Gen5 Raw' },
      { label: 'NOC Response', value: '< 15 min', note: 'Critical Triage' }
    ],
    telemetryBar: {
      status: 'SYS-FABRIC: ACTIVE',
      datacenters: 'DATACENTER DC-WEST-01 & DC-EAST-04 AVAILABLE',
      latency: 'PROVISIONING LATENCY: < 4.2 HRS BARE-METAL',
      badge1: 'ROOT-IPMI AVAILABLE',
      badge2: 'GEN5 NVMe FABRIC'
    },
    topRackCard: {
      tag: 'TOP-RACK CHASSIS // DC-01-RACK-44',
      badge: '100Gbps BACKBONE',
      temp: 'Core Temperature: 18.2°C nominal',
      power: 'Power Draw: Redundant A+B Feed',
      loadWidth: '88%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJEZ-uTBwmHlFeUEBGDIY7ZJgqvcLzbxNAXdllNFYpq0U7o0SqxQRustjfegrY9IZKYXrB8Si6Y7ZDGOFpkU_YVDBsSEeGqwmmMdztlwXwxTRHNNpccgjfOXU6XQtaCmQIiGOAr98LiZMiF8YyZjht8ok2pehDoLytxYZagzUbtcD57WNkvUuRpld6KsoO50z1fXK9axz-WjSDeMfbAlaHDpe4MKSfp-alEY1DChhRScBPdxcDSKzzuw'
    },
    tierSection: {
      preHeader: 'STANDARDIZED SILICON DEPLOYMENTS',
      header: 'Hardware Tier Breakdown',
      description: 'Zero over-subscription. Every node is factory-calibrated, burnt-in under 72-hour stress loops, and racked with independent unmetered port allocations.',
      tiers: [
        {
          tierLabel: 'TIER 1 ARCHITECTURE',
          chassis: '1U CHASSIS',
          title: 'Core Dedicated',
          subtitle: 'Database replicas, medium workloads, edge appliances, secure relay proxies.',
          price: '$420',
          priceUnit: '/ month',
          priceNote: 'Billed monthly · Zero setup fee',
          specs: [
            { title: 'AMD EPYC 7543', desc: '32 Cores / 64 Threads @ 2.80GHz Base' },
            { title: '128GB DDR4 ECC', desc: 'Registered Multi-Channel Memory' },
            { title: '2x 1.92TB Enterprise NVMe Gen4', desc: 'Hardware RAID-1 Mirrored' },
            { title: '1Gbps Unmetered Dedicated Port', desc: '100TB Transit on Tier-1 Multi-Homed IP' },
            { title: 'Dedicated IPMI 2.0 / HTML5 KVM', desc: 'Out-of-band serial over LAN console' }
          ],
          cta: 'Select Tier 1 Node',
          isPopular: false
        },
        {
          tierLabel: 'TIER 2 HPC CLUSTER',
          chassis: '2U OPTIMIZED',
          title: 'High-Performance Compute',
          subtitle: 'High-throughput virtualized clusters, financial analytics, sub-millisecond low-latency APIs.',
          price: '$1,280',
          priceUnit: '/ month',
          priceNote: 'SLA Guarantee 99.995% · Rapid Deploy',
          specs: [
            { title: 'Dual AMD EPYC 9654 Genoa', desc: '192 Cores / 384 Threads @ 3.55GHz Turbo' },
            { title: '512GB DDR5 ECC (4800MHz)', desc: '12-Channel High Bandwidth Subsystem' },
            { title: '4x 3.84TB Micron/Samsung Enterprise Gen5', desc: 'PCIe Gen5 NVMe RAID-10 (2.4M Random IOPS)' },
            { title: '10Gbps Redundant Dual-Uplink (LACP)', desc: 'Mellanox ConnectX-6 Dual-Port NIC' },
            { title: 'Dedicated IPMI + Virtual Media Mount', desc: 'Hardware telemetry, thermal monitoring, reboot' }
          ],
          cta: 'Deploy Tier 2 HPC',
          isPopular: true
        },
        {
          tierLabel: 'TIER 3 ARCHITECTURE',
          chassis: 'MULTI-NODE RACK',
          title: 'Custom Engineered Clusters',
          subtitle: 'AI/LLM inference workloads, massive SAN clusters, multi-tenant private clouds.',
          price: 'Custom Scope',
          priceUnit: '',
          priceNote: 'Architecture consultations with principal engineers',
          specs: [
            { title: 'Multi-node 2U/4U Chassis + GPUs', desc: 'NVIDIA H100 / A100 Tensor Core options' },
            { title: 'Up to 2TB DDR5 ECC Per Node', desc: 'High-capacity cluster memory fabrics' },
            { title: 'Petabyte-Scale Ceph / ZFS Pools', desc: 'All-Flash NVMe fabric over RoCE v2' },
            { title: '40G / 100Gbps InfiniBand Fabric', desc: 'Dark fiber direct cross-connects' },
            { title: 'Redundant IPMI + Smart PDU Cycling', desc: 'Full cabinet telemetry and power isolation' }
          ],
          cta: 'Request Custom Spec',
          isPopular: false
        }
      ]
    },
    interactiveSection: {
      preHeader: 'DEPLOYMENT IMAGE MATRIX',
      header: 'Choose Your Bare Metal OS & Hypervisor Environment',
      description: 'Nodes are flashed via automated PXE netboot orchestration within minutes of requisition. Select your hypervisor baseline or install your customized proprietary ISO over HTML5 IPMI.',
      items: {
        proxmox: {
          name: 'Proxmox VE 8.x Hardened Kernel',
          badge: 'PRE-HARDENED',
          desc: 'Open-source enterprise virtualization platform with integrated KVM & LXC orchestration.',
          points: ['Native ZFS RAID & Storage pools', 'Cluster live-migration ready', 'Integrated backup scheduler'],
          terminalLines: [
            { type: 'INFO', text: 'Initializing base image installer payload: Proxmox VE 8.2 Enterprise Kernel' },
            { type: 'INFO', text: 'Storage Controller: 2x Broadcom MegaRAID SAS 9361-8i verified healthy' },
            { type: 'OK', text: 'ZFS mirror root pools defined over /dev/nvme0n1 and /dev/nvme1n1' },
            { type: 'OK', text: 'Pre-allocated dedicated VLAN 410 tagged to 10Gbps bond0 (802.3ad LACP)' },
            { type: 'PROMPT', text: '> Ready to stream ISO payload directly to server hardware registers.' }
          ]
        },
        vmware: {
          name: 'VMware ESXi 8.0 Update 2 (Custom OEM Build)',
          badge: 'ENTERPRISE',
          desc: 'Bare-metal hypervisor ready for existing enterprise vSphere and vCenter environments.',
          points: ['Bring-Your-Own-License (BYOL)', 'Certified Hardware Compatibility (HCL)', 'Dual-boot hypervisor flash disks'],
          terminalLines: [
            { type: 'INFO', text: 'Initializing VMware ESXi Hypervisor Bootloader installer' },
            { type: 'OK', text: 'Certified Supermicro / AMD Genoa hardware compatibility verified' },
            { type: 'OK', text: 'USB / SATADOM boot mirrors detected & partitioned' },
            { type: 'INFO', text: 'Mellanox ConnectX-6 dual-port vSwitch mapping in standby' },
            { type: 'PROMPT', text: '> Host ready for vCenter cluster inclusion & inventory handshake.' }
          ]
        },
        linux: {
          name: 'Ubuntu 24.04 LTS Bare Metal Minimal (Pure Silicon)',
          badge: 'RAW SILICON',
          desc: 'Ubuntu 24.04 LTS, Rocky Linux 9, or Debian Enterprise with pure low-overhead kernel.',
          points: ['Zero OS overhead latency', 'Libvirt / QEMU driver toolsets', 'Direct NVMe-oF block access'],
          terminalLines: [
            { type: 'INFO', text: 'Deploying pure Linux image: 6.8 Enterprise Kernel (No Hypervisor)' },
            { type: 'OK', text: 'CPU governor set to "performance" across all available cores' },
            { type: 'OK', text: 'Raw NVMe namespaces mapped directly to /dev/nvme* block devices' },
            { type: 'INFO', text: 'Cloud-Init automation and root SSH public keys provisioned' },
            { type: 'PROMPT', text: '> Shell ready. Direct hardware register execution confirmed.' }
          ]
        },
        hyperv: {
          name: 'Microsoft Hyper-V Server 2025 Core',
          badge: 'WINDOWS STACK',
          desc: 'Enterprise Windows Server 2022/2025 Datacenter virtualization instances.',
          points: ['Storage Spaces Direct (S2D) support', 'Active Directory domain federation', 'Full PowerShell DSC automation'],
          terminalLines: [
            { type: 'INFO', text: 'WinPE deployment environment initialized via PXE Boot' },
            { type: 'OK', text: 'Hardware RAID volumes partitioned as ReFS cluster storage spaces' },
            { type: 'OK', text: 'Remote PowerShell DSC remoting agents pre-installed and authenticated' },
            { type: 'INFO', text: 'Hyper-V virtual switch bound to teaming NIC interfaces' },
            { type: 'PROMPT', text: '> Server ready for Windows Admin Center and Domain Join orchestration.' }
          ]
        }
      }
    },
    tableSection: {
      preHeader: 'HARDWARE SPECIFICATIONS',
      header: 'Architectural Data Sheet',
      description: 'Direct comparison matrix for enterprise engineers. All hardware is owned outright by Geeks on Tap and housed within Tier-III+ colocation suites.',
      badge: 'ALL HARDWARE DEDICATED',
      rows: [
        { dim: 'Processor Architecture', t1: 'AMD EPYC™ 7543 (Zen 3)', t2: 'Dual AMD EPYC™ 9654 Genoa', t3: 'Dual AMD EPYC / Intel Xeon Platinum + GPUs' },
        { dim: 'Core / Thread Density', t1: '32 Cores / 64 Threads', t2: '192 Cores / 384 Threads', t3: 'Up to 384 Cores / 768 Threads per 2U node' },
        { dim: 'Memory Subsystem', t1: '128GB DDR4 3200MHz ECC', t2: '512GB DDR5 4800MHz ECC (12-Ch)', t3: 'Up to 2TB DDR5 ECC Registered per Chassis' },
        { dim: 'Raw Storage IOPS', t1: '~850,000 IOPS Gen4', t2: '~2,400,000 IOPS Gen5 NVMe', t3: '10,000,000+ IOPS All-Flash Fabric' },
        { dim: 'Network Controller', t1: 'Intel I350 Dual 1Gbps', t2: 'Mellanox ConnectX-6 Dual 10Gbps SFP28', t3: 'Mellanox ConnectX-7 100/200Gbps InfiniBand' },
        { dim: 'Out-of-Band (OOB) Controls', t1: 'Dedicated IPMI 2.0 / HTML5', t2: 'Dedicated IPMI + Virtual Media Mount', t3: 'Redundant IPMI + Smart PDU Switched Cycling' },
        { dim: 'Power Delivery SLA', t1: '100% Dual Feed A+B ATS', t2: '100% True Redundant A+B Active/Active', t3: '100% Isolated Dual Bus with UPS & Diesel' },
        { dim: 'Network Availability SLA', t1: '99.995% Network SLA', t2: '99.995% Backed by Financial Penalties', t3: '100% Custom Tailored Master Agreement SLA' }
      ]
    },
    facilitySection: {
      preHeader: 'PHYSICAL ASSETS',
      header: 'Carrier-Neutral Tier-III+ Facility Floor',
      description: 'Our bare metal hardware does not live in anonymous mega-clouds. We own our hardware chassis, enterprise cabling looms, and top-of-rack Arista switches in biometric-gated cages.',
      features: [
        'SOC 2 Type II & ISO/IEC 27001 Certified Physical Controls',
        '2N Diesel Generator Backup with 72-Hour On-Site Fuel Reserves',
        'N+1 Hot-Aisle Containment with CRAC Precision Cooling'
      ],
      cards: [
        {
          title: 'Redundant Fiber Fabric',
          desc: 'Multi-carrier BGP peering across Lumen, Telia, and Zayo backbones.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7CkGZFTPI4bAa_QKzrWy8FrnEWqciQ6xMLQoh1L26TfsnA97tAHkInICqEKImCeJPSj0i5ohOzkArzeMvlK3Ij9D51wHixfXsr31S84HgBvglUi4sWxdqlcihTwbK0plhigDRkJvNSSuE19dsiExrVucS-R8dy30s-tdvICJ_stg4FnGxsAeBn9DqCc72axd9BjeQeixqJre3RDiFMrKKUvzsieMvRIAJCdrfgH2dKKYu9NgQNRybA'
        },
        {
          title: '24/7 Smart Hands NOC',
          desc: 'On-site infrastructure engineers available round-the-clock for physical hot-swaps.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWbMigiNmKM6PK-7nigDgXoquJF3dGCg0ut19b7PXOpghBmVErvXQHuU-f4sminMsB0kYZzklQEVsKippdkSW_M2KIwdADJna0VbJ0gi0r9qt89xnK_TFxVk3g9oGWXUPXrplbeW8-Y2HoRbi67DpEfUIS5X1FGAOlpBhWhm4m-P7KzPP657VZAKhg8n8B4MjlB0_NLRhYyycX0qH6A-QQkUYhjN3YYaDaMcXMthQdzrzhjDZZz2wFiQ'
        }
      ]
    },
    scopingTitle: 'Custom Bare Metal Scoping Request',
    scopingSubtitle: 'Submit your hardware requisitions directly to our senior infrastructure architects. You will receive an engineering-approved technical proposal, rack schematics, and firm SLA quotes within 2 business hours.'
  },
  {
    id: 'cloud-infrastructure',
    slug: 'cloud-infrastructure',
    title: 'Cloud Infrastructure & Tenancy (AWS & Azure Foundation)',
    shortName: 'Cloud Infrastructure & Tenancy',
    tagline: 'VPC/VNet Architecture // Multi-AZ Subnetting // FinOps Governance',
    category: 'Cloud Architecture',
    seoTitle: 'Cloud Infrastructure Setup (AWS & Azure) | VPC, Subnets & Hybrid Tenancy | Geeks on Tap',
    seoDescription: 'We configure bulletproof foundational cloud environments on AWS and Microsoft Azure. Subnetting, routing tables, IAM governance, VPN gateways, and cost optimization.',
    breadcrumb: 'SERVICES / CLOUD INFRASTRUCTURE & TENANCY',
    heroDescription: 'Public cloud providers offer incredible scale, but default setups are complex, insecure, and expensive. We do not touch your application code—we build the pristine, secure virtual data center inside AWS or Azure where your software operates.',
    stats: [
      { label: 'Cloud Cost Cut', value: '30-60%', note: 'FinOps Governance' },
      { label: 'Transit Peering', value: '100Gbps', note: 'Direct Connect & ExpressRoute' },
      { label: 'Zero Trust', value: '100% IAM', note: 'Least-Privilege RBAC' }
    ],
    telemetryBar: {
      status: 'CLOUD-FABRIC: PROVISIONED',
      datacenters: 'AWS US-EAST-1, US-WEST-2 & AZURE EAST-US SYNCHRONIZED',
      latency: 'CROSS-CLOUD TRANSIT LATENCY: < 1.8 MS',
      badge1: 'MULTI-AZ VPC/VNET',
      badge2: 'IAM HARDENED'
    },
    topRackCard: {
      tag: 'HYBRID TRANSIT GATEWAY // AWS-AZURE-DIRECT',
      badge: 'TERABIT MESH',
      temp: 'Network Throughput: 40Gbps sustained',
      power: 'Multi-AZ Availability: 99.999% SLA',
      loadWidth: '92%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP0Xy67qskiN_mkSGMdGr1IlvxJpCmalL4MCILp8eBtMx4U-ojq8TTw9G12MCJ6ByE7XSY7lzB_GRFMCAg7l-da5oQ1OLCbpjDUUFXyErZd-Z_BAp--u8B-lfX5fMTKzrmQBeqw8JK8gsJqgEDVOwWp0eVIWvq9S13JeGfr-SYC3riIuqxkvKwqTX5RSfHPNj0JFDcJa42HRqfonAGnGugxatNUJppaz0usvkrHChbzCrlCf-zEO29XA'
    },
    tierSection: {
      preHeader: 'TURNKEY CLOUD FOUNDATIONS',
      header: 'AWS & Azure Tenancy Architecture',
      description: 'Comprehensive foundational cloud deployment blueprints designed for zero-drift security, multi-AZ high availability, and proactive FinOps cost governance.',
      tiers: [
        {
          tierLabel: 'TIER 1 FOUNDATION',
          chassis: 'SINGLE-CLOUD VPC',
          title: 'AWS Core VPC Baseline',
          subtitle: 'Multi-AZ custom VPC, public/private/isolated subnets, and hardened NAT gateways.',
          price: '$650',
          priceUnit: '/ setup + mgmt',
          priceNote: 'Zero lock-in · Full Terraform IaC deliverables',
          specs: [
            { title: 'Multi-AZ VPC Design', desc: 'Granular route tables and isolated data tiers' },
            { title: 'Least-Privilege IAM', desc: 'Role-based access control & enforced MFA policies' },
            { title: 'Security Groups & NACLs', desc: 'Stateless and stateful ENI-level perimeter filtering' },
            { title: 'AWS Transit Gateway', desc: 'Low-latency private inter-VPC and bare-metal peering' },
            { title: 'FinOps Budget Alarms', desc: 'Automated anomaly detection & idle resource cleanup' }
          ],
          cta: 'Configure AWS Tenancy',
          isPopular: false
        },
        {
          tierLabel: 'TIER 2 HYBRID CLOUD',
          chassis: 'MULTI-VNET MESH',
          title: 'Azure Enterprise Tenancy',
          subtitle: 'Hub-and-Spoke VNet topologies, Azure Firewall, Entra ID SSO, and ExpressRoute hybrid bridging.',
          price: '$1,450',
          priceUnit: '/ setup + mgmt',
          priceNote: 'Guaranteed 99.995% Network Availability',
          specs: [
            { title: 'Hub-and-Spoke VNets', desc: 'Network Security Groups (NSGs) & Application Security Groups' },
            { title: 'ExpressRoute & IPsec VPN', desc: 'Encrypted low-latency pipes to bare metal & on-prem' },
            { title: 'Entra ID Identity Bridge', desc: 'Conditional access & single sign-on federation' },
            { title: 'Immutable Blob Vaults', desc: 'Geo-redundant storage (GRS) with WORM protection' },
            { title: 'Reserved Instance Modeling', desc: 'Steady-state savings reduction of 30%–60%' }
          ],
          cta: 'Deploy Azure Tenancy',
          isPopular: true
        },
        {
          tierLabel: 'TIER 3 DUAL-CLOUD',
          chassis: 'CROSS-CLOUD MESH',
          title: 'Hybrid Multi-Cloud Fabric',
          subtitle: 'Dual AWS + Azure active/active foundation with bare metal colocation interconnects.',
          price: 'Custom Scope',
          priceUnit: '',
          priceNote: 'Direct consultation with Principal Cloud Architects',
          specs: [
            { title: 'Cross-Cloud Transit Mesh', desc: 'BGP dynamic failover between AWS Direct Connect & Azure' },
            { title: 'Global Traffic Management', desc: 'Anycast DNS and geo-distributed latency routing' },
            { title: 'Multi-Cloud FinOps Governance', desc: 'Unified cost telemetry across AWS, Azure, and Bare Metal' },
            { title: '24/7 Cloud NOC Monitoring', desc: 'Real-time telemetry on API limits, quotas, and saturation' },
            { title: 'Disaster Recovery Warm Standby', desc: 'Cross-cloud automated snapshot and failover orchestration' }
          ],
          cta: 'Request Multi-Cloud Scope',
          isPopular: false
        }
      ]
    },
    interactiveSection: {
      preHeader: 'TERRAFORM IAC ORCHESTRATION',
      header: 'Explore Cloud Tenancy Blueprints',
      description: 'We orchestrate infrastructure as code (IaC) using deterministic Terraform and OpenTofu modules. Select a cloud archetype to preview the automated orchestration workflow.',
      items: {
        aws_vpc: {
          name: 'AWS Multi-AZ Production VPC',
          badge: 'AWS CLOUD',
          desc: 'High-availability multi-tier architecture spanning 3 Availability Zones with transit peering.',
          points: ['Multi-AZ isolated database subnets', 'Dual HA NAT Gateways with EIPs', 'Route53 private DNS zone federation'],
          terminalLines: [
            { type: 'INFO', text: 'Initializing AWS Provider: terraform-provider-aws v5.40 (us-east-1)' },
            { type: 'OK', text: 'VPC 10.100.0.0/16 created with DNS resolution & hostnames enabled' },
            { type: 'OK', text: '6 Subnets provisioned across us-east-1a, 1b, and 1c' },
            { type: 'INFO', text: 'Attaching AWS Transit Gateway attachment to Private Route Tables' },
            { type: 'PROMPT', text: '> Tenancy baseline applied. Ready for application payload onboarding.' }
          ]
        },
        azure_vnet: {
          name: 'Azure Hub-and-Spoke Enterprise VNet',
          badge: 'MICROSOFT AZURE',
          desc: 'Centralized security perimeter with Azure Firewall hub and segregated spoke workloads.',
          points: ['Azure Firewall Premium with TLS inspection', 'ExpressRoute gateway peering', 'Entra ID PIM role bindings'],
          terminalLines: [
            { type: 'INFO', text: 'Authenticating to Azure Resource Manager via Service Principal' },
            { type: 'OK', text: 'Virtual Network hub-vnet-01 provisioned with 10.200.0.0/16 address space' },
            { type: 'OK', text: 'Network Security Groups applied with strict zero-trust egress rules' },
            { type: 'INFO', text: 'Establishing IPsec Site-to-Site VPN to Ashburn Bare-Metal Vault' },
            { type: 'PROMPT', text: '> Azure hub-spoke topology verified. Encryption tunnel active.' }
          ]
        },
        finops_engine: {
          name: 'FinOps Cost Optimization Engine',
          badge: 'FINOPS GOVERNANCE',
          desc: 'Continuous cloud waste remediation, idle disk cleanup, and reserved instance modeling.',
          points: ['Unattached EBS and orphaned IP scraper', 'Automated Savings Plan coverage review', 'Real-time SNS budget breach alarms'],
          terminalLines: [
            { type: 'INFO', text: 'Running CloudWatch cost anomaly audit across 14 active AWS accounts' },
            { type: 'OK', text: 'Identified 22 unattached gp3 EBS volumes (Reclaimed: $410/mo)' },
            { type: 'OK', text: 'Reserved Instance coverage matched to 84.6% of baseline compute' },
            { type: 'INFO', text: 'Calculated projected 12-month savings: $38,400 across all regions' },
            { type: 'PROMPT', text: '> FinOps governance policy locked. Anomaly alerts active.' }
          ]
        },
        hybrid_bridge: {
          name: 'Direct Connect & ExpressRoute Hybrid Bridge',
          badge: 'HYBRID BRIDGING',
          desc: 'Dedicated private fiber interconnect linking on-premise/bare-metal chassis directly into cloud VPCs.',
          points: ['Sub-2ms round-trip latency', 'Zero public internet exposure', 'BGP active/active dynamic peering'],
          terminalLines: [
            { type: 'INFO', text: 'Probing physical cross-connect at Equinix DC2 Meet-Me-Room' },
            { type: 'OK', text: 'AWS Direct Connect 10Gbps Private VIF handshake acknowledged' },
            { type: 'OK', text: 'BGP session established with AS210984: 12 routes exchanged' },
            { type: 'INFO', text: 'MTU set to 9001 (Jumbo Frames) for high-throughput SAN replication' },
            { type: 'PROMPT', text: '> Hybrid bridge operational. Direct silicon-to-cloud pipe active.' }
          ]
        }
      }
    },
    tableSection: {
      preHeader: 'TECHNICAL CAPABILITY MATRIX',
      header: 'Cloud Tenancy Specification Sheet',
      description: 'Comprehensive comparison of Geeks on Tap foundational cloud engineering deliverables across platforms.',
      badge: '100% IAC DELIVERABLES',
      rows: [
        { dim: 'Network Segregation', t1: 'Multi-AZ Public/Private/Data Subnets', t2: 'Hub-and-Spoke VNets with NSGs', t3: 'Cross-Cloud Isolated Micro-segments' },
        { dim: 'Perimeter Security', t1: 'Security Groups + Stateful NACLs', t2: 'Azure Firewall Premium + ASGs', t3: 'Cloud-native WAF + Distributed DDoS Shield' },
        { dim: 'Identity & Access', t1: 'AWS IAM least-privilege + MFA', t2: 'Entra ID Conditional Access + PIM', t3: 'Unified SAML/OIDC SSO Federation' },
        { dim: 'Hybrid Interconnect', t1: 'AWS Transit Gateway / VPN', t2: 'ExpressRoute 10Gbps + IPsec', t3: 'Multi-Cloud BGP Redundant Peering' },
        { dim: 'Storage & Backup', t1: 'S3 Glacier Immutable Vaults', t2: 'Azure Blob GRS with WORM Lock', t3: 'Cross-Cloud Replicated Storage Pools' },
        { dim: 'FinOps Governance', t1: 'AWS Cost Explorer + SNS Alarms', t2: 'Azure Cost Management + Budgets', t3: 'Consolidated FinOps Real-time Dashboard' },
        { dim: 'Infrastructure as Code', t1: 'Terraform / OpenTofu Modules', t2: 'Bicep / Terraform Enterprise', t3: 'Unified GitOps Multi-Cloud Repo' },
        { dim: 'Operational SLA', t1: '99.995% Uptime Architecture', t2: '99.995% Financially Backed', t3: '100% Customized Enterprise MSA SLA' }
      ]
    },
    facilitySection: {
      preHeader: 'HYBRID CLOUD PHYSICAL ANCHORS',
      header: 'Direct Interconnects to Major Cloud Exchange Points',
      description: 'We do not rely on standard public internet VPNs for enterprise workloads. We leverage direct fiber cross-connects in carrier-neutral data centers to bridge cloud and bare-metal environments.',
      features: [
        'Direct Connect & ExpressRoute on-ramps in Ashburn and Reston',
        'Sub-millisecond latency between dedicated bare metal and cloud VPCs',
        'Redundant dual-homed dark fiber conduits with zero single points of failure'
      ],
      cards: [
        {
          title: 'Ashburn Cloud On-Ramp',
          desc: 'Direct cross-connect to AWS US-East and Azure East US MMRs in Ashburn, VA.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7CkGZFTPI4bAa_QKzrWy8FrnEWqciQ6xMLQoh1L26TfsnA97tAHkInICqEKImCeJPSj0i5ohOzkArzeMvlK3Ij9D51wHixfXsr31S84HgBvglUi4sWxdqlcihTwbK0plhigDRkJvNSSuE19dsiExrVucS-R8dy30s-tdvICJ_stg4FnGxsAeBn9DqCc72axd9BjeQeixqJre3RDiFMrKKUvzsieMvRIAJCdrfgH2dKKYu9NgQNRybA'
        },
        {
          title: '24/7 Cloud NOC Monitoring',
          desc: 'Continuous telemetry ingestion monitoring cloud API quotas, NAT bandwidth, and compute spikes.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWbMigiNmKM6PK-7nigDgXoquJF3dGCg0ut19b7PXOpghBmVErvXQHuU-f4sminMsB0kYZzklQEVsKippdkSW_M2KIwdADJna0VbJ0gi0r9qt89xnK_TFxVk3g9oGWXUPXrplbeW8-Y2HoRbi67DpEfUIS5X1FGAOlpBhWhm4m-P7KzPP657VZAKhg8n8B4MjlB0_NLRhYyycX0qH6A-QQkUYhjN3YYaDaMcXMthQdzrzhjDZZz2wFiQ'
        }
      ]
    },
    scopingTitle: 'Request Cloud Architecture Scoping',
    scopingSubtitle: 'Submit your cloud parameters below. A Principal Cloud Infrastructure Architect will review your topology and deliver a deterministic setup plan within 4 business hours.'
  },
  {
    id: 'network-engineering',
    slug: 'network-engineering',
    title: 'Enterprise Network Engineering & Routing Configuration',
    shortName: 'Network Engineering & Routing',
    tagline: 'L2/L3 Switching // Multi-Homed BGP // Fortinet Firewalls // SD-WAN',
    category: 'Networking & Fabric',
    seoTitle: 'Enterprise Network Engineering & Routing Configuration | Geeks on Tap',
    seoDescription: 'Enterprise network configuration: Cisco, Fortinet, pfSense, Ubiquiti. Subnetting, BGP/OSPF routing, Site-to-Site IPsec VPN, SD-WAN, and high-availability firewalls.',
    breadcrumb: 'SERVICES / NETWORK ENGINEERING & CONFIGURATION',
    heroDescription: 'A high-performance server is useless if the network path leading to it is congested, jittery, or unencrypted. We engineer robust, enterprise-grade network fabrics designed for high throughput, zero packet loss, and multi-homed carrier redundancy.',
    stats: [
      { label: 'Backbone Throughput', value: '2.4 Tbps', note: 'Multi-Carrier BGP' },
      { label: 'Packet Loss SLA', value: '0.00%', note: 'Arista Leaf-Spine' },
      { label: 'VPN Encryption', value: 'WireGuard & IPsec', note: 'Hardware Offloaded' }
    ],
    telemetryBar: {
      status: 'BGP-ROUTING: NOMINAL',
      datacenters: 'AS210984 BGP SESSIONS ACTIVE: COGENT, TELIA, LUMEN, ZAYO',
      latency: 'CROSS-CONNECT PACKET LATENCY: < 0.4 MS',
      badge1: '802.3ad LACP TRUNKING',
      badge2: 'DPI FIREWALL ACTIVE'
    },
    topRackCard: {
      tag: 'CORE LEAF-SPINE SWITCH // ARISTA-7050X3',
      badge: '400Gbps PORTS',
      temp: 'ASIC Temp: 34.1°C nominal',
      power: 'Dual Power Supply: 100% Synchronized',
      loadWidth: '76%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfpXXPkCd9UoeTTURDClispuQJc_ehA2ShAjm4vzO5kRhveoGmzvZ43x9gmq02Uyk77SVlXDFG0l4RTUczlyRPMVQ7LbIIkLv9SqtwTW6eL7AlWa3j9amMwseNsWG6Ug6ACHywVVib-ooZ4ddYYrmuG_6A82eW2Vo2-qobFP7IJAMrUlA4TN2xk8FzR6t8eSAE0Exf8HZmWMIEtTocudhr0yAoLrAFscwKgLZmMF0X-0mh0TxucY-Hgw'
    },
    tierSection: {
      preHeader: 'CORE NETWORK CAPABILITIES',
      header: 'Enterprise Network Engineering Services',
      description: 'From physical L2/L3 switch port binding to global BGP routing mesh architecture, we build networks that never drop a single transaction.',
      tiers: [
        {
          tierLabel: 'SWITCHING & ROUTING',
          chassis: 'CAMPUS & DATA CENTER',
          title: 'L2/L3 Switch Fabric & Routing',
          subtitle: 'VLAN segmentation, Spanning Tree (RSTP/MSTP), LACP link aggregation, and OSPF/BGP routing.',
          price: '$550',
          priceUnit: '/ project / node',
          priceNote: 'Includes full Visio/Lucidchart topology maps',
          specs: [
            { title: '802.1Q VLAN Segmentation', desc: 'Strict isolation of management, compute, and SAN storage' },
            { title: 'Dynamic Routing Protocols', desc: 'BGP multi-homing, internal OSPF, and EIGRP distribution' },
            { title: 'LACP 802.3ad Port Trunking', desc: 'Active/active bonded uplinks with zero packet loss' },
            { title: 'QoS & Traffic Shaping', desc: 'Voice, video, and mission-critical database prioritization' },
            { title: 'IPAM Allocation Management', desc: 'Complete IPv4/IPv6 CIDR planning and subnet auditing' }
          ],
          cta: 'Configure Switch Fabric',
          isPopular: false
        },
        {
          tierLabel: 'FIREWALL & PERIMETER',
          chassis: 'HIGH-AVAILABILITY CLUSTER',
          title: 'Next-Gen Firewall & IPsec VPN',
          subtitle: 'Fortinet FortiGate, Cisco ASA, Palo Alto, and pfSense appliances with Deep Packet Inspection.',
          price: '$1,150',
          priceUnit: '/ deployment',
          priceNote: 'Active/Passive HA with sub-second failover',
          specs: [
            { title: 'Deep Packet Inspection (DPI)', desc: 'Hardware-accelerated SSL/TLS inspection & threat filtering' },
            { title: 'Site-to-Site IPsec & WireGuard', desc: 'High-throughput encrypted tunnels between all locations' },
            { title: 'Intrusion Prevention (IPS/IDS)', desc: 'Automated signature matching and malicious IP blocking' },
            { title: 'Layer 4 & Layer 7 Reverse Proxy', desc: 'HAProxy and NGINX load balancing with health checks' },
            { title: '24/7 Flow Analysis & NetFlow', desc: 'Continuous bandwidth saturation and DDoS monitoring' }
          ],
          cta: 'Deploy Perimeter Firewall',
          isPopular: true
        },
        {
          tierLabel: 'SD-WAN & GLOBAL EDGE',
          chassis: 'MULTI-BRANCH FABRIC',
          title: 'Enterprise SD-WAN & Edge Transit',
          subtitle: 'Intelligent path routing across broadband, MPLS, and direct leased lines with auto-healing.',
          price: 'Custom Scope',
          priceUnit: '',
          priceNote: 'Direct scoping with Senior Network Architects',
          specs: [
            { title: 'Application-Aware Path Selection', desc: 'Real-time steering over the cleanest, lowest-jitter path' },
            { title: 'Zero-Touch Branch Deployment', desc: 'Rapid rollout of standardized branch office appliances' },
            { title: 'Global Anycast DNS & Edge', desc: 'Sub-millisecond routing to the nearest healthy node' },
            { title: 'Carrier-Neutral Interconnects', desc: 'Direct dark fiber cross-connects at top global IXPs' },
            { title: 'Hardware Warranty Replacement', desc: '4-hour on-site switch and firewall hot-swap SLA' }
          ],
          cta: 'Request Network Scope',
          isPopular: false
        }
      ]
    },
    interactiveSection: {
      preHeader: 'DYNAMIC NETWORK CONSOLE',
      header: 'Test Network Routing & Firewall Policies',
      description: 'Interact with our network engineering configurations to inspect BGP peerings, IPsec tunnel crypto states, and VLAN trunking rules.',
      items: {
        bgp_mesh: {
          name: 'BGP Multi-Homed Peering Mesh',
          badge: 'DYNAMIC ROUTING',
          desc: 'Autonomous System AS210984 routing tables with multi-carrier failover route maps.',
          points: ['Multi-homed to Cogent, Telia, Lumen, and Zayo', 'Auto-healing route withdrawal upon carrier degradation', 'Community string traffic steering'],
          terminalLines: [
            { type: 'INFO', text: 'Inspecting BGP Routing Table for ASN 210984 (Geeks on Tap)' },
            { type: 'OK', text: 'Neighbor 154.54.12.1 (Cogent AS174): Established, 942k prefixes received' },
            { type: 'OK', text: 'Neighbor 213.155.130.1 (Telia AS1299): Established, 951k prefixes received' },
            { type: 'INFO', text: 'Local-preference applied: Directing egress traffic via lowest AS-Path' },
            { type: 'PROMPT', text: '> BGP convergence verified. Zero packet loss on primary transits.' }
          ]
        },
        ipsec_tunnel: {
          name: 'Site-to-Site WireGuard / IPsec Mesh',
          badge: 'VPN TUNNELS',
          desc: 'High-throughput cryptographic mesh connecting enterprise headquarters to data center vaults.',
          points: ['AES-256-GCM hardware crypto acceleration', 'WireGuard kernel-level ultra-fast tunnels', 'Dead Peer Detection (DPD) with auto-reconnect'],
          terminalLines: [
            { type: 'INFO', text: 'Initiating IKEv2 handshake with remote branch gateway 198.51.100.24' },
            { type: 'OK', text: 'Phase 1 SA established: AES-256-GCM / SHA384 / DH Group 19' },
            { type: 'OK', text: 'Phase 2 IPsec tunnel UP: Encapsulating Security Payload (ESP) active' },
            { type: 'INFO', text: 'Throughput benchmark: 9.4 Gbps sustained with 0.18ms jitter' },
            { type: 'PROMPT', text: '> Encrypted site-to-site pipeline active. All branch traffic secured.' }
          ]
        },
        vlan_lacp: {
          name: 'L2/L3 VLAN & 802.3ad LACP Trunking',
          badge: 'SWITCH FABRIC',
          desc: 'Bonded 100G switch ports running LACP link aggregation with redundant Spanning Tree (MSTP).',
          points: ['VLAN 10 (Mgmt), VLAN 20 (SAN Storage), VLAN 30 (Public)', 'Multi-Chassis Link Aggregation (MLAG)', 'BPDU guard and loop protection enabled'],
          terminalLines: [
            { type: 'INFO', text: 'Polling Arista 7050X3 leaf switch interface port-channel bond0' },
            { type: 'OK', text: 'Members: Ethernet1/1 (100G) and Ethernet1/2 (100G) aggregated (200Gbps)' },
            { type: 'OK', text: 'LACP state: Active / In-Sync. Load balancing algorithm: Layer 3+4 IP hash' },
            { type: 'INFO', text: 'MSTP root bridge verified on priority 4096 (No topology changes in 180 days)' },
            { type: 'PROMPT', text: '> Switch fabric operating at maximum non-blocking wire speed.' }
          ]
        },
        load_balancer: {
          name: 'HAProxy Layer 4/7 High-Availability Mesh',
          badge: 'LOAD BALANCING',
          desc: 'Clustered reverse proxies with VRRP Keepalived floating IPs and SSL/TLS offloading.',
          points: ['Round-robin, least-connections, and source-IP hashing', 'Sub-millisecond TCP health check probes', 'Automated drain of degraded backend nodes'],
          terminalLines: [
            { type: 'INFO', text: 'Reading HAProxy 2.8 backend health stats on floating VIP 192.0.2.100' },
            { type: 'OK', text: 'Backend pool "prod_api_cluster": 8 of 8 servers UP and responsive' },
            { type: 'OK', text: 'Average backend response latency: 1.12ms across 12,000 req/sec' },
            { type: 'INFO', text: 'SSL/TLS termination: TLS 1.3 ECDHE-ECDSA-AES256-GCM-SHA384 active' },
            { type: 'PROMPT', text: '> Load balancer distributing live requests across all backend nodes.' }
          ]
        }
      }
    },
    tableSection: {
      preHeader: 'NETWORK HARDWARE & FABRIC MATRIX',
      header: 'Network Deliverables Specification Sheet',
      description: 'Comprehensive technical specification of network engineering and routing deliverables provided by Geeks on Tap.',
      badge: 'CARRIER-GRADE STANDARDS',
      rows: [
        { dim: 'Supported Hardware Brands', t1: 'Cisco Catalyst, Ubiquiti UniFi', t2: 'Fortinet FortiGate, Arista 7050', t3: 'Palo Alto Networks, Juniper MX' },
        { dim: 'Switching Protocols', t1: '802.1Q VLANs, RSTP, LACP', t2: 'MSTP, MLAG, 802.1p QoS, VXLAN', t3: 'EVPN-VXLAN Data Center Fabric' },
        { dim: 'Routing Protocols', t1: 'Static, RIPv2, Single-Homed BGP', t2: 'BGP AS Multi-Homing, OSPFv3', t3: 'BGP Flowspec, IS-IS, Segment Routing' },
        { dim: 'VPN Capabilities', t1: 'OpenVPN, IPsec IKEv2', t2: 'WireGuard Kernel, IPsec VTI Mesh', t3: 'Dynamic Multipoint VPN (DMVPN) / SD-WAN' },
        { dim: 'Firewall Throughput', t1: 'Up to 2 Gbps Stateful Inspection', t2: '10 Gbps+ Deep Packet Inspection', t3: '100 Gbps Hardware ASIC Offloaded' },
        { dim: 'High Availability', t1: 'Cold Spares on-site', t2: 'Active/Passive VRRP / CARP HA', t3: 'Active/Active Clustering with BGP Anycast' },
        { dim: 'Documentation Deliverables', t1: 'IPAM Table + Port Schedule', t2: 'Visio Topology + Config Backups', t3: 'Complete As-Built Architecture Binder' },
        { dim: 'Support Response SLA', t1: 'Standard Next-Business-Day', t2: '< 15 Min P1 Response SLA', t3: 'Dedicated Senior Network Engineer' }
      ]
    },
    facilitySection: {
      preHeader: 'PHYSICAL NETWORK INFRASTRUCTURE',
      header: 'Structured Fiber Cabling & Carrier Interconnects',
      description: 'Every cable is measured, labeled, and certified with Fluke optical testers. We ensure your physical layer is as flawless as your routing tables.',
      features: [
        'TIA-942 compliant structured cabling with color-coded patch leads',
        'Direct dark-fiber MMR cross-connects with sub-microsecond latency',
        '24/7 optical monitoring detecting fiber degradation before packet loss occurs'
      ],
      cards: [
        {
          title: 'High-Density Optical Patch Panels',
          desc: 'Single-mode OS2 and multi-mode OM4 fiber trunks with LC/MPO connectors.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfpXXPkCd9UoeTTURDClispuQJc_ehA2ShAjm4vzO5kRhveoGmzvZ43x9gmq02Uyk77SVlXDFG0l4RTUczlyRPMVQ7LbIIkLv9SqtwTW6eL7AlWa3j9amMwseNsWG6Ug6ACHywVVib-ooZ4ddYYrmuG_6A82eW2Vo2-qobFP7IJAMrUlA4TN2xk8FzR6t8eSAE0Exf8HZmWMIEtTocudhr0yAoLrAFscwKgLZmMF0X-0mh0TxucY-Hgw'
        },
        {
          title: 'Carrier MMR Interconnects',
          desc: 'Direct peering lines connecting your private rack to Tier-1 global transit providers.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7CkGZFTPI4bAa_QKzrWy8FrnEWqciQ6xMLQoh1L26TfsnA97tAHkInICqEKImCeJPSj0i5ohOzkArzeMvlK3Ij9D51wHixfXsr31S84HgBvglUi4sWxdqlcihTwbK0plhigDRkJvNSSuE19dsiExrVucS-R8dy30s-tdvICJ_stg4FnGxsAeBn9DqCc72axd9BjeQeixqJre3RDiFMrKKUvzsieMvRIAJCdrfgH2dKKYu9NgQNRybA'
        }
      ]
    },
    scopingTitle: 'Request Network Engineering Consultation',
    scopingSubtitle: 'Submit your network topology requirements below. A Senior Network Architect will review your routing needs and deliver an engineering proposal within 4 business hours.'
  },
  {
    id: 'cybersecurity-hardening',
    slug: 'cybersecurity-hardening',
    title: 'Cybersecurity, Hardening & Compliance Engineering',
    shortName: 'Cybersecurity & Hardening',
    tagline: 'CIS OS Hardening // Zero-Trust Access // NGFW IPS/IDS // Air-Gapped DR',
    category: 'Security & Hardening',
    seoTitle: 'Enterprise Infrastructure Cybersecurity & Hardening | Geeks on Tap',
    seoDescription: 'We defend servers and networks against modern cyber threats. Zero-Trust access, CIS OS hardening, firewall intrusion prevention, EDR/MDR, and immutable disaster recovery.',
    breadcrumb: 'SERVICES / CYBERSECURITY, HARDENING & COMPLIANCE',
    heroDescription: 'Cybersecurity is not an antivirus software package installed after the fact. Real security is baked into the operating system kernel, network switch ACLs, physical ports, and identity boundaries. We neutralize threat actors before they reach your data.',
    stats: [
      { label: 'Security Baseline', value: 'CIS L1 & L2', note: 'Center for Internet Security' },
      { label: 'Ransomware Recovery', value: '100% WORM', note: 'Air-Gapped Immutable Vaults' },
      { label: 'Threat Isolation', value: '< 60 Sec', note: 'Automated EDR Remediation' }
    ],
    telemetryBar: {
      status: 'SECURITY-POSTURE: HARDENED',
      datacenters: 'ZERO UNPATCHED CRITICAL CVEs DETECTED ACROSS ALL FLEET NODES',
      latency: 'IPS INSPECTION OVERHEAD: < 0.12 MS',
      badge1: 'ZTNA ENFORCED',
      badge2: 'IMMUTABLE BACKUPS'
    },
    topRackCard: {
      tag: 'HARDENED SECURITY VAULT // CIS-BENCHMARK-L2',
      badge: 'ZERO TRUST',
      temp: 'Threat Interceptions: 14,280 blocked/24h',
      power: 'Kernel Flags: sysctl security hardened',
      loadWidth: '95%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6U_PL-nQxQiJhrr0MJhTxg2ZqZDqE9dFU9uKAAxRreBPbtIsrW1ItZl5NqYoNScbEJloZhkLTQwFQ_9V_WWn7SMZLcs6nQZTjkWVkkna5gZH17ZOhjRdnZZ6PwzLromDSfvSaa-aFm_1O-RWPbtr9KiZxT8-rrPrI4SAkP21V6Gn7M46DeGxKr3AoYZvGKqg7U3pv5FsYBp_-s8wPBI5rfVg4aTSM0l4rvxFySrfVZ3QjziqJ5GI-pw'
    },
    tierSection: {
      preHeader: 'PROACTIVE DEFENSE VECTORS',
      header: 'Enterprise Infrastructure Defense Catalog',
      description: 'We secure the foundation from physical silicon to OS kernel parameters. Zero code-level interference—100% infrastructure armor.',
      tiers: [
        {
          tierLabel: 'OS BASELINE HARDENING',
          chassis: 'LINUX & WINDOWS',
          title: 'CIS Benchmark Hardening',
          subtitle: 'Center for Internet Security Level 1 & Level 2 hardening for Ubuntu, RHEL, and Windows Server.',
          price: '$450',
          priceUnit: '/ server node',
          priceNote: 'Includes full CIS automated compliance audit report',
          specs: [
            { title: 'Legacy Cipher Elimination', desc: 'Disabling weak SSH/TLS ciphers, SSLv3, and TLS 1.0/1.1' },
            { title: 'Attack Surface Minimization', desc: 'Removal of unused daemons, compilers, and non-essential ports' },
            { title: 'Kernel Parameter Tuning', desc: 'Hardened sysctl flags (SYN flood defense, IP spoofing block)' },
            { title: 'Strict Sudo & Privilege RBAC', desc: 'Zero shared root credentials; key-based sudo logging' },
            { title: 'Auditd & Event Logging', desc: 'Real-time telemetry streaming to immutable SIEM repositories' }
          ],
          cta: 'Harden Server Nodes',
          isPopular: false
        },
        {
          tierLabel: 'PERIMETER & EDR SUITE',
          chassis: 'NEXT-GEN PROTECTION',
          title: 'Zero-Trust & Next-Gen IPS/IDS',
          subtitle: 'Suricata/Snort intrusion prevention, Cloudflare/FortiGuard perimeter armor, and CrowdStrike/Wazuh EDR.',
          price: '$980',
          priceUnit: '/ cluster / mo',
          priceNote: 'Continuous 24/7 SIEM monitoring and threat triage',
          specs: [
            { title: 'Next-Gen Firewall (NGFW)', desc: 'Deep packet inspection blocking exploit signatures in real time' },
            { title: 'Zero-Trust Network Access (ZTNA)', desc: 'Perimeterless verification on every internal network packet' },
            { title: 'Enterprise EDR/MDR Integration', desc: 'Continuous endpoint detection and automated threat isolation' },
            { title: 'Vulnerability Scanning (Nessus)', desc: 'Weekly automated CVE scans with verified remediation plans' },
            { title: 'DDoS Mitigation Shield', desc: 'Hardware L3/L4 wire-speed scrubbing against volumetric attacks' }
          ],
          cta: 'Deploy Perimeter Armor',
          isPopular: true
        },
        {
          tierLabel: 'IMMUTABLE DR & VAULTS',
          chassis: 'AIR-GAPPED STORAGE',
          title: 'Immutable Ransomware Recovery',
          subtitle: 'Write-Once-Read-Many (WORM) air-gapped backup vaults ensuring 100% zero-ransom recovery.',
          price: 'Custom Scope',
          priceUnit: '',
          priceNote: 'Tailored disaster recovery planning & drills',
          specs: [
            { title: 'Air-Gapped WORM Storage', desc: 'Cryptographically locked backups that cannot be modified or deleted' },
            { title: 'Sub-4-Hour Recovery SLA', desc: 'Automated bare-metal and virtual machine restoration pipelines' },
            { title: 'Offsite Geo-Replication', desc: 'Secondary replica in isolated geographical power grid' },
            { title: 'Disaster Recovery Simulation Drills', desc: 'Quarterly mock failover tests validating data integrity' },
            { title: 'Executive Audit Certification', desc: 'Signed SOC 2 & ISO 27001 disaster recovery compliance records' }
          ],
          cta: 'Request DR Vault Scope',
          isPopular: false
        }
      ]
    },
    interactiveSection: {
      preHeader: 'THREAT SIMULATION CONSOLE',
      header: 'Test Hardened Defense Mechanisms',
      description: 'Inspect our active security defenses, including CIS baseline benchmarks, intrusion detection signatures, and immutable storage locks.',
      items: {
        cis_benchmark: {
          name: 'CIS Benchmark Level 2 Audit',
          badge: 'KERNEL HARDENING',
          desc: 'Automated compliance script checking 240+ operating system security controls.',
          points: ['Pass score: 99.4% on CIS Linux Benchmark', 'Root login disabled over SSH (Ed25519 keys only)', 'AppArmor / SELinux enforcing mode active'],
          terminalLines: [
            { type: 'INFO', text: 'Executing CIS Benchmark v2.0 Compliance Audit on node srv-prod-01' },
            { type: 'OK', text: '[PASS] 1.1.1.1 Disable unused filesystems (cramfs, squashfs, udf)' },
            { type: 'OK', text: '[PASS] 3.2.1 Ensure IP forwarding is disabled & rp_filter is active' },
            { type: 'OK', text: '[PASS] 5.2.4 Ensure SSH root login is disabled & MaxAuthTries is 3' },
            { type: 'PROMPT', text: '> CIS Level 2 audit complete: 242 checks passed. Zero critical findings.' }
          ]
        },
        ngfw_ips: {
          name: 'Next-Gen IPS/IDS Threat Interceptor',
          badge: 'INTRUSION PREVENTION',
          desc: 'Deep packet inspection engine analyzing network payloads for exploit signatures and port scans.',
          points: ['Suricata engine running ET Open & FortiGuard rules', 'Zero-day behavioral anomaly detection', 'Automated IP drop on brute-force detection'],
          terminalLines: [
            { type: 'INFO', text: 'Ingesting interface eth0 packet flow at 4.8 Gbps sustained' },
            { type: 'OK', text: '[ALERT] Detected SSH brute-force attempt from 198.51.100.42 (Drop action)' },
            { type: 'OK', text: '[ALERT] Blocked SQL injection signature in HTTP URI payload' },
            { type: 'INFO', text: 'Origin IP automatically added to hardware firewall drop-table for 24 hours' },
            { type: 'PROMPT', text: '> Intrusion mitigation active. Perimeter uncompromised.' }
          ]
        },
        worm_vault: {
          name: 'Immutable WORM Air-Gapped Vault',
          badge: 'RANSOMWARE DEFENSE',
          desc: 'Write-Once-Read-Many block storage with hardware-enforced retention locks.',
          points: ['Locked retention period: 30 days mandatory', 'Cryptographic SHA-256 block hashing', 'Zero deletion permitted even by root administrator'],
          terminalLines: [
            { type: 'INFO', text: 'Verifying retention lock on backup snapshot pool "vault-alpha-dr"' },
            { type: 'OK', text: 'Snapshot snap-2025-09-15: Immutable retention valid until 2025-10-15' },
            { type: 'OK', text: 'ZFS hardware hold applied: Destruction commands rejected by kernel' },
            { type: 'INFO', text: 'Integrity scrub: 14.8 TB verified healthy with 0 parity errors' },
            { type: 'PROMPT', text: '> Data air-gapped and permanently sealed against ransomware attacks.' }
          ]
        },
        ztna_gateway: {
          name: 'Zero-Trust Network Access (ZTNA) Gateway',
          badge: 'IDENTITY PERIMETER',
          desc: 'Perimeterless access verifying device health, certificate validity, and user identity on every request.',
          points: ['FIDO2 WebAuthn hardware token enforcement', 'Device compliance verification (CrowdStrike health check)', 'Dynamic micro-segmentation per connection'],
          terminalLines: [
            { type: 'INFO', text: 'Receiving ZTNA connection request for internal DB cluster port 5432' },
            { type: 'OK', text: 'User authenticated via Entra ID MFA with FIDO2 hardware token' },
            { type: 'OK', text: 'Endpoint posture check: CrowdStrike Falcon agent running & compliant' },
            { type: 'INFO', text: 'Ephemeral micro-tunnel provisioned: Valid for 60 minutes' },
            { type: 'PROMPT', text: '> Secure session authorized under strict zero-trust boundary.' }
          ]
        }
      }
    },
    tableSection: {
      preHeader: 'SECURITY STANDARDS MATRIX',
      header: 'Cybersecurity Specifications & Guarantees',
      description: 'Detailed security parameters implemented across all Geeks on Tap managed infrastructure environments.',
      badge: 'MIL-SPEC DEFENSE',
      rows: [
        { dim: 'Operating System Hardening', t1: 'CIS Benchmark Level 1', t2: 'CIS Benchmark Level 2', t3: 'Custom DISA STIG Standard' },
        { dim: 'Firewall & IPS/IDS', t1: 'Stateful Layer 4 Packet Filtering', t2: 'Next-Gen DPI + Suricata IPS', t3: 'Hardware Wire-Speed DPI + Anti-DDoS' },
        { dim: 'Access Control', t1: 'Key-based SSH + Sudo Logging', t2: 'ZTNA + FIDO2 2FA Hardware Keys', t3: 'Privileged Access Management (PAM)' },
        { dim: 'Endpoint Protection (EDR)', t1: 'Host-based Wazuh / OSSEC', t2: 'CrowdStrike Falcon / SentinelOne', t3: '24/7 Managed Detection & Response (MDR)' },
        { dim: 'Disaster Recovery', t1: 'Nightly Remote Backups', t2: 'Immutable WORM Snapshot Vaults', t3: 'Multi-Region Air-Gapped Replication' },
        { dim: 'Vulnerability Audits', t1: 'Monthly Automated Scans', t2: 'Weekly Nessus Scans + Patch Plan', t3: 'Continuous Penetration Verification' },
        { dim: 'Data Encryption', t1: 'TLS 1.3 in Transit', t2: 'AES-256 at Rest + TLS 1.3', t3: 'Hardware TPM 2.0 / Self-Encrypting NVMe' },
        { dim: 'Compliance Alignment', t1: 'Standard Good Practice', t2: 'SOC 2 Type II & ISO 27001 Ready', t3: 'HIPAA PHI & PCI-DSS Level 1 Certified' }
      ]
    },
    facilitySection: {
      preHeader: 'PHYSICAL SECURITY RIGOR',
      header: 'Biometric Mantraps & Steel-Reinforced Data Cages',
      description: 'Digital security is meaningless without physical containment. Our servers reside inside biometric-gated private cages with 24/7 video surveillance.',
      features: [
        'Multi-factor biometric retinal and iris scanner entry points',
        'Anti-tailgating mantrap airlocks with automated weight scale verification',
        '360° high-resolution CCTV telemetry archived off-site for 90 days'
      ],
      cards: [
        {
          title: 'Biometric Access Airlocks',
          desc: 'Dual-factor physical authentication preventing unauthorized cage access.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6U_PL-nQxQiJhrr0MJhTxg2ZqZDqE9dFU9uKAAxRreBPbtIsrW1ItZl5NqYoNScbEJloZhkLTQwFQ_9V_WWn7SMZLcs6nQZTjkWVkkna5gZH17ZOhjRdnZZ6PwzLromDSfvSaa-aFm_1O-RWPbtr9KiZxT8-rrPrI4SAkP21V6Gn7M46DeGxKr3AoYZvGKqg7U3pv5FsYBp_-s8wPBI5rfVg4aTSM0l4rvxFySrfVZ3QjziqJ5GI-pw'
        },
        {
          title: '24/7 Guarded NOC Vault',
          desc: 'Continuous physical and digital monitoring with strict non-disclosure enforcement.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWbMigiNmKM6PK-7nigDgXoquJF3dGCg0ut19b7PXOpghBmVErvXQHuU-f4sminMsB0kYZzklQEVsKippdkSW_M2KIwdADJna0VbJ0gi0r9qt89xnK_TFxVk3g9oGWXUPXrplbeW8-Y2HoRbi67DpEfUIS5X1FGAOlpBhWhm4m-P7KzPP657VZAKhg8n8B4MjlB0_NLRhYyycX0qH6A-QQkUYhjN3YYaDaMcXMthQdzrzhjDZZz2wFiQ'
        }
      ]
    },
    scopingTitle: 'Request Cybersecurity & Hardening Audit',
    scopingSubtitle: 'Submit your security parameters below. A Senior Infrastructure Security Architect will assess your perimeter vulnerabilities and deliver a hardening roadmap within 4 business hours.'
  },
  {
    id: 'managed-it-operations',
    slug: 'managed-it-operations',
    title: 'Managed IT Operations & 24/7 NOC Monitoring',
    shortName: 'Managed NOC & 24/7 Monitoring',
    tagline: '24/7/365 NOC Oversight // Prometheus & Grafana Telemetry // Zero-Downtime Patching',
    category: 'Operations & NOC',
    seoTitle: '24/7 Managed NOC & IT Infrastructure Operations | Geeks on Tap',
    seoDescription: '24/7/365 Network Operations Center (NOC) and server administration. Real-time telemetry, automated alerting, kernel patch management, and rapid incident response.',
    breadcrumb: 'SERVICES / MANAGED IT OPERATIONS & 24/7 MONITORING',
    heroDescription: 'Server hardware degrades, memory fills up, disks fail, and fiber links get severed. You cannot afford to discover outages through angry customer complaints. We provide 24/7/365 proactive NOC oversight, monitoring, patching, and defending your infrastructure every second of the year.',
    stats: [
      { label: 'Incident Response', value: '< 15 Min', note: 'Guaranteed P1 Triage' },
      { label: 'Telemetry Metrics', value: '10,000+/sec', note: 'Prometheus & Grafana' },
      { label: 'Uptime Reliability', value: '99.995%', note: '24/7 Duty Engineers' }
    ],
    telemetryBar: {
      status: 'NOC-OPERATIONS: LIVE',
      datacenters: 'ALL 14 NOC DESKS STAFFED · GLOBAL TELEMETRY ENGINE HEALTHY',
      latency: 'MEDIAN ALERT ESCALATION TIME: 3.4 MINUTES',
      badge1: 'DUTY ENGINEER ONLINE',
      badge2: 'LIVE GRAFANA FEEDS'
    },
    topRackCard: {
      tag: 'NOC MONITORING CONSOLE // POD-ALPHA-LIVE',
      badge: '24/7 SENTINEL',
      temp: 'Active Fleet Health: 99.998% nominal',
      power: 'Monitored Endpoints: 1,420 nodes',
      loadWidth: '98%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3tuKJZBx7aKA6FSzf1JhIZ8CKu9vWyQDACG0Ip7SYckNjynGw0Ev1HAMWBH2ZBB0KIadH7le-e_arKCP9k_UOImUASwsB_o1FrN7AV6RULXKIIFJCtvBZrP84sBJrYeWJesK9HGrpfH7jkRFzZMEOx4cKYYCsbLXQpTbt_eY2lkLSqcnbauBiJaP8mxPmZnKw_o0W_6qil-h_DC6NFGyxvS6zwMt2XlBMH8NcG0kJoqBNwwtjcyVlow'
    },
    tierSection: {
      preHeader: 'MANAGED OPERATIONS CATALOG',
      header: 'Full-Stack NOC & Systems Administration',
      description: 'We handle OS updates, kernel patches, log rotations, disk volume expansions, and real-time anomaly triage so you can focus on building your product.',
      tiers: [
        {
          tierLabel: 'ESSENTIAL MONITORING',
          chassis: 'TELEMETRY ONLY',
          title: 'Infrastructure Observability',
          subtitle: 'Real-time Prometheus, Grafana, and Zabbix metric ingestion with automated alerting.',
          price: '$280',
          priceUnit: '/ cluster / mo',
          priceNote: 'Alert routing to Slack, PagerDuty, or SMS',
          specs: [
            { title: 'Full-Stack Metric Ingestion', desc: 'CPU thermals, disk queue depths, RAM saturation, TCP latency' },
            { title: 'Synthetic Ping & Port Probes', desc: 'Sub-minute polling across multiple global geo-checkpoints' },
            { title: 'Intelligent Alert Filtering', desc: 'Threshold deduplication eliminating alert fatigue' },
            { title: 'Custom Grafana Dashboards', desc: 'Real-time executive and engineering visibility panels' },
            { title: 'Monthly Uptime Audit Reports', desc: 'Verified SLA availability and capacity consumption metrics' }
          ],
          cta: 'Setup Observability',
          isPopular: false
        },
        {
          tierLabel: '24/7 MANAGED NOC',
          chassis: 'FULL-SERVICE MSP',
          title: 'Complete 24/7 NOC & Sysadmin',
          subtitle: 'Around-the-clock proactive engineer response, zero-downtime patching, and hands-on maintenance.',
          price: '$890',
          priceUnit: '/ cluster / mo',
          priceNote: 'Guaranteed 15-minute critical incident dispatch',
          specs: [
            { title: '24/7/365 Duty Engineer Triage', desc: 'Direct investigation by Senior Systems Engineers within 15 mins' },
            { title: 'Zero-Downtime Patch Management', desc: 'Scheduled non-disruptive kernel and firmware upgrades' },
            { title: 'OS & Storage Administration', desc: 'User RBAC, log rotation, cron jobs, and online volume expansion' },
            { title: 'Emergency Hotfix Deployment', desc: 'Live chassis power cycling, optical swaps, and console capture' },
            { title: 'Quarterly Capacity Planning', desc: 'Predictive modeling on disk exhaustion and compute runway' }
          ],
          cta: 'Enroll in 24/7 NOC',
          isPopular: true
        },
        {
          tierLabel: 'DEDICATED NOC POD',
          chassis: 'ENTERPRISE SRE POD',
          title: 'Dedicated Infrastructure Pod',
          subtitle: 'Assigned named systems architects embedded directly into your operational escalation tree.',
          price: 'Custom Scope',
          priceUnit: '',
          priceNote: 'Direct consultation with VP of Systems Engineering',
          specs: [
            { title: 'Dedicated Principal Architect', desc: 'Named systems engineer familiar with your exact topology' },
            { title: 'Custom Runbook Automation', desc: 'Tailored automated incident remediation scripts and playbooks' },
            { title: 'Priority Hardware Sparing Desk', desc: 'Dedicated replacement parts stocked in Ashburn cage inventory' },
            { title: 'Quarterly Architecture Reviews', desc: 'Strategic roadmap audits optimizing performance and cost' },
            { title: 'Custom Financially Backed SLA', desc: 'Contractual penalty-backed uptime and response commitments' }
          ],
          cta: 'Request Dedicated Pod',
          isPopular: false
        }
      ]
    },
    interactiveSection: {
      preHeader: 'LIVE TELEMETRY DEMO',
      header: 'Experience Real-Time Infrastructure Observability',
      description: 'Explore live metric telemetry streams, synthetic health checks, and automated incident triage workflows as executed by our 24/7 NOC.',
      items: {
        prometheus_stream: {
          name: 'Prometheus & Grafana Ingestion Engine',
          badge: 'METRIC TELEMETRY',
          desc: 'High-frequency node_exporter metric ingestion capturing thousands of hardware parameters per second.',
          points: ['Per-core CPU frequency & thermal telemetry', 'NVMe write endurance & SMART wear-leveling tracking', 'TCP socket states and socket buffer exhaustion metrics'],
          terminalLines: [
            { type: 'INFO', text: 'Scraping target cluster endpoints via Prometheus v2.50' },
            { type: 'OK', text: 'Target node-dc-01 (10.0.1.14:9100): 1,240 metric samples scraped in 8ms' },
            { type: 'OK', text: 'NVMe Gen5 wear-level: 99.8% health remaining across all 4 disks' },
            { type: 'INFO', text: 'Grafana dashboard updated: P99 latency holding steady at 1.4ms' },
            { type: 'PROMPT', text: '> Telemetry ingestion active. Zero dropped metrics detected.' }
          ]
        },
        incident_triage: {
          name: 'Automated Incident Triage & Dispatch',
          badge: 'INCIDENT RESPONSE',
          desc: 'Machine-speed anomaly detection routing actionable critical alerts directly to on-duty L3 engineers.',
          points: ['15-minute guaranteed response time for P1 tickets', 'Bypasses customer service queues straight to engineers', 'Automated diagnostic snapshot captured at moment of breach'],
          terminalLines: [
            { type: 'INFO', text: 'Alert triggered: "Node-04 Disk Queue Depth > 120 for 180s"' },
            { type: 'OK', text: 'Automated diagnostic packet gathered: iostat, dmesg, and vmstat logged' },
            { type: 'OK', text: 'Duty Engineer Marcus Vance paged via encrypted NOC bridge' },
            { type: 'INFO', text: 'Root cause identified: Background Ceph scrub rebalanced without disruption' },
            { type: 'PROMPT', text: '> Incident resolved in 4.2 minutes. Ticket #GOT-INC-942 closed.' }
          ]
        },
        kernel_patching: {
          name: 'Zero-Downtime Kernel Patch Manager',
          badge: 'PATCH MANAGEMENT',
          desc: 'Rolling live-patching and maintenance window orchestration ensuring 100% service continuity.',
          points: ['Live kernel patching (kpatch / livepatch) without reboots', 'Cluster drain and live migration before hardware maintenance', 'Automated post-patch regression and benchmark checks'],
          terminalLines: [
            { type: 'INFO', text: 'Staging Linux 6.8.0-45 Security Kernel upgrade on hypervisor node-02' },
            { type: 'OK', text: 'Live-migrating 18 guest VMs to node-03 via 100Gbps InfiniBand (Zero downtime)' },
            { type: 'OK', text: 'Kernel applied & verified. Reboot complete in 42 seconds' },
            { type: 'INFO', text: 'Live-migrating VMs back to primary host node-02' },
            { type: 'PROMPT', text: '> Patching complete. Zero customer packet loss recorded.' }
          ]
        },
        volume_expansion: {
          name: 'Online Storage Volume Expansion',
          badge: 'SYSADMIN OPS',
          desc: 'Dynamic file system resizing and LVM/ZFS pool expansion without unmounting active workloads.',
          points: ['Online resize2fs and xfs_growfs execution', 'ZFS pool expansion with zero IO throttling', 'Real-time quota monitoring and proactive alerts'],
          terminalLines: [
            { type: 'INFO', text: 'Request received: Expand /var/lib/data on srv-db-01 from 4TB to 8TB' },
            { type: 'OK', text: 'Underlying SAN LUN resized to 8,589,934,592 KB' },
            { type: 'OK', text: 'Running online XFS growfs: Superblocks updated across all allocation groups' },
            { type: 'INFO', text: 'Storage volume expanded successfully while handling 4,200 IOPS' },
            { type: 'PROMPT', text: '> File system expanded online. Service remained 100% uninterrupted.' }
          ]
        }
      }
    },
    tableSection: {
      preHeader: 'OPERATIONAL SLA & COVERAGE',
      header: 'Managed IT Operations Specification Sheet',
      description: 'Service level commitments, escalation windows, and operational scope provided under Geeks on Tap Managed IT agreements.',
      badge: '24/7/365 COMMITMENT',
      rows: [
        { dim: 'Coverage Window', t1: 'Standard Business Hours', t2: '24/7/365 Continuous Oversight', t3: '24/7/365 Named Squad' },
        { dim: 'Critical Incident (P1) SLA', t1: '< 2 Hours', t2: '< 15 Minutes Guaranteed', t3: '< 5 Minutes Direct Pager' },
        { dim: 'Metric Ingestion Frequency', t1: '5-Minute Polling', t2: '15-Second Prometheus Resolution', t3: '1-Second Real-Time High-Res' },
        { dim: 'OS & Security Patching', t1: 'Client-Scheduled', t2: 'Monthly Rolling Maintenance Window', t3: 'Continuous Live-Patching' },
        { dim: 'Hardware Hands-on Dispatch', t1: 'Next-Day Dispatch', t2: 'On-Floor Datacenter Techs 24/7', t3: 'Dedicated Spares In-Cabinet' },
        { dim: 'Backup Verification', t1: 'Self-Service', t2: 'Automated Daily Integrity Checks', t3: 'Weekly Mock Recovery Drills' },
        { dim: 'Capacity Planning Audits', t1: 'Annual Overview', t2: 'Quarterly Executive Review', t3: 'Monthly Deep-Dive Capacity Plans' },
        { dim: 'Direct Engineer Line', t1: 'Email Helpdesk', t2: '1-800-IAAS-NOC Direct Desk', t3: 'Dedicated Private Slack / Bridge' }
      ]
    },
    facilitySection: {
      preHeader: 'PHYSICAL NOC COMMAND CENTER',
      header: 'Staffed Engineering Floor & Telemetry Walls',
      description: 'Our Network Operations Center is staffed by certified systems administrators and network engineers who monitor enterprise clusters 24 hours a day.',
      features: [
        'Dedicated NOC floor with live multi-screen telemetry arrays',
        'Direct console access to all colocation vaults and switch fabrics',
        'Redundant power and dual internet feeds ensuring 100% NOC command continuity'
      ],
      cards: [
        {
          title: '24/7 NOC Command Floor',
          desc: 'Live telemetry consoles tracking global cluster health and carrier BGP routes.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3tuKJZBx7aKA6FSzf1JhIZ8CKu9vWyQDACG0Ip7SYckNjynGw0Ev1HAMWBH2ZBB0KIadH7le-e_arKCP9k_UOImUASwsB_o1FrN7AV6RULXKIIFJCtvBZrP84sBJrYeWJesK9HGrpfH7jkRFzZMEOx4cKYYCsbLXQpTbt_eY2lkLSqcnbauBiJaP8mxPmZnKw_o0W_6qil-h_DC6NFGyxvS6zwMt2XlBMH8NcG0kJoqBNwwtjcyVlow'
        },
        {
          title: 'On-Floor Data Center Techs',
          desc: 'Certified technicians standing by in Ashburn for instant physical hot-swaps.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWbMigiNmKM6PK-7nigDgXoquJF3dGCg0ut19b7PXOpghBmVErvXQHuU-f4sminMsB0kYZzklQEVsKippdkSW_M2KIwdADJna0VbJ0gi0r9qt89xnK_TFxVk3g9oGWXUPXrplbeW8-Y2HoRbi67DpEfUIS5X1FGAOlpBhWhm4m-P7KzPP657VZAKhg8n8B4MjlB0_NLRhYyycX0qH6A-QQkUYhjN3YYaDaMcXMthQdzrzhjDZZz2wFiQ'
        }
      ]
    },
    scopingTitle: 'Request 24/7 NOC Management Consultation',
    scopingSubtitle: 'Submit your infrastructure parameters below. A Principal Systems Operations Lead will evaluate your monitoring needs and provide an operational SLA proposal within 4 business hours.'
  },
  {
    id: 'hardware-lifecycle',
    slug: 'hardware-lifecycle',
    title: 'Physical IT Hardware Lifecycle Management & Staging',
    shortName: 'Hardware Lifecycle & Staging',
    tagline: 'Procurement // 72-Hour Burn-in Testing // Rack & Stack // NIST 800-88',
    category: 'Hardware Logistics',
    seoTitle: 'IT Hardware Lifecycle Management & Staging | Geeks on Tap',
    seoDescription: 'Complete physical IT hardware lifecycle management: enterprise procurement, rack-and-stack deployment, burn-in benchmarking, asset tracking, and certified NIST 800-88 decommissioning.',
    breadcrumb: 'SERVICES / HARDWARE LIFECYCLE MANAGEMENT',
    heroDescription: 'Infrastructure is rooted in physical reality: silicon, copper, optical fiber, and thermal dissipation. Modeled after Nova Networks industry-leading lifecycle management, we provide complete end-to-end hardware logistics for dedicated physical infrastructure.',
    stats: [
      { label: 'Burn-in Testing', value: '72 Hours', note: 'Prime95 & MemTest Loops' },
      { label: 'On-Site Spares', value: '100%', note: 'Chassis Component Parity' },
      { label: 'Data Sanitization', value: 'NIST 800-88', note: 'Cryptographic Certificate' }
    ],
    telemetryBar: {
      status: 'STAGING-LAB: ACTIVE',
      datacenters: 'HARDWARE BURN-IN LAB 02 · 28 CHASSIS QUALIFIED THIS WEEK',
      latency: 'HARDWARE DISPATCH SLA: < 4 HOURS ON-SITE',
      badge1: '72H BURN-IN PASSED',
      badge2: 'NIST 800-88 CERTIFIED'
    },
    topRackCard: {
      tag: 'STAGING LAB // CHASSIS-QUAL-BENCH-08',
      badge: 'STRESS TESTED',
      temp: 'MemTest86+: 0 Errors after 72h',
      power: 'Thermal Max Load: 100% pass',
      loadWidth: '100%',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7CkGZFTPI4bAa_QKzrWy8FrnEWqciQ6xMLQoh1L26TfsnA97tAHkInICqEKImCeJPSj0i5ohOzkArzeMvlK3Ij9D51wHixfXsr31S84HgBvglUi4sWxdqlcihTwbK0plhigDRkJvNSSuE19dsiExrVucS-R8dy30s-tdvICJ_stg4FnGxsAeBn9DqCc72axd9BjeQeixqJre3RDiFMrKKUvzsieMvRIAJCdrfgH2dKKYu9NgQNRybA'
    },
    tierSection: {
      preHeader: 'THE 5-STAGE LIFECYCLE DISCIPLINE',
      header: 'Enterprise Hardware Lifecycle Stages',
      description: 'We eliminate the risk of hardware dead-on-arrival (DOA) failures and messy cables with rigorous staging, burn-in qualification, and structured cabling.',
      tiers: [
        {
          tierLabel: 'STAGE 01 & 02',
          chassis: 'SOURCING & LAB STAGING',
          title: 'Procurement & 72-Hour Burn-in',
          subtitle: 'Tier-1 vendor sourcing (Dell EMC, HPE, Supermicro, Cisco) with aggressive 72-hour stress qualification.',
          price: '$350',
          priceUnit: '/ server node',
          priceNote: 'Includes full memory & disk benchmark certificate',
          specs: [
            { title: 'Tier-1 Enterprise Sourcing', desc: 'Direct procurement of enterprise chassis, ECC RAM, and NVMe drives' },
            { title: '72-Hour MemTest86+ Loops', desc: 'Exhaustive memory stress testing catching subtle parity failures' },
            { title: 'Prime95 & mprime CPU Load', desc: 'Continuous 100% thermal and power stress verification' },
            { title: 'NVMe Surface Verification', desc: '100% block write/read verification prior to live racking' },
            { title: 'Asset Tagging & Inventory Logging', desc: 'Serial numbers, MAC addresses, and warranty tracking' }
          ],
          cta: 'Schedule Hardware Staging',
          isPopular: false
        },
        {
          tierLabel: 'STAGE 03 & 04',
          chassis: 'RACK & STACK + SPARES',
          title: 'Rack-and-Stack & On-Site Spares',
          subtitle: 'Precision TIA-942 structured cabling, hot/cold aisle optimization, and 4-hour warranty replacement.',
          price: '$750',
          priceUnit: '/ rack unit / yr',
          priceNote: '100% hardware chassis parity stocked in cage',
          specs: [
            { title: 'TIA-942 Structured Cabling', desc: 'Clean, labeled, color-coded optical and copper patch looms' },
            { title: 'Thermal Airflow Containment', desc: 'Optimized hot/cold aisle management maximizing PSU efficiency' },
            { title: '4-Hour Hardware Replacement SLA', desc: 'Immediate hot-swap of power supplies, fans, or faulty drives' },
            { title: 'Smart PDU Power Balancing', desc: 'Phase balancing across redundant A+B power circuits' },
            { title: 'Remote Hands Execution', desc: 'Physical drive swaps, PCIe riser installation, and serial capture' }
          ],
          cta: 'Deploy Rack & Stack',
          isPopular: true
        },
        {
          tierLabel: 'STAGE 05',
          chassis: 'END-OF-LIFE LOGISTICS',
          title: 'NIST 800-88 Data Sanitization',
          subtitle: 'Cryptographic wiping, physical drive shredding, verifiable certificates of sanitization, and green e-waste recycling.',
          price: 'Custom Scope',
          priceUnit: '',
          priceNote: 'Includes serialized legal certificates of sanitization',
          specs: [
            { title: 'NIST 800-88 Purge Standard', desc: 'Cryptographic erase and multi-pass overwrite of enterprise SSDs' },
            { title: 'Verifiable Sanitization Certificate', desc: 'Legal audit documentation for SOC 2, HIPAA, and ISO 27001' },
            { title: 'Physical Drive Shredding', desc: 'On-site industrial degaussing and shredding for sensitive payloads' },
            { title: 'Certified R2/e-Stewards Recycling', desc: 'Zero-landfill compliant disposal of decommissioned chassis' },
            { title: 'Lease Return & Asset Recovery', desc: 'Clean decommissioning and packaging for vendor return' }
          ],
          cta: 'Request Sanitization Scope',
          isPopular: false
        }
      ]
    },
    interactiveSection: {
      preHeader: 'STAGING LAB BENCHMARK CONSOLE',
      header: 'Explore Hardware Qualification Telemetry',
      description: 'Review our automated hardware burn-in diagnostics, thermal sensor logs, and NIST 800-88 cryptographic sanitization certificates.',
      items: {
        memtest_loop: {
          name: '72-Hour MemTest86+ Stress Loop',
          badge: 'RAM QUALIFICATION',
          desc: 'Exhaustive multi-pass ECC memory stress test verifying every address byte under sustained thermal load.',
          points: ['12-Channel DDR5 4800MHz ECC registered verification', 'Zero bit-flip errors permitted across 72 hours', 'Rowhammer vulnerability and burst testing passed'],
          terminalLines: [
            { type: 'INFO', text: 'Executing MemTest86+ Pro v10.7 on Supermicro Dual AMD Genoa chassis' },
            { type: 'OK', text: 'Memory mapped: 512GB DDR5 Registered ECC (16x 32GB DIMMs)' },
            { type: 'OK', text: 'Pass 16 of 16 completed: 0 single-bit errors, 0 multi-bit errors' },
            { type: 'INFO', text: 'Thermal sensors: All DIMM temperatures stable at 41.8°C' },
            { type: 'PROMPT', text: '> Memory qualification certified: 100% healthy for production deployment.' }
          ]
        },
        prime95_cpu: {
          name: 'Prime95 / mprime 100% CPU Load Test',
          badge: 'THERMAL STRESS',
          desc: 'Maximum power and thermal dissipation test verifying heat sink seating and VRM stability.',
          points: ['192 Cores / 384 Threads pegged at 100% turbo load', 'VRM temperature monitoring under sustained 400W TDP', 'Zero thermal throttling recorded'],
          terminalLines: [
            { type: 'INFO', text: 'Spawning 384 worker threads: Prime95 Small FFT torture test' },
            { type: 'OK', text: 'All 192 Zen 4 cores operating at 3.55GHz Turbo frequency' },
            { type: 'OK', text: 'Package temperature equilibrium reached at 68.4°C (Safe limit: 90°C)' },
            { type: 'INFO', text: 'Cooling fans running at 72% RPM (N+2 fan redundancy verified)' },
            { type: 'PROMPT', text: '> Thermal stress benchmark passed. Chassis ready for high-density rack.' }
          ]
        },
        nist_wipe: {
          name: 'NIST 800-88 Rev 1 Cryptographic Sanitization',
          badge: 'DATA PURGE',
          desc: 'Certified cryptographic erase and sanitize block command execution on enterprise NVMe drives.',
          points: ['Sanitize Crypto Scramble command dispatched to NVMe controller', 'All encryption keys regenerated; raw blocks rendered unrecoverable', 'Serialized certificate of sanitization generated for audit compliance'],
          terminalLines: [
            { type: 'INFO', text: 'Initiating NIST 800-88 Rev 1 Purge on Micron 7450 Pro 3.84TB NVMe' },
            { type: 'OK', text: 'NVMe Sanitize Crypto Erase command acknowledged: 0x00000000 SUCCESS' },
            { type: 'OK', text: 'Drive verified: Random sample of 100,000 sectors returns pseudorandom zeroes' },
            { type: 'INFO', text: 'Generated signed certificate: GOT-NIST-88-2025-SERIAL-94820' },
            { type: 'PROMPT', text: '> Drive permanently sanitized. Ready for redeployment or e-waste recycling.' }
          ]
        },
        rack_cable: {
          name: 'TIA-942 Structured Cabling Quality Check',
          badge: 'PHYSICAL FABRIC',
          desc: 'Fluke optical time-domain reflectometer (OTDR) verification across all fiber patch leads.',
          points: ['Optical return loss > 55 dB on all single-mode links', 'Color-coded yellow single-mode & aqua OM4 fiber standards', 'Clean cable comb routing with Velcro cable management'],
          terminalLines: [
            { type: 'INFO', text: 'Testing 24-strand MPO/LC single-mode fiber trunk from Rack 44 to MMR-01' },
            { type: 'OK', text: 'Fluke OptiFiber Pro OTDR report: Average optical loss 0.18 dB/km' },
            { type: 'OK', text: 'All 24 fiber end-faces inspected per IEC 61300-3-35 (Zero scratches/dust)' },
            { type: 'INFO', text: 'Cable label verified: "DC01-R44-SW01-P01 -> MMR01-PP04-P01"' },
            { type: 'PROMPT', text: '> Structured cabling passed audit. Zero optical attenuation issues.' }
          ]
        }
      }
    },
    tableSection: {
      preHeader: 'HARDWARE LOGISTICS MATRIX',
      header: 'Lifecycle Specifications & Standards',
      description: 'Detailed standards and capabilities delivered by Geeks on Tap hardware logistics and staging teams.',
      badge: 'ENTERPRISE HARDWARE STANDARDS',
      rows: [
        { dim: 'Supported Server Vendors', t1: 'Supermicro, Dell PowerEdge', t2: 'HPE ProLiant, Cisco UCS', t3: 'Custom Whitebox / Open Compute (OCP)' },
        { dim: 'Burn-in Testing Protocol', t1: '24-Hour Basic Qualification', t2: '72-Hour Full Stress Loops', t3: '7-Day Extended Mission-Critical Soak' },
        { dim: 'Memory Testing Standard', t1: 'Standard MemTest Pass', t2: 'MemTest86+ 16-Pass Loop', t3: 'Custom ECC Parity Stress Script' },
        { dim: 'Cabling & Thermal Standard', t1: 'Basic Clean Cable Ties', t2: 'TIA-942 Structured Velcro Looms', t3: 'Full Hot/Cold Aisle Sealed Plenum' },
        { dim: 'Hardware Warranty SLA', t1: 'Next-Business-Day Vendor', t2: '4-Hour On-Site Replacement', t3: 'Immediate In-Cage Chassis Swap' },
        { dim: 'Decommissioning Standard', t1: 'Standard Format / Wipe', t2: 'NIST 800-88 Rev 1 Crypto Purge', t3: 'Physical On-Site Drive Shredding' },
        { dim: 'Compliance Certification', t1: 'Basic Packing Slip', t2: 'Serialized Sanitization Record', t3: 'SOC 2 / HIPAA Signed Asset Certificate' },
        { dim: 'Logistics SLA', t1: 'Standard Ground Shipping', t2: 'White-Glove Courier Delivery', t3: 'Armed Escort Secure Transit' }
      ]
    },
    facilitySection: {
      preHeader: 'HARDWARE STAGING & TEST LABS',
      header: 'Dedicated Staging Labs & Equipment Vaults',
      description: 'Before any server enters a production cage, it passes through our climate-controlled testing lab where power supplies, memory, and controllers undergo rigorous stress loops.',
      features: [
        'Isolated test benches with dedicated clean conditioned power',
        'Automated MemTest, Prime95, and NVMe surface stress test suites',
        'Secure inventory cages stocking enterprise spares with 100% chassis parity'
      ],
      cards: [
        {
          title: 'Lab Staging & Burn-in Suite',
          desc: 'Climate-controlled hardware testing benches qualifying enterprise servers.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZ7CkGZFTPI4bAa_QKzrWy8FrnEWqciQ6xMLQoh1L26TfsnA97tAHkInICqEKImCeJPSj0i5ohOzkArzeMvlK3Ij9D51wHixfXsr31S84HgBvglUi4sWxdqlcihTwbK0plhigDRkJvNSSuE19dsiExrVucS-R8dy30s-tdvICJ_stg4FnGxsAeBn9DqCc72axd9BjeQeixqJre3RDiFMrKKUvzsieMvRIAJCdrfgH2dKKYu9NgQNRybA'
        },
        {
          title: 'On-Site Component Spares Vault',
          desc: 'Stocked replacement modules ready for 4-hour emergency hardware swaps.',
          image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBWbMigiNmKM6PK-7nigDgXoquJF3dGCg0ut19b7PXOpghBmVErvXQHuU-f4sminMsB0kYZzklQEVsKippdkSW_M2KIwdADJna0VbJ0gi0r9qt89xnK_TFxVk3g9oGWXUPXrplbeW8-Y2HoRbi67DpEfUIS5X1FGAOlpBhWhm4m-P7KzPP657VZAKhg8n8B4MjlB0_NLRhYyycX0qH6A-QQkUYhjN3YYaDaMcXMthQdzrzhjDZZz2wFiQ'
        }
      ]
    },
    scopingTitle: 'Request Hardware Lifecycle & Staging Scope',
    scopingSubtitle: 'Submit your hardware logistics or staging parameters below. A Senior Infrastructure Logistics Specialist will provide a detailed proposal and testing plan within 4 business hours.'
  }
];

export const getServiceBySlug = (slug) => {
  if (!slug) return SERVICES_DATA[0];
  const found = SERVICES_DATA.find((s) => s.slug === slug || s.id === slug);
  return found || SERVICES_DATA[0];
};
