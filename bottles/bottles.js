{/* <количество> бутылок пива на стене
<количество> бутылок пива!
Возьми одну, пусти по кругу
<количество минус 1> бутылок пива на стене! */}
function generateSongText(cuplets) {
    for (let index = 0; index < cuplets; cuplets--) {
    generateSingleStanza(cuplets)
    }
}
let song = ""

function generateSingleStanza(number) {
    let bottles = number % 10
    if (number >= 11 && number <= 19) {
song += `${number} бутылок пива на стене
${number} бутылок пива!
Возьми одну, пусти по кругу
${number - 1} бутылок пива на стене! \n \n`
    return
    }
    if (bottles === 5) {
song += `${number} бутылок пива на стене
${number} бутылок пива!
Возьми одну, пусти по кругу
${number - 1} бутылки пива на стене! \n \n`
    return
    }
    if (bottles === 4 || bottles === 3) {
song += `${number} бутылки пива на стене
${number} бутылки пива!
Возьми одну, пусти по кругу
${number - 1} бутылки пива на стене! \n \n`
    return
    }
    if (bottles === 2) {
song += `${number} бутылки пива на стене
${number} бутылки пива!
Возьми одну, пусти по кругу
${number - 1} бутылка пива на стене! \n \n`
    return
    }
    if (number === 1) {
song += `${number} бутылка пива на стене
${number} бутылка пива!
Возьми одну, пусти по кругу
Нет больше бутылок пива =(`
    return
    }
    if (bottles === 1) {
song += `${number} бутылка пива на стене
${number} бутылка пива!
Возьми одну, пусти по кругу
${number - 1} бутылок пива на стене! \n \n`
    return
    }
    else {
song += `${number} бутылок пива на стене
${number} бутылок пива!
Возьми одну, пусти по кругу
${number - 1} бутылок пива на стене! \n \n`
    return
    }

}
generateSongText(33)
console.log(song)
