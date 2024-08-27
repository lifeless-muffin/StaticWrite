import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const result = await request.json();
    const webhookEvent = result?.event

    if (!webhookEvent) {
        return NextResponse.json({ error: 'Something went wrong' }, { status: 500 })
    }

    if (webhookEvent === 'entry.create' || webhookEvent === 'entry.update' || webhookEvent === 'entry.delete') {
        revalidatePath(`/blogs/${result?.entry?.slug}`)
        revalidatePath(`/`)
        console.log(`Revalidated Path - /`)
        console.log(`Revalidated Path - /blogs/${result?.entry?.slug}`)
    }
    
    return NextResponse.json({ message: 'Done' }, { status: 200 })
}