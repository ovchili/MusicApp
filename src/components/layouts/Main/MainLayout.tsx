import { FC, PropsWithChildren, useState } from 'react'

import Footer from '@/ui/Footer/Footer'
import Header from '@/ui/Header/Header'
import Main from '@/ui/Main/Main'
import SideBar from '@/ui/SideBar/SideBar'

import style from './Main.module.scss'

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<div className={style.container}>
			<Header isOpen={isOpen} setIsOpen={setIsOpen} />
			<SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
			<Main>{children}</Main>
			<Footer />
		</div>
	)
}
export default MainLayout
