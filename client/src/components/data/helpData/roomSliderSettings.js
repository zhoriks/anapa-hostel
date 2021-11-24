const roomSliderSettings = {
  dots: false,
  arrows: true,
  autoplay: false,
  focusOnSelect: true,
  autoplaySpeed: 3000,
  // тут нужно будет прописать код этих точек в css
  dotsClass: 'slick-dots slick-thumb',
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  // appendDots: ((dots) => (
  //   <div
  //     style={{
  //       paddingBottom: '25px',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'flex-end',
  //     }}
  //   >
  //     <ul style={{ margin: '0px', paddingLeft: '0px' }}>
  // <li className='sliderCustom'>{dots}</li> </ul>
  //   </div>
  // )),
  // customPaging: ((i) => (
  //   <div
  //     style={{
  //       width: '30px',
  //       color: 'blue',
  //       border: '1px blue solid',
  //     }}
  //   >
  //     {i + 1}
  //   </div>
  // )),
};

export default roomSliderSettings;
