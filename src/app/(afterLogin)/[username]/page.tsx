import Header from "@/app/(afterLogin)/[username]/_component/Header";
import ProfileContent from "@/app/(afterLogin)/[username]/_component/ProfileContent";
import { Layout } from "@/app/(afterLogin)/[username]/_component/Common.style";
import MyPosts from "@/app/(afterLogin)/[username]/_component/MyPosts";
import { type TParams } from "@typings/profile";
type Profile = {
  params: Promise<TParams>;
};

const Profile = async ({ params }: Profile) => {
  const { username } = await params;
  console.log({ username });
  return (
    <Layout>
      {username && (
        <>
          <Header title={username} />
          <ProfileContent username={username} />
          <MyPosts />
        </>
      )}
    </Layout>
  );
};

export default Profile;
