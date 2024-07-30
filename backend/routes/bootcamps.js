               /* Bootcamps Routes   */  
                
// Bring in express // 
import express from "express"; 
 
// Bring in express router //
const router = express.Router();

// Bring in bootcamp Controllers functions //
import { 
          getBootcamps,
          getBootcamp,
          createBootcamp,
          updateBootcamp,
          deleteBootcamp,
       }
 from "../controllers/bootcamp.js";



        /* Get All Bootcamps */
router.get("/", getBootcamps)

        /* Get Single Bootcamp */
router.get("/:id", getBootcamp) 

        /* Create Bootcamp */
router.post("/", createBootcamp) 

        /* Update Bootcamp */
router.put("/:id", updateBootcamp)

       /* Delete Bootcamp */
router.delete("/:id", deleteBootcamp)



      /* Export router */
export default router;