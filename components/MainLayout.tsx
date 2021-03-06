import { Children } from "react";
import Link from "next/link";
import Head from "next/head";

export default function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <Head>
        <title> {title} | Next Course</title>
        <meta name="keywords" content="js, next.js, next, react" />
        <meta
          name="description"
          content="This is good way to improve SEO in my page"
        />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href={"/"}>
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href={"/posts"}>
          <a>Posts</a>
        </Link>
      </nav>
      <main>{children}</main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          left: 0;
          right: 0;
          top: 0;
          background: black;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }
        nav a {
          color: white;
          text-decoration: none;
          font-size: 23px;
        }
        nav a:hover {
          color: aqua;        
        }
        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  );
}
