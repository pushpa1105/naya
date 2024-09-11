import "@/styles/global.css";

// import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

import { proxima } from "@/constants/fonts";
import { appConfig } from "@/utils/app-config";

// export const metadata: Metadata = {
//   icons: [
//     {
//       rel: "apple-touch-icon",
//       url: "/apple-touch-icon.png",
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       sizes: "32x32",
//       url: "/favicon-32x32.png",
//     },
//     {
//       rel: "icon",
//       type: "image/png",
//       sizes: "16x16",
//       url: "/favicon-16x16.png",
//     },
//     {
//       rel: "icon",
//       url: "/favicon.ico",
//     },
//   ],
// };

export function generateStaticParams() {
  return appConfig.locales.map((locale) => ({ locale }));
}

export default function RootLayout(props: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(props.params.locale);

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html
      lang={props.params.locale}
      className={`${proxima.variable} font-sans`}
      title="Naya"
    >
      <body>
        <NextIntlClientProvider
          locale={props.params.locale}
          messages={messages}
        >
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
