/* eslint-disable prettier/prettier */

import { FC, ReactElement, useState } from 'react';

import LoginModal from '../auth/components/Login';
import RegisterModal from '../auth/components/Register';
import UserLoginModal from '../auth/components/UserLoginModal';

const Index: FC = (): ReactElement => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isUserLoginModalOpen, setIsUserLoginModalOpen] = useState(false);

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const closeRegisterModal = () => {
    setIsRegisterModalOpen(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openUserLoginModal = () => {
    setIsUserLoginModalOpen(true);
  };

  const closeUserLoginModal = () => {
    setIsUserLoginModalOpen(false);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <div className="flex flex-col items-center mb-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-2">yebaam</h1>
      <p className="text-lg text-gray-700">Inicios de sesión recientes</p>
      <p className="text-sm text-gray-500">Haz clic en tu foto o agrega una cuenta.</p>
    </div>

    <div className="flex space-x-4 mb-8">
      <div className="flex flex-col items-center cursor-pointer" onClick={openUserLoginModal}>
        <img
          src="https://plus.unsplash.com/premium_photo-1683121366070-5ceb7e007a97?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Flower"
          className="w-20 h-20 rounded-full"
        />
        <p className="mt-2">Flower</p>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer" onClick={openLoginModal}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <p className="mt-2 text-blue-600 cursor-pointer" onClick={openLoginModal}>Agregar cuenta</p>
      </div>
    </div>

    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Email o Teléfono"
            className="w-full p-2 border border-gray-300 rounded-lg mt-2"
            required
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-2 border border-gray-300 rounded-lg mt-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Iniciar sesión
        </button>
        <div className="flex justify-between items-center mt-4">
          <a  className="text-blue-500 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
          <a  className="text-blue-500 hover:underline" onClick={openRegisterModal}>
            Crear cuenta nueva
          </a>
        </div>
      </form>
    </div>

    <div className="mt-8">
      <a  className="text-blue-500 hover:underline">
        Crea una página para una celebridad, una marca o un negocio.
      </a>
    </div>


    <RegisterModal isOpen={isRegisterModalOpen} onClose={closeRegisterModal} />
    <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
    <UserLoginModal isOpen={isUserLoginModalOpen} onClose={closeUserLoginModal} />
  </div>
  );
};

export default Index;
