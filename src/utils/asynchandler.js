const asyncHandler=(requestHandler)=>{
    (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}

const {asyncHandler}

// const asyncHandler=()=>{}
// const asyncHandler=(fn)=>{}=>{}
// const asyncHandler=(fn)=>async ()=>{}

// const asyncHandler=(fn)=> async (req,res,next)=>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(err){
//         res.status(err.code || 500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }    