import { useAuth } from "oidc-react";
import { Button } from "antd";

export default (Dashboard) => {
    const auth = useAuth();

    const handleLogout = () => {
        auth.userManager.removeUser();
        auth.signOutRedirect()
      };
  return (
    <>
      <h2>Hello from {auth.userData.profile.email}</h2>
      <Button type="primary" danger onClick={() => handleLogout()}>Logout</Button>
    </>
  );
};

