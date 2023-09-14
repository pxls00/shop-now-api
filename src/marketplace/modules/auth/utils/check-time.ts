export default function (
  givenTime: Date,
  currentTime: Date,
  limitTime: number
) {
  const secondsPassed = Math.abs(currentTime.getTime() - givenTime.getTime())
  return secondsPassed >= limitTime
}
