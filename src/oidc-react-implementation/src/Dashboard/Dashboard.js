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

  const onClickLoadWeatherData = () => {
    console.log(loadWeatherData, 'Weather')
    setLoadWeatherData(!loadWeatherData)
  }

  return (
    <>
      <Row>
        <Col span={24}>
          <h2>Hello from {auth.userData.profile.email}</h2>
        </Col>
      </Row>
      <Row>
        <Col span={3}>
          <Button type="primary" onClick={() => onClickLoadWeatherData()}>Load Weather Data</Button>
        </Col>
        <Col span={3}>
          <Button type="primary" danger onClick={() => handleLogout()}>
            Logout
          </Button>
        </Col>
      </Row>
      {loadWeatherData
        ? (
            <Row>
              <Col span={24}>
              <Weather loadWeather={loadWeatherData}/>
              </Col>
            </Row>
           )
        : (
          <></>
        )} 
    </>
  );
};
