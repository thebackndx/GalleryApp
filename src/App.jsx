import React, { useEffect, useState } from 'react'
import "./App.css"
import ImgConatner from './components/Image Conatiner/ImgConatner.jsx'
const App = () => {
  const [images, setImages] = useState([])
  const [index, setIndex] = useState(2)

  useEffect(() => {
    const fetchImages = async () => {

      let res = await fetch(`https://picsum.photos/v2/list?page=${index}&limit=10`)
      let data = await res.json()
      setImages(data)
    }

    fetchImages()
  }, [index])

  const prev = () => {
    if (index > 2) {
      setIndex(index - 1)
    }
  }

  const next = () => {
    setIndex(index + 1)

  }


  return (
    <div className='mainContainer'>
      <div className="imgMainContaner">
        {images.map((elem) => {
          return <ImgConatner key={elem.id} url={elem.download_url} />
        })}
      </div>
      <div className="btns">
        <button onClick={prev} className='Btn'>
          Prev
        </button>
        <h4>Page {index - 1}</h4>
        <button onClick={next} className='Btn'>
          Next
        </button>
      </div>
    </div>
  )
}

export default App