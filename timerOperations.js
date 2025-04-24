// setInterval(()=>{
//   console.log('This timer will trigger every 5 sec...');
// },5000)

const products = [
    { product: "xyz", code: "abc", name: "qwerty", desc: "mnop", link: "https://link.com" },
    { product: "xyz1", code: "abc1", name: "qwerty1", desc: "mnop1", link: "https://link1.com" },
    { product: "xyz2", code: "abc2", name: "qwerty2", desc: "mnop2", link: "https://link2.com" }
  ];
  
  const offers = [
    { code: "abc1", offerDec: "offer1" },
    { code: "abc", offerDec: "offer" },
    { code: "abc2", offerDec: "offer2" },
    { code: "abc2", offerPrice: 100 }
  ];
  
 const offerMap = offers.reduce((acc,offer)=>{
   if(!acc[offer.code]){
    acc[offer.code] = {}
   }
   Object.assign(acc[offer.code],offer)
   return acc
 },{});

 const mergeOffer = () => {
    let result = []
    products.map((data)=>{
        let offers = offerMap[data.code];
        result.push({...data, ...offers});
    })
    return result
 }

 console.log(mergeOffer());
 
  
//   console.log(mergedProducts);
  