"use client";

import { trpc } from "@/trpc-client/client";

const Extra = () => {
  const { data, isLoading, isFetching, error, isError } = trpc.greet.useQuery({
    message: "hello",
  });

  const { mutateAsync } = trpc.createUser.useMutation();

  const createUser = async () => {
    try {
      const user = await mutateAsync({
        name: "test",
        email: "test123@gmail.com",
      });

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return <div onClick={createUser}>Extra</div>;
};

export default Extra;
