"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Usuario = {
  Nome: string
  Disponivel: boolean
}

export const columns: ColumnDef<Usuario>[] = [
  {
    accessorKey: "Nome",
    header: () => <div className="text-center">Nome</div>,
    cell: ({ row }) => {
      const nome = row.getValue("Nome") as string
      return (
        <div className="text-center">
          {nome}
        </div>
      )
    },
  },
  {
    accessorKey: "Disponivel",
    header: () => <div className="text-center">Disponível</div>,
    cell: ({ row }) => {
      const disponivel = row.getValue("Disponivel") as boolean
      return (
        <div className="flex items-center justify-center">
          <div
            className={`w-3 h-3 rounded-full ${
              disponivel 
                ? "bg-green-500" 
                : "bg-red-500"
            }`}
          />
        </div>
      )
    },
  },
]