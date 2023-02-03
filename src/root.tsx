// @refresh reload
import { Suspense } from 'solid-js';
import { Body, ErrorBoundary, FileRoutes, Head, Html, Link, Meta, Routes, Scripts, Title } from 'solid-start';
import Nav from './components/Nav/Nav';
import LinkBar from './components/Nav/LinkBar/LinkBar';
import './root.css';

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Holeshot Electric</Title>
        <script type="text/javascript">
          (localStorage.getItem('theme') ?? 'light') === 'dark' &&
          document.documentElement.setAttribute('data-theme', 'dark');
        </script>
        <Meta charset="utf-8" />
        <Meta name="msapplication-TileColor" content="#2b5797" />
        <Meta name="msapplication-config" content="/favicon/browserconfig.xml" />
        <Meta name="theme-color" content="#ffffff" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta
          name="description"
          content="Master Licensed Electrical Contractor. Commercial, Industrial Electricians. Located in Round Rock, TX. Serving Austin, SanAntonio, Houston, Waco, Dallas, Ft. Worth"
        />
        <Meta name="application-name" content="HoleShot" />
        <Meta name="robots" content="index,follow,noodp,noydir" />

        {/* <Meta name="google-site-verification" content="+nxGUDJ4QpAZ5l" /> */}

        <Link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
        <Link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
        <Link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
        <Link rel="manifest" href="/favicon/site.webmanifest" />
        <Link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
        <Link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Nav />
            <LinkBar />
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
