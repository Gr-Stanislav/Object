// Авто

let auto = {
    brand: " BMW ",
    model: " X6 ",
    year: 2020,
    speed: 250,
}


if (confirm ("Показать информацию по выбранному авто?")) {
    alert (auto.brand + auto.model + "Year: - " + auto.year + " Max.speed: - " + auto.speed);

    let average_speed = parseInt(prompt("Введите расстояние которое хотели бы приодалеть на данном авто? Введите расстояние в километрах:"));
    let time = average_speed / (auto.speed / 2);
    console.log (time + " Часа в пути.");

    if (time >= 4) {
    let relaxation;
    relaxation = time / 4;
    alert (`Время в пути: ${time} часа,` + ` + ~ время отдыха в пути ${relaxation} часа.`);
    } else {
        alert (time + " часа в пути. Маршрут можно проехать без отдыха.");
    }

} else {
    alert ("Ок, в другой раз!")
}




