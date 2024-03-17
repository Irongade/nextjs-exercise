import { notFound } from "next/navigation";
import BlogContentSection from "../../../components/BlogContentSection";
import BlogHeader from "../../../components/BlogHeader";
import ImageBanner from "../../../components/ImageBanner";
import ReadMore from "../../../components/ReadMore";
import { Container as BlogContainer } from "../../../components/styles/Container";
import { PostResponse } from "../../../types/Post";
import { processSlug } from "../../../util/slugHelper";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props) {
  return { title: `Post: ${processSlug(params.slug)}` };
}

export default async function Page({ params }: Props) {
  // Think about server actions

  const response = await fetch("http://localhost:3000/api/web/posts");
  const posts: PostResponse = await response.json();

  const post = posts.pages.find(
    (post: { slug: string }) => processSlug(post.slug) == params.slug
  );

  if (!post) return notFound();

  return (
    <section>
      <BlogContainer>
        <BlogHeader
          heading={post.heading}
          author={post.author}
          publishedDate={post.published_at}
          content={post.body}
        />
        <ImageBanner src={post.hero_image_url} />
        <BlogContentSection content={post.body} />
      </BlogContainer>
      <ReadMore posts={posts.pages} />
    </section>
  );
}

// depending on whether we want this for CDN
export async function generateStaticParams() {
  const response = await fetch("http://localhost:3000/api/web/posts");
  const posts: any = await response.json();

  return posts.pages.map((post: { slug: any }) => ({
    slug: processSlug(post.slug),
  }));
}
