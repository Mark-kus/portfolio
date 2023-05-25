import profile from '../assets/profile.png'

export default function About() {
    return (
        <article className='flex flex-col items-center m-4 min-h-screen'>
            <img src={profile} alt="Marco image" className='w-5/6' />
            <header className='text-3xl leading-relaxed'>Marco Tignanelli</header>
            <article className='text-center'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni officia fuga porro. Cum quisquam expedita laborum accusamus labore ipsa doloremque officiis, excepturi reprehenderit laudantium consequuntur voluptas. Repellat qui ratione quos!
                Dolores quos animi ratione est maiores accusamus? Atque rem porro ducimus, beatae ut iste optio soluta dolorum fuga architecto mollitia sequi molestiae quibusdam? Labore consequuntur, fugit similique quasi soluta accusamus!
            </article>
        </article>
    )
}