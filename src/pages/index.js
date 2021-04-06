import Head from "next/head";
import { Fragment, useState, useEffect } from "react";
import { Heading, Flex, Stack, Box } from "@chakra-ui/react";

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

      <Box>
        <Heading as="h1" my={2} textAlign="center">
          Next.js, FaunaDB & Serverless
        </Heading>

        <Heading as="h3" my={2} textAlign="center">
          Customer Data
        </Heading>
      </Box>
      <Flex mt={12} align="center" justify="center">
        <Stack>
          <Heading mb={6} as="h4">
            Name:
          </Heading>
          <Heading mb={6} as="h4">
            Phone Number:
          </Heading>
          <Heading mb={6} as="h4">
            Credit Card:
          </Heading>
        </Stack>
      </Flex>
    </Fragment>
  );
}

export default PageIndex;
