import { packages, addOns } from "./services";

export function getPackage(id: string) {
  return packages.find((p) => p.id === id) ?? packages[0];
}

export function getAddOn(id: string) {
  return addOns.find((a) => a.id === id);
}

export interface EstimateResult {
  priceMin: number;
  priceMax: number;
  daysMin: number;
  daysMax: number;
  addOnNames: string[];
}

export function hitungEstimasi(
  packageId: string,
  addOnIds: string[],
): EstimateResult {
  const pkg = getPackage(packageId);
  let priceMin = pkg.priceMin;
  let priceMax = pkg.priceMax;
  let daysMin = pkg.duration.match(/(\d+)/)?.[1] ? parseInt(pkg.duration.match(/(\d+)/)?.[1] ?? "0") : 5;
  let daysMax = daysMin;
  const addOnNames: string[] = [];

  for (const id of addOnIds) {
    const a = getAddOn(id);
    if (!a) continue;
    if (!a.suitableFor.includes(packageId)) continue;
    priceMin += a.priceMin;
    priceMax += a.priceMax;
    daysMin += 1;
    daysMax += 2;
    addOnNames.push(a.name);
  }

  return { priceMin, priceMax, daysMin, daysMax, addOnNames };
}

export function waMessage(
  packageId: string,
  addOnIds: string[],
  name?: string,
): string {
  const pkg = getPackage(packageId);
  const res = hitungEstimasi(packageId, addOnIds);
  const addOnsText = res.addOnNames.length ? res.addOnNames.join(", ") : "Tidak ada";
  return `Halo Boyle Byte,${name ? ` ini ${name},` : " ini"}\n\nSaya tertarik paket *${pkg.name}*.\nAdd-on: ${addOnsText}\nEstimasi: Rp ${res.priceMin.toLocaleString("id-ID")} – Rp ${res.priceMax.toLocaleString("id-ID")}\nDurasi: ±${res.daysMin}–${res.daysMax} hari kerja.\n\nMohon info lebih lanjut.`;
}
