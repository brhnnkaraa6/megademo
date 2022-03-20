import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import 'antd/dist/antd.css';
import About from "./pages/About";
import Services from "./pages/Services";
import CustomFooter from "./compents/CustomFooter";
import CustomHeader from "./compents/CustomHeader";
import { Layout } from 'antd';
import Taxschedule from "./pages/Taxschedule";

const { Content } = Layout;
function App() {
  return (
    <Router>
      <Switch>
        <Layout className="layout">
          <CustomHeader />
          <div style={{ position: 'relative' }}>
            <div className="top-background"></div>
            <Content style={{ padding: '0 50px' }}>
              <div>
                <div className="site-layout-content">
                  <Route exact path="/about" component={About}></Route>
                  <Route exact path="/services" component={Services}></Route>
                  <Route exact path="/calculation" component={About}></Route>
                  <Route exact path="/taxschedule" component={Taxschedule}></Route>
                  <Route exact path="/media" component={About}></Route>
                  <Route exact path="/contact" component={About}></Route>
                </div>
              </div>
            </Content>
          </div>
          <CustomFooter />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
