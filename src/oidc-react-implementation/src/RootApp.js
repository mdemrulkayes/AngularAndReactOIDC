import { useAuth } from "oidc-react"
import Dashboard from "./Dashboard/Dashboard";
import { Button } from "antd";

export default RootApp => {
    const auth = useAuth();

    if (auth.isLoading) {
      return <div>Loading...</div>;
    }
    if (auth.userData) {
      return <div>
        <Dashboard />
      </div>;
    }
  
    return <Button type="primary" onClick={ () => auth.signIn()}>Login</Button>;
}