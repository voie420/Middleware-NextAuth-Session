// Import necessary modules and functions from the 'next' and 'next-auth/react' packages.
import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { getSession } from 'next-auth/react';
import { IncomingHttpHeaders } from 'http';

// Define an interface for a custom incoming message with headers and optional body.
interface CustomIncomingMessage {
    headers: IncomingHttpHeaders;
    body?: any;
}

// Define a middleware function that takes a Next.js request as input.
export async function middleware(request: NextRequest) {
    // Convert the headers from an iterable to an object for easier access.
    const headersObject: { [key: string]: string } = Object.fromEntries(request.headers.entries());
    
    // Create a custom request object with headers and body from the Next.js request.
    const customRequest: CustomIncomingMessage = { headers: headersObject, body: request.body };

    // Retrieve the user session using the custom request object. (This variable contains all session details)
    const session = await getSession({ req: customRequest });

    // If you would like to redirect the user away from the endpoint they are trying to reach you can use this:
    // return NextResponse.redirect(new URL('/error/401', request.url));
    // Replace '/error/401' with the endpoint you want to redirect the user to.

    // Continue with the next middleware or route in the chain.
    return NextResponse.next();
}

// Configure the middleware to be applied to all domain paths except the API route.
export const config = {
    matcher: "/((?!api|static|.*\\..*|_next).*)", // Regular expression to exclude certain paths.
};
