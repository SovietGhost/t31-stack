import { createAuthClient } from "better-auth/react";
import {
    adminClient,
    phoneNumberClient,
    usernameClient,
} from "better-auth/client/plugins";
import { env } from "@/env";

export const authClient = createAuthClient({
    plugins: [usernameClient(), adminClient(), phoneNumberClient()],
});
