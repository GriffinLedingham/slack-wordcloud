const fs = require('fs')
const words = []
const outFile = process.argv[2]
const channel = process.argv[3]
const person = process.argv[4]
const files = fs.readdirSync(`./${channel}`)

for(let i in files) {
    const file = files[i]
    if(file.indexOf('json') == -1) continue
    const data = JSON.parse(fs.readFileSync(`./${channel}/${file}`))
    for(let j in data) {
        if(person != undefined && (data[j].user_profile == undefined || data[j].user_profile.first_name != person)) continue
        words.push(data[j].text);
    }
}
fs.writeFileSync(outFile, JSON.stringify(words))
