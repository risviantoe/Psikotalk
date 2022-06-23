import React from 'react';

const ComingSoon = () => {
	return (
		<div
			style={{
				height: '100vh',
				width: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<img src="assets/images/logo-large.png" alt="logo" />
			<br />
			<br />
			<span style={{ fontSize: 20 }}>🐣 ComingSoon 🐣</span>
		</div>
	);
};

export default ComingSoon;
