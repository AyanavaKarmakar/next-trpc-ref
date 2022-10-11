import type { NextPage } from "next";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const { data } = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <main>
      <p>{data ? <p>{data.greeting}</p> : <p>Loading...</p>}</p>
    </main>
  );
};

export default Home;
