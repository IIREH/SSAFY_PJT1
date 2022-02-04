import { useParams } from "react-router-dom";
import ProfileContainer from "../../containers/user/ProfileContainer";

const ProfilePage = () => {
  const { nickname } = useParams();

  return (    
    <div>
      <ProfileContainer nickname={nickname} />
    </div>
  );
};

export default ProfilePage;