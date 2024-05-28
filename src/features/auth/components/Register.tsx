/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, FC, useState } from 'react';
import { FaRegCaretSquareLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { useAppDispatch } from '../../../store/store';
import { useAuthSchema } from '../hooks/useAuthSchema';
import { IAuthModalProps, ISignUpPayload } from '../interfaces/payload.intrfaces';
import PagesTermins from '../legal/PagesTermins';
import { registerUserSchema } from '../schemes/auth.schema';
import { useSignUpMutation } from '../services/auth.service';

const Register: FC<IAuthModalProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [alertMessage, setAlertMessage] = useState<string>('');
  const [gender, setGender] = useState<string>('Mujer');
  const [pronoun, setPronoun] = useState<string>('Femenino');
  const [userInfo, setUserInfo] = useState<ISignUpPayload>({
    password: '',
    email: '',
    username: '',
    lastname: '',
    birthdate: { day: 15, month: '', year: 1990 },
    gender: 'Mujer',
    pronoun: 'Femenino',
    optionalGender: ''
  });

  const [schemaValidation] = useAuthSchema({ schema: registerUserSchema, userInfo });
  const [signUp, { isLoading }] = useSignUpMutation();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setGender(value);
    setUserInfo({ ...userInfo, gender: value });
  };

  const handlePronounChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setPronoun(value);
    setUserInfo({ ...userInfo, pronoun: value });
  };

  const handleBirthDateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setUserInfo({
      ...userInfo,
      birthdate: {
        ...userInfo.birthdate,
        [name]: name === 'year' ? parseInt(value) : value
      }
    });
  };

  const onRegisterUser = async (): Promise<void> => {
    try {
      const isValid: boolean = await schemaValidation();
      if (isValid) {
        const result = await signUp(userInfo).unwrap();
        console.log('Register Result:', result); // Log para verificar los datos del resultado
        setAlertMessage('');
        // dispatch(addAuthUser({ authInfo: result.user }));
        // dispatch(updateLogout(false));
        // saveToSessionStorage(JSON.stringify(true), JSON.stringify(result.user?.firstName));
        console.log('Register Result:saveToSessionStorage', result); // Log para verificar los datos del resultado
        localStorage.setItem('loggedInEmail', result.user?.email || '');
        console.log(FaRegCaretSquareLeft);
        navigate('/'); // Redirigir a la página de inicio
      }
    } catch (error: any) {
      console.log(error);
      setAlertMessage(error?.response?.data?.message || 'Registration failed. Please try again.');
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md overflow-y-auto max-h-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Registrarte</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <p className="text-gray-500 mb-4">Es rápido y fácil.</p>
        {alertMessage && <p className="text-red-500 mb-4">{alertMessage}</p>}
        <form>
          <div className="mb-4 flex space-x-2">
            <input
              type="text"
              name="username"
              placeholder="Nombre"
              className="w-1/2 p-2 border border-gray-300 rounded-lg"
              value={userInfo.username}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Apellido"
              className="w-1/2 p-2 border border-gray-300 rounded-lg"
              value={userInfo.lastname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={userInfo.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={userInfo.password}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Fecha de nacimiento</label>
            <div className="flex space-x-2">
              <select
                name="day"
                className="w-1/3 p-2 border border-gray-300 rounded-lg"
                value={userInfo.birthdate.day}
                onChange={handleBirthDateChange}
              >
                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              <select
                name="month"
                className="w-1/3 p-2 border border-gray-300 rounded-lg"
                value={userInfo.birthdate.month}
                onChange={handleBirthDateChange}
              >
                {[
                  'Enero',
                  'Febrero',
                  'Marzo',
                  'Abril',
                  'Mayo',
                  'Junio',
                  'Julio',
                  'Agosto',
                  'Septiembre',
                  'Octubre',
                  'Noviembre',
                  'Diciembre'
                ].map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <select
                name="year"
                className="w-1/3 p-2 border border-gray-300 rounded-lg"
                value={userInfo.birthdate.year}
                onChange={handleBirthDateChange}
              >
                {Array.from({ length: 120 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Género</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Mujer"
                  checked={gender === 'Mujer'}
                  onChange={handleGenderChange}
                  className="form-radio"
                />
                <span className="ml-2">Mujer</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Hombre"
                  checked={gender === 'Hombre'}
                  onChange={handleGenderChange}
                  className="form-radio"
                />
                <span className="ml-2">Hombre</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Otro"
                  checked={gender === 'Otro'}
                  onChange={handleGenderChange}
                  className="form-radio"
                />
                <span className="ml-2">Otro</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Pronombre</label>
            <select name="pronoun" className="w-full p-2 border border-gray-300 rounded-lg" value={pronoun} onChange={handlePronounChange}>
              <option value="Femenino">Femenino</option>
              <option value="Masculino">Masculino</option>
              <option value="Neutro">Neutro</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Género opcional</label>
            <input
              type="text"
              name="optionalGender"
              placeholder="Género opcional"
              className="w-full p-2 border border-gray-300 rounded-lg"
              value={userInfo.optionalGender}
              onChange={handleInputChange}
            />
          </div>
          <button
            type="button"
            onClick={onRegisterUser}
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
            disabled={isLoading}
          >
            {isLoading ? 'Registrando...' : 'Registrarte'}
          </button>
        </form>
        <PagesTermins />
      </div>
    </div>
  );
};

export default Register;
