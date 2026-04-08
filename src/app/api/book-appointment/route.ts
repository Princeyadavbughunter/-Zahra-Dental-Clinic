
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate required fields
        if (!body.name || !body.phone || !body.email || !body.concern) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const scriptURL = "";

        const response = await fetch(scriptURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            // Log error for server-side debugging
            console.error("Google Apps Script returned an error:", response.status, response.statusText);
            // Even if GAS returns error, we might want to return success to client if we can't do anything about it, 
            // but generally better to propagate if it's a real failure.
            // However, GAS often returns 200 for logical errors, so check body if possible or just status.
            return NextResponse.json(
                { error: 'Failed to submit to Google Apps Script' },
                { status: response.status }
            );
        }

        const data = await response.json();

        return NextResponse.json(data);

    } catch (error) {
        console.error("Error in API route:", error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
