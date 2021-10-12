import { useState, useEffect, FormEvent } from 'react'
import { Container, Body, Header, Loading, Gallery, UploadForm } from './GlobalStyles';
import { Photo } from './types/Photo';
import { getAll, uploadPhoto, deletePhoto } from './services/gallery'
import PhotoItem from './components/PhotoItem';

const App = () => {

	const [loading, setLoading] = useState(false)
	const [uploading, setUploading] = useState(false)
	const [photos, setPhotos] = useState<Photo[]>([])

	const getPhotos = async () => {
		setLoading(true)
		let photos = await getAll()
		setPhotos(photos)
		setLoading(false)
	}


	useEffect(() => {
		getPhotos()
	}, [])

	const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const formData = new FormData(e.currentTarget)
		const file = formData.get('image') as File

		if (file && file.size > 0) {
			setUploading(true)
			let result = await uploadPhoto(file)
			setUploading(false)

			if (result instanceof Error) {
				alert(`${result.name} - ${result.message}`)
			} else {
				let newPhotoList = [...photos]
				newPhotoList.push(result)
				setPhotos(newPhotoList)
			}
		}
	}

	const handleDeleteClick = async (name: string) => {
		await deletePhoto(name);
		getPhotos();
	}

	return (
		<Container>
			<Body>
				<Header>Galeria de Fotos</Header>

				<UploadForm method='POST' onSubmit={handleFormSubmit}>
					<input type="file" name="image" />
					<input type="submit" value="Enviar" />
					{uploading && 'Enviando...'}
				</UploadForm>

				{loading &&
					<Loading>
						<div className='emoji'>⏳</div>
						<div>Carregando...</div>
					</Loading>
				}

				{!loading && photos.length > 0 &&
					<Gallery>
						{photos.map((item, index) =>
							<PhotoItem key={index} data={item} onDelete={handleDeleteClick} />
						)}
					</Gallery>
				}

				{!loading && photos.length === 0 &&
					<Loading>
						<div className='emoji'>😣</div>
						<div>Não há fotos cadastradas</div>
					</Loading>
				}

			</Body>
		</Container>
	)
}

export default App