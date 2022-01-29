import { useParams } from "react-router-dom";

const ProfilePage = () => {
  const { nickname } = useParams();

  return (
    <div>
      { nickname }님의 프로필 페이지
    </div>
  );
};

export default ProfilePage;