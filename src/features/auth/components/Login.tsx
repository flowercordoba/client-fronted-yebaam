/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IResponse } from 'src/features';

import { useAppDispatch } from '../../../store/store';
import { useAuthSchema } from '../hooks/useAuthSchema';
import { IHandleModalProps } from '../interfaces/auth.interface';
import { ISignInPayload } from '../interfaces/payload.intrfaces';
import { loginUserSchema } from '../schemes/auth.schema';
import { useSignInMutation } from '../services/auth.service';

const Login: FC<IHandleModalProps> = ({ isOpen, onClose }) => {
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [passwordType] = useState<string>('password');
  const [userInfo, setUserInfo] = useState<ISignInPayload>({
    username: 'neuvasa',
    password: 'dym123'
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [schemaValidation] = useAuthSchema({ schema: loginUserSchema, userInfo });
  const [signIn, { isLoading }] = useSignInMutation();

  const onLoginUser = async (): Promise<void> => {
    try {
      const isValid: boolean = await schemaValidation();
      if (isValid) {
        const result: IResponse = await signIn(userInfo).unwrap();
        console.log('Login Result:', result); // Log para verificar los datos del resultado
        setAlertMessage('');
        // dispatch(addAuthUser({ authInfo: result.user }));
        console.log({ authInfo: result.user });

        // dispatch(updateLogout(false));
        // saveToSessionStorage(JSON.stringify(true), JSON.stringify(result.user?.firstName));
        console.log(result.user);
        navigate('/'); // Redirigir a la página de inicio
      }
    } catch (error: any) {
      console.log(error);
      setAlertMessage(error?.data.message);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUserInfo((prev: any) => ({
      ...prev,
      [name]: value
    }));
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md overflow-y-auto max-h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Iniciar sesión</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        {alertMessage && <p className="text-red-500 mb-4">{alertMessage}</p>}
        <form>
          <div className="mb-4">
            <input
              type="text"
              name="username"
              placeholder="Email o Nombre"
              className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              value={userInfo.username}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type={passwordType}
              name="password"
              placeholder="Contraseña"
              className="w-full p-2 border border-gray-300 rounded-lg mt-2"
              value={userInfo.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="button"
            onClick={onLoginUser}
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </button>
          <div className="flex justify-between items-center mt-4">
            <a  className="text-blue-500 hover:underline">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
