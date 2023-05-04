import { Dispatch, FC, SetStateAction } from 'react'
import { set } from 'react-hook-form'
import { MdOutlineLogout, MdOutlineMenu, MdOutlineSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'

import logo from '@/assets/images/logo.png'

import style from './Header.module.scss'

type HeaderProps = {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}
const Header: FC<HeaderProps> = ({ setIsOpen, isOpen }) => {
	return (
		<header className={style.header}>
			<div className={style.header__data}>
				<MdOutlineMenu
					className={style.header__hamburger}
					onClick={() => {
						setIsOpen(!isOpen)
					}}
				/>
				<Link to="/" className={style.header__logo}>
					<img src={logo} />
				</Link>
			</div>

			<div className={style.header__search}>
				<MdOutlineSearch className={style.icon} />
				<input type="text" placeholder="Поиск" />
			</div>

			<div className={style.header__logout}>
				<MdOutlineLogout />
			</div>
		</header>
	)
}
export default Header
