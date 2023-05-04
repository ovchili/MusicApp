import { ChangeEventHandler, FC } from 'react'

type TextFieldProps = {
	container: {
		className: string
	}
	input: {
		type?: string
		placeholder: string
		onChange: ChangeEventHandler<HTMLInputElement>
		className: string
		value: string
	}
	errors: {
		message?: string
		className: string
	}
}

const TextField: FC<TextFieldProps> = (props) => {
	return (
		<div className={props.container.className}>
			<input {...props.input} />
			{props.errors.message && (
				<span className={props.errors.className}>{props.errors.message}</span>
			)}
		</div>
	)
}
export default TextField
