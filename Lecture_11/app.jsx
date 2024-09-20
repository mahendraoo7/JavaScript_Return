//  Callback Hell 

  let getData = (dataID,getNextData) => {
 
    setTimeout(() => {
        console.log("Data",dataID);
    if(getNextData) {
        getNextData();
    }
    },2000);
    
  }
  
    // callback in callback 

  getData(1,() => {

    getData(2,() => {

        getData(3,()=> { 

            getData(4)
        })
    });
  });


//  Solution of Callback hell
//   Promises  :

 let promises = new Promise ((resolve , reject) => {
    console.log("i am a promise");
    reject("Error")
 })


//   Promises basic

  const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("Promises")
        resolve("Sucess code ")
    })
  }

  let promis = getPromise()

  promis.then((res)=> {
    console.log("promises Fullfiled",res)
  })

  promis.catch((err) => {
    console.log("rejected",err)
  })



//   Promises Chain

  function id(data) {
    return new Promise((resolve,reject)=> {
        setTimeout(() => {
            console.log("data",data);
            resolve("Helloo promises")
        }, 7000);
    })
  }

//   id(1).then((res) => {
//     console.log(res);
//     id(2).then((res) => {
//         console.log(res);
//     })
//   })

     id(1).then((res)=> {
        return id(2);
     }).then((res) => {
        console.log("return Data");
        return id(3);
     }).then((res) => {
        console.log("return Data");
        return id(4);
     }).then((res) => {
        console.log("return Data");
        return id(5);
     })



    //   Async- Await 

    function data() {
        return new Promise((resolve , reject) => {
            setTimeout(() => {
                console.log("whetherdata");
                resolve(200)
            }, 3000);
        })
    }

    async function hello() {
       await id(1);
       console.log("getting data 2...")

       await id(2);
       console.log("getting data 3...")

       await id(3);
       console.log("getting data 4...")

       await id(4);
       console.log("getting data 5...")

       await id(5);

    }

 
   // IFFI        : no need to call , it exicute immidelty  

    (async function() {
       await id(1);
       console.log("getting data 2...")

       await id(2);
       console.log("getting data 3...")

       await id(3);
       console.log("getting data 4...")

       await id(4);
       console.log("getting data 5...")

       await id(5);

    })();

