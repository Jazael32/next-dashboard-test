export async function GET(request: Request) {

  console.log({ method: request.method });

  return Response.json({
    method: 'Get',
    count: 100
  });
}