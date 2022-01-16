const launchRazorPay =() => {
  let options = {
    key: "rzp_test_WN8skJGVv2lTKW",
    amount: 10000,
    currency: "INR",
    name: "BMS Clone",
    description: "Movie Purchase",
    image: "https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png",
    handler: () => {
      alert("Payment Done")
    },
    theme: {color: "#c4242d"}
  };

  let rzp = new window.Razorpay(options);
  rzp.open();
};

const Movie = () => {
  return (
    <>
     <div className="w-full h-full my-16">
      <img className="w-full h-full"src="https://in.bmscdn.com/iedb/movies/images/mobile/listing/medium/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg"/>
        <div class="sc-qswwm9-2 cUDDgh">
        <div class="sc-qswwm9-4 eWuQcQ">
        <section class="sc-bsek5f-0fSyllq">
        <div type="vertical" class="sc-echj48-0 iCYiPJ">
        <div class="sc-echj48-6 CwtfA" style="border-radius: 16px 16px 0px 0px; object-fit: cover;">
        <img src="https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/spider-man-no-way-home-et00310790-07-12-2021-07-25-42.jpg" alt="Spider-Man: No Way Home" width="100%" height="100%" class="sc-echj48-5 hutamn" style="border-radius: 16px 16px 0px 0px; object-fit: cover;"/>
        </div>
      <div class="sc-xta4k3-0 gHQsqQ">
      <svg width="13" height="13">
      <use link="/chunks/icons/synopsis-icons-96c193d5.svg#icon-play-no-bg"></use>
      </svg>
      <span>Trailers (7) </span>
      </div>
      </div>
      <section type="vertical" color="000000" class="sc-bsek5f-1 dTPawu">
       <span color="#FFFFFF" class="sc-bsek5f-4 iOsEHi">In Cinemas</span>
       "&nbsp;"
       </section>
       </section>
       </div>
       <div class="sc-qswwm9-5 ehwnas">
        <h1 class="sc-qswwm9-6 kFxCKb">Spider-Man: No Way Home</h1>
        <section class="sc-ec6ph5-0 bmFtql">
        <div class="sc-ec6ph5-1 hFxJGJ">
        <svg width="32" height="32">
        <use link="chunks/icons/synopsis-icons-96c193d5.svg#icon-heart"></use>
        </svg>
        <span class="sc-ec6ph5-3 clvawV">91%</span>
        <span class="sc-ec6ph5-4 geTheh0">415.8K ratings</span>
        <div class="sc-ec6h5-5 fsacFf">
        <svg width="8" height="8">
        <use link="chunks/icons/movies-icons-8e1219a3.svg#icon-chevron-right-light"></use>
        </svg>
        </div>
        </div>
        </section>
        <section class="sc-ycjzp1-0 duexLW">
        <div class="sc-ycjzp1-1 fefjxW">
        <div class="sc-ycjzp1-3 gAedkM">
        <h5 class="sc-ycjzp1-4 kdZOSz">Add your rating and review</h5>
        <h6 class="sc-ycjzp1-5 fMBrxV">Your ratings matters</h6>
        </div>
        <button class="sc-8f9mtj-0 sc-8f9mtj-1 sc-ycjzp1-6 bNTOzB">
        <span>Rate now</span>
        </button>
        </div>
        <div class="sc-ycjzp1-1 kvsoDw">
        <div class="sc-ycjzp1-3 gAedkM">
        <h5 class="sc-ycjzp1-4 kdZOSz">Your rating</h5>
        <h6 class="sc-ycjzp1-5 fMBrxV">Rated on 16 Jan 2022</h6>
        </div>
        <div class="sc-ycjzp1-8 itFqqr">
        <svg width="24" height="24">
        <use link="/chunks/icons/synopsis-icons-96c193d5.svg#icon-heart"></use>
        </svg>
        <span>
        "0"
        "%"
        </span>
        <svg width="12" height="12">
        <use link="/chunks/icons/movies-icons-8e1219a3.svg#icon-chevron-right-light"></use>
        </svg>
        </div>
        </div>
        </section>
        <div class="sc-2k6tnd-0 ddXVHR">
        <div class="sc-2k6tnd-1 eRBvwk">
        <div class="sc-2k6tnd-4 gUoCEi">
        <a href="https://in.bookmyshow.com/explore/2d-movies-bhubaneshwar"
        class="sc-2k6tnd-2 hqSZcZ">2D</a>
        <span class="sc-2k6tnd-5 gSVgaI">,</span>
        <a href="https://in.bookmyshow.com/explore/4dx-movies-bhubaneshwar"
          class="sc-2k6tnd-2 hqSZcZ">4DX</a>
            <span class="sc-2k6tnd-5 gSVgaI">,</span>
          <a href="https://in.bookmyshow.com/explore/3d-movies-bhubaneshwar"
          class="sc-2k6tnd-2 hqSZcZ">3D</a>
            <span class="sc-2k6tnd-5 gSVgaI">,</span>
            <a href="https://in.bookmyshow.com/explore/4dx-3d-movies-bhubaneshwar"
            class="sc-2k6tnd-2 hqSZcZ">4DX 3D</a>
              <span class="sc-2k6tnd-5 gSVgaI">,</span>
              <a href="https://in.bookmyshow.com/explore/imax-2d-movies-bhubaneshwar"
              class="sc-2k6tnd-2 hqSZcZ">IMAX 2D</a>
                </div>
                <div class="sc-2k6tnd-4 gUoCEi">
                <a href="https://in.bookmyshow.com/explore/english-movies-bhubaneshwar"
                class="sc-2k6tnd-2 hqSZcZ">English</a>
                <span class="sc-2k6tnd-5 gSVgaI">,</span>
                <a href="https://in.bookmyshow.com/explore/hindi-movies-bhubaneshwar"
                class="sc-2k6tnd-2 hqSZcZ">Hindi</a>
                <span class="sc-2k6tnd-5 gSVgaI">,</span>
                <a href="https://in.bookmyshow.com/explore/kannada-movies-bhubaneshwar"
                class="sc-2k6tnd-2 hqSZcZ">Kannada</a>
                <span class="sc-2k6tnd-5 gSVgaI">,</span>
                <a href="https://in.bookmyshow.com/explore/telugu-movies-bhubaneshwar"
                class="sc-2k6tnd-2 hqSZcZ">Telugu</a>
                <span class="sc-2k6tnd-5 gSVgaI">,</span>
                <a href="https://in.bookmyshow.com/explore/tamil-movies-bhubaneshwar"
                class="sc-2k6tnd-2 hqSZcZ">Tamil</a>
                </div>
                </div>
                <div class="sc-2k6tnd-1 eRBvwk">
                "2h 28m"
                <span class="sc-2k6tnd-5 bqKxru"> . </span>
                <a href="https://in.bookmyshow.com/explore/action-movies-bhubaneshwar"
                class="sc-2k6tnd-2 ieiLSM">Action</a>
                <span class="sc-2k6tnd-5 cqrLsd">,</span>
                <a href="https://in.bookmyshow.com/explore/adventure-movies-bhubaneshwar"
                class="sc-2k6tnd-2 ieiLSM">Adventure</a>
                <span class="sc-2k6tnd-5 cqrLsd">,</span>
                <a href="https://in.bookmyshow.com/explore/sci-fi-movies-bhubaneshwar"
                class="sc-2k6tnd-2 ieiLSM">Sci-Fi</a>
                <span class="sc-2k6tnd-5 bqKxru">.</span>
                "UA"
                <span class="sc-2k6tnd-5 bqKxru">.</span>
                "16 Dec,2021"
                </div>
                </div>
                <div class="sc-qswwm9-8 jayiEd">
                <div id="page-cta-container" class="sc-11ze7wi-0 hVHETZ">
                <button data-phase="postRelease" class="sc-8f9mtj-1 sc-1vmod7e-0 gsJmXR">
                <div class="sc-1vmod7e-2 cgQNto">
                <span style="font-weight: 500; font-size: 16px; color: rgb(255,255,255);">Book tickets</span>
                </div>
                </button>
                </div>
                </div>
                </div>
                <div class="sc-qswwm9-9 bcBRAA">
                <section class="sc-1vaplep-0 bMWqec">
                <div class="sc-1vaplep-1 fSfEnZ">
                <div class="sc-1vaplep-3 fpNbam">
                <svg width="32" height="32">
                <use link="/chunks/icons/synopsis-icons-96c193d5.svg#icon-share"></use>
                </svg>
                </div>
                <div class="sc-1vaplep-2 hgZsZt">Share</div>
                </div>
                </section>
                </div>
                </div>
                </div>
// eslint


     <button onClick={launchRazorPay} class="m-16 bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  Book Now
</button>
    </>
  );
};

export default Movie;
