import { FC, ReactNode, useState } from 'react'
import { toastr } from 'react-redux-toastr'

import style from './ToggleSwitch.module.scss'

type ToggleSwitchProps = {
	offIcon: ReactNode
	onIcon: ReactNode
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ offIcon, onIcon }) => {
	const [isDark, setIsDark] = useState(false)

	return (
		<span
			className={style.toggle}
			onClick={() => {
				setIsDark(!isDark)
			}}
		>
			{isDark ? onIcon : offIcon}
		</span>
	)
}
export default ToggleSwitch
