"use client"
import { useFormStatus } from "react-dom"


export default function SubmitButton({ label }: { label: string }) {
    const { pending } = useFormStatus()
    return <button className="" disabled={pending} type="submit">
        {pending ? "Submitting..." : label}
    </button>
}