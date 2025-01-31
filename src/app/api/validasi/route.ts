export async function POST(request:Request) {
    const { card_id } = await request.json();

    const mockAPIResponse = {
        valid :true,
        balance : 50000
    };

    return Response.json(mockAPIResponse);
}