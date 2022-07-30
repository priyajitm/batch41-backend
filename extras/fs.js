import {promises, existsSync} from 'fs'

// Read File

async function readFile (fileName) {
    try {
        const data = await promises.readFile(fileName, 'utf8')
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

// Write Data to File

async function writeData (fileName, content) {
    try {
        await promises.writeFile(fileName, `\n${content}`, {flag: 'a'})
    } catch (error) {
        console.log(error)
    }
}

// Rename A File || Move A File

async function renameFile (oldName, newName, path) {
    try {
        if (!path) {
            await promises.rename(oldName, newName)
        }

        if (path && !existsSync(path)) {
            await promises.mkdir(path)
            await promises.rename(oldName, `${path}/${newName}`)
        } else {
            await promises.rename(oldName, `${path}/${newName}`)
        }
        
    } catch (error) {
        console.log(error)
    }
}

// Delete A File

async function DeleteFile (filePath) {
    try {
        await promises.unlink(filePath)
    } catch (error) {
        console.log(error)
    }
}


DeleteFile('test/new.txt')