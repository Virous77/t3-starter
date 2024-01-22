import Extra from "@/components/query";
import { serverClient } from "@/trpc-client/server-client";

const Page = async () => {
  const user = await serverClient.getUser();

  return (
    <div>
      <Extra user={user} />
    </div>
  );
};

export default Page;
