import moment from "moment"

const items = []
for (let hour = 0; hour < 24; hour++) {
  items.push([hour, 0])
  items.push([hour, 30])
}

const date = moment()
export const timeIntervals = items.map((time) => {
  const [hour, minute] = time
  date.set("hour", hour)
  date.set("minute", minute)

  return date.format("HH:mm")
})
