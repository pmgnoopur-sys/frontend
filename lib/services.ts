export type ServiceLink = { label: string; href: string };

export type ServiceGroup = {
  heading: string;
  overview: ServiceLink;
  items: ServiceLink[];
  isNew?: boolean;
};

const PROSPECT_PINNACLE = '/our-services/prospect-pinnacle-targeted-b2b-lead-gen-solutions';
const IMPACT_SPHERE = '/services/impact-sphere';
const INBOX_ORACLE = '/services/inbox-oracle-email-marketing-solutions';

export type ServiceParent = {
  key: 'impact-sphere' | 'inbox-oracle';
  name: string;
  category: string;
  href: string;
  description: string;
  subpages: ServiceSubpageEntry[];
};

export type ServiceSubpageEntry = { slug: string; label: string; href?: string };

export const subpageHref = (parent: ServiceParent, s: ServiceSubpageEntry) => s.href ?? `${parent.href}/${s.slug}`;

export const generatedSubpages = (parent: ServiceParent) => parent.subpages.filter((s) => !s.href);

export const serviceParents: Record<ServiceParent['key'], ServiceParent> = {
  'impact-sphere': {
    key: 'impact-sphere',
    name: 'Impact Sphere™',
    category: 'Account-Based Marketing',
    href: IMPACT_SPHERE,
    description:
      "PMG B2B's account based marketing services deliver tailored strategies that identify and engage high value accounts with precision. By leveraging detailed account intelligence, personalized messaging, and strategic nurturing, we help you build meaningful relationships that drive long term results.",
    subpages: [
      { slug: 'target-account-identification', label: 'Target Account Identification', href: '/our-services/target-account-identification' },
      { slug: 'cross-channel-campaigns', label: 'Cross-Channel Campaigns' },
      { slug: 'double-touch-engagement', label: 'Double-Touch Engagement' },
      { slug: 'bant-qualification', label: 'BANT Qualification' },
    ],
  },
  'inbox-oracle': {
    key: 'inbox-oracle',
    name: 'Inbox Oracle™',
    category: 'B2B Email Marketing',
    href: INBOX_ORACLE,
    description:
      "PMG B2B's B2B email marketing services are designed to deliver high impact campaigns that connect with your audience and drive measurable results. From precise targeting to large scale deployment, we ensure your emails land in the right inbox every time.",
    subpages: [{ slug: 'email-campaign-deployment', label: 'Email Campaign Deployment' }],
  },
};

const subLinks = (parent: ServiceParent): ServiceLink[] =>
  parent.subpages.map((s) => ({ label: s.label, href: subpageHref(parent, s) }));

export const serviceGroups: ServiceGroup[] = [
  {
    heading: 'B2B Lead Generation',
    overview: { label: 'Prospect Pinnacle™ overview', href: PROSPECT_PINNACLE },
    items: [
      { label: 'Demand Generation', href: `${PROSPECT_PINNACLE}#demand-generation` },
      { label: 'Content Syndication', href: `${PROSPECT_PINNACLE}#content-syndication` },
      { label: 'MQL & SQL Generation', href: `${PROSPECT_PINNACLE}#mql-sql-generation` },
      { label: 'Appointment Setting', href: `${PROSPECT_PINNACLE}#appointment-setting` },
    ],
  },
  {
    heading: 'Account-Based Marketing',
    overview: { label: 'Impact Sphere™ overview', href: IMPACT_SPHERE },
    items: subLinks(serviceParents['impact-sphere']),
  },
  {
    heading: 'B2B Email Marketing',
    overview: { label: 'Inbox Oracle™ overview', href: INBOX_ORACLE },
    items: subLinks(serviceParents['inbox-oracle']),
  },
  {
    heading: 'B2B Data Solutions',
    overview: { label: 'Data Dynamo™ overview', href: '/services/data-dynamo' },
    items: [],
  },
  {
    heading: 'Conversational Qualified Leads',
    overview: { label: 'CQL overview', href: '/services/conversational-qualified-leads' },
    items: [],
    isNew: true,
  },
];
