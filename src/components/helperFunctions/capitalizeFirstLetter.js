/**
 * 
 * @param {*} string 
 * @returns {string} string with first letter capitalized
 */
function capitalizeFirstLetter(string) {
    let words = string.split(' ');
    let final = words.map((word) => {
        return word[0].toUpperCase() + word.substring(1);
    }).join(' ');
    return final;
}

export default capitalizeFirstLetter;