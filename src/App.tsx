import "./scss/Main.scss"
import CircleLoader from "react-spinners/CircleLoader";
import Layout from './layout/Layout';
import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1000);

  }, [])

  return (
    <div className="App">
       {
        loading ?
          <CircleLoader
           className="loader"
            loading={loading}
            color={'#9356DC'}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :
          <Layout />
      }
    
    </div>
  );
}

export default App;
