import { Categories } from "@components/categories";
import { Pagination } from "@components/pagination";
import { Posts } from "@components/posts";
import { getPaginatedPosts, postsPerPage } from "../../posts";
import PageWrap from "@components/PageWrap";

export default async function Home() {
  const { posts, total } = await getPaginatedPosts({
    page: 1,
    limit: postsPerPage,
  });

  return (
<>
      <Posts posts={posts} />

      <Pagination
        baseUrl="/blogs/page"
        page={1}
        perPage={postsPerPage}
        total={total}
      />
      <Categories/>
      </>
  );
}
