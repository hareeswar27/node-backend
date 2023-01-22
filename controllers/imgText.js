const LgImgData = (req,res) => {
    res.send([
      {
        img:"https://cdn.pixabay.com/photo/2023/01/10/08/48/water-7709322_960_720.jpg",
        text:"Lorem ipsum dolor sit amet",
        type:"Lorem ipsum",
        date:"Nov/2022"
      }
    ])
}
const SmImgData = (req,res) => {
    res.send([
    {
        img:"https://cdn.pixabay.com/photo/2023/01/14/05/34/street-7717463__340.jpg",
        text:"Lorem ipsum dolor sit amet",
        text1:"Lorem ipsum ",
        type:"lorem epsom",
        date:"Nov/2022"
    },
    {
        img:"https://cdn.pixabay.com/photo/2022/11/20/09/43/moorea-7603918__340.jpg",
        text:"Lorem ipsum dolor sit amet",
        text1:"Lorem ipsum ",
        type:"lorem epsom",
        date:"Nov/2022"
    }
    ])
}

module.exports.getLgImgData = LgImgData;
module.exports.getSmImgData = SmImgData;
