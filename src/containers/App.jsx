import Footer from '../components/Footer';
import Header from '../components/Header';
import Content from './Content';

export default function App() {
  return (
    <main className='bg-gradient-to-b from-black to-slate-700
    text-slate-100
     min-h-screen flex flex-col justify-between'>
      <Header/>
      <Content/>
      <Footer/>
    </main>
  )
};