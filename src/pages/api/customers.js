import faunadb from "faunadb";

const secret = process.env.FAUNADB_SECRET_KEY;
const q = faunadb.query;
const client = new faunadb.Client({ secret });

async function handleCustomers(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const { data } = await client.query(
          q.Map(q.Paginate(q.Match(q.Index("all_customers"))), (ref) =>
            q.Get(ref),
          ),
        );
        res.status(200).json(data);
      } catch (error) {
        console.log({ error });
        res.status(500).json({
          message: "Something went Wrong!",
        });
      }
      break;

    case "POST":
      const { data: formData } = req.body;
      try {
        const { data } = await client.query(
          q.Create(q.Collection("customers"), {
            data: {
              firstName: formData.firstName,
              lastName: formData.lastName,
              address: {
                street: formData.streetAddress,
                city: formData.city,
                state: formData.state,
                zipCode: formData.zipCode,
              },
              telephone: formData.phoneNumber,
              creditCard: {
                network: formData.cardType,
                number: formData.cardNumber,
              },
            },
          }),
        );
        res.status(200).json(data);
      } catch (error) {
        console.log({ error });
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
