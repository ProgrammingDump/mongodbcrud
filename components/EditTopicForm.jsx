'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function EditTopicForm({ id, title, description }) {
    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ newTitle, newDescription }),
            });

            if (!res.ok) {
                throw new Error('Failed to update article');
            }

            router.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setNewTitle(e.target.value)}
                value={newTitle}
                className='border border-slate-500 px-8 py-2'
                type="text"
                placeholder="Title"
            />

            <input
                onChange={(e) => setNewDescription(e.target.value)}
                value={newDescription}
                className='border border-slate-500 px-8 py-2'
                type="text"
                placeholder="Description"
            />

            <div className="button flex justify-center">
                <button
                    type='submit'
                    className="bg-red-950 w-fit font-bold text-white py-3 px-6"
                >
                    Update Article
                </button>
            </div>
        </form>
    );
}
