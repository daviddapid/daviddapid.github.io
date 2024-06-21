import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card } from "@/components/my/card";

export default function Page() {
	return (
		<>
			<div className=" md:grid md:grid-cols-3 md:gap-5">
				<div className="col-span-2">
					<Carousel>
						<CarouselContent>
							<CarouselItem>
								<Image
									src={"/dokumentasi/smk_koding/img1.jpg"}
									alt="foto bersama smk koding"
									width={1000}
									height={1000}
									className="w-full h-[350px] object-cover rounded-md"
								/>
							</CarouselItem>
							<CarouselItem>
								<Image
									src={"/dokumentasi/smk_koding/img2.jpeg"}
									alt="foto bersama smk koding"
									width={1000}
									height={1000}
									className="w-full h-[350px] object-cover rounded-md"
								/>
							</CarouselItem>
							<CarouselItem>
								<Image
									src={"/dokumentasi/smk_koding/img3.jpeg"}
									alt="foto bersama smk koding"
									width={1000}
									height={1000}
									className="w-full h-[350px] object-cover rounded-md"
								/>
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
					<div
						id="header"
						className="mt-3 md:flex md:justify-between md:items-center"
					>
						<h1 className="text-2xl font-semibold uppercase">SMK KODING JAMBORE DIGITAL INDONESIA</h1>
						<p className="text-slate-600 dark:text-slate-300 font-medium md:text-lg">Desember 2022</p>
					</div>
					<div
						id="body"
						className="mt-3"
					>
						<p>
							Adalah lomba tahunan yang diselenggarakan oleh SMK Coding bersama Alkademi, lomba ini dapat diikuti
							oleh seluruh siswa/siswi SMK dari daerah manapun. Lomba ini terdiri dari beberapa soal yang harus
							dikerjakan oleh kompetitor. Dari Seluruh kompetitor yang terdaftar akan diambil 3 terbaik
							berdasarkan nilai yang didapatkan. 3 Kompetitor tersebut akan diundang untuk malam penghargaan di
							Bandung
						</p>
					</div>
				</div>
				<div className="mt-6 md:mt-0">
					<Card>
						<Image
							src={"/liga_smk.png"}
							alt="sertifikat smk koding juara 1"
							width={1000}
							height={1000}
							className="w-full mb-4 border"
						/>
						<table className="text-sm xl:text-base">
							<tbody>
								<tr>
									<td>Penyelenggara</td>
									<td className="px-2">:</td>
									<td>SMK CODING & ALKADEMI</td>
								</tr>
								<tr>
									<td>Lokasi</td>
									<td className="px-2">:</td>
									<td>Bandung</td>
								</tr>
								<tr>
									<td>Pelaksanaan</td>
									<td className="px-2">:</td>
									<td>online & offline</td>
								</tr>
								<tr>
									<td>Juara</td>
									<td className="px-2">:</td>
									<td>1</td>
								</tr>
							</tbody>
						</table>
					</Card>
				</div>
			</div>
		</>
	);
}
