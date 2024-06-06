/* eslint-disable @typescript-eslint/no-non-null-assertion -- allow */

import { defineConfig } from "drizzle-kit";

// export default defineConfig({
//   dialect: "postgresql",
//   schema: "./src/db/schema.ts",
//   out: "./src/db/migrations",
//   driver: "pg",
//   dbCredentials: {
//     connectionString: process.env.POSTGRES_URL!,
//   },
//   verbose: true,
//   strict: true,
// });

 
export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL!,
    // connectionString: process.env.POSTGRES_URL!,
  },
  verbose: true,
  strict: true,
});