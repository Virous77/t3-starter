import Extra from "@/components/query";
import { serverClient } from "@/trpc-client/server-client";

const Page = async () => {
  const user = await serverClient.greet({ message: "hello" });
  console.log("yes", user);

  return (
    <div>
      <Extra />
    </div>
  );
};

export default Page;
