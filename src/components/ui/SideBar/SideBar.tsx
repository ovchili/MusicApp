import clsx from 'clsx'
import { Dispatch, FC, SetStateAction } from 'react'
import { MdOutlineClose } from 'react-icons/md'

import style from './SideBar.module.scss'

type SideBarProps = {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

const SideBar: FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
	return (
		<aside
			className={clsx(
				isOpen ? `${style.left} ${style.sidebar} ` : `${style.sidebar}`
			)}
		>
			<MdOutlineClose
				className={style.sidebar__icon}
				onClick={() => {
					setIsOpen((prev) => !prev)
				}}
			/>

			<header className={style.sidebar__header}></header>

			<main className={style.sidebar__main}>123</main>

			<footer className={style.sidebar__footer}>123</footer>
		</aside>
	)
}
export default SideBar
