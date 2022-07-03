import React, { useState } from 'react';

interface PsikologContextProv {
	children?: React.ReactNode;
    imgPreviewSrc: string;
    loading: boolean;
    showModal: boolean;
	setImgPreviewSrc: (newImgPreview: string) => void;
	setLoading: (newLoading: boolean) => void;
	setShowModal: (newShowModal: boolean) => void;
}

const defaultValue: PsikologContextProv = {
    imgPreviewSrc: '',
    loading: false,
    showModal: false,
	setImgPreviewSrc: (newImgPreview: string) => null,
	setLoading: (newLoading: boolean) => null,
	setShowModal: (newShowModal: boolean) => null,
};

const PsikologContext = React.createContext(defaultValue);
const PsikologContextProv: React.FC<PsikologContextProv> = (
	props
) => {
	const [imgPreviewSrc, setImgPreviewSrc] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false)
	return (
		<PsikologContext.Provider
			value={{
                imgPreviewSrc: imgPreviewSrc,
                loading: loading,
                showModal: showModal,
                setImgPreviewSrc: setImgPreviewSrc,
                setLoading: setLoading,
                setShowModal: setShowModal
			}}
		>
			{props.children}
		</PsikologContext.Provider>
	);
};

export default PsikologContext;
