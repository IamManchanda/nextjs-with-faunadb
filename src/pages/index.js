import Head from "next/head";
import ReactiveCounter from "../components/reactive-counter";

function PageIndex() {
  return (
    <div>
      <Head>
        <title>Next.js - Pure React State Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className="counters">
          <ReactiveCounter max={15} step={5} />
        </section>
      </main>
    </div>
  );
}

export default PageIndex;
