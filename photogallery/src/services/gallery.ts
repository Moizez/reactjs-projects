import { Photo } from "../types/Photo"
import { storage } from '../libs/firebase'
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage'
import { v4 as createID } from 'uuid'

export const getAll = async () => {
    let list: Photo[] = []

    const imagesFolder = ref(storage, 'images')
    const photoList = await listAll(imagesFolder)

    for (let i in photoList.items) {

        let photoURL = await getDownloadURL(photoList.items[i])

        list.push({
            name: photoList.items[i].name,
            url: photoURL
        })
    }

    return list
}

export const uploadPhoto = async (file: File) => {
    if (['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)) {

        let name = createID()
        let newFile = ref(storage, `images/${name}`)

        let upload = await uploadBytes(newFile, file)
        let photoURL = await getDownloadURL(upload.ref)

        return {
            name: upload.ref.name,
            url: photoURL
        } as Photo

    } else {
        return new Error('Tipo do arquivo não é permitido!')
    }
}

export const deletePhoto = async (name: string) => {
    let photoRef = ref(storage, `images/${name}`);
    await deleteObject(photoRef);
}