export type User = {
    Nome: string
    Disponivel: boolean
  }

  type ApiResponse = {
    Msg: string
    Dados?: User[]
  }
  
export async function fetchUsers(): Promise<ApiResponse> {
  const res = await fetch("https://09441c3d-9208-4fa9-a576-ba237af6b17c.mock.pstmn.io/", {
    cache: "no-store", 
  })

  if (!res.ok) {
    throw new Error("Erro ao buscar usuários")
  }

  return res.json()
}