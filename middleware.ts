import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Proxy alle Requests zu /SYNO an die SYNO-App (inkl. Assets)
  if (pathname.startsWith('/SYNO')) {
    const targetUrl = `https://testsyno-pbwh.vercel.app${pathname}`
    
    try {
      const response = await fetch(targetUrl, {
        method: request.method,
        headers: {
          ...Object.fromEntries(request.headers.entries()),
          'host': 'testsyno-pbwh.vercel.app',
        },
        body: request.method !== 'GET' && request.method !== 'HEAD' 
          ? await request.text() 
          : undefined,
      })

      const data = await response.text()
      
      return new NextResponse(data, {
        status: response.status,
        headers: {
          ...Object.fromEntries(response.headers.entries()),
          'x-proxied': 'true',
        },
      })
    } catch (error) {
      console.error('Proxy error:', error)
      return NextResponse.next()
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/SYNO/:path*',
    '/SYNO/_next/:path*',
  ],
}

