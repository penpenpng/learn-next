import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  console.log("getServerSideProps() in first-post has called");
  console.log(context);

  return {
    props: {
      // props for your component
    },
  };
}
