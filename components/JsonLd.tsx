export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://vikramadityaroy.com/#person",
        "name": "Vikramaditya Roy",
        "jobTitle": "Principal Wealth Advisor & Managing Partner",
        "description": "SEBI Registered Investment Advisor (INA00019482), CFA Charterholder, and CFP specialist advising on Ultra-HNI family offices, tech founder liquidity, and corporate treasuries.",
        "url": "https://vikramadityaroy.com",
        "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85",
        "knowsAbout": [
          "Wealth Management",
          "Family Office Structuring",
          "Private Family Trusts",
          "Discretionary Portfolio Management",
          "Cross-Border NRI Taxation",
          "Alternative Investments (AIF)",
          "Corporate Treasury Optimization"
        ],
        "worksFor": {
          "@type": "FinancialService",
          "@id": "https://vikramadityaroy.com/#organization"
        }
      },
      {
        "@type": "FinancialService",
        "@id": "https://vikramadityaroy.com/#organization",
        "name": "Vikramaditya Roy Private Wealth Office",
        "url": "https://vikramadityaroy.com",
        "logo": "https://vikramadityaroy.com/logo.png",
        "image": "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1000&q=85",
        "description": "Fee-only fiduciary wealth advisory and family office management for founders, executives, and multi-generational business families.",
        "telephone": "+91-22-6900-7690",
        "email": "concierge@vikramadityaroy.com",
        "priceRange": "₹₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Suite 1402, The Capital, G-Block, Bandra Kurla Complex",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "postalCode": "400051",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.0657,
          "longitude": 72.8687
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "09:00",
          "closes": "19:00"
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://vikramadityaroy.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How does your fee-only fiduciary model differ from banks and mutual fund distributors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Standard banks and distributors earn 1.0% to 2.2% annual trailing commissions hidden inside the regular mutual funds and insurance policies they sell you. We operate as a SEBI Registered Investment Advisor (RIA) charging a transparent fixed fee / AUM basis points, while ensuring you invest strictly in Direct plans and institutional direct equity feeds. All distributor rebates are 100% credited back to you."
            }
          },
          {
            "@type": "Question",
            "name": "Do you take custody of client funds or hold my assets?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Never. 100% of your assets, shares, and bonds remain strictly in your own institutional Demat and bank account (e.g. HDFC, ICICI, Zerodha, or Institutional Custodians). We operate purely on a discretionary or advisory mandate via Power of Attorney (POA) for execution, ensuring maximum bankruptcy protection and custody transparency."
            }
          },
          {
            "@type": "Question",
            "name": "What is the minimum portfolio size required to engage?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our comprehensive multi-asset discretionary advisory typically requires a minimum investable corpus of ₹2 Crores (or $250,000 for NRIs). For standalone Private Family Trust structuring and Estate Succession charters, we engage on custom project retainers irrespective of immediate liquidity."
            }
          },
          {
            "@type": "Question",
            "name": "How do you handle cross-border tax compliance for NRI clients?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We work closely with affiliated cross-border chartered accountants and tax attorneys specializing in US-India DTAA, PFIC compliance, FEMA regulations, and RNOR transition planning to ensure your domestic growth never creates foreign audit liabilities."
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://vikramadityaroy.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Expertise",
            "item": "https://vikramadityaroy.com/#expertise"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Compounding Simulator",
            "item": "https://vikramadityaroy.com/#calculator"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Private Consultation",
            "item": "https://vikramadityaroy.com/#consultation"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
