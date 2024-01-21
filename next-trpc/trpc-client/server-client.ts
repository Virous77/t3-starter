import { createCallerFactory } from "@/trpc-server";
import { createContext } from "@/trpc-server/context";
import { appRouter } from "@/trpc-server/router";

const createCaller = createCallerFactory(appRouter);

export const serverClient = createCaller(createContext());
