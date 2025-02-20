'use client'

import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from 'next/navigation'
export default function RemoveBtn({ id }) {

    const router = useRouter()

    const removeTopic = async function () {
        const confirmed = confirm("Are you sure you want to delete this article?")

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: 'DELETE',
            })

            if (res.ok) {
                router.refresh()
            }
        }
    }

    return (
        <button
            onClick={removeTopic}
            className='text-white'>
            <HiOutlineTrash size={24} />
        </button>
    )
}