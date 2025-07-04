import Home from "@/app/(afterLogin)/home/page";
import { type TParams } from "@typings/profile";

type PhotoPageProps = {
  params: Promise<TParams>;
};
const PhotoPage = async ({ params }: PhotoPageProps) => {
  const { photoId } = await params;
  console.log({ photoId });
  return <Home />;
};

export default PhotoPage;
