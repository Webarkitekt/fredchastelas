import { createClient } from "tinacms/dist/client";
import { queries } from './__generated__/types'

const branch = "main";
const apiURL =
    process.env.NODE_ENV == "development"
        ? "http://localhost:4001/graphql"
        : `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

console.log('env', process.env.NODE_ENV);

// Token generated on app.tina.io
export const client = createClient({ queries, url: apiURL, token: 'f050b0efc727e82b3552ee0c24a6da34a0286016'});