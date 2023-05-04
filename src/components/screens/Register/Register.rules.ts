import { RegisterOptions } from 'react-hook-form'

import { IRegister } from '@/types/IRegister.type'

const REQUIRED_FIELD = 'Поле должно быть заполненным'

export const LoginRules:
	| Omit<
			RegisterOptions<IRegister, 'login'>,
			'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
	  >
	| undefined = {
	required: REQUIRED_FIELD,
	minLength: {
		value: 6,
		message: `Логин должен быть минимально 6 символов`,
	},
	maxLength: {
		value: 25,
		message: `Логин должен быть максимально 25 символов`,
	},
}

export const EmailRules: Omit<
	RegisterOptions<IRegister, 'email'>,
	'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
	required: REQUIRED_FIELD,
	pattern: {
		value: /^([^ ]+@[^ ]+.[a-z]{2,6}|)$/,
		message: 'Укажите корректный e-mail',
	},
}

export const PasswordRules: Omit<
	RegisterOptions<IRegister, 'password'>,
	'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
	required: REQUIRED_FIELD,

	minLength: {
		value: 8,
		message: `Пароль должен быть минимально 8 символов`,
	},
}

export const PasswordConfirmRules: Omit<
	RegisterOptions<IRegister, 'password'>,
	'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'
> = {
	required: REQUIRED_FIELD,

	minLength: {
		value: 8,
		message: `Пароль должен быть минимально 8 символов`,
	},
}
