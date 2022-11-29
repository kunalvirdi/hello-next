import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
const Homepage = () =>
{
  return (
      <Layout>
        <Head>
          <title>HomePage</title>
        </Head>
        <h1>Welcome to Homepage</h1>
      </Layout>

  )
}

export default Homepage