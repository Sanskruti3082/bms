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
     </div>
     <button onClick={launchRazorPay} class="m-16 bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
  Book Now
</button>
    </>
  );
};

export default Movie;
