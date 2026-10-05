import type { Metadata, Viewport } from 'next';
import { Anton, Roboto_Flex } from 'next/font/google';
import { ReactLenis } from 'lenis/react';

import 'lenis/dist/lenis.css';
import './globals.css';
import Footer from '@/components/Footer';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '../components/Preloader';
import StickyEmail from './_components/StickyEmail';
import JsonLd from '@/components/JsonLd';
import { PROFESSIONAL_SUMMARY, GENERAL_INFO, KEYWORDS, SITE_URL } from '@/lib/data';
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';

const gaId = process.env.NEXT_PUBLIC_GA_ID;
const hotjarId = process.env.NEXT_PUBLIC_HOTJAR_ID;

const antonFont = Anton({
    weight: '400',
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-anton',
});

const robotoFlex = Roboto_Flex({
    weight: ['100', '400', '500', '600', '700', '800'],
    style: 'normal',
    subsets: ['latin'],
    variable: '--font-roboto-flex',
});

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),

    title: {
        default: `${GENERAL_INFO.name} — ${GENERAL_INFO.title} | React, Next.js & Angular`,
        template: `%s | ${GENERAL_INFO.name}`,
    },

    description: PROFESSIONAL_SUMMARY,

    applicationName: `${GENERAL_INFO.name} Portfolio`,

    authors: [{ name: GENERAL_INFO.name, url: SITE_URL }],
    creator: GENERAL_INFO.name,
    publisher: GENERAL_INFO.name,

    keywords: KEYWORDS,

    alternates: {
        canonical: '/',
    },

    openGraph: {
        type: 'website',
        locale: 'en_IN',
        url: SITE_URL,
        siteName: `${GENERAL_INFO.name} — ${GENERAL_INFO.title}`,
        title: `${GENERAL_INFO.name} — ${GENERAL_INFO.title}`,
        description: PROFESSIONAL_SUMMARY,
    },

    twitter: {
        card: 'summary_large_image',
        title: `${GENERAL_INFO.name} — ${GENERAL_INFO.title}`,
        description: PROFESSIONAL_SUMMARY,
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },

    category: 'technology',
};

export const viewport: Viewport = {
    themeColor: '#212121',
    colorScheme: 'dark',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en-IN">
            {gaId && <GoogleAnalytics gaId={gaId} />}
            {hotjarId && (
                <Script id="hotjar" strategy="afterInteractive">
                    {`(function(h,o,t,j,a,r){
                    h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                    h._hjSettings={hjid:${hotjarId},hjsv:6};
                    a=o.getElementsByTagName('head')[0];
                    r=o.createElement('script');r.async=1;
                    r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                    a.appendChild(r);
                })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
                </Script>
            )}
            <body
                className={`${antonFont.variable} ${robotoFlex.variable} antialiased`}
            >
                <JsonLd />
                <ReactLenis
                    root
                    options={{
                        lerp: 0.1,
                        duration: 1.4,
                    }}
                >
                    <Navbar />
                    <main>{children}</main>
                    <Footer />

                    <CustomCursor />
                    <Preloader />
                    <ScrollProgressIndicator />
                    <ParticleBackground />
                    <StickyEmail />
                </ReactLenis>
            </body>
        </html>
    );
}
