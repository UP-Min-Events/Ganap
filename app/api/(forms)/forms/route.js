import { uploadForm } from "app/api/_utils/downloadable_forms"

// export const GET = () => {
//     const response = {
//         status: 200,
//         body: { message: "Hello, world from NextResponse!" },
//     }

//     const response2 = new NextResponse(JSON.stringify(response), { status: 400, headers: { "x-header": "value" } })

//     return response2

//     // return Response.json(response, { status: 400, headers: { "x-header": "value" } })
// }

export const POST = async (request) => {
    const response = await uploadForm(await request.json(), "DownloadableForms");
    return response;
}