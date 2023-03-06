import 'bootstrap/dist/css/bootstrap.css'; // Add this line
import '@tremor/react/dist/esm/tremor.css'
import '../styles/globals.css'

import Layout from '../components/layout/Layout'
import {CovidProvider} from '../lib/contexts/CovidContext'

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return(
    <CovidProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CovidProvider>
  )
  
}

export default MyApp
