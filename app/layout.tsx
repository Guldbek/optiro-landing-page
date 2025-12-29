import '@mantine/core/styles.css';
import './globals.css';
import React from 'react';
import { mantineHtmlProps, MantineProvider } from '@mantine/core';
import { theme } from '../theme';

export const metadata = {
  title: 'Optiro - Projektstyring & Ressourceplanlægning',
  description: 'Styr på projekter, timer og ressourcer for konsulenter, IT, arkitekter og håndværkere. Tidsregistrering og budgetoverblik. Prøv gratis.',
  keywords: 'projektstyring, ressourceplanlægning, tidsregistrering, konsulent projektstyring, IT projektstyring, arkitekt planlægning, timeregistrering, medarbejder planlægning, projekt software, timer tracking, kapacitetsplanlægning',
  authors: [{ name: 'Optiro ApS' }],
  creator: 'Optiro ApS',
  publisher: 'Optiro ApS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Optiro - Projektstyring & Ressourceplanlægning',
    description: 'Styr på projekter, timer og ressourcer. Til konsulenter, arkitekter, designere og håndværkere.',
    url: 'https://optiro.dk',
    siteName: 'Optiro',
    locale: 'da_DK',
    type: 'website',
    images: [
      {
        url: 'https://optiro.dk/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Optiro Projektstyring',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Optiro - Projektstyring & Ressourceplanlægning',
    description: 'Styr på projekter, timer og ressourcer for projektbaserede virksomheder',
    images: ['https://optiro.dk/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://optiro.dk',
  },
  verification: {
    // google: 'your-google-verification-code', // Add when you set up Google Search Console
  },
};

export default function RootLayout({ children }: { children: any }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Optiro',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'DKK',
      availability: 'https://schema.org/InStock',
      priceValidUntil: '2026-12-31',
    },
    description: 'Projektstyring og ressourceplanlægning for virksomheder der lever af timer. Planlæg ressourcer, hold styr på projekter og økonomi. Til konsulenter, IT-virksomheder, arkitekter, designere og håndværkere.',
    inLanguage: 'da-DK',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '1',
    },
    audience: {
      '@type': 'Audience',
      audienceType: 'Konsulenter, IT-virksomheder, Arkitekter, Designere, Rådgivere, Ingeniører, Håndværkere, Projektbaserede virksomheder',
    },
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Hvem er Optiro lavet til?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Optiro er bygget til projektbaserede virksomheder der lever af timer – konsulenter, IT-virksomheder, arkitekter, designere, rådgivere, ingeniører, håndværkere og andre fagfolk. Hvis du sælger tid og ekspertise, er Optiro til dig.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hvad koster det?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lige nu kan du prøve Optiro helt gratis – ingen kreditkort, ingen binding. Vi er i beta, så du får fuld adgang til alle funktioner uden at betale noget.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kan mit team bruge det på farten?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ja. Optiro er cloud-baseret og virker på telefon, tablet og computer. Dit team kan registrere timer, tjekke projektstatus og se dagens opgaver – uanset hvor de er.',
        },
      },
      {
        '@type': 'Question',
        name: 'Hvordan hjælper Optiro med at øge indtjeningen?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Optiro giver dig transparens på projektniveau. Se om projekter giver overskud, hvor timer bliver brugt, og om budgetter overholdes. Identificér problemer tidligt og optimér løbende.',
        },
      },
      {
        '@type': 'Question',
        name: 'Skal jeg være teknisk for at bruge det?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Nej. Optiro er bygget til at være intuitivt. Hvis du kan bruge en smartphone eller en browser, kan du bruge Optiro. Kom i gang på minutter, ikke dage.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kan Optiro integrere med andre systemer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vi arbejder på integrationer med økonomisystemer og andre værktøjer. Kontakt os for at høre om dit system er understøttet eller på udviklingsplanen.',
        },
      },
    ],
  };

  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Optiro ApS',
    url: 'https://optiro.dk',
    logo: 'https://optiro.dk/optiro.svg',
    sameAs: [
      'https://www.linkedin.com/company/optiro',
      'https://www.facebook.com/optiro',
      'https://www.instagram.com/optiro',
      'https://twitter.com/optiro',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      availableLanguage: ['Danish'],
    },
  };

  return (
    <html lang="da" {...mantineHtmlProps}>
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical CSS for FCP */
            body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
            * { box-sizing: border-box; }
          `
        }} />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
      </head>
      <body>
        <MantineProvider theme={theme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
