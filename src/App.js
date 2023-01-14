import Form from 'components/Form';
import Links from 'components/Links';
import Header from 'components/Header'
import { AnimatePresence, motion } from 'framer-motion';

import { useSelector } from 'react-redux';


import './App.scss'

import bgIMG from './img/bg.jpg';
import logo from './img/logo.png';



function App() {
  const { isOpen } = useSelector(state => state.modal)
  return (
    <div style={{
      backgroundImage: `url(${bgIMG})`,
      backgroundCover: 'cover',
      height: ' 100vh'
    }}>
      <Header />
      <div className='window'>
        <div className='window-content'>


          <Form />
          <img src={logo} alt='logo' />
        </div>
      </div>
      {console.log(isOpen)}
      {isOpen &&
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}>
            <Links />
          </motion.div>
        </AnimatePresence>}


    </div>
  );
}

export default App;
// qr code
// https://www.youtube.com/watch?v=8aQekFwbmyE
