// lib/api.ts
export async function fetchPosts() {
    const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/blogs`);
    const data = await response.json();
    return data?.data || [];
}
  