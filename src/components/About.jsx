import Image from 'next/image'
import profile from '@/assets/fotito.jpg'

export default function About() {
    return (
        <article className='flex flex-col items-center m-5 md:flex-row'>
            <Image src={profile} alt="Image of Marco Tignanelli" className='w-5/6 sm:w-80 rounded-full' />
            <article className='text-center md:m-6 flex flex-col items-center'>
                <header className='text-3xl md:text-5xl font-extrabold pb-2 leading-relaxed bg-clip-text text-transparent bg-gradient-gold dark:bg-gradient-marine'>Marco Tignanelli</header>
                <h4 className='text-1xl md:text-2xl mb-2 bg-clip-text text-transparent bg-gradient-marine dark:bg-gradient-gold'>Full Stack Web Developer</h4>
                <p className='md:text-lg'>
                    Graduated
                    from <a href="https://www.soyhenry.com/" target='_blank' className='text-yellow-600 dark:text-yellow-400 hover:underline'>SoyHenry</a>,
                    studied with <a href="https://www.udemy.com/" target='_blank' className='text-violet-600 dark:text-violet-400 hover:underline'>Udemy</a>,
                    to later become <span className='text-sky-600 dark:text-sky-400'>self-taught</span>. <br />
                    I armed myself with knowledge on front and back end, to develop client-tailored web
                    applications. <br />
                    Although you can see my main tech skills,
                    I continue to learn new ones even at this moment, either with a study group or on my own. <br />
                    If you see me capable of developing your project, contact me, and if not, send me a greeting since you are here.
                </p>
            </article>
        </article>
    )
}
