const originalPrice: number = 150000;
const discountPercentage: number = 20;

const discountAmount: number = originalPrice * (discountPercentage / 100);
const finalPrice: number = originalPrice - discountAmount;

console.log(`Harga awal: Rp${originalPrice}`);
console.log(`Diskon: ${discountPercentage}%`);
console.log(`Jumlah potongan: Rp${discountAmount}`);
console.log(`Harga akhir: Rp${finalPrice}`);