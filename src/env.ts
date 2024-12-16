import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
import { vercel } from "@t3-oss/env-nextjs/presets";

export const env = createEnv({
    extends: [vercel()],
    server: {
        NODE_ENV: z
            .enum(["development", "production", "test"])
            .default("development"),
        DATABASE_URL: z.string(),
        BETTER_AUTH_URL: z.string().default("http://localhost:3000"),
        BETTER_AUTH_SECRET: z.string().default("keyboard cat"),
    },
    client: {},
    runtimeEnv: {
        NODE_ENV: process.env.NODE_ENV,
        DATABASE_URL: process.env.DATABASE_URL,
        BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
        BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
    },
    skipValidation: false,
});
