export async function POST(request: Request) {
  const data = await request.json();

  console.log("Datos recibidos:", data);

  return Response.json({
    success: true,
    message: "Formulario recibido correctamente",
  });
}