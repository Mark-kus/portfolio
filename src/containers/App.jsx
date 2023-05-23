import Footer from '../components/Footer';
import Header from '../components/Header';
import Content from './Content';

export default function App() {
  return (
    <main className='bg-slate-500 min-h-screen flex flex-col justify-between'>
      <Header/>
      <Content/>
      <Footer/>
    </main>
  )
};