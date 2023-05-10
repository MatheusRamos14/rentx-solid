import fs from 'fs';
import { parse as csvParse } from 'csv-parse';

interface ICategory {
    name: string;
    description: string;
}

async function loadCategories(file: Express.Multer.File): Promise<ICategory[]> {
    return new Promise((resolve, reject) => {
        const categories: ICategory[] = [];

        const stream = fs.createReadStream(file.path);
        const parseFile = csvParse();

        stream.pipe(parseFile);
        parseFile.on("data", (line) => {
            const [name, description] = line;

            categories.push({ name, description });
        })
            .on("end", () => {
                fs.promises.unlink(file.path)
                resolve(categories)
            })
            .on("error", (err) => { reject(err) })
    })
}

export { ICategory, loadCategories };