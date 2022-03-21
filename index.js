import express from "express";
import resolvers from "./resolvers";
import schema from "./schema";
import { graphqlHTTP } from "express-graphql";

const app = express();
schema;
app.get("/", (req, res) => {
  res.send("up and running graphQL");
});

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    rootValue: root,
  })
);

app.listen(8000, () => {
  console.log("running at 8000");
});
