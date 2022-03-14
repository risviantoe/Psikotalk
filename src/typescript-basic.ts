const angka: number = 1
const kata: string = "Tes"
const isJomblo: boolean = true
const hobbies: string[] = ["Tidur", "Rebahan", "Ngalamun"]
const oddNumbers: Array<number> = [1, 3, 5, 7, 9]

const Profile1: { name: string, age: number, job?: string } = {
	name : "Edwin Risvianto",
	age : 22
}

interface Profile2 {
	name: string,
	age: number,
	job?: string
}

const profile2: Profile2 = {
	name: "Edwin",
	age: 22
}

type Profil3 = {
	name: string,
	age: number,
	job?: string
}

const profile3: Profile3 = {
	name: "Edwin",
	age: 22
}

// Bagaimana jika type kembalian dari fungsi tambah adalah string tetapi penjumlahan angka1 dan angka2 tetap benar
const add = (angka1: number, angka2: number): number => {
	return angka1 + angka2
}

const sembarang: any = false

// Bagaimana penulisan type untuk array of object, gunakan type profile 1,2,3

// Bagaimana penulisan type untuk object yang berisi fungsi

// Bagaimana penulisan type untuk fungsi yang kembaliannya itu promise atau void

export default sembarang