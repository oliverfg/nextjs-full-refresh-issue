import { NextURL } from 'next/dist/server/web/next-url';
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
	// Only redirect if it's home page request.
	const url = req.nextUrl.clone();
	const { pathname } = url;

	if (pathname.startsWith('/hfm/')) {
		url.host = 'localhost:4000';
		return NextResponse.rewrite(url.toString());
	}
}
