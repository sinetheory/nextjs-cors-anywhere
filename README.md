# nextjs-cors-anywhere fork by deybyr647
This is my twist on [vercel-cors-anywhere](https://github.com/eai04191/vercel-cors-anywhere) using NextJS API Routes.

This tool itself is based on [cors-anywhere](https://github.com/Rob--W/cors-anywhere), with deployment to Vercel being possible

## Caching & Header Forwarding
As mentioned in the original repository, requests are cached for 10 minutes if the URL is the same.
Since this is a modified version, this feature may not be available.

Header Forwading is also not available

## My Added Twists:
- Similar logic but with NextJS API Routes
- Information about the project and how it works on a landing page
- A way to preview API responses via the landing page

## Usage

`https://vercel-cors-anywhere.vercel.app/api?endpoint=https://example.com`
