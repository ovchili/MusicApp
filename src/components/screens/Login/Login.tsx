import clsx from 'clsx'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import TextField from '@/ui/TextField/TextField'

import { ILogin } from '@/types/Ilogin.type'

import logo from '@/assets/images/logo__white.png'

import style from './Login.module.scss'

const Login = () => {
	const nav = useNavigate()
	const handleClick = () => {
		nav('/register')
	}

	const { control, handleSubmit } = useForm<ILogin>({
		mode: 'onChange',
		defaultValues: {
			loginOrEmail: '',
			password: '',
		},
	})
	const onSubmit: SubmitHandler<ILogin> = (data) => console.log(data)
	return (
		<div className={style.container}>
			<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
				<header className={style.header}>
					<img src={logo} alt="Logo" draggable="false" />
				</header>
				<main className={style.main}>
					<Controller
						name="loginOrEmail"
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
