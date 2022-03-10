import React, { useState } from "react"

export const xxx = 10
//Baris 4-6 adalah JSX (gabungan antara HTML dan Javascript)
const Counter = (props: any) => {
	const [currentValue, setCurrentValue] = useState(props.defaultValue);

	const increase = () => setCurrentValue(currentValue + 1)
	const decrease = () => setCurrentValue(currentValue - 1)
	const reset = () => setCurrentValue(props.defaultValue)

	return (
		<div>
			<p>{currentValue}</p>
			<button onClick={() => increase()}>Increase</button>
			<button onClick={decrease}>Decrease</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default Counter
