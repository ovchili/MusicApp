import { useNavigate } from 'react-router-dom'

import img from '@/assets/images/smile_crying.svg'

import style from './NotFound.module.scss'

const NotFound = () => {
	const nav = useNavigate()
	return (
		<div className={style.container}>
			<h1 className={style.heading}>
				<span>404</span>
				Страница не найдена
				<img draggable={false} src={img} alt="cry" />
			</h1>

			<p className={style.subheading}>
				Возможно, она была удалена или перенесена на другой адрес
			</p>

			<button onClick={() => nav('/')} className={style.primary}>
				Вернуться на главную
			</button>
		</div>
	)
}
export default NotFound
