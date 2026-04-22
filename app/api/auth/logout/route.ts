import { NextResponse } from 'next/server';

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// GET → redirect langsung
export async function GET() {
  try {
    const response = NextResponse.redirect(
      new URL('/', BASE_URL) // karena login lu di "/"
    );

    clearCustomCookies(response);

    response.headers.set('Cache-Control', 'no-store');

    return response;
  } catch (error) {
    console.error('Logout GET error:', error);
    return NextResponse.redirect(new URL('/', BASE_URL));
  }
}

// POST → dipanggil dari frontend
export async function POST() {
  try {
    const response = NextResponse.json({ success: true });

    clearCustomCookies(response);

    response.headers.set('Cache-Control', 'no-store');

    return response;
  } catch (error) {
    console.error('Logout POST error:', error);

    const response = NextResponse.json({ success: true });
    clearCustomCookies(response);

    return response;
  }
}

// ❗ HANYA HAPUS COOKIE CUSTOM
function clearCustomCookies(response: NextResponse) {
  response.cookies.set('token', '', {
    httpOnly: true,
    expires: new Date(0),
    maxAge: 0,
    path: '/',
  });
}