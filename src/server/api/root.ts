import { Elysia } from "elysia";
import { db } from "@/server/db";
import betterAuthView from "./utils/auth-view";
import swagger from "@elysiajs/swagger";

/* How to get session

.get("/", async ({ db, auth, request: { headers } }) => {
    const session = await auth.api.getSession({ headers });
});

*/

const api = new Elysia({ prefix: "/api" })
    .decorate("db", db)
    .all("/auth/*", betterAuthView)
    .get("/hello", () => "Hello 31", {});

const elysia = new Elysia()
    .use(
        swagger({
            path: "/api/reference",
            scalarConfig: {
                theme: "kepler",
            },
        })
    )
    .use(api);

export default elysia;
