import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)',
                },
                border: 'var(--border)',
                input: 'var(--input)',
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)',
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)',
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--accent-foreground)',
                },
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)',
                },
                ring: 'var(--ring)',
            },
            // @ts-ignore
            typography: (theme) => ({
                DEFAULT: {
                    css: {
                        color: 'var(--foreground)',
                        code: {
                            padding: '0.2em 0.4em',
                            border: `1px solid var(--border)`,
                            borderRadius: '0.3em',
                            fontWeight: 'inherit',
                            backgroundColor: 'var(--muted)',
                            color: 'var(--foreground)',
                        },
                        'code::before': {
                            content: '""', // Remove the default backticks
                        },
                        'code::after': {
                            content: '""', // Remove the default backticks
                        },
                        pre: {
                            border: '1px solid var(--border)',
                            'border-radius': '0.5rem', // Equivalent to rounded-lg
                            backgroundColor: 'var(--muted)',
                        },
                        a: {
                            color: 'var(--foreground)',
                            '&:hover': {
                                color: 'var(--muted-foreground)',
                            },
                        },
                        h1: {
                            color: 'var(--foreground)',
                        },
                        h2: {
                            color: 'var(--foreground)',
                        },
                        h3: {
                            color: 'var(--foreground)',
                        },
                        h4: {
                            color: 'var(--foreground)',
                        },
                        strong: {
                            color: 'var(--foreground)',
                        },
                        blockquote: {
                            borderLeftColor: 'var(--border)',
                            color: 'var(--muted-foreground)',
                        },
                    },
                },
            }),
        },
    },
    plugins: [typography, forms],
};
export default config;
