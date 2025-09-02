"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/home");
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/login.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>
      
      <div className="relative z-10 max-w-md space-y-8">
        
        <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-8">
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900">
                Sistema de Usuários
              </h2>
              <p className="text-sm text-gray-600 mt-2">
                Clique no botão abaixo para entrar
              </p>
            </div>
            
            <div className="flex justify-center">
              <button
                onClick={handleLogin}
                className="px-8 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              >
                Entrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
