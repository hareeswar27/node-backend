const BollywoodData = (req,res) => {
    res.send([
        {
            id:1,
            img:"https://cdn.pixabay.com/photo/2023/01/14/19/50/flower-7718952_960_720.jpg",
            title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio totam dignissimos consectetur! Eum, est. Iste explicabo, reprehenderit vitae nihil minus excepturi aliquid vel itaque laboriosam magnam quod. Provident accusantium dolores quibusdam repudiandae!",
            date:"Nov/2022",
            type:"Bollywood"
          }, 
          {
            id:2,
            img:"https://www.shutterstock.com/image-photo/rustic-bread-flour-sprinkled-white-600w-1054860182.jpg",
            title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
            details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
            date:"Nov2022",
            type:"Bollywood"
            
          },
          {
              id:3,
              img:"https://cdn.pixabay.com/photo/2023/01/14/19/50/flower-7718952_960_720.jpg",
              title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
              date:"Nov/2022",
              type:"Bollywood"
          },
          {
              id:4,
              img:"https://cdn.pixabay.com/photo/2023/01/14/19/50/flower-7718952_960_720.jpg",
              title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
              details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate ipsum. Numquam, temporibus dolore. Voluptates repellendus cumque laudantium. Repellendus ipsam, impedit deleniti voluptate itaque perspiciatis distinctio",
              date:"Nov/2022",
              type:"Bollywood",
             
          }    
    ])
}
const BollywoodFirstData = (req,res) => {
    res.send([
      {
        id:1,
        img:"https://cdn.pixabay.com/photo/2023/01/14/19/50/flower-7718952_960_720.jpg",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        details:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam quia cupiditate impedit deleniti voluptate itaque perspiciatis distinctio",
        date:"Nov 13, 2022",
        type:"Bollywood",
        
      }
    ])
}
const BollywoodTopData = (req,res) => {
    res.send([
      {
        id:1,
        img:"https://cdn.pixabay.com/photo/2023/01/14/19/50/flower-7718952_960_720.jpg",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        date:"Nov 13, 2022",
        type:"Bollywood",
       
      },
      {
        id:2,
        img:"https://cdn.pixabay.com/photo/2023/01/14/19/50/flower-7718952_960_720.jpg",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        date:"Nov 13, 2022",
        type:"Bollywood",
        
      },
      {
        id:3,
        img:"https://cdn.pixabay.com/photo/2023/01/14/19/50/flower-7718952_960_720.jpg",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        date:"Nov 12, 2022",
        type:"Bollywood",
       
      },
      {
        id:4,
        img:"https://cdn.pixabay.com/photo/2023/01/14/19/50/flower-7718952_960_720.jpg",
        title:"Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        date:"Nov 12, 2022",
        type:"Bollywood",
     
      }
    ])
}
module.exports.getBollywoodData = BollywoodData;
module.exports.getBollywoodFirstData = BollywoodFirstData;
module.exports.getBollywoodTopData = BollywoodTopData;