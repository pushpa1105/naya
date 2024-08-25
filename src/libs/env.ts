import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
/**
 * Usage(https://env.t3.gg/docs/nextjs):
 *
 * import { env } from "~/env";
 * env.NEXT_PUBLIC_APP_URL
 *
 */

// Don't add NODE_ENV into T3 Env, it changes the tree-shaking behavior
export const env = createEnv({
  server: {},
  client: {
    NEXT_PUBLIC_APP_URL: z.string().optional(),
  },
  shared: {
    NODE_ENV: z.enum(["test", "development", "production"]),
  },
  // You need to destructure all the keys manually
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,
  },
});
