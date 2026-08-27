export const site = {
  name: "Asadullah Mohammed",
  shortName: "AM",
  role: "Software Engineer",
  location: "Building software with care",
  summary:
    "I founded ImmigrateOS, co-lead PatientQ, and built PatientQ Mobile — the Plaud companion for clinics. I design and build software that is clear, reliable, and a little obsessive about the details.",
  about: [
    "I'm Asadullah Mohammed, a software engineer. I founded ImmigrateOS — a vertical SaaS operating system for Canadian immigration consultancies — and I co-lead PatientQ, an AI CRM and practice OS that takes a clinic lead from ad to booked visit, chart, and payment. I designed and built PatientQ Mobile, the Plaud hardware companion, as lead developer.",
    "I like work that is easy to reason about, pleasant to use, and built to last: TypeScript across web and native, NestJS APIs, and product direction that holds up in production.",
  ],
  github: "https://github.com/asadullahmohammed",
  email: "",
  nav: [
    { label: "Work", href: "/#work" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
  ],
  skills: [
    "TypeScript",
    "Next.js",
    "React",
    "React Native",
    "Expo",
    "NestJS",
    "GraphQL",
    "PostgreSQL",
    "Prisma",
    "Redis",
    "WorkOS",
    "Auth0",
    "GCP",
    "Vercel",
  ],
} as const;

export const patientq = {
  name: "PatientQ",
  roleLine: "Co-lead, Full-stack",
  href: "/patientq",
  url: "https://patientq.ai",
  urlLabel: "patientq.ai",
  logo: {
    src: "/projects/patientq-logo.png",
    alt: "PatientQ Inc. logo",
    width: 800,
    height: 800,
  },
  oneLiner:
    "AI-powered CRM and practice management for medspas and clinics. Replaces fragmented scheduling, messaging, charting, marketing, and billing with one workspace, plus voice and SMS agents that work the lead pipeline 24/7.",
  card:
    "AI CRM + EMR for medspas and multi-location clinics. One workspace for conversation agents, workflow automation, ads-to-appointment pipelines, smart charting, and practice analytics.",
  problem:
    "Clinics were stitching together an EHR, a check-in app, a CRM, ads, and phones. Front desks spent the day answering wait-time questions and chasing leads. Providers wanted notes without extra after-hours charting.",
  outcome:
    "PatientQ is one platform instead of five tools: wait and capacity so patients pick the right location, every lead worked from ad to appointment, AI outreach on the pipeline, visit recordings turned into SOAP notes, and one dashboard for revenue, conversion, and ROAS.",
  story:
    "A Meta lead comes in. An agent calls or texts. A workflow waits for the reply — event-driven, not a dumb delay — then books the appointment. The visit recording becomes a SOAP note. That is the product in one loop.",
  origin:
    "It started as waitlist software for urgent care. First public customer story: Primary Health Medical Group in Idaho, for check-in and wait times. The platform we shipped is broader — medspa and aesthetics practice management, with HIPAA/PHIPA positioning, Auth0, RBAC, and encryption in transit and at rest.",
  scope:
    "~1 year of active build (client from Jul 2025, server from Nov 2025), ~3.6k commits across the two repos, 30+ backend modules.",
  surfaces: [
    {
      name: "CRM",
      tagline: "AI Powered CRM",
      body: "Day-to-day ops: leads, conversations, AI agents, workflows, ads, and charting.",
    },
    {
      name: "EMR",
      tagline: "The complete EMR for medspa",
      body: "Scheduling, records, billing, and patient comms in one clinical workspace.",
    },
    {
      name: "Sales",
      tagline: "Sales Analytics",
      body: "Internal ops: market analysis, device companies, GHL sync, and forecasting.",
    },
  ],
  backend: {
    name: "Server",
    tagline: "NestJS GraphQL API",
    body: "Domain logic, workers, and integrations behind the three apps.",
  },
  dives: [
    {
      title: "Conversation agents",
      body: "Inbound and outbound voice and SMS agents, auto-generated from location knowledge, covering the outreach that used to sit on the front desk.",
    },
    {
      title: "Workflow builder",
      body: "Visual automations with triggers — Meta lead, pipeline stage, tag, schedule, webhook — then SMS, email, tags, AI text, delays, or wait until the contact responds.",
    },
    {
      title: "Smart charting",
      body: "Patient recordings flow from device to transcript to the right contact and location. Visits become SOAP notes and consultation insights instead of after-hours charting.",
    },
  ],
  features: [
    {
      title: "Practice intelligence",
      items: [
        "Recordings to transcript, contact, and location",
        "Consultation insights from visits",
        "SOAP notes generated from recordings",
      ],
    },
    {
      title: "Communication",
      items: [
        "Unified inbox: SMS, email, WhatsApp, voice",
        "In-browser calling and call history",
        "Scheduled outbound outreach with job queues",
      ],
    },
    {
      title: "Market acquisition",
      items: [
        "Meta ads management and lead ingest",
        "Ad forms and promotions",
        "Website manager (CMS / Webflow)",
      ],
    },
    {
      title: "Business ops",
      items: [
        "Multi-location orgs and RBAC",
        "Contacts, pipelines, appointments",
        "Stripe billing and transactions",
      ],
    },
  ],
  architecture: [
    {
      title: "Apps",
      body: "Next.js CRM, EMR, and Sales on Vercel.",
    },
    {
      title: "API",
      body: "NestJS GraphQL with subscriptions on GCP Cloud Run.",
    },
    {
      title: "Data & jobs",
      body: "PostgreSQL, Redis, and BullMQ workers.",
    },
    {
      title: "Integrations",
      body: "Auth0, Twilio, Retell, Meta, Stripe, calendars.",
    },
  ],
  stack: [
    "Next.js",
    "NestJS",
    "GraphQL",
    "PostgreSQL",
    "Redis",
    "Auth0",
    "Twilio",
    "Retell",
    "GCP",
    "Vercel",
  ],
  roleBullets: [
    "Co-led architecture and delivery of PatientQ, an AI CRM/EMR for multi-location medspa and clinic operations.",
    "Shaped the product from waitlist and check-in into a lead-to-revenue platform: ads → contacts → AI outreach → appointments → charting → billing.",
    "Co-owned the NestJS GraphQL backend: modular domains, BullMQ workers, Auth0, and integrations (Twilio, Retell, Meta, Stripe, calendars).",
    "Co-built the Next.js CRM: unified inbox, visual workflow builder, conversation agents, SOAP charting from visit recordings, ads, and RBAC.",
    "Designed multi-tenant access: location vs portfolio vs internal staff, with resource-level permissions.",
    "Production path: Vercel for the apps, GCP Cloud Run for the API and worker, Postgres and Redis underneath.",
  ],
} as const;

export const patientqMobile = {
  name: "PatientQ Mobile",
  roleLine: "Lead Mobile Developer",
  href: "/patientq-mobile",
  url: "https://patientq.ai",
  urlLabel: "patientq.ai",
  kicker: "Plaud consultation companion · iOS & Android",
  logo: {
    src: "/projects/patientq-logo.png",
    alt: "PatientQ Inc. logo",
    width: 800,
    height: 800,
  },
  oneLiner:
    "PatientQ Mobile is a clinician companion app that pairs with a Plaud hardware recorder, syncs consultation audio from the device, and turns visits into searchable, speaker-labeled transcripts for the clinic.",
  card: "React Native / Expo companion for Plaud NotePro and NotePin. Clinicians record visits on the hardware; the app pairs over Bluetooth, syncs audio (BLE or Wi-Fi), uploads for AI transcription with speaker labels, and lets staff review, search, and assign recordings to patients.",
  problem:
    "Clinics needed a consultation recording companion — not a booking or payments app. The visit is captured on a Plaud NotePro or NotePin, not the phone mic. The phone has to find the recorder, get the file, get it transcribed with speaker labels, and let staff review it, including when the network drops mid-sync.",
  outcome:
    "PatientQ Mobile pairs over Bluetooth, syncs audio over BLE or faster Wi-Fi, uploads it for AI transcription, and lets staff search transcripts, rename speakers, and assign the recording to a patient. The same recording later feeds SOAP notes / Smart Charting in the PatientQ CRM — the system the phone talks to, not work claimed as this app.",
  story:
    "The clinician records on the Plaud. The phone finds it over Bluetooth, downloads the file, uploads it for transcription, and a status chip walks the visit from On device to Ready. Staff search the transcript, rename speakers, and assign it to a patient.",
  audience:
    "For clinicians and clinic staff. Accounts are provisioned by an admin (sign-in only, Auth0). Recordings are scoped to a clinic location.",
  related: {
    label: "PatientQ CRM case study",
    href: "/patientq",
  },
  surfaces: [
    {
      name: "Hardware",
      tagline: "Plaud NotePro / NotePin",
      body: "The visit is recorded on the device. The phone discovers sessions; it does not capture the consult on its mic.",
    },
    {
      name: "Companion app",
      tagline: "What I built",
      body: "Pairing, sync pipeline, transcription UX, notifications, and native iOS/Android release.",
    },
    {
      name: "CRM",
      tagline: "System the phone talks to",
      body: "Metadata, contacts, and transcription status over GraphQL. Later: SOAP notes / Smart Charting — not this app.",
    },
  ],
  backend: {
    name: "PatientQ backend",
    tagline: "GraphQL API",
    body: "Clinic identity, recording metadata, transcription jobs, and contacts. Audio does not go through these servers.",
  },
  pipeline: [
    "On device",
    "Downloading",
    "Uploading",
    "Transcribing",
    "Ready / Failed",
  ],
  dives: [
    {
      title: "Hardware to cloud",
      body: "BLE or Wi-Fi export, queued download, multipart S3 upload, STT submit, then poll until Ready. A second path — server webhook and push — still lands the transcript if the app is backgrounded.",
    },
    {
      title: "Native Plaud bridge",
      body: "A custom native SDK bridge, not Expo Go: scan, bind, handshake, file list, transfer progress, firmware, and storage. Physical NotePro and NotePin only.",
    },
    {
      title: "Offline, and audio off our servers",
      body: "A persisted AsyncStorage queue pauses when offline and retries with backoff. Audio never transits PatientQ servers — the phone uploads to Plaud S3 with presigned URLs. The app and backend keep metadata and the transcript. One recording per device session and location; delete does not invite a duplicate upload (re-transcribe to revive).",
    },
  ],
  features: [
    {
      title: "Pairing & devices",
      items: [
        "Auth0 sign-in (clinic accounts only; admin-provisioned)",
        "First-run onboarding: permissions → BLE scan → pair → success",
        "Pair Plaud NotePro / NotePin; pair more devices later",
        "Device dashboard: connection, battery, storage, firmware, tags",
        "Location switcher, dark/light theme, firmware updates, unpair",
      ],
    },
    {
      title: "Sync",
      items: [
        "Record on hardware; phone discovers sessions and syncs",
        "Auto sync and manual sync; Wi-Fi fast transfer for long visits",
        "Offline-aware queue: pause when offline, retry with backoff",
        "Status chips: On device → Downloading → Uploading → Transcribing → Ready / Failed",
      ],
    },
    {
      title: "Transcripts",
      items: [
        "Speakers, search, rename speakers, copy/share, in-app audio playback",
        "Assign recording to a patient (contact) from the phone",
        "Re-transcribe failed or timed-out jobs",
      ],
    },
    {
      title: "Alerts",
      items: [
        "Push and in-app alerts when a transcript is ready or failed",
        "Tap opens the recording (patientq://recording/:id)",
      ],
    },
  ],
  architecture: [
    {
      title: "App",
      body: "React Native, Expo SDK 55, TypeScript. React Navigation (tabs + stacks). Auth0 native.",
    },
    {
      title: "Hardware",
      body: "Native Plaud BLE / Wi-Fi SDK via a custom bridge. Physical device only.",
    },
    {
      title: "Transfer",
      body: "BLE + local-network Wi-Fi, then multipart upload to Plaud S3 (presigned URLs).",
    },
    {
      title: "Release",
      body: "EAS native iOS/Android (com.patientq). Expo push, local alerts, deep links.",
    },
  ],
  stack: [
    "React Native",
    "Expo",
    "TypeScript",
    "BLE / IoT",
    "Auth0",
    "GraphQL",
    "Offline queues",
    "Push notifications",
    "Healthcare / HIPAA-aware mobile",
  ],
  roleIntro:
    "Lead Mobile Developer — PatientQ (Plaud companion). Owned the iOS/Android app from architecture through App Store–ready native builds.",
  roleBullets: [
    "Led development of PatientQ’s iOS/Android companion app (Expo/React Native) for Plaud hardware: BLE pairing, Wi-Fi fast transfer, and an offline-resilient sync queue.",
    "Implemented the end-to-end recording flow: device export → multipart cloud upload → AI transcription with diarization → in-app transcript player, search, and speaker labeling.",
    "Wrote a native Plaud SDK bridge (not Expo Go): scan, bind, handshake, file list, transfer progress, firmware, storage.",
    "Designed offline-first sync (AsyncStorage queue, exponential backoff, “Waiting for network”).",
    "Kept PHI off the PatientQ API path for audio: phone uploads directly to Plaud S3; app and backend store metadata and transcript. No secrets on device — the Plaud token is minted by the backend.",
    "Handled clinic identity: one recording per device session and location; blocked accidental re-upload after delete (re-transcribe to revive).",
    "Dual completion path: client polling + server webhook/push so transcripts still land if the app is backgrounded.",
    "Shipped production native builds with Auth0, GraphQL, push notifications, and deep links; Bluetooth, Location, and Local Network permissions, Wi-Fi entitlements, TestFlight/EAS.",
  ],
  scope:
    "I designed and built the PatientQ mobile app (Plaud integration) as lead developer — not the CRM, Smart Charting, or backend as a whole. Those are the system this phone talks to.",
} as const;

export const immigrateos = {
  name: "ImmigrateOS",
  roleLine: "Founder & Builder",
  href: "/immigrateos",
  url: "https://immigrateos.com",
  urlLabel: "immigrateos.com",
  logo: {
    src: "/projects/immigrateos-icon.png",
    alt: "ImmigrateOS icon",
    width: 800,
    height: 800,
  },
  links: [
    { label: "Product", href: "https://immigrateos.com" },
    { label: "Features", href: "https://immigrateos.com/features" },
    { label: "About", href: "https://immigrateos.com/about" },
  ],
  oneLiner:
    "The operating system for immigration consulting firms — case files, documents, billing, AI, and a client portal in one platform, built for RCICs instead of a generic CRM with a visa sticker on it.",
  card: "Vertical SaaS OS for Canadian immigration firms. Replaces CRM, spreadsheets, Dropbox, and email with one case-file-first platform: pipeline, versioned documents, billing, embedded AI, and a separate client portal.",
  problem:
    "RCICs and consultancies of roughly 5–50 staff juggle Express Entry, PNP, study and work permits, and sponsorship. Generic CRMs track deals. They don’t track a document checklist, a submission deadline, or who last touched a file. In a regulated industry, “we think it happened that way” isn’t enough.",
  insight:
    "Start from the case file, not the contact record. One task model and one appointment model, reused across dashboard, calendar, and case tabs. Case stages are firm-configurable. Documents are versioned, never overwritten. AI assists; it never replaces consultant judgment.",
  story:
    "Lead in, case opens, playbook builds the checklist. The client uploads through the portal — AI checks type, expiry, and name — then the firm gets a one-click submission package for IRCC or USCIS. ImmigrateOS packages. The firm files.",
  honesty:
    "Founded and built end to end. Live product, demo-led access — no public sign-up, and no invented user counts.",
  business:
    "B2B SaaS in CAD: Solo $199 / Professional $399 / Business $799 per month. Unlimited clients and portal users. Target: RCIC-licensed firms and multi-program consultancies drowning in admin.",
  surfaces: [
    {
      name: "Marketing",
      tagline: "Prospects",
      body: "Positioning, pricing, and the demo funnel at immigrateos.com.",
    },
    {
      name: "Firm app",
      tagline: "Consultants & staff",
      body: "Pipeline, cases, documents, billing, AI, and admin at app.immigrateos.com.",
    },
    {
      name: "Client portal",
      tagline: "Applicants",
      body: "Invite-only status, uploads, messages, payments, and e-sign — separate auth from staff.",
    },
  ],
  backend: {
    name: "API",
    tagline: "NestJS backend",
    body: "Multi-tenant domain logic, queues, and integrations at api.immigrateos.com.",
  },
  dives: [
    {
      title: "Case-file first",
      body: "Leads become clients, clients become cases. Cases carry program-aware checklists and deadlines on a firm-configurable pipeline — not a contact record with a visa sticker.",
    },
    {
      title: "Versioned documents",
      body: "Re-uploads create versions; nothing is overwritten. The client portal handles status, uploads, messages, payments, and e-sign in English and French, with AI checks for type, expiry, and name mismatch.",
    },
    {
      title: "AI inside the workflow",
      body: "Daily briefings, checklist generation, copilot, extraction, and draft replies live on the case — not a chatbot page. A human reviews before anything goes to a client or a government portal.",
    },
  ],
  features: [
    {
      title: "Pipeline",
      body: "Leads → clients → cases on firm-configurable Kanban.",
    },
    {
      title: "Versioned documents",
      body: "Re-uploads create versions. AI extraction for type, expiry, and name mismatch.",
    },
    {
      title: "Client portal",
      body: "Status, uploads, messages, payments, e-sign. EN/FR. Separate auth from staff.",
    },
    {
      title: "Embedded AI",
      body: "Briefings, checklists, copilot, drafts — human review required.",
    },
    {
      title: "Immigration billing",
      body: "Service fees vs government fees, payment plans, Stripe/Square, trust accounting.",
    },
    {
      title: "Compliance",
      body: "Audit log, RBAC, document versioning, Canadian data residency, PIPEDA-oriented controls.",
    },
    {
      title: "Schedule",
      body: "One task model, calendar sync, branded booking pages.",
    },
    {
      title: "Integrations",
      body: "Stripe, Square, QuickBooks, Xero, Drive/Dropbox/OneDrive, DocuSign, Twilio, Slack, calendars.",
    },
  ],
  architecture: [
    {
      title: "Four apps",
      body: "Website, firm client, portal, and server — four repos, one product.",
    },
    {
      title: "API",
      body: "NestJS, Prisma, PostgreSQL, Redis/BullMQ on GCP Cloud Run.",
    },
    {
      title: "Identity",
      body: "WorkOS AuthKit with separate staff and client projects.",
    },
    {
      title: "Residency",
      body: "GCP Montreal/Toronto, Cloud SQL, Memorystore, Cloud Storage.",
    },
  ],
  stack: [
    "Next.js",
    "NestJS",
    "Prisma",
    "PostgreSQL",
    "Redis",
    "WorkOS",
    "Stripe",
    "Vercel AI SDK",
    "GCP",
    "Vercel",
  ],
  roleBullets: [
    "Defined the product: immigration OS vs generic CRM, with a case-file-first data model.",
    "Designed the information architecture: Pipeline, Delivery, Schedule, Money, Intelligence, Admin.",
    "Built the full stack: Next.js firm app and client portal, NestJS API, Prisma/PostgreSQL.",
    "Shipped auth (WorkOS, separate staff vs client identity), billing (Stripe), files (GCS), and queues (Redis/BullMQ).",
    "Designed AI as workflow actions, not a chatbot page — human review before send.",
    "Positioned, priced, and marketed: site, SEO content, security/legal pages, demo funnel.",
    "Infra: Vercel for the apps, Google Cloud for Cloud Run, Cloud SQL, Memorystore, and Cloud Storage, with Infisical for secrets.",
  ],
} as const;

export const projects = [
  {
    name: immigrateos.name,
    role: immigrateos.roleLine,
    href: immigrateos.href,
    blurb: immigrateos.card,
    stack: immigrateos.stack.slice(0, 6),
    image: immigrateos.logo,
    accent: "immigrateos" as const,
  },
  {
    name: patientq.name,
    role: patientq.roleLine,
    href: patientq.href,
    blurb: patientq.card,
    stack: patientq.stack.slice(0, 6),
    image: patientq.logo,
    accent: "patientq" as const,
  },
  {
    name: patientqMobile.name,
    role: patientqMobile.roleLine,
    href: patientqMobile.href,
    blurb: patientqMobile.card,
    stack: patientqMobile.stack.slice(0, 6),
    image: patientqMobile.logo,
    accent: "patientq" as const,
  },
];
