const fs = require("fs-extra");
const path = require("path");
const colors = require("colors");

type NavbarItem = {
    id: number;
    title: string;
    url: string;
};

function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const navbarContent = require("../components/navbar/navbarContent.json");

const templatePath = path.join(
    __dirname,
    "../components/navbar/pageTemplate.tsx",
);

const templateContent = fs.readFileSync(templatePath, "utf8");

let alreadyExistDir: number = 0;
let generatedDir: number = 0;

navbarContent.forEach((item: NavbarItem) => {
    if (item.url === "/") return;
    const dirPath = path.join(__dirname, "../app", item.title);
    const filePath = path.join(dirPath, "page.tsx");

    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath);
        fs.writeFileSync(
            filePath,
            templateContent.replace(/PageName/g, capitalize(item.title)),
        );
        console.log(
            colors.green(`+ ${capitalize(item.title)} page generated.`),
        );
        generatedDir++;
    } else {
        alreadyExistDir++;
    }
});

console.log(
    colors.green(
        `${generatedDir} pages generated, ${alreadyExistDir} pages already exist.`,
    ),
);
