const simbolo= document.getElementById("simbolo-operacion")
const resultado = document.getElementById("resultado");
const valor_a = document.getElementById("valor-a");
const valor_b = document.getElementById("valor-b");

const simbolos = {
  suma: "+",
  resta: "-",
  multiplicacion: "x",
  division: "/"
}

const suma = (a,b) =>  Number(a) + Number(b)
const resta = (a,b) => Number(a) - Number(b)
const multiplicacion = (a, b) => Number(a) * Number(b)
const division = (a, b) => (Number(b) === 0) ? "infinito" : Number(a) / Number(b)

const operar = (operacion) => {
  resultado.classList.remove("d-none")
  if (!(valor_a.value === "" || valor_b.value === ""))
    resultado.innerHTML = operacion(valor_a.value, valor_b.value)
  else 
    resultado.innerHTML = "ingrese los valores"
}

const mostrarSimbolo = (valor) => {
  simbolo.classList.remove("d-none")
  simbolo.innerHTML= simbolos[valor]
}

document.addEventListener("submit", (e) => {
  e.preventDefault()
  mostrarSimbolo(e.submitter.id)
  if (e.submitter.id === "suma")
    operar(suma)
  else if (e.submitter.id === "resta") 
    operar(resta)
  else if (e.submitter.id === "multiplicacion")
    operar(multiplicacion)
  else if (e.submitter.id === "division")
    operar(division)
})