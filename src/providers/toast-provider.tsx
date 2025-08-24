'use client';

import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Interface para as propriedades do ToastProvider.
 *
 * @interface IToastProviderProps
 * @property {ReactNode} children - Os elementos filhos que o provedor irá envolver.
 */
interface IToastProviderProps {
	children: ReactNode;
}

/**
 * Um provedor de toast que encapsula o ToastContainer para ser usado na aplicação.
 *
 * @param {IToastProviderProps} props - As propriedades do componente.
 * @returns {JSX.Element} O componente ToastContainer.
 */
export function ToastProvider({ children }: IToastProviderProps): JSX.Element {
	return (
		<>
			{children}
			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</>
	);
}