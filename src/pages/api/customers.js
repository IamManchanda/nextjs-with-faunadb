import faunadb from "faunadb";

const secret = process.env.FAUNADB_SECRET_KEY;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

async function handleCustomers(req, res) {
  switch (method) {
    case "GET":
      try {
        const { data } = await client.query(
          q.Map(
            q.Paginate(q.Match(q.Index("all_customers"))),
            (ref = q.Get(ref)),
          ),
        );
        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({
          message: "Something went Wrong!",
        });
      }
      break;

    default:
      res.status(500).json({
        message: "Something went Wrong!",
      });
      break;
  }
}

export default handleCustomers;
