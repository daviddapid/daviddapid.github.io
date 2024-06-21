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
								<div className="w-full h-[350px] object-cover rounded-md bg-slate-300"></div>
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious />
						<CarouselNext />
					</Carousel>
					<div
						id="header"
						className="mt-3 md:flex md:justify-between md:items-center"
					>
						<h1 className="text-2xl font-semibold uppercase">TRASPAC COMPETITION</h1>
						{/* <p className="text-slate-600 dark:text-slate-300 font-medium md:text-lg">12 Agustus 2005</p> */}
					</div>
					<div
						id="body"
						className="mt-3"
					>
						<p className="text-justify">
							Adalah lomba tahunan yang diselenggarakan oleh PT TRASPAC secara full online, lomba ini dapat
							diikuti oleh seluruh siswa/siswi SMK kelas akhir dari daerah manapun. Lomba ini terdiri dari
							beberapa bidang diantaranya software system web/mobile, ui/ux design, dan sales contest. Dari
							masing-masing bidang lomba akan diambil 5 besar untuk maju ke final lalu diambil 3 juara.
						</p>
					</div>
				</div>
				<div className="mt-6 md:mt-0">
					<Card>
						<Image
							src={"/traspac.png"}
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
									<td>PT TRASPAC</td>
								</tr>
								<tr>
									<td>Lokasi</td>
									<td className="px-2">:</td>
									<td>Jakarta</td>
								</tr>
								<tr>
									<td>Pelaksanaan</td>
									<td className="px-2">:</td>
									<td>online</td>
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
