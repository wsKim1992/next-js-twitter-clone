import { type TParams } from "@typings/profile";
import { Layout } from "@/app/(afterLogin)/[username]/_component/Common.style";
import Header from "@/app/(afterLogin)/[username]/_component/Header";
import Posts from "@/app/(afterLogin)/[username]/status/[id]/_component/Posts";
type PostDetailPageProps = {
  params: Promise<TParams>;
};

async function PostDetailPage({ params }: PostDetailPageProps) {
  const { id } = await params;
  return (
    <Layout>
      {id && (
        <>
          <Header title={"게시하기"} />
          <Posts />
        </>
      )}
    </Layout>
  );
}

export default PostDetailPage;
