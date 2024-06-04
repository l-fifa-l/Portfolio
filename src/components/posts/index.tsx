import { type Post } from "../../blogs";
import Link from "next/link";

export function Posts({ posts }: { posts: Post[] }) {
  return (
    <ol className="space-y-4">
    {posts.map(({ slug, title,image, publishDate, categories }) => (
      <>
      <li key={slug} className="bg-white">
      <Link href={`/blogs/${slug}`}>
      <article className="mx-auto flex max-w-md flex-col rounded-2xl bg-white px-4 shadow md:max-w-5xl md:flex-row md:items-center">
        <div className="shrink-0 my-4 md:mr-8 md:max-w-sm">
          <img className="rounded-2xl" src={image} alt="" />
        </div>
        <div className="py-4 sm:py-8">
          <a href="#" className="mb-6 block text-2xl font-medium text-gray-700">{title}</a>
          <p className="mb-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit illum consequatur quia doloremque! Similique eius enim nostrum totam.</p>
          <div className="flex items-center">
            <p className="ml-4 w-56">
              <strong>Published:</strong> {new Date(publishDate).toLocaleDateString()} <strong>Categories:</strong>{" "}
          {categories.map((cat, i) => (
            <span key={cat}>
              {i ? ", " : ""}
              {cat}
            </span>
          ))}
            </p>
          </div>
        </div>
      </article>
      </Link>
    </li>
      </>
    ))}
  </ol>
  );
}

