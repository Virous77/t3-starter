import dbConnect from "@/db/mongoose";
import userModel from "@/models/user-model";

export const findUser = async () => {
  await dbConnect();
  const user = await userModel.find();
  return user;
};

const Page = async () => {
  const user = await findUser();
  console.log("yes", user);

  return <div>Hello Mongoose</div>;
};

export default Page;
