import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";

function PageIndex() {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch("/api/customers");
    const responseData = await response.json();
    setData[responseData];
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>Next.js with FaunaDB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading as="h1" my={2} textAlign="center">
        Next.js, FaunaDB & Serverless
      </Heading>

      <Heading as="h3" my={2} textAlign="center">
        Customer Data
      </Heading>
    </Fragment>
  );
}

export default PageIndex;
