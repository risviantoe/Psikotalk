import ContentLoader from 'react-content-loader';

const SekeletonTable = () => (
	<ContentLoader viewBox="0 0 380 70">
		<rect x="0" y="0" rx="0" ry="0" width="25" height="18" />
		<rect x="26" y="0" rx="0" ry="0" width="100" height="18" />
		<rect x="127" y="0" rx="0" ry="0" width="90" height="18" />
		<rect x="218" y="0" rx="0" ry="0" width="70" height="18" />
		<rect x="289" y="0" rx="0" ry="0" width="90" height="18" />
		{/* row 2 */}
		<rect x="0" y="19" rx="0" ry="0" width="25" height="18" />
		<rect x="26" y="19" rx="0" ry="0" width="100" height="18" />
		<rect x="127" y="19" rx="0" ry="0" width="90" height="18" />
		<rect x="218" y="19" rx="0" ry="0" width="70" height="18" />
		<rect x="289" y="19" rx="0" ry="0" width="90" height="18" />
		
	</ContentLoader>
);

export default SekeletonTable