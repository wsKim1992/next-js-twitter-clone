import { ModalBox } from "@/app/(afterLogin)/@modal/[username]/status/[id]/photos/[photoId]/_component/Common.style";
import BackButton from "@/app/(afterLogin)/@modal/[username]/status/[id]/photos/[photoId]/_component/BackButton";
import ImageContainer from "@/app/(afterLogin)/@modal/[username]/status/[id]/photos/[photoId]/_component/Image";
import TextContent from "@/app/(afterLogin)/@modal/[username]/status/[id]/photos/[photoId]/_component/TextContent";

const PhotoModalPage = () => {
  return (
    <ModalBox>
      <BackButton />
      <ImageContainer />
      <TextContent />
    </ModalBox>
  );
};

export default PhotoModalPage;
