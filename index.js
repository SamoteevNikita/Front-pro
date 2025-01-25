
let birthYear = prompt("Введіть ваш рік народження:");
if (birthYear === null) {
  alert("Шкода, що Ви не захотіли ввести свій рік народження.");
} else {
  let city = prompt("Введіть місто, в якому Ви живете:");
  if (city === null) {
    alert("Шкода, що Ви не захотіли ввести своє місто.");
  } else {
    let sport = prompt("Введіть ваш улюблений вид спорту:");
    if (sport === null) {
      alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
    } else {
      
      const currentYear = new Date().getFullYear();
      const age = currentYear - birthYear;

      
      let cityMessage;
      switch (city.toLowerCase()) {
        case "київ":
          cityMessage = "Ти живеш у столиці України.";
          break;
        case "вашингтон":
          cityMessage = "Ти живеш у столиці США.";
          break;
        case "лондон":
          cityMessage = "Ти живеш у столиці Великої Британії.";
          break;
        default:
          cityMessage = `Ти живеш у місті ${city}.`;
      }

      
      let championMessage;
      switch (sport.toLowerCase()) {
        case "футбол":
          championMessage = "Круто! Хочеш стати як Ліонель Мессі?";
          break;
        case "бокс":
          championMessage = "Круто! Хочеш стати як Майк Тайсон?";
          break;
        case "теніс":
          championMessage = "Круто! Хочеш стати як Роджер Федерер?";
          break;
        default:
          championMessage = `Ваш улюблений вид спорту: ${sport}. Це теж чудово!`;
      }

      
      alert(`Ваш вік: ${age} років.\n${cityMessage}\n${championMessage}`);
    }
  }
}
