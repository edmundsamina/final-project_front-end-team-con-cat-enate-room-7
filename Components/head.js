import Head from 'next/head'
import React from 'react'

function IndexPage({text}) {
  return (
    <div>
      <Head>
        <title>{text}</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
    </div>
  )
}

export default IndexPage
