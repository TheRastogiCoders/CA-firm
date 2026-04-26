import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { getServiceBySlug } from '../data/servicesData';
import { getInsightBySlug } from '../data/insightsData';

const DEFAULT_TITLE = 'Dwivedi Gupta & Co. | Chartered Accountants in India';
const DEFAULT_DESCRIPTION =
  'Dwivedi Gupta & Co. offers tax advisory, audit and assurance, GST, compliance, corporate law, and financial consulting services for businesses across India.';
const DEFAULT_KEYWORDS =
  'chartered accountant firm india, tax advisory, audit and assurance, GST advisory, company compliance, financial consulting';
const DEFAULT_IMAGE = '/CA India Logo.png';

function getSiteUrl() {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return 'https://www.dgcindia.com';
}

function getMetaByPath(pathname) {
  if (pathname === '/') {
    return {
      title: 'Dwivedi Gupta & Co. | Tax, Audit, GST & Financial Advisory',
      description:
        'Leading chartered accountant firm offering tax planning, audit, GST, compliance, project finance, and strategic advisory services with partner-led engagement.',
      keywords:
        'chartered accountant, CA firm, tax consultant, GST consultant, audit firm, financial advisory india',
    };
  }
  if (pathname === '/about-us') {
    return {
      title: 'About Dwivedi Gupta & Co. | Partner-Led CA Firm',
      description:
        'Learn about Dwivedi Gupta & Co., our vision, values, professional team capability, and client-first approach across tax, audit, and advisory services.',
      keywords: 'about CA firm, chartered accountants team, audit and tax experts',
    };
  }
  if (pathname === '/services') {
    return {
      title: 'CA Services | Tax, Audit, GST, Compliance & Advisory',
      description:
        'Explore our complete service portfolio including tax compliance, audit and assurance, GST advisory, company law, project finance, and strategic consulting.',
      keywords: 'tax services, audit services, GST services, compliance services, CA services india',
    };
  }
  if (pathname.startsWith('/services/')) {
    const slug = pathname.replace('/services/', '');
    const service = getServiceBySlug(slug);
    if (service) {
      return {
        title: `${service.title} Services | Dwivedi Gupta & Co.`,
        description: service.shortDescription,
        keywords: `${service.title.toLowerCase()}, chartered accountant services, ${DEFAULT_KEYWORDS}`,
      };
    }
  }
  if (pathname === '/industries') {
    return {
      title: 'Industries We Serve | Sector-Focused CA Advisory',
      description:
        'Industry-specific tax, audit, compliance, and financial advisory services tailored to sector realities, regulations, and business goals.',
      keywords: 'industry advisory, sector specific CA services, compliance by industry',
    };
  }
  if (pathname === '/team') {
    return {
      title: 'Our Team | Experienced Chartered Accountants',
      description:
        'Meet our team of qualified professionals delivering partner-led tax, audit, compliance, and financial consulting services.',
      keywords: 'CA team, audit experts, tax professionals, accounting firm team',
    };
  }
  if (pathname === '/clients') {
    return {
      title: 'Clients & Engagement Approach | Dwivedi Gupta & Co.',
      description:
        'Discover how we work with clients through structured engagement, transparent reporting, and long-term advisory partnerships.',
      keywords: 'client services CA firm, advisory engagement, audit and compliance support',
    };
  }
  if (pathname === '/insights') {
    return {
      title: 'Insights | Tax, GST, Audit & Compliance Updates',
      description:
        'Read practical insights on taxation, GST, audits, compliance, and financial strategy to make informed business decisions.',
      keywords: 'tax updates, GST insights, audit articles, compliance updates',
    };
  }
  if (pathname.startsWith('/insights/')) {
    const slug = pathname.replace('/insights/', '');
    const insight = getInsightBySlug(slug);
    if (insight) {
      return {
        title: `${insight.title} | Insights`,
        description: insight.summary,
        keywords: `${insight.category.toLowerCase()}, tax insights, compliance guidance, CA blog`,
        type: 'article',
      };
    }
  }
  if (pathname === '/contact') {
    return {
      title: 'Contact Dwivedi Gupta & Co. | CA Advisory Support',
      description:
        'Contact our team for tax, audit, compliance, and financial consulting support. Reach our main office and branch offices with map directions.',
      keywords: 'contact CA firm, tax advisor contact, audit consultant india',
    };
  }
  if (pathname === '/schedule-consultation') {
    return {
      title: 'Schedule a Consultation | Dwivedi Gupta & Co.',
      description:
        'Book a consultation with our CA team to discuss tax, GST, audit, compliance, and financial advisory requirements.',
      keywords: 'book CA consultation, tax consultation, audit advisory appointment',
    };
  }
  if (pathname === '/careers') {
    return {
      title: 'Careers | Join Dwivedi Gupta & Co.',
      description:
        'Explore career opportunities with Dwivedi Gupta & Co. and build your future in taxation, audit, compliance, and advisory services.',
      keywords: 'CA firm careers, audit jobs, tax consultant jobs, accounting careers',
    };
  }
  if (pathname === '/privacy-policy') {
    return {
      title: 'Privacy Policy | Dwivedi Gupta & Co.',
      description: 'Read how we collect, process, protect, and manage personal information across our website and professional interactions.',
      keywords: 'privacy policy, data protection, information security policy',
    };
  }
  if (pathname === '/terms') {
    return {
      title: 'Terms & Conditions | Dwivedi Gupta & Co.',
      description: 'Review the terms governing use of our website, informational content, and professional engagement communications.',
      keywords: 'terms and conditions, website terms, legal terms',
    };
  }
  if (pathname === '/disclaimer') {
    return {
      title: 'Disclaimer | Dwivedi Gupta & Co.',
      description: 'Important legal disclaimer regarding website information and professional reliance limitations.',
      keywords: 'website disclaimer, legal notice, advisory disclaimer',
    };
  }
  if (pathname === '/compliance') {
    return {
      title: 'Compliance Information | Dwivedi Gupta & Co.',
      description: 'View firm registration and compliance information for Dwivedi Gupta & Co.',
      keywords: 'firm compliance details, CA registration information',
    };
  }
  if (pathname === '/sitemap') {
    return {
      title: 'Sitemap | Dwivedi Gupta & Co.',
      description: 'Browse all publicly available pages and resources on the Dwivedi Gupta & Co. website.',
      keywords: 'website sitemap, pages directory',
    };
  }
  return {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    keywords: DEFAULT_KEYWORDS,
  };
}

export default function SeoHead() {
  const { pathname } = useLocation();
  const siteUrl = getSiteUrl();
  const meta = getMetaByPath(pathname);
  const canonical = `${siteUrl}${pathname}`;
  const ogType = meta.type || 'website';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    name: 'Dwivedi Gupta & Co.',
    url: siteUrl,
    image: `${siteUrl}${DEFAULT_IMAGE}`,
    email: 'connect@dgcindia.com',
    telephone: '+91 94158 05906',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Varanasi',
      addressCountry: 'IN',
    },
    areaServed: 'India',
  };

  return (
    <Helmet prioritizeSeoTags>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description || DEFAULT_DESCRIPTION} />
      <meta name="keywords" content={meta.keywords || DEFAULT_KEYWORDS} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Dwivedi Gupta & Co." />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description || DEFAULT_DESCRIPTION} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${siteUrl}${DEFAULT_IMAGE}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description || DEFAULT_DESCRIPTION} />
      <meta name="twitter:image" content={`${siteUrl}${DEFAULT_IMAGE}`} />

      <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
    </Helmet>
  );
}
