import React from 'react'
import { Psikolog } from '../types';

interface AdminContextProv extends Psikolog {
    children?: React.ReactNode
}

// const defaultValue: AdminContextProv = {
// 	name: '',
// 	username: '',
// 	email: '',
// 	gender: '',
// 	biodata: '',
// 	tanggal_lahir: '',
// 	nomor_hp: '',
// 	file_ijazah: [],
// 	surat_izin: [],
//     images: [],
//     _id: ''
// };

// const AdminContext = React.createContext(defaultValue);

// export default AdminContext
