import { Categories } from "@components/categories";
import { Pagination } from "@components/pagination";
import { Posts } from "@components/posts";
import { getPaginatedPosts, postsPerPage } from "../../blogs";
import PageWrap from "@components/PageWrap";

export default async function Home() {
  const { posts, total } = await getPaginatedPosts({
    page: 1,
    limit: postsPerPage,
  });

  return (
    <>
      <Categories />
      <Posts posts={posts} />

      <Pagination
        baseUrl="/blogs/page"
        page={1}
        perPage={postsPerPage}
        total={total}
      />
    </>
  );
}
