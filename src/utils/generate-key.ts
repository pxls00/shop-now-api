export default function (key: string): string {
  return key.trim().toLowerCase().split(' ').join('_')
}
