export const getAllPosts = async () => {
  const res = await fetch("/api/posts/", {
    next: {
      revalidate: 60,
    },
  });
  if (!res.ok) throw new Error("Unable to fetch posts!");
  return res.json();
}
export const getPostsbySearch = async (search: string) => {
      const res = await fetch(`api/posts?q=${search}`);
  if (!res.ok) throw new Error("Unable to fetch posts!");
    return res.json();
    
 }
export const getPostById = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) throw new Error("Unable to fetch post.");

  return response.json();
}