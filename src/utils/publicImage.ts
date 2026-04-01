// Monta URL de arquivo estático servido de public/images/ (encode para nomes com espaço)
export function publicImageUrl(file: string): string {
  return `/images/${encodeURIComponent(file)}`
}
