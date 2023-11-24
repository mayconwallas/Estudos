let fruta = "goiaba";

switch (fruta) {
  case "Laranja":
  case "maçã":
  case "pera":
  case "goiaba":
    console.log("Suco de " + fruta)
    break
  case "banana":
  case "morango":
    console.log("Vitamina de " + fruta)
    break

  default:
    console.log("Mistureba estranha.")
    break
}