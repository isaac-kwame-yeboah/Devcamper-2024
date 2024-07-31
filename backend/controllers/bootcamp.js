                 /* Bootcamps Controllers */  

// Bring in Bootcamp Model // 
import Bootcamp from "../models/Bootcamp.js";



              // @desc    Get All Bootcamps // 
              // @route   Get Request to /api/v1/bootcamps //
              // @access  Public //
 const getBootcamps = (req, res,) => {
    res.status(200).json({success: true, msg:"Show all bootcamps"})
 }




              // @desc    Get Single Bootcamp // 
              // @route   Get Request to /api/v1/bootcamps/:id //
              // @access  Public //
const getBootcamp = (req, res) => {
    res.status(200).json({success: true, msg:`Get single bootcamp ${req.params.id}`})
}



              // @desc    Create Bootcamp // 
              // @route   POST Request to /api/v1/bootcamps //
              // @access  Private //
const createBootcamp = async (req, res) => { 
      try {
        const bootcamp = await Bootcamp.create(req.body); 

        res.status(201).json({
            success: true,
            data:bootcamp
           })
      } catch (error) {
         res.status(400).json({
            success: false
         })
      }
      
}



              // @desc    Update Bootcamp // 
              // @route   PUT Request to /api/v1/bootcamps //
              // @access  Private //
const updateBootcamp = (req, res) => {
        res.status(200).json({success: true, msg:`Update bootcamp ${req.params.id}`})
}
 


              // @desc    Delete Bootcamp // 
              // @route   DELETE Request to /api/v1/bootcamps //
              // @access  Private //
const deleteBootcamp = (req, res) => {
            res.status(200).json({success: true, msg:`Delete bootcamp ${req.params.id}`})
        }




    /* Export Bootcamp Controllers  */
export {
        getBootcamps,
        getBootcamp,
        createBootcamp,
        updateBootcamp,
        deleteBootcamp
}