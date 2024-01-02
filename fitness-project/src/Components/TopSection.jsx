import '../App.css';

function TopSection() {
    return (
        <div className='topSectionContainer'>
            <div className='topText'>
                <h2>Where Fitness Meets Fun and Results Are Achieved</h2>
                <p>Include an inspiring image or video that showcases your gym's energetic atmosphere, trainers, or members working out.</p>
            </div>
            <div className="gridImages">
                <div className="gridItems firstImg">
                    <img src="https://www.pixelstalk.net/wp-content/uploads/images6/Fitness-Desktop-Wallpaper.jpg" alt="hero images" />
                </div>
                <div className="gridItems secondImg">
                    <img src="https://cutewallpaper.org/22/gym-lover-wallpapers/6000-c1f9d-best-3cce6-gym-d37e7-photos-249ba-%C2%B7-29648-100-5256b-free-b647c-download-844b8-%C2%B7---pexels---stock---photos.jpeg" alt="hero images" />
                </div>
                <div className="gridItems thirdImg">
                    <img src="https://wallpaperaccess.com/full/1087621.jpg" alt="hero images" />
                </div>
                <div className="gridItems fourthImg">
                    <img src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg" alt="hero images" />
                </div>
                <div className="gridItems fifthImg">
                    <img src="https://wallpapercave.com/wp/wp6331008.jpg" alt="hero images" />
                </div>
                <div className="gridItems sixImg">
                    <img src="https://img.freepik.com/premium-photo/woman-training-gym_946657-755.jpg" alt="hero images" />
                </div>
            </div>
        </div>
    )
}

export default TopSection;