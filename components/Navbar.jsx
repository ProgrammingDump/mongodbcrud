import Link from 'next/link'
export default function Navbar() {
    return (
        <nav className='flex justify-between items-center font-bold bg-red-950 text-white rounded-3xl px-8 py-3'>
            <Link href={'/'}>View Articles</Link>
            <Link href={'/addTopic'}>Add New Article</Link>
        </nav>
    )
}