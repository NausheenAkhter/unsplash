import React, { useState, useEffect } from 'react'
import { srFetchPhotos } from '../../sources/home'
import Photo from '../photo'
import Search from '../search'
import styles from './Home.module.css'

function Home() {
    const [loading, setLoading] = useState(false)
    const [photos, setPhotos] = useState([])
    const [page, setPage] = useState(1)
    const [query, setQuery] = useState('')

    const fetchPhotos = async () => {
        try {
            setLoading(true)
            const data = await srFetchPhotos({query, page})
            const imagesToSet = query ? data?.results : data
            setPhotos(imagesToSet)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPhotos()
    }, [query, page])

    // useEffect(() => {
    //     let event = window.addEventListener('scroll', () => {
    //         console.log(window.innerHeight + window.screenY, document.body.scrollHeight);
    //         if (!loading && (window.innerHeight + window.screenY) >= document.body.scrollHeight - 2) {
    //             setPage(page + 1)
    //         }
    //     })
    //     return () => {
    //         window.removeEventListener('scroll', event)
    //     }
    // })


    return (
        <main>
            <Search setQuery={setQuery} />
            {loading ? <div>...Loading</div> :
                <section className={styles['photos']}>
                    <div className={styles['photos-center']}>
                        {photos?.length > 0 && photos.map((photo, idx) =>
                            <Photo key={`photo-${idx}`} details={photo} />
                        )}
                    </div>
                </section>}
        </main>
    )
}

export default Home
