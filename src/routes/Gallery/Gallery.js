import React from 'react'
import { Image, Transformation, CloudinaryContext } from 'cloudinary-react'
import ImageInfo from '../../components/ImageInfo/ImageInfo'
import './Gallery.css'
import './GalleryFullScreen.css'
import './ImageEditor.css'
import config from '../../config'
import ApiServices from '../../services/api-services'
import Rename from '../../components/Rename/Rename'
import AdminAddImage from '../../components/AdminAddImage/AdminAddImage'
import AddImageForm from '../../components/AddImageForm/AddImageForm'
import DeleteImage from '../../components/DeleteImage/DeleteImage'

export default class Gallery extends React.Component {
  state = {
    index: 1,
    category: '',
    images: null,
    allImages: null,
    fullScreen: false,
    fullScreenImage: null,
    fullScreenImageUrl: '',
    moreInfo: true,
    moreInfoFadeOut: '',
    moreInfoDisableClose: '',
    galleryDisabled: '',
    fadeOut: '',

    lastPage: '',

    renamingImage: false,
    renamedImageId: null,
    renamedImageName: '',
    oldName: '',
    newYear: '',

    addingImage: false,
    deletingImage: false,
    imageToDelete: '',
  }

  componentDidMount = async() => {
    await this.setDisplayedImages()
    this.checkIfLastPage()
  }

  setDisplayedImages = async() => {
    // Each page diplays a maximium of 12 images
    // So we take the index and multiply it by 12 (1*12=12, 2*12=24, etc...)
    // We want the range of images to be between this new value (12)
    // and the new value minus 12, so we'll have a range of 1 to 12
    // or on page 2, a range of 13 to 24, etc...

    const { index } = this.state
    const category = this.props.match.params.category

    if(!category) {
      // Make sure to redirect to the 404 error page
      console.log('That does not exist')
      return
    }

    const imagesDisplayed = index * 12;

    // JavaScript doesn't care if the maximum range is beyond
    // the actual number of data.
    // For instance if you set the range to be 1 - 12, and you
    // only have 6 images, the 6 images will be displayed without
    // any problems.

    const allImages = await ApiServices.getImagesByCategory(category)

    const images = allImages.images.slice(imagesDisplayed - 12, imagesDisplayed)

    await this.setState({ images, category, allImages: allImages.images })
    this.checkIfLastPage()
  }

  createImageElements = () => {
    // Each image object in the state is used to create these elements
    // Image data type (aka category) is specified by the prop params, 
    // located in this.props.match.params.category

    const { images } = this.state
    const mollyToken = window.localStorage.getItem('mollylandToken')
    let i = -1;
    
    return images.map(image => {
      i++
        return (
          <section 
            className={`gallery-image ${image.name}`}
            key={image.name}>
    
            {mollyToken && 
              <section className='auth-options'>
                <button className='auth-rename'
                  id={image.id}
                  name={image.name}
                  onClick={(event) => this.showRenameBox(event)}>{`RENAME \n"${image.name}" \n ${image.year || ''}`}
                </button>
                <button 
                  className='auth-delete'
                  id={image.id}
                  onClick={(event) => this.showDeleteConfirmation(event)}>DELETE
                </button>
              </section>
            }
    
            <div 
              className='gallery-image-wrapper'
              url={image.url}
              onClick={(event) => this.handleFullScreen(event)}>
              <Image publicId={image.url} type='fetch' name={i}>
                <Transformation quality="60" width="850" crop="scale" />
              </Image>
            </div>
    
          </section>
        )
      })

  }

  // RENAMING -----------------------
  showRenameBox = (event) => {
    event.preventDefault()
    const { id, name } = event.target
    this.setState({ 
      renamingImage: true,
      renamedImageId: id,
      oldName: name,
    })
  }

  hideRenameBox = (event) => {
    event.preventDefault()
    this.setState({ 
      renamingImage: false,
      renamedImageId: null,
      renamedImageName: '',
      oldName: '',
    })
  }

  setNewName = (newName) => {
    this.setState({
      renamedImageName: newName,
    })
  }

  setNewYear = (newYear) => {
    this.setState({ newYear })
  }

  handleSubmitRename = (event) => {
    event.preventDefault()
    const { renamedImageId, renamedImageName, newYear } = this.state

    ApiServices.changeImageName(renamedImageId, renamedImageName, newYear)
      .then(() => {
        this.setState({
          renamingImage: false,
          renamedImageId: null,
          renamedImageName: '',
          oldName: '',
          newYear: '',
        })
      }).then(() => this.setDisplayedImages())
  }
  // -------------------------------

  // FULL SCREEN -------------------
  handleFullScreen = (event) => {
    // The gallery is disabled during fullscreen mode
    // in order to prevent scrolling 
    // (actually its visibility is set to hidden, w/e you get it)

    const { images } = this.state
    const i = event.target.name

    this.setState({ 
      fullScreen: true,
      fullScreenImage: images[i],
      fullScreenImageUrl: event.target.src,
      galleryDisabled: 'gallery-disabled',
      moreInfo: false,
    })
  }

  handleDisableFullScreen = async() => {
    // The fadeOut class simply fades the opacity down from 1 to 0
    // in 5 seconds.
    // After 4.5 seconds, the fadeOut class is removed from fullscreen view.
    // I'm using the extra 0.5 seconds as a buffer to account for 
    // delay. Sometimes these things don't sync up perfectly!

    await this.setState({ 
      fadeOut: 'fadeOut',
      galleryDisabled: '',
    })

    setTimeout(() => {
      this.setState({
        fullScreen: false,
        fullScreenImage: null,
        fullScreenImageUrl: '',
        galleryDisabled: '',
        fadeOut: '',
      })
    }, 450)
  }

  handleShowMoreInfo = async() => {
    const { moreInfo } = this.state

    if(!moreInfo) {
      this.setState({ 
        moreInfo: !moreInfo,
        moreInfoDisableClose: 'disable-close',
      })
      return
    }

    else if(moreInfo) {
      await this.setState({ moreInfoFadeOut: 'moreInfoFadeOut' })

      setTimeout(() => {
        this.setState({
          moreInfoFadeOut: '',
          moreInfo: !moreInfo,
          moreInfoDisableClose: '',
        })
      }, 180)
    }
  }
  // -------------------------------

  // ADD IMAGE----------------------
  showAddImageForm = () => {
    this.setState({ addingImage: true })
  }

  hideAddImageForm = () => {
    this.setState({ addingImage: false })
  }

  handleAddImage = (event) => {
    event.preventDefault()

    const { category } = this.state
    const url = event.target.addurl.value
    const name = event.target.addname.value
    const year = event.target.addyear.value

    let newImage = { category, url, name }

    if (year) {
      newImage.year = year
    }

    ApiServices.addNewImage(newImage)
      .then(() => this.setState({ addingImage: false }))
      .then(() => this.setDisplayedImages())
      .catch(e => console.error(e))
  }
  //--------------------------------

  // DELETE IMAGE
  showDeleteConfirmation = (event) => {
    const id = event.target.id
    this.setState({ 
      deletingImage: true,
      imageToDelete: id
    })
  }

  hideDeleteConfirmation = () => {
    this.setState({ deletingImage: false })
  }

  handleDeleteImage = () => {
    const { imageToDelete } = this.state
    let id = parseInt(imageToDelete, 10)
    
    ApiServices.deleteImage(id)
      .then(() => this.setState({ deletingImage: false }))
      .then(() => this.setState({ imageToDelete: '' }))
      .then(() => this.setDisplayedImages())
      .catch(e => console.error(e))
  }
  //-----

  // NEXT AND PREV -----------------
  handleNext = async() => {
    // Wow does this need to be so complicated?
    // Here I'm simply moving the index up by one,
    // then changing the images property in state

    const { index, images } = this.state

    // It only works if there are 12 images on the page.
    if (!!images && images.length === 12) {
      await this.setState({ index: index+1 })
      this.setDisplayedImages()
    }
  }

  handlePrevious = async() => {
    // Same as handleNext, only I'm checking for
    // and index of 1, which if true, means
    // that the current page is the first page.

    const { index } = this.state
    if (index > 1) {
      await this.setState({ index: index-1 })
      this.setDisplayedImages()
    }
  }

  checkIfLastPage = () => {
    // This and checkIfFirstPage only
    // exists to change the color
    // of the Prev and Next buttons

    const { index, images, allImages } = this.state
    const i = index * 12

    if (!images) {
      return
    }
    if (images.length < 12) {
      this.setState({ lastPage: 'last-page' })
      return
    }
    if (!allImages[i + 1]) {
      this.setState({ lastPage: 'last-page' })
      return
    }
    else {
      this.setState({ lastPage: '' })
      return
    }
  }

  checkIfFirstPage = () => {
    const { index } = this.state

    return (index <= 1) ? 'first-page' : ''
  }
  // -------------------------------

  render() {
    const { images, fullScreen, fullScreenImage, fullScreenImageUrl,
      galleryDisabled, fadeOut, moreInfoFadeOut,
      moreInfoDisableClose, renamingImage, oldName, addingImage, deletingImage, lastPage } = this.state
      
    const firstPage = this.checkIfFirstPage()
    const hasToken = window.localStorage.getItem('mollylandToken')

    return(
      <section className='gallery-wrapper'>

        { !!addingImage &&  
          <AddImageForm
            hideAddImageForm={this.hideAddImageForm}
            handleAddImage={this.handleAddImage}
          />
        }

        { !!deletingImage &&
          <DeleteImage 
            hideDeleteConfirmation={this.hideDeleteConfirmation}
            handleDeleteImage={this.handleDeleteImage}
          />
        }

        { !!renamingImage &&
          <Rename
            name={oldName} 
            setNewName={this.setNewName}
            setNewYear={this.setNewYear}
            hideRenameBox={this.hideRenameBox}
            handleSubmitRename={this.handleSubmitRename}
          />
        }

        { !!fullScreen && 
        <div className={`fullscreen-wrapper ${fadeOut}`}>

          <ImageInfo
            image={fullScreenImage}
            handleShowMoreInfo={this.handleShowMoreInfo}
            handleDisableFullScreen={this.handleDisableFullScreen}
            moreInfoFadeOut={moreInfoFadeOut}
          />


          <div className={'fullscreen-background ' + moreInfoDisableClose}
            onClick={() => this.handleDisableFullScreen()}>

            <CloudinaryContext cloudName={config.CLOUD_KEY}>
              <Image publicId={fullScreenImageUrl} />
            </CloudinaryContext>

          </div> 
        </div>
        }

        { !!hasToken && <AdminAddImage showAddImageForm={() => this.showAddImageForm()} /> }

        <div className={`image-area ${galleryDisabled}`}>
          <CloudinaryContext cloudName={config.CLOUD_KEY}>
            { !!images && this.createImageElements() }
            {/* { !!hasToken && images && images.length < 12 && <AdminAddImage showAddImageForm={() => this.showAddImageForm()} /> }
            { !!hasToken && images && images.length === 12 && !!lastPage && <AdminAddImage showAddImageForm={() => this.showAddImageForm()} /> } */}
          </CloudinaryContext>
        </div> 

        <div className={`prev-next-area ${galleryDisabled}`}>
          <button className={`gallery-prev ${firstPage}`} onClick={() => this.handlePrevious()}>{'<'}</button>
          <button className={`gallery-next ${lastPage}`} onClick={() => this.handleNext()}>{'>'}</button>
        </div> 
        
      </section>
    )
  }
}