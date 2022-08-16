import Main from "./Main/Main";
import Bar from "./Bar/Bar";
import Footer from "./Footer/Footer";

function Container() {
    return (
      <div className="container">
        <Main/>
        <Bar/>
        <Footer/>
      </div>
    );
  }
  
export default Container;