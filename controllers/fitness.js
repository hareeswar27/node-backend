const FitnessData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://www.shutterstock.com/image-photo/fitness-equipment-healthy-food-sneakers-600w-362066123.jpg",
            title:"Lorem ipsum dolor sit amet",
            details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
            date:"Nov/2022",
            type:"Fitness"
        },
        {
          id:2,
          img:"https://www.shutterstock.com/image-photo/fitness-equipment-healthy-food-sneakers-600w-362066123.jpg",
          title:"Lorem ipsum dolor sit amet",
          details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
          date:"Nov/2022",
          type:"Fitness",
         
      },
        {
          id:3,
          img:"https://www.shutterstock.com/image-photo/fitness-equipment-healthy-food-sneakers-600w-362066123.jpg",
          title:"Lorem ipsum dolor sit amet",
          details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
          date:"Nov/2022",
          type:"Fitness"
        },
        {
          id:4,
          img:"https://www.shutterstock.com/image-photo/fitness-equipment-healthy-food-sneakers-600w-362066123.jpg",
          title:"Lorem ipsum dolor sit amet",
          details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
          date:"Nov/2022",
          type:"Fitness"
          
        }
    ])
}
const FitnessFirstData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://www.shutterstock.com/image-photo/fitness-equipment-healthy-food-sneakers-600w-362066123.jpg",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov/022",
            type:"Fitness",
        }
    ])
}
const FitnessTopData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://www.shutterstock.com/image-photo/fitness-equipment-healthy-food-sneakers-600w-362066123.jpg",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov/022",
            type:"Fitness",
            
          },
          {
            id:2,
            img:"https://www.shutterstock.com/image-photo/fitness-equipment-healthy-food-sneakers-600w-362066123.jpg",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov/022",
            type:"Fitness",
           
          },
          {
            id:3,
            img:"https://www.shutterstock.com/image-photo/fitness-equipment-healthy-food-sneakers-600w-362066123.jpg",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov/022",
            type:"Fitness",
           
          },
          {
            id:4,
            img:"https://www.shutterstock.com/image-photo/fitness-equipment-healthy-food-sneakers-600w-362066123.jpg",
            title:"Lorem ipsum dolor sit amet, consectetur",
            date:"Nov/022",
            type:"Fitness",
          }
    ])
}
module.exports.getFitnessData = FitnessData;
module.exports.getFitnessFirstData = FitnessFirstData;
module.exports.getFitnessTopData = FitnessTopData; 