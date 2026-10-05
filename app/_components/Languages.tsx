'use client';
import SectionTitle from '@/components/SectionTitle';
import { LANGUAGES } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Languages = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%',
                    end: 'bottom 80%',
                    toggleActions: 'restart none none reverse',
                    scrub: 0.5,
                },
            });

            tl.from('.language-item', {
                opacity: 0,
                y: 40,
                stagger: 0.25,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pb-section" id="languages">
            <div className="container" ref={containerRef}>
                <SectionTitle title="Languages" />

                <div className="flex gap-x-11 gap-y-9 flex-wrap">
                    {LANGUAGES.map((language) => (
                        <div
                            key={language}
                            className="language-item flex gap-3.5 items-center leading-none"
                        >
                            <span className="size-3 rounded-full bg-primary"></span>
                            <span className="text-4xl font-anton">
                                {language}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Languages;
