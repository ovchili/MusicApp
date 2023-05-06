import clsx from 'clsx'
import {
	Dispatch,
	FC,
	LegacyRef,
	MutableRefObject,
	SetStateAction,
	useEffect,
	useRef,
} from 'react'
import 'react-icons/hi'
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi'
import { MdOutlineClose } from 'react-icons/md'
import { NavLink } from 'react-router-dom'

import style from './SideBar.module.scss'
import ToggleSwitch from './ToggleSwitch/ToggleSwitch'

type SideBarProps = {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

const SideBar: FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
	const sideBarRef = useRef<HTMLDivElement | null>(null)
	useEffect(() => {
		const handleClick = (e: Event) => {
			if (!sideBarRef.current?.contains(e.target as Node)) {
				setIsOpen(false)
			}
		}

		document.addEventListener('mousedown', handleClick)
		return () => document.removeEventListener('mousedown', handleClick)
	}, [])
	return (
		<div
			ref={sideBarRef}
			className={clsx(style.wrapper, { [style.open]: isOpen })}
		>
			<aside
				ref={sideBarRef}
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

				<main className={style.sidebar__main}>
					<nav className={style.link__box}>
						<NavLink
							className={({ isActive }) =>
								clsx([style.link, { [style.active]: isActive }])
							}
							to="/"
						>
							Главная
						</NavLink>
						<NavLink
							className={({ isActive }) =>
								clsx([style.link, { [style.active]: isActive }])
							}
							to="/favorites"
						>
							Мои треки
						</NavLink>

						<ToggleSwitch
							onIcon={<HiOutlineSun />}
							offIcon={<HiOutlineMoon />}
						/>
					</nav>
				</main>

				<footer className={style.sidebar__footer}>
					<div className={style.footer__container}></div>
				</footer>
			</aside>
		</div>
	)
}
export default SideBar
