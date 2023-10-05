import 'bootstrap/dist/css/bootstrap.min.css';

import '../styles/globals.css'
import CommanLayout from '../Components/Layouts/CommanLayout';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <CommanLayout>
          <Component {...pageProps} />
        </CommanLayout>
      </>
  )
}

export default MyApp
