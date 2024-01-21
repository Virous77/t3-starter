import { router, publicProcedure } from "./index";
import { z } from "zod";
import prisma from "@/db/prisma";

export const appRouter = router({
  greet: publicProcedure
    .input((v) => {
      const schema = z.object({
        message: z.string(),
      });
      const result = schema.safeParse(v);
      if (!result.success) {
        throw result.error;
      }
      return result.data;
    })
    .query((params) => {
      return {
        hello: `Hello ${params.input.message}`,
      };
    }),
  createUser: publicProcedure
    .input((v) => {
      const schema = z.object({
        name: z.string(),
        email: z.string().email(),
      });
      const result = schema.safeParse(v);
      if (!result.success) {
        throw result.error;
      }
      return result.data;
    })
    .mutation(async (params) => {
      const user = await prisma.user.create({
        data: {
          name: params.input.name,
          email: params.input.email,
        },
      });
      return {
        user,
      };
    }),
});

export type AppRouter = typeof appRouter;
