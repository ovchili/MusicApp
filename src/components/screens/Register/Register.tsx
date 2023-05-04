import clsx from 'clsx'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import TextField from '@/ui/TextField/TextField'

import { IRegister } from '@/types/IRegister.type'

import logo from '@/assets/images/logo__white.png'

import style from './Register.module.scss'
import {
	EmailRules,
	LoginRules,
	PasswordConfirmRules,
	PasswordRules,
} from './Register.rules'

const Register = () => {
	const { control, watch, handleSubmit } = useForm<IRegister>({
		mode: 'all',
		defaultValues: {
			login: '',
			email: '',
			password: '',
			passwordConfirm: '',
		},
	})
	const onSubmit: SubmitHandler<IRegister> = (data) => console.log(data)
	return (
		<div className={style.container}>
			<form className={style.form} onSubmit={handleSubmit(onSubmit)}>
				<header className={style.header}>
					<img src={logo} alt="Logo" draggable="false" />
				</header>
				<main className={style.main}>
					<Controller
						name="login"
						rules={LoginRules}
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
						name="email"
						rules={EmailRules}
						control={control}
						render={({ field, fieldState }) => (
							<TextField
								container={{ className: `${style.input__container}` }}
								input={{
									type: 'text',
									placeholder: 'E-Mail',
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
						rules={{
							...PasswordRules,
							validate: (val: string) => {
								if (watch('login') === val) {
									return 'Логин и пароль не должны совпадать'
								}
							},
						}}
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

					<Controller
						name="passwordConfirm"
						rules={{
							...PasswordConfirmRules,
							validate: (val: string) => {
								if (watch('password') != val) {
									return 'Пароли должны совпадать'
								}
							},
						}}
						control={control}
						render={({ field, fieldState }) => (
							<TextField
								container={{ className: `${style.input__container}` }}
								input={{
									type: 'password',
									placeholder: 'Повторите пароль',
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
					<button className={clsx(style.btn, style.btn__primary)}>
						Зарегистрироваться
					</button>
				</footer>
			</form>
		</div>
	)
}

export default Register
