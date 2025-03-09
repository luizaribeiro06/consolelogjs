import chalk from "chalk";
import cows from "cows";

export default function coolsolelog(message) {
    const cowMessage = cows()[0]; // Pega um desenho de vaca aleatório
    console.log(chalk.blueBright(cowMessage)); // Deixa a vaca azul
    console.log(chalk.greenBright(message)); // Deixa a mensagem verde
}
