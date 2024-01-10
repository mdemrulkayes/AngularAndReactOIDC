import { useAuth } from 'oidc-react';
import { Button, Col, Row } from 'antd';
import Weather from '../Components/Weather';
import { render } from '@testing-library/react';
import { useState } from "react";

export default (Dashboard) => {
  const auth = useAuth();
  const initialState = false;

  const [loadWeatherData, setLoadWeatherData] = useState(initialState);

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
          <Button type="primary" onClick={() => setLoadWeatherData(!loadWeatherData)}>Load Weather Data</Button>
        </Col>
        <Col span={3}>
          <Button type="primary" danger onClick={() => handleLogout()}>
            Logout
          </Button>
        </Col>
      </Row>
      {loadWeatherData
        ? render(
            <Row>
              <Col span={24}>
                <Weather />
              </Col>
            </Row>
          )
        : ''}
    </>
  );
};
