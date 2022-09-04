import { createClient } from "tinacms/dist/client";
import { queries } from './__generated__/types'

const branch = process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF;
const apiURL = `https://content.tinajs.io/content/${process.env.NEXT_PUBLIC_TINA_CLIENT_ID}/github/${branch}`;

console.log('env', process.env.NODE_ENV);

// Token generated on app.tina.io
export const client = createClient({ queries, url: apiURL, token: 'a06bdcf8a62c91081c150e2578324039d898d2f8'});