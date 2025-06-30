import Header from "@/app/(afterLogin)/[username]/_component/Header";
import ProfileContent from "@/app/(afterLogin)/[username]/_component/ProfileContent";
import { Layout } from "@/app/(afterLogin)/[username]/_component/Common.style";
import MyPosts from "@/app/(afterLogin)/[username]/_component/MyPosts";
type Profile = {
  params: Promise<{ username?: string }>;
};

const Profile = async ({ params }: Profile) => {
  const { username } = await params;
  return (
    <Layout>
      {username && (
        <>
          <Header username={username} />
          <ProfileContent username={username} />
          <MyPosts />
        </>
      )}
    </Layout>
  );
};

export default Profile;
