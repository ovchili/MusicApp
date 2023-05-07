import clsx from 'clsx'
import { useEffect } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import TextField from '@/ui/TextField/TextField'

import { ILogin } from '@/types/Ilogin.type'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useTypedSelector } from '@/hooks/useTypedSelector'

import logo from '@/assets/images/logo__white.png'

import style from './Login.module.scss'

const Login = () => {
	const nav = useNavigate()
	const handleClick = () => {
		nav('/register')
	}

	const { user } = useAuth()
	const { login } = useActions()
	const { control, handleSubmit } = useForm<ILogin>({
		mode: 'onChange',
		defaultValues: {
			emailLogin: '',
			password: '',
		},
	})
	const onSubmit: SubmitHandler<ILogin> = (data) => {
		login(data)
	}

	useEffect(() => {
		if (user) {
			nav('/home')
		}
	}, [user])
	return (
		<div className={style.container}>
			<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
				<header className={style.header}>
					<img src={logo} alt="Logo" draggable="false" />
				</header>
				<main className={style.main}>
					<Controller
						name="emailLogin"
						rules={{ required: 'Поле должно быть заполненным' }}
						control={control}
						render={({ field, fieldState }) => (
							<TextField
								container={{ className: `${style.input__container}` }}
								input={{
									type: 'text',
									placeholder: 'Логин',
									className: `${style.input}`,
									onChange: (e) => field.onChange(e),
									value: field.value,
								}}
								errors={{
									message: fieldState.error?.message,
									className: `${style.error__text}`,
								}}
							/>
						)}
					/>

					<Controller
						name="password"
						rules={{ required: 'Поле должно быть заполненным' }}
						control={control}
						render={({ field, fieldState }) => (
							<TextField
								container={{ className: `${style.input__container}` }}
								input={{
									type: 'password',
									placeholder: 'Пароль',
									className: `${style.input}`,
									onChange: (e) => field.onChange(e),
									value: field.value,
								}}
								errors={{
									message: fieldState.error?.message,
									className: `${style.error__text}`,
								}}
							/>
						)}
					/>
				</main>

				<footer className={style.footer}>
					<button className={clsx(style.btn, style.btn__primary)}>Войти</button>
					<button
						className={clsx(style.btn, style.btn__secondary)}
						onClick={handleClick}
					>
						Зарегистрироваться
					</button>
				</footer>
			</form>
		</div>
	)
}

export default Login
