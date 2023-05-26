import profile from '../assets/profile.png'

export default function About() {
    return (
        <article className='flex flex-col items-center m-10 min-h-screen
        md:min-h-0 md:flex-row'>
            <img src={profile} alt="Marco image" className='w-5/6 sm:w-80' />
            <article className='text-center md: m-6'>
                <header className='text-3xl leading-relaxed'>Marco Tignanelli</header>
                When I become an adult, I would like to be a genius, millionaire, playboy, philanthropist. Yes, like him.
                But just in case it doesn't happen, I armed myself with knowledge on front and back end, to develop amazing web
                applications. <br />
                I became a full stack web developer, graduated 
                from <a href="https://www.soyhenry.com/" target='_blank' className='text-yellow-500'>SoyHenry</a>,
                and studied at <a href="https://www.udemy.com/" target='_blank' className='text-violet-500'>Udemy</a>, 
                to later become self-taught. <br />
            </article>
        </article>
    )
}