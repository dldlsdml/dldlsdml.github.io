import {getCollectionByName} from "./getCollectionByName";

export async function getAllPosts() {
  const blog = await getCollectionByName("blog");
  const portfolio = await getCollectionByName("portfolio");
  return [...blog, ...portfolio];
}
