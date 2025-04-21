'use client';

import Head from 'next/head';

export default function CustomHead() {
    return (
        <Head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>NextGen Shop</title>
            <script src="https://cdn.tailwindcss.com/3.4.16"></script>
            <script dangerouslySetInnerHTML={{
                __html: `
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  primary: '#00F0FF',
                  secondary: '#9D4EDD',
                },
                borderRadius: {
                  'none': '0px',
                  'sm': '4px',
                  DEFAULT: '8px',
                  'md': '12px',
                  'lg': '16px',
                  'xl': '20px',
                  '2xl': '24px',
                  '3xl': '32px',
                  'full': '9999px',
                  'button': '8px',
                },
              },
            },
          };
        `,
            }} />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css" rel="stylesheet" />
        </Head>
    );
}
