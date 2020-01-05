import React from 'react'
import Link from 'next/link'
import {NextPage} from "next";

const links = [
  { href: 'https://zeit.co/now', label: 'ZEIT', key:"nav-link" },
  { href: 'https://github.com/zeit/next.js', label: 'GitHub', key:"nav-link" },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

interface Props {
    userAgent?: string
}

const Nav: NextPage<Props> = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        text-align: center;
      }
      ul {
        display: flex;
        justify-content: space-between;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 6px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
    `}</style>
  </nav>
);

Nav.getInitialProps = async ({ req }) => {
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    return { userAgent }
};

export default Nav
