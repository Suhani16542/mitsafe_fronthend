/**
 * Standardized JSON-LD Schema Generators for Mitsafe
 * Generates schema.org compliant structured data.
 */

export interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  contactPhone?: string;
  contactEmail?: string;
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  sameAs?: string[];
}

export function generateOrganizationSchema(props?: Partial<OrganizationSchemaProps>) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: props?.name || "Mitsafe",
    alternateName: "Mitsafe Technologies",
    url: props?.url || "https://mitsafe.com",
    logo: props?.logo || "https://mitsafe.com/image.png",
    description:
      props?.description ||
      "Mitsafe engineers custom web platforms, scalable AI integrations, mobile applications, and enterprise cloud solutions.",
    email: props?.contactEmail || "info@mitsafe.com",
    telephone: props?.contactPhone || "+91 6265944392",
    address: props?.address || {
      "@type": "PostalAddress",
      streetAddress: "202 Business island Nipaniya",
      addressLocality: "Indore",
      addressRegion: "MP",
      postalCode: "452010",
      addressCountry: "IN",
    },
    sameAs: props?.sameAs || [
      "https://linkedin.com",
      "https://facebook.com",
      "https://instagram.com",
      "https://x.com",
      "https://youtube.com",
    ],
  };
}

export function generateWebSiteSchema(siteUrl = "https://mitsafe.com", siteName = "Mitsafe") {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description:
      "Enterprise Software Development, Custom AI Automation, Mobile App Engineering, and Cloud Architecture.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/blog?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function generateFaqSchema(faqs: FaqItem[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: crumb.item.startsWith("http") ? crumb.item : `https://mitsafe.com${crumb.item}`,
    })),
  };
}

export interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  providerName?: string;
  providerUrl?: string;
  serviceType?: string;
}

export function generateServiceSchema({
  name,
  description,
  url,
  providerName = "Mitsafe",
  providerUrl = "https://mitsafe.com",
  serviceType,
}: ServiceSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: url.startsWith("http") ? url : `https://mitsafe.com${url}`,
    serviceType: serviceType || name,
    provider: {
      "@type": "Organization",
      name: providerName,
      url: providerUrl,
    },
  };
}

export interface ArticleSchemaProps {
  title: string;
  description?: string;
  url: string;
  imageUrl?: string;
  datePublished?: string;
  dateModified?: string;
  authorName?: string;
  publisherName?: string;
  publisherLogo?: string;
}

export function generateArticleSchema({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName = "Mitsafe Team",
  publisherName = "Mitsafe",
  publisherLogo = "https://mitsafe.com/image.png",
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description: description || title,
    url: url.startsWith("http") ? url : `https://mitsafe.com${url}`,
    image: imageUrl ? [imageUrl] : ["https://mitsafe.com/opengraph-image.png"],
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || datePublished || new Date().toISOString(),
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: {
      "@type": "Organization",
      name: publisherName,
      logo: {
        "@type": "ImageObject",
        url: publisherLogo,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url.startsWith("http") ? url : `https://mitsafe.com${url}`,
    },
  };
}
