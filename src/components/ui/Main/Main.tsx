import { FC, PropsWithChildren } from 'react'

import style from './Main.module.scss'

type Props = {}
const Main: FC<PropsWithChildren> = ({ children }) => {
	return <main className={style.main}>{children}</main>
}
export default Main
