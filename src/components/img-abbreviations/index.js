import React, { PureComponent, Fragment } from 'react';

import Lightbox from 'react-images';
/*
 *imgUrls:[{src: "XXXX.png"}]
 */
export default class ImgAbbreviations extends PureComponent {
  static defaultProps = {
    lightboxIsOpen: false,
    showFirstImg: true,
    closeLightbox: () => {},
  };

  static getDerivedStateFromProps(props, state) {
    if (props.lightboxIsOpen !== state.lightboxIsOpen) {
      return {
        lightboxIsOpen: props.lightboxIsOpen,
      };
    }
    return null;
  }

  constructor(props) {
    super(props);
    this.state = {
      lightboxIsOpen: props.lightboxIsOpen,
      currentImage: 0,
    };
  }

  openLightbox = event => {
    event.preventDefault();
    this.setState({
      currentImage: 0,
      lightboxIsOpen: true,
    });
  };

  handleClickImage = () => {
    if (this.state.currentImage === this.props.imgUrls.length - 1) return;

    this.gotoNext();
  };
  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  };
  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  };
  gotoImage = index => {
    this.setState({
      currentImage: index,
    });
  };
  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
    this.props.closeLightbox();
  };
  render() {
    const { imgUrls, showFirstImg } = this.props;
    const { lightboxIsOpen, currentImage } = this.state;
    const firstShowImgUrl = imgUrls[0].src;

    return (
      <Fragment>
        {showFirstImg && (
          <a onClick={e => this.openLightbox(e)}>
            <img alt="" src={firstShowImgUrl} />
          </a>
        )}
        <Lightbox
          currentImage={currentImage}
          images={imgUrls}
          isOpen={lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
        />
      </Fragment>
    );
  }
}
