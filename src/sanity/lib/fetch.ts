import { createClient } from '@sanity/client';
const client = createClient({
    projectId: "qc9ei68n",
    dataset: "production",
    useCdn: false, // Set to true if you want faster reads
    apiVersion: '2025-01-13',
    token: "skz24mJdbUITH1q93afhfAWH9J80Evks7IFIO03DjYJ3TbGMYDtCkEosI5P718fVD3Lo7bzT8LzzIfU7ITTni7bgwfArJ5LXsLa2XY1XkaYdb5ZY58sbNpbrIHfputGeUgU4d32Q6vdR36gyVKT4q0bZUvqxcQ93hNhVPN2ZwSxiS7R8ICQr", // Replace with your Sanity token
  });

  export async function sanityFetch({query, params={}}:{query:string, params?:any}){
      return await client.fetch(query,params)
  }