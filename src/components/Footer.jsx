import github from '../assets/contact/github.svg';
import linkedin from '../assets/contact/linkedin.svg';
import gmail from '../assets/contact/gmail.svg';
import twitter from '../assets/contact/twitter.svg';

export default function Footer() {
    return (
        <footer className='flex justify-between mt-16 border-t border-slate-500 bg-slate-600'>
            <a href="mailto:tignanellimarco@gmail.com" target='_blank' className='flex items-center'>
                <img src={gmail} alt="gmail link" className='w-8 md:w-12' />
                tignanellimarco@gmail.com
            </a>

            <div className='flex'>
                <a href="https://www.linkedin.com/in/marco-tignanelli/" target='_blank'>
                    <img src={linkedin} className='w-8 md:w-12' alt="linkedin profile link" />
                </a>
                <a href="https://github.com/Mark-kus" target='_blank'>
                    <img src={github} className='w-8 md:w-12' alt="github profile link" />
                </a>
                <a href="https://twitter.com/MarcoTigna1407" target='_blank'>
                    <img src={twitter} className='w-8 md:w-12' alt="twitter profile link" />
                </a>
            </div>

        </footer>
    )
}