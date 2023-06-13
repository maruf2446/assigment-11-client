

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-vector/cover-with-cartoon-robots_74855-13994.jpg?w=900&t=st=1685702769~exp=1685703369~hmac=619d57b8b69bbe433ba30ae3725d7bb0667c3cf6af4900eca24137a985bee2f2" className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/premium-vector/hello-summer-sale-with-happy-kids_193692-662.jpg" className="rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-vector/flat-design-minimal-music-festival-twitch-banner_23-2149199326.jpg?w=826&t=st=1685703552~exp=1685704152~hmac=d0a886253574d831ed2e0a902ebcc0abfa10b8a3e13cf9bbc551e478902b9580" alt="" className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src="https://img.freepik.com/free-vector/flat-design-rent-car-twitter-header_23-2149252032.jpg?w=826&t=st=1685703614~exp=1685704214~hmac=bb8bf52f538b0ff97135fa8c398b8d38d191440db9e08fbad86382cde04d83e9" className="w-full rounded-xl" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;