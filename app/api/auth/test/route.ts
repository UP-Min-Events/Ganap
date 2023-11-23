import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {

    const origin = request.nextUrl.origin
    const url = new URL(request.nextUrl.origin)
    return new NextResponse(`${origin}`)
}