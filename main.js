//UKOL1
// Vytvořte funkci salary se třemi parametry

// wage - hrubá mzda v korunách za hodinu
// hours - kolik hodin denně průměrně pracujete
// days - kolik dní v měsící průměrně pracujete
// Funkce spočítá vaši hrubou měsíční mzdu v celých korunách.

// Dále vytvořte funkci taxed, která na vstupu obdrží částku a procento zdanění, 
//a vrátí částku v celých korunách zdaněnou podle zadaných procent.

// Použítím funkcí salary a taxed spočítejte svoji měsíční mzdu po 15% zdanění.
let castka = prompt('zadejte castku')
let procento = Number(prompt('zadejte procento'))

const salary = (wage,hours,days) =>{
  return  Math.round(wage * hours * days)
}
const taxed = (castka, procento) =>{
    return Math.round((castka * (100 - procento)) / 100)
}
console.log (salary(3,4,5))
console.log (taxed(castka,procento))
//UKOL2

const calculate = (number1, operation, number2) => {
	if (operation === '-') {
		return number1 - number2
	}
	if (operation === '+') {
		return number1 + number2
	}
	if (operation === '*') {
		return number1 * number2
	}
	if (operation === '/') {
		return number1 / number2
	}
}
console.log(calculate(2,'+',3))

//UKOL3