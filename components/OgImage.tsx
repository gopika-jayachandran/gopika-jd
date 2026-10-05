import { ImageResponse } from 'next/og';

export const OG_SIZE = { width: 1200, height: 630 };

interface Props {
    title: string;
    subtitle?: string;
    tags?: string[];
    footer?: string;
}

export const createOgImage = ({
    title,
    subtitle,
    tags = [],
    footer,
}: Props) =>
    new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#212121',
                    backgroundImage:
                        'linear-gradient(135deg, #212121 0%, #161616 55%, #1f2a24 100%)',
                    padding: '70px 80px',
                    color: '#DEDEDE',
                    fontFamily: 'sans-serif',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '16px',
                            marginBottom: '36px',
                        }}
                    >
                        <div
                            style={{
                                width: '18px',
                                height: '18px',
                                borderRadius: '999px',
                                backgroundColor: '#00F582',
                            }}
                        />
                        <div
                            style={{
                                fontSize: '26px',
                                letterSpacing: '6px',
                                color: '#9a9a9a',
                                textTransform: 'uppercase',
                            }}
                        >
                            Portfolio
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            fontSize: '76px',
                            lineHeight: 1.05,
                            fontWeight: 700,
                            color: '#DEDEDE',
                            maxWidth: '1000px',
                        }}
                    >
                        {title}
                    </div>

                    {subtitle && (
                        <div
                            style={{
                                display: 'flex',
                                marginTop: '22px',
                                fontSize: '34px',
                                color: '#00F582',
                            }}
                        >
                            {subtitle}
                        </div>
                    )}
                </div>

                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderTop: '1px solid rgba(255,255,255,0.12)',
                        paddingTop: '30px',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            gap: '14px',
                            flexWrap: 'wrap',
                        }}
                    >
                        {tags.map((tag) => (
                            <div
                                key={tag}
                                style={{
                                    display: 'flex',
                                    fontSize: '24px',
                                    color: '#9a9a9a',
                                    border: '1px solid rgba(255,255,255,0.18)',
                                    borderRadius: '999px',
                                    padding: '8px 20px',
                                }}
                            >
                                {tag}
                            </div>
                        ))}
                    </div>

                    {footer && (
                        <div style={{ display: 'flex', fontSize: '24px', color: '#9a9a9a' }}>
                            {footer}
                        </div>
                    )}
                </div>
            </div>
        ),
        OG_SIZE,
    );
