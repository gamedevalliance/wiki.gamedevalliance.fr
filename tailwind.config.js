module.exports = {
    purge: {
        content: ["./layouts/**/*.html", "./content/**/*.md", "./content/**/*.html"],
    },
    theme: {
        container: {
            center: true
        },
        fontFamily: {
            display: ['Source Code Pro'],
            body: ['Muli'],
            title: ['Source Sans Pro']
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            'xl2': '1400px'
        },
        extend: {
            colors: {
                body: '#182029',
                area: '#1f2934',
                'area-2': '#293340',
                font: '#ebebeb',
                'font-2': '#B9B9B9',
                'font-3': '#9496a8',
                marvin: '#e47b65',
                astride: '#9e96d0',
                remi: '#52b77b',
            },

            letterSpacing: {
                logo: '0.075em',
                title: '-0.03em',
            },

            gridTemplateColumns: {
                cont: '14% 63% 17%',
                tab: '20% 80%',
                mob: '100%',
            },

            gap: {
                col: '3%',
            },

            fontSize: {
                sm: '15px',
                lg: '18.5px',
                mobileMenu: '1.2rem',
                big: '6rem',
            },
        },
    },
    variants: {},
    plugins: [
        ({
            addBase, theme, addComponents
        }) => {
            addBase({
                'article': {
                    color: theme('textColor.font'),
                    fontSize: theme('fontSize.lg'),
                    '@media (max-width: 640px)': {
                        fontSize: theme('fontSize.base'),
                    },
                },

                p: {
                    lineHeight: '1.5',
                    marginTop: '0',
                    marginBottom: '1rem',
                },

                'img, iframe': {
                    maxWidth: '100%',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                },

                'figcaption': {
                    fontSize: theme('fontSize.sm'),
                    textAlign: 'center',
                    color: theme('textColor.font-2'),
                    marginBottom: '0',
                    marginTop: '1rem'
                },

                'article a': {
                    color: theme('textColor.remi'),
                    textDecoration: 'none',

                    '&:hover': {
                        color: theme('textColor.astride'),
                        textDecoration: 'underline'
                    },
                },

                'article h1': {
                    color: theme('textColor.remi'),
                    fontFamily: theme('fontFamily.title'),
                    fontSize: theme('fontSize.5xl'),
                    fontWeight: '700',
                    lineHeight: '1.25',
                    letterSpacing: theme('letterSpacing.title'),
                    marginTop: '1rem',
                    marginBottom: '1rem',
                    '@media (max-width: 640px)': {
                        fontSize: theme('fontSize.4xl'),
                    },
                },

                h2: {
                    color: theme('textColor.astride'),
                    fontFamily: theme('fontFamily.title'),
                    fontSize: theme('fontSize.3xl'),
                    fontWeight: '700',
                    lineHeight: '1.5',
                    letterSpacing: theme('letterSpacing.title'),
                    marginTop: '1.5rem',
                    marginBottom: '1rem',
                    '@media (max-width: 640px)': {
                        fontSize: theme('fontSize.2xl'),
                    },
                },

                h3: {
                    color: theme('textColor.font'),
                    fontFamily: theme('fontFamily.title'),
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    lineHeight: '1.5',
                    marginBottom: "1rem",
                    letterSpacing: theme('letterSpacing.title'),
                    '@media (max-width: 640px)': {
                        fontSize: theme('fontSize.xl'),
                    },
                },

                h4: {
                    color: theme('textColor.font'),
                    fontFamily: theme('fontFamily.title'),
                    fontSize: '1.35rem',
                    fontWeight: '700',
                    lineHeight: '1.5',
                    letterSpacing: theme('letterSpacing.title'),
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '0.75rem'
                },

                h5: {
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                    marginBottom: '0.5rem',
                    letterSpacing: theme('letterSpacing.title')
                },

                h6: {
                    fontWeight: 'bold',
                    letterSpacing: theme('letterSpacing.title')
                },

                'article ul, article ol': {
                    color: theme('textColor.font'),
                    fontSize: theme('fontSize.lg'),
                    lineHeight: theme('lineHeight.normal'),
                    marginBottom: '1rem',
                    listStyleType: 'disc',
                    listStylePosition: 'inside',
                    '@media (max-width: 640px)': {
                        fontSize: theme('fontSize.base'),
                    },
                },

                '.footnotes ol': {
                    listStyleType: 'decimal'
                },

                table: {
                    tableLayout: 'fixed',
                    margin: '1rem auto',
                    width: 'auto',
                    maxWidth: '100%',
                    borderCollapse: 'collapse',
                    "& td, & th": {
                        padding: '.5rem 1rem',
                        verticalAlign: 'text-top',
                        borderBottom: '1px solid' + theme('textColor.font-3')
                    }
                },

                /*
                    NOTE : The next two rules are for second level lists - Nev, 14/08/2020
                */
                'article li > ul > li, article li > ol > li': {
                    marginLeft: '2rem',
                },

                'article li > p': {
                    display: 'inline',
                },
            });
            addComponents({
                '.smola': {
                    color: theme('textColor.font-3'),
                    border: 'none',
                    textDecoration: 'none',
                    fontSize: '15px',

                    '&:hover': {
                        color: theme('textColor.font-2'),
                        textDecoration: 'underline',
                    },
                }
            });
        },
    ],
};
