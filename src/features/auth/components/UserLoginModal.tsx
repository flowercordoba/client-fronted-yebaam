/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IResponse } from 'src/features';

import { useAppDispatch } from '../../../store/store';
import { useAuthSchema } from '../hooks/useAuthSchema';
import { ISignInPayload } from '../interfaces/payload.intrfaces';
import { loginUserSchema } from '../schemes/auth.schema';
import { useSignInMutation } from '../services/auth.service';
// import { authService } from '../services/auths.service';

interface UserLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const UserLoginModal: FC<UserLoginModalProps> = ({ isOpen, onClose }) => {
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [passwordType, setPasswordType] = useState<string>('password');
  const [userInfo, setUserInfo] = useState<ISignInPayload>({
    username: '',
    password: ''
  });

  const dispatch = useAppDispatch();
  const [schemaValidation] = useAuthSchema({ schema: loginUserSchema, userInfo });
  const [signIn, { isLoading }] = useSignInMutation();

  const onLoginUser = async (): Promise<void> => {
    try {
      const isValid: boolean = await schemaValidation();
      if (isValid) {
        const result: IResponse = await signIn(userInfo).unwrap();
        setAlertMessage('');
        // dispatch(addAuthUser({ authInfo: result.user }));
        // dispatch(updateLogout(false));
        // saveToSessionStorage(JSON.stringify(true), JSON.stringify(result.user?.firstName));
      }
    } catch (error: any) {
      setAlertMessage(error?.data.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Iniciar sesión en yebaam</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center mb-4">
          <img src="https://via.placeholder.com/100" alt="Flower" className="w-20 h-20 rounded-full mb-2" />
          <p>Flower Moreno</p>
        </div>
        <form>
          <div className="mb-4">
            <input type="password" placeholder="Contraseña" className="w-full p-2 border border-gray-300 rounded-lg mt-2" required />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="remember" className="mr-2" />
            <label htmlFor="remember" className="text-gray-700">
              Recordar contraseña
            </label>
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300">
            Iniciar sesión
          </button>
          <div className="flex justify-center items-center mt-4">
            <a className="text-blue-500 hover:underline">¿Olvidaste tu contraseña?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLoginModal;
