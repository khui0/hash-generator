const input = document.getElementById("input");
const result = document.getElementById("result");
const type = document.getElementById("type");

const hashFunctions = {
    "md5": input => {
        return CryptoJS.MD5(input).toString();
    },
    "sha1": input => {
        return CryptoJS.SHA1(input).toString();
    },
    "sha256": input => {
        return CryptoJS.SHA256(input).toString();
    },
    "sha512": input => {
        return CryptoJS.SHA512(input).toString();
    },
    "sha3": input => {
        return CryptoJS.SHA3(input).toString();
    }
}

input.addEventListener("input", generateHash);
type.addEventListener("input", generateHash);

function generateHash() {
    result.value = hashFunctions[type.value](input.value);
}

document.getElementById("copy").addEventListener("click", e => {
    navigator.clipboard.writeText(result.value);
    e.target.innerHTML = "copied";
    setTimeout(() => {
        e.target.innerHTML = "copy";
    }, 1000);
});