import './App.css'
import StockOptions from "./stockOptions/StockOptions.jsx";
import Report from "./report/Report.jsx";
import Notification from "./notification/Notification.jsx";

function App() {
  return (
    <div>
      <Notification/>
      <StockOptions/>
      <Report/>
      <p className="read-the-docs">
        Stock advice test application - do not trust as financial advisor!!!
      </p>
    </div>
  )
}

export default App
