const inputEl = document.querySelector('input')
const fileUploader = document.querySelector('.file-uploader')
const fileDisplayContainer = document.querySelector('.file-display')
const fileNameElement = fileDisplayContainer.querySelector('span')

const fileUpload = () => {
    inputEl.click()
}

inputEl.addEventListener('change', (e) => {
    const file = e.target.files[0]
    let fileName = file.name
    if (file) {
        const fileNameWithoutExt = getFileNameWithoutExtension(fileName);
        if (fileNameWithoutExt.length > 12) {
            fileName = fileNameWithoutExt.substr(0, 12) + "... " + getExtension(fileName)
        }
        fileNameElement.textContent = fileName
        fileDisplayContainer.classList.add('active')
    }
})

function getExtension(fileName) {
    const lastIndex = fileName.lastIndexOf('.')
    return fileName.slice(lastIndex)
}

function getFileNameWithoutExtension(fileName) {
    const lastIndex = fileName.lastIndexOf('.');
    return fileName.substr(0, lastIndex);
}

fileUploader.addEventListener('click', fileUpload)