import type { IRateItem } from '../../../../models/company/index.types'

export default function (rate: IRateItem[]): number {
  return parseFloat(
    (
      rate.reduce((acc: number, item) => acc + item.rate_number, 0) /
      rate.length
    ).toFixed(1)
  )
}
