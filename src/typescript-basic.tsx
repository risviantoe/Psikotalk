const angka: number = 1
const Kata: string = "Tes"
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

type Profile3 = {
	name: string,
	age: number,
	job?: string,
	hello: () => string
}

const profile3: Profile3 = {
	name: "Edwin",
	age: 22,
	hello: () => {
		return "Helo " + profile3.name;
	}
}

console.log(profile3.hello());


const Sembarang: any = false

// Bagaimana jika type kembalian dari fungsi tambah adalah string tetapi penjumlahan angka1 dan angka2 tetap benar
const Add1 = (angka1: number, angka2: number): string => {
	return String(angka1 + angka2)
}

console.log(Add1(15, 8));

const Add2 = (angka1: number, angka2: number): string => {
	return `${(angka1 + angka2)}`
}

console.log(Add2(1, 2));


const Add3 = (angka1: number, angka2: number): string => {
	return ""+(angka1 + angka2)
}

console.log(Add3(2, 5));

// Bagaimana penulisan type untuk array of object, gunakan type profile 1,2,3

const arrayOfObject1: { name: string, age: number, job?: string }[] = [
	{ name: "Edwin", age: 22}
]

console.log(arrayOfObject1);

const arrayOfObject2: Profile2[] = [
	{
		name: "Edwin",
		age: 22
	},
	{
		name: "Edwin",
		age: 22
	}
]

console.log(arrayOfObject2);

const arrayOfObject3: Profile3[] = [
	{
		name: "Edwin",
		age: 22,
		hello: (): string => {
			return "Helo " + profile3.name;
		}
	}
]

console.log(arrayOfObject3);

// Bagaimana penulisan type untuk object yang berisi fungsi

// Bagaimana penulisan type untuk fungsi yang kembaliannya itu promis atau void

const Hello = (): void => {
	console.log("Hellooo");
}

console.log(Hello);

const Void = (angka1: number, angka2: number): void => { };

/////////////////
// 17 Maret 2022

interface ButtonAttr {
	color: string
}

interface ButtonFunc<T = {}> {
	(attr: T): string
}

const btn: ButtonFunc<ButtonAttr> = (attr) => "Edwin"
const btn2: ButtonFunc = (attr) => "Edwin"

export default Sembarang