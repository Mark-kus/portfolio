import Image from 'next/image'
import profile from '@/assets/fotito.jpg'

export default function About() {
    return (
        <article className='flex flex-col items-center m-5 md:flex-row'>
            <Image src={profile} alt="Image of Marco Tignanelli" className='w-5/6 sm:w-80 rounded-full' />
            <article className='text-center md: m-6'>
                <header className='text-3xl leading-relaxed bg-clip-text text-transparent 
                bg-gradient-to-r from-red-600 to-yellow-500 to-80%'>Marco Tignanelli</header>
                <h4 className='text-lg md:text-xl text-red-500'>Full Stack Web Developer</h4>
                <p className='md:text-lg'>
                    Graduated
                    from <a href="https://www.soyhenry.com/" target='_blank' className='text-yellow-400'>SoyHenry</a>,
                    and studied at <a href="https://www.udemy.com/" target='_blank' className='text-violet-400'>Udemy</a>,
                    to later become <span className='text-sky-400'>self-taught</span>. <br />
                    I armed myself with knowledge on front and back end, to develop amazing web
                    applications. <br />
                    Although you can see my main tech skills (being my favorites react and sequelize),
                    I continue to learn new ones even at this moment, either with a study group or on my own. <br />
                    If you see me capable of developing your project, contact me, and if not, send me a greeting since you are here.
                </p>
            </article>
        </article>
    )
}
