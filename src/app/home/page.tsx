"use client";

import { useState, useEffect } from "react";
import { fetchUsers, User } from "../lib/api";
import { DataTable } from "@/components/usuarios-data-table/data-table";
import { columns } from "@/components/usuarios-data-table/columns";
import { Header } from "@/components/header";
import { LoadingTable } from "@/components/loading-table";

interface Location {
  city?: string;
  country?: string;
}

export default function Home() {
  const [data, setData] = useState<any>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testApi = async () => {
      try {
        const result = await fetchUsers();
        setData(result);
        setError(null);
      } catch (err) {
        console.error("Erro na API:", err);
        setError("Não foi possível carregar os dados dos usuários. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    const getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            try {
              const { latitude, longitude } = position.coords;
              const response = await fetch(
                `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=pt`
              );
              const locationData = await response.json();
              
              setLocation({
                city: locationData.city,
                country: locationData.countryName
              });
            } catch (error) {
              console.error("Erro ao obter localização:", error);
            }
          },
          (error) => {
            console.error("Erro de geolocalização:", error);
          }
        );
      }
    };

    testApi();
    getLocation();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header 
        title="Gerenciamento de Usuários"
        subtitle="Visualize e gerencie os usuários do sistema"
        location={location || undefined}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <LoadingTable />
        ) : error ? (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-8">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/20 mb-4">
                <svg className="h-6 w-6 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Erro ao carregar dados
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                {error}
              </p>
              <button
                onClick={() => {
                  setLoading(true);
                  setError(null);
                  fetchUsers().then(result => {
                    setData(result);
                    setLoading(false);
                  }).catch(err => {
                    setError("Não foi possível carregar os dados dos usuários. Tente novamente mais tarde.");
                    setLoading(false);
                  });
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Tentar novamente
              </button>
            </div>
          </div>
        ) : (
          data && data.Dados && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <DataTable columns={columns} data={data.Dados} />
            </div>
          )
        )}
      </main>
    </div>
  );
}
