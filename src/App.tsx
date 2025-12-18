import { ConfigProvider } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import ru_RU from "antd/es/locale/ru_RU";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <ConfigProvider locale={ru_RU}>
      <ErrorBoundary>
        <BrowserRouter basename="/advent-calendar/">
          <Navigation />
        </BrowserRouter>
      </ErrorBoundary>
    </ConfigProvider>
  );
}

export default App;
