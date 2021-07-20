import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "./routes";

import CustomLayout from "./containers/Layout";
function App() {
  return (
    <div className="App">
      <Router>
        <CustomLayout>
          <BaseRouter></BaseRouter>
        </CustomLayout>
      </Router>
    </div>
  );
}

export default App;
