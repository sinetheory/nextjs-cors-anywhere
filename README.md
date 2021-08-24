# nextjs-cors-anywhere

This is my twist on [vercel-cors-anywhere](https://github.com/eai04191/vercel-cors-anywhere) using NextJS API Routes.

This tool itself is based on [cors-anywhere](https://github.com/Rob--W/cors-anywhere), with deployment to Vercel being possible

## Caching & Header Forwarding

As mentioned in the original repository, requests are cached for 10 minutes if the URL is the same

Header Forwading is (still) not available

## My Added Twists:

- Similar logic but with NextJS API Routes

- Information about the project and how it works on a landing page

- A way to preview API responses via landing page

## Fixes/Improvements on original [repository](https://github.com/eai04191/vercel-cors-anywhere)

- API Responses are displayed within an iframe as raw JSON, rather than plaintext in HTML

- Fixed issue where URL Params were being truncated during request time

  - e.g. `/api?endpoint=https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=APIKEY&radius=16094&keyword=restaurant&location=43.66542,-73.74970`

  - The endpoint param's expected value would be: `https://maps.googleapis.com/maps/api/place/nearbysearch/json? key=APIKEY&radius=16094&keyword=restaurant&location=43.66542,-73.74970`

  - Instead, URL params from the endpoint URL would be truncated out. So the endpoint param would actually look like this: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=APIKEY`

  - This truncating of URL params would lead to `HTTP 400` errors, since there were missing params of course

## Usage

`https://nextjs-cors-anywhere.vercel.app/api?endpoint=url`

`url --> API Endpoint/URL`

## Examples

> `https://nextjs-cors-anywhere.vercel.app/api?endpoint=https://www.deybyr647.com/api/projects?name=RecycleIT`

> [Example code with Fetch in JavaScript](https://gist.github.com/deybyr647/f3707c0de73f9efe23c6d88d33c22ad9)
