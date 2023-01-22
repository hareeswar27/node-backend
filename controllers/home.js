const LatestData = (req, res) => {
  res.send([
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2023/01/14/19/50/flower-7718952_960_720.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
      date: "Nov/2022",
      type: "Fitness",
    },
    {
      id: 2,
      img: "https://www.shutterstock.com/image-photo/fitness-equipment-healthy-food-sneakers-600w-362066123.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
      date: "Nov/2022",
      type: "Fitness",
    },
    {
      id: 3,
      img: "https://www.shutterstock.com/image-photo/table-food-top-view-600w-467823860.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
      date: "Nov/2022",
      type: "Technology",
    },
    {
      id: 4,
      img: "https://www.shutterstock.com/image-photo/hollywood-california-september-24-world-600w-114467512.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
      date: "Nov/2022",
      type: "Technology",
    },
    {
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmm1X6NM_YvwuOUnEQzl7Y0eu2U3_60ZX5YJni3eNeiylf4tIogKTbMF1EVeaAhYZVWc&usqp=CAU",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
      date: "Nov/2022",
      type: "Food",
    },
    {
      id: 6,
      img: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180801155144/Stone-Chariot-at-Vittala-Temple-Hampi-Karnataka.jpg",
      title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore.",
      date: "Nov/2022",
      type: "Food",
    },
  ]);
};
const LatestArticleData = (req, res) => {
  res.send([
    {
      id: 1,
      img: "https://cdn-icons-png.flaticon.com/512/5367/5367835.png",
      title: "Lorem ipsum dolor sit amet",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore.",
      date: "Nov/2022",
      type: "Hollywood",
    },
    {
      id: 2,
      img: "https://i.pinimg.com/originals/ae/72/08/ae7208a52651ebb5f69b33cb602239f0.jpg",
      title: "Lorem ipsum dolor sit amet",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore.",
      date: "Nov/2022",
      type: "Hollywood",
    },
    {
        id:3,
        img: "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180801155144/Stone-Chariot-at-Vittala-Temple-Hampi-Karnataka.jpg",
        title: "Lorem ipsum dolor sit amet",
        details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore.",
        date: "Nov/2022",
        type:"Bollywood",
        num:1
    }    
  ]);
};

module.exports.getLatestData = LatestData;
module.exports.getLatestArticleData = LatestArticleData;
