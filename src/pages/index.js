import Head from "next/head";
import { Fragment } from "react";
import ReactiveCounter from "../components/reactive-counter";

function PageIndex() {
  return (
    <Fragment>
      <Head>
        <title>Next.js - Pure React State Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="counters">
          <ReactiveCounter max={15} step={5} />
        </section>
      </main>
    </Fragment>
  );
}

export default PageIndex;
