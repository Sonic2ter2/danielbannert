import { renderToString } from "react-dom/server";
import { Helmet, HelmetProvider, HelmetServerState } from "react-helmet-async";
import type { PageContextBuiltIn } from "vite-plugin-ssr";
// eslint-disable-next-line import/no-extraneous-dependencies
import { dangerouslySkipEscape, escapeInject } from "vite-plugin-ssr";

import getPageTitle from "../src/helpers/get-page-title";
import PageShell from "../src/layout/page-shell";
import type { PageContext } from "./types";

export const render = async (pageContext: PageContextBuiltIn & PageContext) => {
    // See https://vite-plugin-ssr.com/head
    const { Page, pageProps, documentProps } = pageContext;
    const helmetContext: { helmet?: HelmetServerState } = {};

    const view = renderToString(
        <PageShell pageContext={pageContext}>
            <HelmetProvider context={helmetContext}>
                <Helmet>
                    <title>{getPageTitle(pageContext)}</title>
                    <meta name="description" content={(documentProps && documentProps.description) || "Personal Portfolio"} />

                    <link rel="apple-touch-icon" sizes="57x57" href="/assets/apple-touch-icon-57x57.png" />
                    <link rel="apple-touch-icon" sizes="60x60" href="/assets/apple-touch-icon-60x60.png" />
                    <link rel="apple-touch-icon" sizes="72x72" href="/assets/apple-touch-icon-72x72.png" />
                    <link rel="apple-touch-icon" sizes="76x76" href="/assets/apple-touch-icon-76x76.png" />
                    <link rel="apple-touch-icon" sizes="114x114" href="/assets/apple-touch-icon-114x114.png" />
                    <link rel="apple-touch-icon" sizes="120x120" href="/assets/apple-touch-icon-120x120.png" />
                    <link rel="apple-touch-icon" sizes="144x144" href="/assets/apple-touch-icon-144x144.png" />
                    <link rel="apple-touch-icon" sizes="152x152" href="/assets/apple-touch-icon-152x152.png" />
                    <link rel="apple-touch-icon" sizes="167x167" href="/assets/apple-touch-icon-167x167.png" />
                    <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon-180x180.png" />
                    <link rel="apple-touch-icon" sizes="1024x1024" href="/assets/apple-touch-icon-1024x1024.png" />
                    <link
                        rel="apple-touch-startup-image"
                        media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 1)"
                        href="/assets/apple-touch-startup-image-320x460.png"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        media="(device-width: 320px) and (device-height: 480px) and (-webkit-device-pixel-ratio: 2)"
                        href="/assets/apple-touch-startup-image-640x920.png"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
                        href="/assets/apple-touch-startup-image-640x1096.png"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
                        href="/assets/apple-touch-startup-image-750x1294.png"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        media="(device-width: 414px) and (device-height: 736px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 3)"
                        href="/assets/apple-touch-startup-image-1182x2208.png"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        media="(device-width: 414px) and (device-height: 736px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 3)"
                        href="/assets/apple-touch-startup-image-1242x2148.png"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 1)"
                        href="/assets/apple-touch-startup-image-748x1024.png"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        media="(device-width: 768px) and (device-height: 1024px) and (orientation: landscape) and (-webkit-device-pixel-ratio: 2)"
                        href="/assets/apple-touch-startup-image-1496x2048.png"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 1)"
                        href="/assets/apple-touch-startup-image-768x1004.png"
                    />
                    <link
                        rel="apple-touch-startup-image"
                        media="(device-width: 768px) and (device-height: 1024px) and (orientation: portrait) and (-webkit-device-pixel-ratio: 2)"
                        href="/assets/apple-touch-startup-image-1536x2008.png"
                    />
                    <link rel="icon" type="image/png" sizes="16x16" href="/assets/favicon-16x16.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/assets/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="228x228" href="/assets/coast-228x228.png" />
                    <link rel="manifest" href="/assets/manifest.json" />
                    <link rel="shortcut icon" href="/assets/favicon.ico" />
                    <link rel="yandex-tableau-widget" href="/assets/yandex-browser-manifest.json" />
                    <meta name="msapplication-TileColor" content="#fff" />
                    <meta name="msapplication-TileImage" content="/assets/mstile-144x144.png" />
                    <meta name="msapplication-config" content="/assets/browserconfig.xml" />
                    <meta name="theme-color" content="#fff" />
                </Helmet>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Page {...pageProps} />
            </HelmetProvider>
        </PageShell>,
    );

    const { helmet } = helmetContext;
    const head = (helmet as HelmetServerState).title.toString()
        + (helmet as HelmetServerState).priority.toString()
        + (helmet as HelmetServerState).meta.toString()
        + (helmet as HelmetServerState).link.toString()
        + (helmet as HelmetServerState).script.toString();

    const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        ${dangerouslySkipEscape(head)}
      </head>
      <body>
        <div id="page-view">${dangerouslySkipEscape(view)}</div>
      </body>
    </html>`;

    return {
        documentHtml,
        pageContext: {
            // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
        },
    };
};

// See https://vite-plugin-ssr.com/data-fetching
export const passToClient = ["pageProps", "documentProps", "someAsyncProps"];
