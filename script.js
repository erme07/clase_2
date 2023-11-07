const resultado = document.getElementById("resultado");
const valor_a = document.getElementById("valor-a");
const valor_b = document.getElementById("valor-b");


const suma = (a,b) =>  Number(a) + Number(b)
const resta = (a,b) => Number(a) - Number(b)
const multiplicacion = (a, b) => Number(a) * Number(b)

const division = (a, b) => {
  if (Number(b) === 0)
    return "infinito"
  return Number(a) / Number(b)
}

const operar = (operacion) => {
  if (!(valor_a.value === "" || valor_b.value === ""))
    resultado.innerHTML = operacion(valor_a.value, valor_b.value)
  else 
    resultado.innerHTML = "ingrese los valores"
}

document.addEventListener("submit", (e) => {
  e.preventDefault()
  if (e.submitter.id === "suma") 
    operar(suma)
  else if (e.submitter.id === "resta") 
    operar(resta)
  else if (e.submitter.id === "multiplicacion") 
    operar(multiplicacion)
  else if (e.submitter.id === "division") 
    operar(division)
})