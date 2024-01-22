"use client";
import { TUser } from "@/models/user-model";
import { trpc } from "@/trpc-client/client";
import { init } from "next/dist/compiled/webpack/webpack";

const Extra = ({ user }: { user: TUser[] }) => {
  const { data } = trpc.getUser.useQuery(undefined, {
    initialData: user,
    refetchOnMount: false,
    refetchOnReconnect: false,
  });

  console.log(data);

  return <div>Extra</div>;
};

export default Extra;
