import Link from 'next/link'
import Head from 'next/head'

export function MainLayout({ children, title = 'Next App' }) {
  return (
    <>
      <Head>
        <title>{title} | Next Test</title>
        <meta name="keywords" content="next,javascript,nextjs,react" />
        <meta name="description" content="this is next test" />
        <meta charSet="utf-8" />
      </Head>
      <nav>
        <Link href={'/posts'}><a>Posts</a></Link>
        <Link href={'/posts/new'}><a>New Post</a></Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 40px;
          left: 0;
          top: 0;
          right: 0;
          background: gray;
          display: flex;
          justify-content: flex-end;
          padding-right: 50px;
          align-items: center;
        }
        
        nav a {
          color: #fff;
          text-decoration: none;
          margin-left: 20px;
        }
        
        main {
          margin-top: 40px;
          padding: 1rem;
        }
      `}</style>
    </>
  )
}