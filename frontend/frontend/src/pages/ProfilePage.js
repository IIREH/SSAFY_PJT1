import { useParams } from "react-router-dom";
import HeaderContainer from "../containers/common/HeaderContainer";
import ProfileContainer from "../containers/user/ProfileContainer";


const ProfilePage = () => {
  const { nickname } = useParams();

  return (    
    <>
      <HeaderContainer />
      <ProfileContainer nickname={nickname} />
    </>
  );
};

export default ProfilePage;