import AuthButton from "@/components/auth-button";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/_options";

const Page = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  console.log(user);
  return (
    <div>
      <AuthButton />
    </div>
  );
};

export default Page;
