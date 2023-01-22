const HollywoodData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://www.shutterstock.com/image-photo/hollywood-california-september-24-world-600w-114467512.jpg",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
            date:"Nov/2022",
            type:"Hollywood"
          },
          {
            id:2,
            img:"https://www.shutterstock.com/image-photo/hollywood-california-september-24-world-600w-114467512.jpg",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
            date:"Nov/2022",
            type:"Hollywood"
            
          },
          {
              id:3,
              img:"https://www.shutterstock.com/image-photo/hollywood-california-september-24-world-600w-114467512.jpg",
              title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
              details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
              date:"Nov/2022",
              type:"Hollywood"
          },
          {
              id:4,
              img:"https://www.shutterstock.com/image-photo/hollywood-california-september-24-world-600w-114467512.jpg",
              title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
              details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
              date:"Nov/2022",
              type:"Hollywood"
          }
    ])
}
const HollywoodFirstData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://www.shutterstock.com/image-photo/hollywood-california-september-24-world-600w-114467512.jpg",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            date:"Nov/2022",
            type:"Hollywood",
          
          }
    ])
}
const HollywoodTopData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://www.shutterstock.com/image-photo/hollywood-california-september-24-world-600w-114467512.jpg",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            date:"Nov/2022",
            type:"Hollywood",
            
          },
          {
            id:2,
            img:"https://www.shutterstock.com/image-photo/hollywood-california-september-24-world-600w-114467512.jpg",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            date:"Nov/2022",
            type:"Hollywood",
           
          },
          {
            id:3,
            img:"https://www.shutterstock.com/image-photo/hollywood-california-september-24-world-600w-114467512.jpg",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            date:"Nov/2022",
            type:"Hollywood",
            
          },
          {
            id:4,
            img:"https://www.shutterstock.com/image-photo/hollywood-california-september-24-world-600w-114467512.jpg",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            date:"Nov/2022",
            type:"Hollywood",
            
          }
    ])
}
module.exports.getHollywoodData = HollywoodData;
module.exports.getHollywoodFirstData = HollywoodFirstData;
module.exports.getHollywoodTopData = HollywoodTopData;