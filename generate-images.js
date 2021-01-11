const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const imageDir = 'images'
const resultDir = "static/webp/"

// From https://gist.github.com/lovasoa/8691344
async function* walk(dir) {
    for await (const d of await fs.promises.opendir(dir)) {
        const entry = path.join(dir, d.name);
        if (d.isDirectory()) yield* walk(entry);
        else if (d.isFile()) yield { name: d.name.split('.').slice(0, -1).join('.'), dir: dir, ext: d.name.split('.').pop(), path: entry};
    }
}

function bytesToKB(bytes) {
    return Math.round(bytes / Math.pow(1024, 1)) + "KB";
}

function deleteResult(size1, size2, path, result_path) {
    console.log(`Result (${bytesToKB(size1)}) larger than original (${bytesToKB(size2)}) for ${path}`)
    fs.unlink(result_path, (err) => {
        if (err) {
            console.error(err)
            return
        }
    })
}

async function main() {
    console.time("generate");
    fs.rmSync("static/webp/", {recursive:true, force: true})

    for await (const p of walk(imageDir)) {
        fs.mkdirSync(path.join(resultDir, p.dir), { recursive: true });

        var options = { quality: 100, reductionEffort: 6}

        fs.stat(p.path, (err, stats) => {
            if (stats.size <= 100000) {
                options = { lossless: true, quality: 100, reductionEffort: 5}
            }

            sharp(p.path)
            .webp(options)
            .toFile(resultDir + path.join(p.dir, p.name) + ".webp")
            .then(info => {
                // If our result is too large, we try again in a lower quality
                if (info.size >= 500000) {
                    console.log(`Result (${bytesToKB(info.size)}) larger than 500KB for ${p.path}`)

                    sharp(p.path)
                    .webp({ quality: 60, reductionEffort: 6 })
                    .toFile(resultDir + path.join(p.dir, p.name) + ".webp")
                    .then(info => {
                        if (info.size >= stats.size) {
                            deleteResult(info.size, stats.size, p.path, resultDir + path.join(p.dir, p.name) + ".webp")
                        }
                    })
                }

                if (info.size >= stats.size) {
                    deleteResult(info.size, stats.size, p.path, resultDir + path.join(p.dir, p.name) + ".webp")
                }
            })


        })
    }

    console.timeEnd("generate");
}

main();
