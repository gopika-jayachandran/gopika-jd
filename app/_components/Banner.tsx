'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    // move the content a little up on scroll
    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[544px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-5xl xs:text-[64px] sm:text-[72px] font-anton">
                        <span className="text-primary">SOFTWARE</span>
                        <br />{' '}
                        <span className="ml-4 block">
                            DEVELOPER
                            <span className="block text-2xl xs:text-3xl sm:text-4xl text-muted-foreground mt-2 tracking-widest">
                                FRONTEND / FULL-STACK
                            </span>
                        </span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        Hi! I&apos;m{' '}
                        <span className="font-medium text-foreground">
                            Gopika
                        </span>
                        . A Software Developer with 3+ years of experience
                        building responsive, high-performance web applications
                        with React, Next.js and Angular.
                    </p>
                    <Button
                        as="link"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`mailto:${GENERAL_INFO.email}?subject=${encodeURIComponent(
                            GENERAL_INFO.emailSubject,
                        )}&body=${encodeURIComponent(GENERAL_INFO.emailBody)}`}
                        variant="primary"
                        className="mt-9 banner-button slide-up-and-fade"
                    >
                        Let&apos;s Talk
                    </Button>

                    <div className="flex items-center gap-2 mt-3">
                        <span className="size-3 rounded-full bg-primary"></span>
                        <span className="text-sm text-muted-foreground">
                            Available for full-time opportunities
                        </span>
                    </div>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            3+
                        </h5>
                        <p className="text-muted-foreground">
                            Years of Experience
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            3+
                        </h5>
                        <p className="text-muted-foreground">
                            Projects Delivered
                        </p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-lg sm:text-2xl font-anton text-primary mb-2">
                            Kerala
                        </h5>
                        <p className="text-muted-foreground">India</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
