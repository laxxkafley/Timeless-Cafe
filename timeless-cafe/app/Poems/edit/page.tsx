// EditPoem Component (Edit Page)

import prisma from "@/utils/db";
import { redirect } from "next/navigation";

export default async function EditPoem({ searchParams }: { searchParams: { id: string; title: string, author: string, content: string } }) {
    const { id, title, author, content } = searchParams;

    // Function to update the poem
    async function updatePoem(formData: FormData) {
        "use server";

        const updatedTitle = formData.get("title") as string;
        const updatedAuthor = formData.get("author") as string;
        const updatedContent = formData.get("content") as string;

        // Ensure all fields are filled
        if (!updatedTitle || !updatedAuthor || !updatedContent) {
            console.error("All fields are required");
            return;
        }

        await prisma.poem.update({
            where: { id: parseInt(id) },
            data: { title: updatedTitle, author: updatedAuthor, content: updatedContent },
        });

        redirect("/Poems"); // Redirect to the poems list page after updating
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Edit Poem</h2>
            <form action={updatePoem}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={title}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Author</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        defaultValue={author}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
                    <textarea
                        id="content"
                        name="content"
                        defaultValue={content}
                        required
                        className="mt-1 p-2 border border-gray-300 rounded w-full"
                        rows={6}
                    />
                </div>

                <button
                    type="submit"
                    className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    Update Poem
                </button>
            </form>
        </div>
    );
}
