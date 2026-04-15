import {
  PhoneCall,
  CalendarCheck,
  Handshake,
  TrendingUp,
  ClipboardList,
  Headset,
  Briefcase,
  Megaphone,
  Palette,
  Video,
  Bot,
  LucideIcon,
} from "lucide-react";

export type RoleCategory =
  | "Sales"
  | "Operations"
  | "Admin"
  | "Marketing"
  | "Creative"
  | "Technical";

export type RoleFaq = {
  question: string;
  answer: string;
};

export type RoleRegion = {
  name: "Philippines" | "Latin America" | "Egypt";
  salary: number;
  why: string[];
};

export type RoleData = {
  title: string;
  slug: string;
  category: RoleCategory;
  salaryRange: string;
  icon: LucideIcon;
  shortDescription: string;
  cardSummary: string;
  heroDescription: string;
  overview: string[];
  idealFor: string[];
  commonChallenges: string[];
  supportBenefits: string[];
  whyHireWithVita: string[];
  hiringSteps: string[];
  faqs: RoleFaq[];
  regions: RoleRegion[];
  usSalaryRange: [number, number];
};

export const roles: RoleData[] = [
  {
    title: "Cold Callers",
    slug: "cold-callers",
    category: "Sales",
    salaryRange: "$800 - $1200",
    icon: PhoneCall,
    shortDescription:
      "Outbound specialists who initiate conversations, qualify interest, and consistently feed your pipeline with new opportunities.",
    cardSummary:
      "High-volume outreach talent for lead generation, first-touch conversations, and pipeline building.",
    heroDescription:
      "Build a stronger outbound engine with disciplined cold callers who can handle volume, follow scripts, overcome objections, and keep your team in front of more qualified prospects every week.",
    overview: [
      "Cold calling still works when it is done with consistency, structure, and good follow-up. The issue for many companies is not whether outbound works. It is whether there is enough focused time and capacity to execute it properly.",
      "A great cold caller helps your business create more conversations, revive dormant lists, and open new opportunities without distracting founders or closers from high-value work.",
      "At Vita Talent, we source cold callers who can work from proven scripts, track outcomes, update CRMs, and stay coachable while maintaining a strong activity pace.",
    ],
    idealFor: [
      "Real estate teams building seller or buyer pipelines",
      "Service businesses needing daily prospecting volume",
      "Founders who want more qualified conversations without doing first-touch outreach themselves",
      "Sales teams that need a dedicated top-of-funnel specialist",
    ],
    commonChallenges: [
      "Inconsistent outbound activity leads to an unpredictable pipeline.",
      "Closers waste time doing first-touch calls instead of focusing on qualified opportunities.",
      "Lead lists go stale because there is no one consistently working them.",
      "Follow-up breaks down when outreach is tracked manually or inconsistently.",
      "Founders become the bottleneck because prospecting depends on their time and energy.",
    ],
    supportBenefits: [
      "Maintain daily outreach volume without pulling revenue leaders away from closing.",
      "Qualify leads faster and move interested prospects into the next stage quickly.",
      "Keep lists warm with structured follow-up sequences and better CRM hygiene.",
      "Create a repeatable outbound process that can be measured, coached, and improved.",
      "Free up internal sales staff to spend more time on conversations that are already qualified.",
    ],
    whyHireWithVita: [
      "We source candidates with strong spoken English, resilience, and coachability.",
      "We match talent to your workflow, script style, market, and outreach expectations.",
      "We help you hire at global rates while maintaining strong communication standards.",
      "We support the process from sourcing and screening through onboarding.",
      "We focus on practical fit, not just resumes, so your hire can contribute quickly.",
    ],
    hiringSteps: [
      "Define your target audience, offer, script style, and daily call expectations.",
      "We source and vet cold callers with relevant outreach or sales support experience.",
      "You review shortlisted candidates and interview the best fits.",
      "We help you onboard the hire into your scripts, CRM, and call workflow.",
    ],
    faqs: [
      {
        question: "Can they follow our script exactly?",
        answer:
          "Yes. We can source cold callers who are comfortable working from a structured script while still sounding natural and adapting to live objections.",
      },
      {
        question: "Can they update our CRM after each call?",
        answer:
          "Yes. Most candidates we source for this role are expected to log call outcomes, notes, dispositions, and follow-up timing inside your existing system.",
      },
      {
        question: "Do they only call, or can they also text and email?",
        answer:
          "Many cold callers can support multi-channel outreach, depending on your process and the tools you use.",
      },
    ],
    regions: [
      {
        name: "Philippines",
        salary: 950,
        why: [
          "Strong English communication and a mature support-services talent pool.",
          "Great fit for structured scripts, CRM-driven workflows, and high activity consistency.",
          "Popular option for companies prioritizing affordability and reliability.",
        ],
      },
      {
        name: "Latin America",
        salary: 1150,
        why: [
          "Excellent fit for teams needing closer timezone overlap with North America.",
          "Strong option for bilingual outreach in English and Spanish.",
          "Well suited for fast feedback loops and same-day collaboration.",
        ],
      },
      {
        name: "South Africa",
        salary: 1100,
        why: [
          "Strong spoken English and professional communication standards.",
          "Great option for teams seeking polished call presence at efficient rates.",
          "Often well aligned for customer-facing sales support roles.",
        ],
      },
    ],
    usSalaryRange: [3200, 4800],
  },
  {
    title: "Appointment Setters",
    slug: "appointment-setters",
    category: "Sales",
    salaryRange: "$1000 - $1300",
    icon: CalendarCheck,
    shortDescription:
      "Meeting-generation specialists who qualify interest, manage calendars, and keep your sales pipeline moving.",
    cardSummary:
      "Dedicated setters who turn lead flow into booked calls and cleaner sales calendars.",
    heroDescription:
      "Hire appointment setters who can turn outreach and inbound interest into booked conversations, cleaner calendars, and more consistent momentum for your closing team.",
    overview: [
      "Appointment setters sit in the critical middle ground between lead generation and closing. Their job is not just to book calls. It is to protect your calendar by making sure the right people reach the next step.",
      "The right setter improves conversion by qualifying, following up, rescheduling, and creating a smoother handoff to your sales process.",
      "We source appointment setters who are organized, responsive, and confident handling lead communication across multiple channels.",
    ],
    idealFor: [
      "Sales teams whose closers are overloaded with qualification work",
      "Agencies, consultancies, and service providers booking discovery calls",
      "Real estate teams setting acquisitions or buyer appointments",
      "Founders who want a more reliable pre-close process",
    ],
    commonChallenges: [
      "Leads slip through the cracks because there is no dedicated scheduling owner.",
      "Sales reps waste time chasing no-shows and reschedules.",
      "Calendars get filled with low-quality meetings that do not convert.",
      "Response times are slow, causing hot leads to cool off.",
      "Follow-up becomes inconsistent when multiple people handle the same inbox or pipeline.",
    ],
    supportBenefits: [
      "Book more qualified calls without overloading closers.",
      "Improve response speed and lead nurturing across channels.",
      "Reduce no-shows through confirmations, reminders, and follow-up discipline.",
      "Create cleaner scheduling workflows and more predictable weekly calendars.",
      "Improve conversion by ensuring only better-fit prospects move forward.",
    ],
    whyHireWithVita: [
      "We source setters with strong communication, organization, and follow-up habits.",
      "We help match candidates to your tone, sales process, and qualification rules.",
      "We support global hiring with efficient compensation ranges and strong screening.",
      "We focus on practical role-fit so your hire can ramp faster.",
      "We stay aligned with your hiring goals from sourcing through onboarding.",
    ],
    hiringSteps: [
      "Outline your offer, qualification rules, booking flow, and target channels.",
      "We source and vet appointment setters who fit your process and communication style.",
      "You interview finalists and choose the strongest fit.",
      "We support onboarding into your calendar tools, CRM, and call-flow expectations.",
    ],
    faqs: [
      {
        question: "Can they qualify leads before booking?",
        answer:
          "Yes. Many appointment setters can work from a checklist or script to confirm fit before placing someone on the calendar.",
      },
      {
        question: "Can they handle follow-up after missed calls?",
        answer:
          "Yes. Most teams use setters to reschedule no-shows, confirm attendance, and keep momentum after missed meetings.",
      },
      {
        question: "Can they use our calendar and CRM tools?",
        answer:
          "Yes. We can source candidates comfortable with common scheduling and CRM systems.",
      },
    ],
    regions: [
      {
        name: "Philippines",
        salary: 1100,
        why: [
          "Excellent fit for structured communication, reminders, and process-driven booking work.",
          "Strong option for businesses looking for reliable daily follow-up.",
          "Cost-efficient for teams scaling top-of-funnel scheduling support.",
        ],
      },
      {
        name: "Latin America",
        salary: 1250,
        why: [
          "Timezone overlap makes live communication and quick handoffs easier.",
          "Strong fit for businesses with U.S. sales calendars and fast-moving pipelines.",
          "Bilingual talent is an added benefit for some markets.",
        ],
      },
      {
        name: "Egypt",
        salary: 1200,
        why: [
          "Professional communication and good call presence for customer-facing work.",
          "Strong fit for premium service businesses wanting polished interactions.",
          "Good option when phone confidence matters heavily.",
        ],
      },
    ],
    usSalaryRange: [3800, 5200],
  },
  {
    title: "Acquisition Managers",
    slug: "acquisition-managers",
    category: "Sales",
    salaryRange: "$1300 - $2000",
    icon: Handshake,
    shortDescription:
      "Deal-focused professionals who qualify opportunities, negotiate with confidence, and move prospects toward signed contracts.",
    cardSummary:
      "Revenue-driving acquisitions talent for negotiations, seller conversations, and offer management.",
    heroDescription:
      "Scale your deal flow with acquisition managers who can handle negotiations, lead follow-up, objection handling, and structured pipeline management without sacrificing consistency.",
    overview: [
      "Acquisition managers are a major lever for growth in real estate and other high-touch sales environments. The right person does far more than just take calls. They manage conversations, build trust, solve objections, and move opportunities toward agreement.",
      "When founders or owners handle all negotiations themselves, growth usually slows. A strong acquisitions hire helps remove that bottleneck.",
      "We source acquisition managers who are persuasive, organized, calm under pressure, and comfortable managing a more complex sales cycle.",
    ],
    idealFor: [
      "Real estate investors and wholesalers",
      "Businesses with longer consultative sales cycles",
      "Teams needing stronger qualification and negotiation coverage",
      "Owners who need to step back from daily deal conversations",
    ],
    commonChallenges: [
      "Leads are generated, but not worked deeply enough to convert into deals.",
      "Owners become the only person capable of handling negotiations.",
      "Follow-up on warm opportunities becomes inconsistent during busy periods.",
      "Potential deals are lost due to weak objection handling or poor timing.",
      "Pipeline visibility suffers when negotiations are managed informally.",
    ],
    supportBenefits: [
      "Create more consistency in qualification, negotiation, and deal progression.",
      "Reduce founder dependence for seller or prospect conversations.",
      "Improve follow-up depth on warm leads that need multiple touches.",
      "Bring more structure to pipelines, notes, and next-step management.",
      "Support revenue growth by increasing the percentage of opportunities that move forward.",
    ],
    whyHireWithVita: [
      "We source for communication skill, emotional control, and process discipline.",
      "We help you evaluate candidates for both persuasion and operational follow-through.",
      "We support efficient global hiring for a role that directly affects revenue.",
      "We help align the hire with your specific offer and negotiation style.",
      "We stay involved through the hiring flow so onboarding is smoother.",
    ],
    hiringSteps: [
      "Clarify your target lead type, offer framework, KPIs, and negotiation expectations.",
      "We source and screen acquisition managers with relevant closing or negotiating experience.",
      "You meet shortlist candidates and assess communication and fit.",
      "We help transition the new hire into your pipeline, scripts, and offer process.",
    ],
    faqs: [
      {
        question: "Can they negotiate directly with sellers or prospects?",
        answer:
          "Yes. That is one of the primary functions of this role, provided you set the pricing and approval guardrails they should follow.",
      },
      {
        question: "Can they manage follow-up over multiple weeks?",
        answer:
          "Yes. Strong acquisition managers are especially valuable because they can stay disciplined through longer, more complex follow-up cycles.",
      },
      {
        question: "Do they need real estate experience?",
        answer:
          "For real estate businesses, direct experience is helpful, but a strong background in consultative sales and negotiation can also translate well.",
      },
    ],
    regions: [
      {
        name: "Philippines",
        salary: 1450,
        why: [
          "Strong support for real estate and sales operations ecosystems.",
          "Cost-effective option for teams wanting to add negotiation capacity.",
          "Good fit when process discipline and CRM consistency matter.",
        ],
      },
      {
        name: "Latin America",
        salary: 1800,
        why: [
          "Excellent for teams wanting closer real-time collaboration with U.S. hours.",
          "Strong fit for fast-moving negotiation and same-day communication.",
          "Bilingual candidates can be especially valuable in some markets.",
        ],
      },
      {
        name: "Egypt",
        salary: 1700,
        why: [
          "Strong professional communication and polished customer-facing presence.",
          "Good option for premium or high-trust sales interactions.",
          "Well suited for teams prioritizing verbal confidence and relationship-building.",
        ],
      },
    ],
    usSalaryRange: [5000, 7000],
  },
  {
    title: "Disposition Managers",
    slug: "disposition-managers",
    category: "Sales",
    salaryRange: "$1400 - $2000",
    icon: TrendingUp,
    shortDescription:
      "Buy-side and pipeline specialists who market deals, manage buyer relationships, and help maximize exit outcomes.",
    cardSummary:
      "Disposition support for buyer outreach, deal packaging, and stronger assignment outcomes.",
    heroDescription:
      "Hire disposition managers who can organize buyer communication, package deals effectively, and help your team move inventory faster while improving deal clarity and consistency.",
    overview: [
      "Disposition managers play a crucial role in turning signed opportunities into completed outcomes. They coordinate with buyers, communicate deal details clearly, and help drive efficient movement after the acquisition side is done.",
      "Without strong disposition support, teams lose speed, buyer trust, and sometimes margin.",
      "We source disposition managers who are organized, responsive, and capable of managing multiple moving parts with professionalism.",
    ],
    idealFor: [
      "Wholesalers and real estate operators moving regular inventory",
      "Teams with active buyer lists that need better communication",
      "Businesses that need more consistency after contracts are secured",
      "Operators who want cleaner coordination between acquisitions and disposition",
    ],
    commonChallenges: [
      "Deals are secured, but buyers are not engaged quickly enough.",
      "Buyer communication is inconsistent, reducing trust and repeat activity.",
      "Information is shared manually and gets lost between team members.",
      "The acquisition team stays stuck on downstream coordination tasks.",
      "Deals move slower because no one owns packaging and buyer follow-up.",
    ],
    supportBenefits: [
      "Improve buyer communication speed and professionalism.",
      "Create more structure around deal packaging and next steps.",
      "Reduce internal handoff problems between acquisitions and disposition.",
      "Help inventory move faster with better follow-up and clearer buyer management.",
      "Protect margin by keeping momentum high after contracts are signed.",
    ],
    whyHireWithVita: [
      "We source for communication, organization, and post-contract coordination ability.",
      "We help match hires to your buyer communication style and workflow.",
      "We support global hiring at efficient rates for high-value operational roles.",
      "We screen for follow-through, not just surface-level experience.",
      "We help simplify the path from role scope to productive onboarding.",
    ],
    hiringSteps: [
      "Define your buyer process, communication channels, and coordination tasks.",
      "We source and vet disposition managers for organization and stakeholder communication.",
      "You interview the strongest candidates and select the best fit.",
      "We help the hire ramp into your deal flow, systems, and buyer process.",
    ],
    faqs: [
      {
        question: "Can they manage both buyer outreach and internal coordination?",
        answer:
          "Yes. Many disposition managers are strongest when they can manage both external buyer communication and internal next-step execution.",
      },
      {
        question: "Can they maintain our buyer list and follow-up system?",
        answer:
          "Yes. This role often includes keeping buyer data current, communicating opportunities, and tracking responses.",
      },
      {
        question: "Is this role only for real estate wholesalers?",
        answer:
          "It is most common there, but the same skill set can support businesses that need strong downstream pipeline coordination and deal handoff management.",
      },
    ],
    regions: [
      {
        name: "Philippines",
        salary: 1500,
        why: [
          "Strong support talent pool for documentation and structured follow-up.",
          "Cost-efficient option for businesses with repeatable buyer workflows.",
          "Good fit for detail-heavy operational support after the contract stage.",
        ],
      },
      {
        name: "Latin America",
        salary: 1850,
        why: [
          "Useful for teams needing fast collaboration and same-day coordination.",
          "Strong option for tighter alignment with U.S.-based buyers and operators.",
          "Can support quick communication in active deal environments.",
        ],
      },
      {
        name: "Egypt",
        salary: 1750,
        why: [
          "Professional client-facing communication with strong written clarity.",
          "Good fit for businesses wanting polished external interactions.",
          "Helpful when buyer trust and presentation matter heavily.",
        ],
      },
    ],
    usSalaryRange: [5200, 7200],
  },
  {
    title: "Transaction Coordinators",
    slug: "transaction-coordinators",
    category: "Operations",
    salaryRange: "$1200 - $1500",
    icon: ClipboardList,
    shortDescription:
      "Process-driven coordinators who keep deadlines, documents, and communication organized from agreement to completion.",
    cardSummary:
      "Detail-heavy operational support for deadlines, documents, and cleaner closings.",
    heroDescription:
      "Keep transactions moving with organized coordinators who manage timelines, paperwork, follow-ups, and process visibility so nothing important gets missed during the most sensitive stages.",
    overview: [
      "Transaction coordinators bring order to one of the most deadline-sensitive parts of the business. They help manage communication, documentation, next steps, and timeline integrity when there is a lot at stake.",
      "When this role is missing, important items get buried under email threads, scattered checklists, and last-minute panic.",
      "We source transaction coordinators who are detail-oriented, process-driven, and calm under pressure.",
    ],
    idealFor: [
      "Real estate teams managing multiple active deals",
      "Operators who want fewer deadline misses and cleaner process ownership",
      "Businesses needing stronger paperwork and follow-up support",
      "Teams that want to reduce internal chaos around closing workflows",
    ],
    commonChallenges: [
      "Documents and signatures are scattered across email and manual notes.",
      "Deadlines are missed because no one is actively owning the transaction timeline.",
      "Team members duplicate work or assume someone else handled a task.",
      "Clients, buyers, or vendors do not get timely updates.",
      "Last-minute issues cause stress because there is weak process visibility.",
    ],
    supportBenefits: [
      "Keep files organized and timelines visible across active deals.",
      "Reduce deadline risk through better checklist ownership and follow-up.",
      "Improve communication consistency across all transaction stakeholders.",
      "Create cleaner documentation and less internal confusion.",
      "Support smoother closings without overloading leadership.",
    ],
    whyHireWithVita: [
      "We source for attention to detail, organization, and process reliability.",
      "We help match candidates to your pace, tools, and transaction complexity.",
      "We support cost-efficient hiring for a role that protects execution quality.",
      "We focus on operational follow-through, not just general admin experience.",
      "We help you move from search to onboarding with less friction.",
    ],
    hiringSteps: [
      "Define your transaction stages, key handoffs, and documentation needs.",
      "We source and vet candidates with relevant coordination or admin process experience.",
      "You review and interview shortlisted applicants.",
      "We support onboarding into your transaction systems, templates, and workflows.",
    ],
    faqs: [
      {
        question: "Can they coordinate with title, escrow, or vendors?",
        answer:
          "Yes. Many transaction coordinators are used specifically to centralize communication with all parties involved in moving the file forward.",
      },
      {
        question: "Can they work inside our existing checklist or project tools?",
        answer:
          "Yes. We can source candidates comfortable with process tools, spreadsheets, CRMs, and task systems.",
      },
      {
        question: "Do they need industry-specific experience?",
        answer:
          "That helps, but strong process discipline and detail orientation are often just as important for success in this role.",
      },
    ],
    regions: [
      {
        name: "Philippines",
        salary: 1300,
        why: [
          "Excellent fit for detail-oriented administrative coordination.",
          "Strong option for organized documentation and follow-up work.",
          "Highly efficient for teams handling multiple active files.",
        ],
      },
      {
        name: "Latin America",
        salary: 1450,
        why: [
          "Useful for closer timezone alignment and same-day communication.",
          "Strong fit for businesses with live coordination needs.",
          "Can be especially helpful for client-facing transactional roles.",
        ],
      },
      {
        name: "Egypt",
        salary: 1400,
        why: [
          "Strong written communication and professional stakeholder handling.",
          "Good option for businesses wanting polished coordination.",
          "Well suited for documentation-heavy roles requiring consistency.",
        ],
      },
    ],
    usSalaryRange: [4200, 5800],
  },
  {
    title: "Lead Managers",
    slug: "lead-managers",
    category: "Operations",
    salaryRange: "$1200 - $1500",
    icon: Headset,
    shortDescription:
      "Pipeline support specialists who qualify, organize, and nurture leads so your team can respond faster and convert more opportunities.",
    cardSummary:
      "Lead handling support for qualification, follow-up, CRM hygiene, and pipeline organization.",
    heroDescription:
      "Hire lead managers who can keep your pipeline organized, handle inbound and outbound communication, and make sure valuable leads are worked with consistency and speed.",
    overview: [
      "Lead managers bring order to your front-end pipeline. They respond, qualify, tag, route, and follow up so that valuable leads do not sit untouched while your team is busy elsewhere.",
      "In many businesses, lead quality is not the real issue. Lead handling is. Slow response and inconsistent follow-up quietly destroy conversion.",
      "We source lead managers who are responsive, detail-oriented, and comfortable living inside communication tools and CRMs every day.",
    ],
    idealFor: [
      "Real estate or sales teams handling lots of inbound interest",
      "Companies wanting better CRM hygiene and faster response times",
      "Operators who need someone to triage, qualify, and organize leads",
      "Teams losing opportunities through weak follow-up discipline",
    ],
    commonChallenges: [
      "Inbound leads do not get contacted fast enough.",
      "Pipelines become messy because data is incomplete or outdated.",
      "Sales reps spend too much time sorting instead of selling.",
      "Warm leads go cold due to inconsistent follow-up.",
      "No one owns the day-to-day health of the lead queue.",
    ],
    supportBenefits: [
      "Improve response speed and lead handling consistency.",
      "Keep CRM records cleaner and easier to act on.",
      "Support qualification and routing so closers get better conversations.",
      "Create more discipline around follow-up timelines.",
      "Reduce pipeline chaos and improve front-end visibility.",
    ],
    whyHireWithVita: [
      "We source for responsiveness, organization, and communication discipline.",
      "We help match candidates to your sales process and lead workflow.",
      "We support efficient hiring for a role that protects revenue quality.",
      "We screen for real execution habits, not just general customer-service backgrounds.",
      "We simplify the handoff from role design to onboarding.",
    ],
    hiringSteps: [
      "Define your lead sources, qualification rules, and routing logic.",
      "We source and vet lead managers aligned with your workflow and hours.",
      "You meet shortlisted candidates and select the strongest fit.",
      "We help you onboard the hire into your CRM, inboxes, and follow-up cadence.",
    ],
    faqs: [
      {
        question: "Can they handle both inbound and outbound lead follow-up?",
        answer:
          "Yes. Many lead managers support both directions, as long as your workflow and expectations are clear.",
      },
      {
        question: "Can they assign leads to our sales team?",
        answer:
          "Yes. Routing and tagging are common responsibilities for this role.",
      },
      {
        question: "Will they improve CRM cleanliness too?",
        answer:
          "Yes. A strong lead manager usually improves data quality, follow-up tracking, and status visibility at the same time.",
      },
    ],
    regions: [
      {
        name: "Philippines",
        salary: 1250,
        why: [
          "Great fit for structured communication and queue management.",
          "Strong option for CRM-heavy support roles.",
          "Very efficient for businesses needing consistent daily follow-up.",
        ],
      },
      {
        name: "Latin America",
        salary: 1450,
        why: [
          "Useful when closer timezone overlap is important.",
          "Good fit for high-speed, same-day response needs.",
          "Helpful for bilingual lead handling in some markets.",
        ],
      },
      {
        name: "Egypt",
        salary: 1400,
        why: [
          "Strong phone and written communication quality.",
          "Good option for teams that want polished customer-facing interactions.",
          "Helpful for businesses balancing support quality with affordability.",
        ],
      },
    ],
    usSalaryRange: [4200, 5600],
  },
  {
    title: "Executive Assistant",
    slug: "executive-assistant",
    category: "Admin",
    salaryRange: "$1000 - $1500",
    icon: Briefcase,
    shortDescription:
      "High-trust support professionals who protect your time, organize priorities, and keep daily operations moving.",
    cardSummary:
      "Executive support for calendar management, follow-up, inboxes, research, and day-to-day operational leverage.",
    heroDescription:
      "Get your time back with an executive assistant who can manage calendars, inboxes, priorities, follow-ups, and operational admin so you can stay focused on the work that grows the business.",
    overview: [
      "Most founders do not need more hours. They need fewer low-leverage decisions and fewer administrative interruptions. A strong executive assistant creates that leverage.",
      "This role works best when it becomes a force multiplier: organizing communication, managing routine tasks, and keeping priorities visible.",
      "We source executive assistants who are proactive, organized, discreet, and capable of owning recurring administrative responsibilities with reliability.",
    ],
    idealFor: [
      "Founders and operators stretched across too many small tasks",
      "Leaders whose inbox and calendar are constant bottlenecks",
      "Growing businesses needing more executive support without a high local payroll cost",
      "Teams that need stronger follow-up and admin consistency around leadership",
    ],
    commonChallenges: [
      "Leaders spend too much time on scheduling, inbox management, and follow-up.",
      "Important tasks live in too many places and get revisited repeatedly.",
      "Priorities shift without a clear system for task capture and execution.",
      "Travel, meetings, and admin logistics create unnecessary drag.",
      "Growth is limited because leaders are buried in coordination work.",
    ],
    supportBenefits: [
      "Protect executive time by removing repetitive admin responsibilities.",
      "Improve follow-up consistency across calendar, inbox, and internal tasks.",
      "Create more order around priorities, scheduling, and communication.",
      "Reduce mental load so leadership can focus on strategic work.",
      "Help the business operate more smoothly without adding unnecessary complexity.",
    ],
    whyHireWithVita: [
      "We source for judgment, organization, discretion, and communication.",
      "We help match assistants to the pace and style of the leader they support.",
      "We support efficient hiring for one of the highest-leverage support roles.",
      "We screen for practical execution, not just polished profiles.",
      "We support onboarding so the relationship gets productive faster.",
    ],
    hiringSteps: [
      "Define what the assistant should own daily, weekly, and monthly.",
      "We source and vet executive assistants aligned with your needs and working style.",
      "You interview finalists and select the best fit.",
      "We help the new hire ramp into your systems, communication preferences, and priorities.",
    ],
    faqs: [
      {
        question: "Can they manage both personal and business admin?",
        answer:
          "Yes, many executive assistants can support both, as long as the scope is clearly defined from the start.",
      },
      {
        question: "Can they work across multiple tools and calendars?",
        answer:
          "Yes. This role often involves coordinating across email, calendars, documents, task systems, and messaging platforms.",
      },
      {
        question: "How quickly can an executive assistant create leverage?",
        answer:
          "Usually very quickly, especially if you define recurring responsibilities, communication preferences, and handoff rules early.",
      },
    ],
    regions: [
      {
        name: "Philippines",
        salary: 1150,
        why: [
          "Excellent talent pool for structured administrative support.",
          "Strong fit for inboxes, calendars, documentation, and recurring task ownership.",
          "Very efficient for founders wanting leverage without high local cost.",
        ],
      },
      {
        name: "Latin America",
        salary: 1400,
        why: [
          "Strong option when real-time collaboration matters.",
          "Good fit for executives needing same-day support with U.S. overlap.",
          "Helpful for businesses serving English- and Spanish-speaking markets.",
        ],
      },
      {
        name: "Egypt",
        salary: 1350,
        why: [
          "Strong written communication and polished support presence.",
          "Useful when professionalism and executive-facing maturity are priorities.",
          "Great option for premium support at efficient rates.",
        ],
      },
    ],
    usSalaryRange: [4200, 6500],
  },
  {
    title: "Media Buyers",
    slug: "media-buyers",
    category: "Marketing",
    salaryRange: "$1500 - $3000",
    icon: Megaphone,
    shortDescription:
      "Performance-oriented marketers who help manage campaigns, improve efficiency, and support scalable demand generation.",
    cardSummary:
      "Paid acquisition talent for campaign execution, optimization, reporting, and growth support.",
    heroDescription:
      "Hire media buyers who can manage paid traffic campaigns, monitor performance, improve efficiency, and support a more disciplined growth engine across your acquisition channels.",
    overview: [
      "Media buyers affect both growth and profitability. When campaigns are unmanaged or poorly monitored, ad spend turns into noise. The right media buyer brings attention, structure, and optimization to paid acquisition.",
      "This role is not just about launching ads. It is about creative testing, spend decisions, reporting, and reacting to performance trends fast enough to protect results.",
      "We source media buyers who are analytical, organized, and comfortable owning campaign execution inside your broader growth strategy.",
    ],
    idealFor: [
      "Businesses already spending on paid traffic",
      "Founders who need better visibility and discipline around performance marketing",
      "Teams wanting to scale acquisition more intentionally",
      "Operators who need campaign support without immediately building a large local marketing team",
    ],
    commonChallenges: [
      "Campaign performance drops because no one is watching the account closely enough.",
      "Creative tests are inconsistent and learnings are not documented.",
      "Ad spend grows without clear reporting or accountability.",
      "Founders become the fallback operator for campaign adjustments.",
      "Traffic generation is disconnected from pipeline, sales, or downstream outcomes.",
    ],
    supportBenefits: [
      "Create more consistency in campaign management and optimization.",
      "Improve reporting, testing, and decision speed.",
      "Reduce founder dependence for daily paid traffic oversight.",
      "Support growth with better structure around creative, targeting, and spend.",
      "Bring more operational rigor to performance marketing.",
    ],
    whyHireWithVita: [
      "We source for analytical thinking, platform familiarity, and accountability.",
      "We help align candidates with your traffic channels and growth goals.",
      "We support cost-efficient hiring for a specialized role with real leverage.",
      "We screen for practical execution, not just surface-level marketing language.",
      "We support the hiring journey from role scoping through onboarding.",
    ],
    hiringSteps: [
      "Clarify your channels, budget range, KPIs, and internal marketing structure.",
      "We source and vet media buyers aligned with your campaign needs.",
      "You review and interview qualified candidates.",
      "We help the new hire ramp into your accounts, reporting flow, and creative process.",
    ],
    faqs: [
      {
        question: "Can they manage campaigns and reporting?",
        answer:
          "Yes. Many media buyers handle both account management and regular performance reporting.",
      },
      {
        question: "Can they coordinate with designers or editors too?",
        answer:
          "Yes. This role often works closely with creative support talent to test new concepts and improve results.",
      },
      {
        question: "Do they need to be strategy-heavy or execution-heavy?",
        answer:
          "That depends on your setup. We can source more execution-focused candidates or stronger owner-type operators depending on the role scope.",
      },
    ],
    regions: [
      {
        name: "Philippines",
        salary: 1800,
        why: [
          "Strong option for structured campaign execution and reporting support.",
          "Cost-efficient for businesses that already have strategy leadership in place.",
          "Useful for teams wanting more consistent account management.",
        ],
      },
      {
        name: "Latin America",
        salary: 2600,
        why: [
          "Good fit for businesses wanting closer collaboration across U.S. hours.",
          "Useful when campaign reviews and fast iteration need more overlap.",
          "Strong option for growth teams with daily performance feedback loops.",
        ],
      },
      {
        name: "Egypt",
        salary: 2200,
        why: [
          "Strong professional communication and analytical support potential.",
          "Good fit for teams wanting marketing support with polished reporting.",
          "Helpful balance between capability and cost-efficiency.",
        ],
      },
    ],
    usSalaryRange: [5500, 9000],
  },
  {
    title: "Graphic Designers",
    slug: "graphic-designers",
    category: "Creative",
    salaryRange: "$1200 - $2000",
    icon: Palette,
    shortDescription:
      "Visual creatives who produce branded assets for ads, social media, presentations, sales material, and internal design needs.",
    cardSummary:
      "Design support for ads, social content, brand collateral, and day-to-day creative production.",
    heroDescription:
      "Hire graphic designers who can create polished visual assets for your brand, campaigns, client delivery, and internal needs while keeping your creative output consistent and on-brand.",
    overview: [
      "Design demand grows faster than most teams expect. Ads, landing pages, presentations, social posts, PDFs, pitch decks, thumbnails, internal documents, and brand assets all need attention.",
      "Without dedicated design support, creative work either gets rushed or becomes a bottleneck for launch speed.",
      "We source graphic designers who can work quickly, follow brand direction, and support the visual needs that keep your business looking professional.",
    ],
    idealFor: [
      "Brands producing regular content or ads",
      "Service businesses that need polished client-facing material",
      "Marketing teams with more design demand than internal capacity",
      "Founders who want better creative consistency without hiring locally first",
    ],
    commonChallenges: [
      "Creative requests pile up because there is no dedicated design owner.",
      "Brand consistency breaks down across channels and assets.",
      "Ads and content go live slower because design depends on founders or freelancers.",
      "Internal teams create low-quality visuals just to keep up.",
      "Important campaigns underperform because creative quality is inconsistent.",
    ],
    supportBenefits: [
      "Increase creative output without sacrificing consistency.",
      "Improve turnaround time for recurring design needs.",
      "Keep brand presentation more polished across channels.",
      "Support marketers, operators, and founders with faster asset production.",
      "Reduce the cost and chaos of ad hoc design work.",
    ],
    whyHireWithVita: [
      "We source designers with real production ability, not just portfolios that look polished at first glance.",
      "We help match visual style, speed, and communication fit.",
      "We support efficient hiring for a role that improves execution across many teams.",
      "We screen for responsiveness and practical workflow compatibility.",
      "We help you hire in a way that supports long-term creative consistency.",
    ],
    hiringSteps: [
      "Define your asset needs, tools, design style, and production volume.",
      "We source and vet designers aligned with your brand and workflow.",
      "You review portfolios, interview finalists, and choose the strongest fit.",
      "We help onboard the designer into your tool stack, brand system, and request flow.",
    ],
    faqs: [
      {
        question: "Can they work from our existing brand system?",
        answer:
          "Yes. In fact, many designers work best when they can apply and extend an existing visual identity across repeated asset types.",
      },
      {
        question: "Can they support both marketing and internal design work?",
        answer:
          "Yes. Many teams use one designer across ads, decks, documents, social graphics, and basic landing page assets.",
      },
      {
        question: "Do they need to be full-stack creatives?",
        answer:
          "Not always. Some teams need fast production support, while others need more conceptual creative thinking. We can help you hire for either.",
      },
    ],
    regions: [
      {
        name: "Philippines",
        salary: 1450,
        why: [
          "Strong creative support talent pool for recurring brand and marketing assets.",
          "Very cost-efficient for businesses producing content frequently.",
          "Good fit for teams that need reliable day-to-day design bandwidth.",
        ],
      },
      {
        name: "Latin America",
        salary: 1850,
        why: [
          "Strong visual design talent with closer timezone alignment.",
          "Useful when creative collaboration happens live with U.S. teams.",
          "Good fit for feedback-heavy creative environments.",
        ],
      },
      {
        name: "Egypt",
        salary: 1700,
        why: [
          "Good design quality with strong written communication.",
          "Helpful for teams wanting a balance of professionalism and creative support.",
          "Useful for client-facing and premium brand environments.",
        ],
      },
    ],
    usSalaryRange: [4500, 7000],
  },
  {
    title: "Video Editors",
    slug: "video-editors",
    category: "Creative",
    salaryRange: "$1000 - $1700",
    icon: Video,
    shortDescription:
      "Editors who turn raw footage into polished content for ads, short-form clips, branded videos, training, and internal media.",
    cardSummary:
      "Editing support for social clips, ads, branded content, and repeatable media production.",
    heroDescription:
      "Hire video editors who can transform raw footage into clean, branded, conversion-focused content so your team can publish more consistently without sacrificing quality.",
    overview: [
      "Video output is one of the fastest ways to increase visibility, trust, and content velocity, but editing often becomes the bottleneck.",
      "When editing is delayed, campaigns launch late, social posting becomes inconsistent, and valuable footage sits unused.",
      "We source editors who can work inside your content style, follow briefs, and keep your video pipeline moving.",
    ],
    idealFor: [
      "Brands creating short-form or ad creative regularly",
      "Teams with footage but not enough editing capacity",
      "Founders who want more consistent social and content output",
      "Marketing teams needing dependable video turnaround",
    ],
    commonChallenges: [
      "Raw footage piles up faster than it gets turned into publishable content.",
      "Editing quality is inconsistent across platforms and formats.",
      "Marketers spend too much time doing rough cuts or feedback cleanup.",
      "Posting frequency drops because content takes too long to prepare.",
      "Ad testing suffers when new variations are slow to produce.",
    ],
    supportBenefits: [
      "Increase publishing consistency and content volume.",
      "Reduce turnaround time for repeatable edits and variations.",
      "Support paid ads, organic content, and internal media at the same time.",
      "Improve quality control through a dedicated editing process.",
      "Free up marketing and founder time for strategy instead of production work.",
    ],
    whyHireWithVita: [
      "We source editors based on actual production fit and workflow reliability.",
      "We help match editing style, turnaround expectations, and tooling.",
      "We support efficient global hiring for a role that directly affects content output.",
      "We screen for communication and revision-handling, not just montage quality.",
      "We help you build a repeatable creative support function.",
    ],
    hiringSteps: [
      "Define your content types, editing style, software, and expected turnaround.",
      "We source and screen editors aligned with your production needs.",
      "You review samples, interview top candidates, and choose the best fit.",
      "We help the editor onboard into your content workflow and review process.",
    ],
    faqs: [
      {
        question: "Can they edit short-form content for Reels, TikTok, and Shorts?",
        answer:
          "Yes. Many teams hire video editors specifically for short-form clipping, repackaging, and volume production.",
      },
      {
        question: "Can they create ad variations too?",
        answer:
          "Yes. Editors often support ad iteration by producing multiple versions, cuts, hooks, and formats from the same source footage.",
      },
      {
        question: "Can they follow a clear brand style guide?",
        answer:
          "Yes. That usually improves consistency and ramp speed significantly.",
      },
    ],
    regions: [
      {
        name: "Philippines",
        salary: 1250,
        why: [
          "Strong fit for repeatable content production and support.",
          "Very cost-efficient for social and marketing output at scale.",
          "Useful for teams wanting more publishing volume without local payroll pressure.",
        ],
      },
      {
        name: "Latin America",
        salary: 1550,
        why: [
          "Good fit for feedback-heavy editing collaboration during U.S. hours.",
          "Useful when quick revisions matter.",
          "Strong option for brands with fast-moving content teams.",
        ],
      },
      {
        name: "Egypt",
        salary: 1450,
        why: [
          "Professional communication and solid creative support potential.",
          "Good balance of quality and collaboration for branded content teams.",
          "Helpful for businesses wanting polished execution at efficient rates.",
        ],
      },
    ],
    usSalaryRange: [4000, 6200],
  },
  {
    title: "Automation Experts",
    slug: "automation-experts",
    category: "Technical",
    salaryRange: "$1200 - $1700",
    icon: Bot,
    shortDescription:
      "Systems-minded builders who create workflows, reduce manual work, and improve operational efficiency through automation.",
    cardSummary:
      "Workflow and systems support for automation, integration, process cleanup, and time savings.",
    heroDescription:
      "Hire automation experts who can connect tools, streamline repetitive processes, reduce manual work, and help your business operate with more consistency and less internal drag.",
    overview: [
      "Manual work compounds as a business grows. What starts as a few repeated tasks becomes hours of avoidable labor across operations, lead handling, reporting, and communication.",
      "Automation experts help remove that friction by designing workflows that reduce errors, accelerate handoffs, and improve visibility.",
      "We source automation specialists who think systematically, communicate clearly, and can turn messy manual processes into cleaner operating systems.",
    ],
    idealFor: [
      "Businesses buried in repetitive admin and handoffs",
      "Sales teams with disconnected tools and weak process flow",
      "Operators wanting cleaner workflows without building an internal technical team first",
      "Companies trying to scale without adding avoidable headcount",
    ],
    commonChallenges: [
      "Manual tasks eat up time across sales, operations, and support.",
      "Important data lives in separate tools and does not sync cleanly.",
      "Reporting is slow because information has to be gathered manually.",
      "Handoffs fail because workflows depend too heavily on memory.",
      "Team members repeat tasks that should already be automated.",
    ],
    supportBenefits: [
      "Reduce repetitive admin work and operational drag.",
      "Connect systems and improve process visibility across tools.",
      "Lower the chance of missed handoffs and manual errors.",
      "Speed up reporting, lead routing, and recurring task execution.",
      "Create stronger operational leverage without unnecessary complexity.",
    ],
    whyHireWithVita: [
      "We source candidates with workflow logic, systems thinking, and communication ability.",
      "We help match the hire to your tech stack and automation priorities.",
      "We support cost-efficient global hiring for highly leveraged technical support.",
      "We screen for practical problem-solving instead of buzzword-heavy profiles.",
      "We help you find talent that can actually simplify operations.",
    ],
    hiringSteps: [
      "Map the processes you want to improve and the tools involved.",
      "We source and vet automation experts aligned with your systems and workflow needs.",
      "You interview the best matches and confirm technical fit.",
      "We help you onboard the hire into your stack, priorities, and documentation.",
    ],
    faqs: [
      {
        question: "Can they work with multiple tools and integrations?",
        answer:
          "Yes. That is usually the heart of the role: connecting systems and reducing manual work between them.",
      },
      {
        question: "Do they only build automations, or can they also improve process design?",
        answer:
          "The strongest automation experts do both. They spot broken workflows first, then build systems that fix them.",
      },
      {
        question: "Can this role help non-technical teams?",
        answer:
          "Absolutely. Some of the biggest gains come from simplifying repetitive work for sales, admin, support, and operations teams.",
      },
    ],
    regions: [
      {
        name: "Philippines",
        salary: 1400,
        why: [
          "Strong option for process support and structured technical execution.",
          "Cost-efficient for businesses improving internal systems step by step.",
          "Good fit when documentation and workflow discipline are important.",
        ],
      },
      {
        name: "Latin America",
        salary: 1650,
        why: [
          "Useful when live collaboration with U.S. teams is important.",
          "Strong option for iterative build-and-feedback environments.",
          "Helpful for businesses making continuous system improvements.",
        ],
      },
      {
        name: "Egypt",
        salary: 1550,
        why: [
          "Good professional communication with solid systems-oriented support potential.",
          "Strong choice for businesses wanting technical clarity and reliability.",
          "Balances affordability with polished collaboration.",
        ],
      },
    ],
    usSalaryRange: [4800, 7000],
  },
];

export const roleCategories: RoleCategory[] = [
  "Sales",
  "Operations",
  "Admin",
  "Marketing",
  "Creative",
  "Technical",
];

export function getRoleBySlug(slug: string) {
  return roles.find((role) => role.slug === slug);
}

export function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

export function getUsAverage(range: [number, number]) {
  return Math.round((range[0] + range[1]) / 2);
}

export function getSavingsPercent(usAverage: number, offshoreValue: number) {
  return Math.round(((usAverage - offshoreValue) / usAverage) * 100);
}
