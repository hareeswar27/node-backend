const FoodData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://www.shutterstock.com/image-photo/table-food-top-view-600w-467823860.jpg",
            title:"Lorem ipsum dolor sit amet, consectetur",
            details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
            date:"Nov 12, 2022",
            type:"Food"
          },
          {
            id:2,
            img:"https://www.shutterstock.com/image-photo/table-food-top-view-600w-467823860.jpg",
            title:"Lorem ipsum dolor sit amet, consectetur",
            details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
            date:"Nov 12, 2022",
            type:"Food"
            
          },
          {
              id:3,
              img:"https://www.shutterstock.com/image-photo/table-food-top-view-600w-467823860.jpg",
              title:"Lorem ipsum dolor sit amet, consectetur",
              details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
              date:"Nov 12, 2022",
              type:"Food"
          },
          {
              id:4,
              img:"https://www.shutterstock.com/image-photo/table-food-top-view-600w-467823860.jpg",
              title:"Lorem ipsum dolor sit amet, consectetur",
              details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
              date:"Nov 12, 2022",
              type:"Food",
            
          }    
    ])
}
const FoodFirstData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://www.shutterstock.com/image-photo/table-food-top-view-600w-467823860.jpg",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov 13, 2022",
            type:"Food",
           
        }
    ])
}
const FoodTopData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://www.shutterstock.com/image-photo/table-food-top-view-600w-467823860.jpg",
            title:"Lorem ipsum dolor sit",
            date:"Nov 13, 2022",
            type:"Food",
            
          },
          {
            id:2,
            img:"https://www.shutterstock.com/image-photo/table-food-top-view-600w-467823860.jpg",
            title:"Lorem ipsum dolor sit",
            date:"Nov 13, 2022",
            type:"Food",
            
          },
          {
            id:3,
            img:"https://www.shutterstock.com/image-photo/table-food-top-view-600w-467823860.jpg",
            title:"Lorem ipsum dolor sit",
            date:"Nov 12, 2022",
            type:"Food",
            
          },
          {
            id:4,
            img:"https://www.shutterstock.com/image-photo/table-food-top-view-600w-467823860.jpg",
            title:"Lorem ipsum dolor sit",
            date:"Nov 12, 2022",
            type:"Food",
           
          }
    ])
}
module.exports.getFoodData = FoodData;
module.exports.getFoodFirstData = FoodFirstData;
module.exports.getFoodTopData = FoodTopData;