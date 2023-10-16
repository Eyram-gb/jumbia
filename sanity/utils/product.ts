import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

export async function getProducts () {
    return createClient(clientConfig).fetch(
            groq`*[_type == 'project']
        )
};