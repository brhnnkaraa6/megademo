import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css';
import About from "./pages/About";
import CustomFooter from "./compents/CustomFooter";
import CustomHeader from "./compents/CustomHeader";
import { Layout } from 'antd';

const { Content } = Layout;
function App() {
  return (
    <Layout className="layout">
      <CustomHeader />
      <div style={{position: 'relative'}}>
        <div className="top-background"></div>
        <Content style={{ padding: '0 50px' }}>
          <div>
            <div className="site-layout-content">
              <Router>
                <Switch>
                  <Route exact path="/about" component={About}></Route>
                </Switch>
              </Router>
            </div>
          </div>
        </Content>
      </div>
      <CustomFooter />
    </Layout>
  );
}

export default App;
