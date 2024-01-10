import { useAuth } from 'oidc-react';
import { Button, Col, Row } from 'antd';

export default (Dashboard) => {
  const auth = useAuth();

  const handleLogout = () => {
    auth.userManager.removeUser();
    auth.signOutRedirect();
  };

  return (
    <>
      <Row>
        <Col span={24}>
          <h2>Hello from {auth.userData.profile.email}</h2>
        </Col>
      </Row>
      <Row>
        <Col span={3}>
          <Button type="primary">Load Weather Data</Button>
        </Col>
        <Col span={3}>
          <Button type="primary" danger onClick={() => handleLogout()}>
            Logout
          </Button>
        </Col>
      </Row>
    </>
  );
};
