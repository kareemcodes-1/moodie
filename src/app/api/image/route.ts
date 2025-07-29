// Proxy to bypass CORS for TMDB image URLs
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const imageUrl = searchParams.get("url");

  if (!imageUrl) return new Response("Missing image URL", { status: 400 });

  try {
    const res = await fetch(imageUrl);
    const buffer = await res.arrayBuffer();

    return new Response(buffer, {
      headers: {
        "Content-Type": res.headers.get("content-type") || "image/jpeg",
        "Access-Control-Allow-Origin": "*",
        "Cache-Control": "public, max-age=86400"
      }
    });
  } catch (err) {
    return new Response(`Error fetching image, ${err}`, { status: 500 });
  }
}
