const today = document.querySelector(".day")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
const seconds = document.querySelector(".seconds")

const newYears = "5 dec 2024"

function countDown() {
  const newYearsDate = new Date(newYears)
  const currentDate = new Date()

  const totalSeconds = (newYearsDate - currentDate) / 1000
  const dias = Math.floor(totalSeconds / 3600 / 24)
  const horas = Math.floor(totalSeconds / 3600) % 24
  const minutos = Math.floor(totalSeconds / 60) % 60
  const segundos = Math.floor(totalSeconds) % 60

  today.innerHTML = dias
  hours.innerHTML = formatTime(horas)
  minutes.innerHTML = formatTime(minutos)
  seconds.innerHTML = formatTime(segundos)
}

function formatTime(time) {
  return time < 10 ? ` 0${time}` : time
}
setInterval(countDown, 1000)
