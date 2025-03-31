export async function fetchListings() {
  const res = await fetch('/api/listings');
  return await res.json();
}

export async function createListing(data: any) {
  await fetch('/api/listings', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
}