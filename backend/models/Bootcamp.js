                /* Bootcamp Model */

// Bring in mongoose //
 import mongoose from "mongoose";


   // Create Bootcamp Schema // 
   const BootcampSchema = new mongoose.Schema({
         // Form Fields For Bootcamp Schema // 

         name:{
            type:String,
            required: [true, "Please add a name"],
            unique: true,  // No 2 Bootcamps can have the same Bootcamp Name //
            trim: true,
            maxlength: [50, "Name cannot be more than 50 characters"]
         },
    
          /* Slug : URL friendly version of the Bootcamp Name in small letters 
            Example:   Name: Devcentral Bootcamp Then Slug:devcentral-bootcamp
          */
         slug: String,
    
         description: {
            type: String,
            required: true,
            maxlength: [500, "Description cannot be more than 500 characters"]
         },
    
         website: {
            type: String,
            match: [
              /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
              'Please use a valid URL with HTTP or HTTPS'
            ]
        },
    
        phone: {
            type: String,
            maxlength: [20, 'Phone number can not be longer than 20 characters']
          },
    
          email: {
            type: String,
            match: [
              /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              'Please add a valid email'
            ] // regular expression //
          },
    
          address: {
            type: String,
            required: [true, 'Please add an address']
          },  

          location: {
            // GeoJSON Point Type //
            type: {
              type: String,
              enum: ['Point'], // Only available value that it can have // 
              required: false
            },
    
            coordinate: {
                type: [Number],
                required: false,
                index: '2dsphere'
              },
     
               // Coming from Mapquest API Fields //
              formattedAddress: String,
              street: String,
              city: String,
              state: String,
              zipcode: String,
              country: String
            },
    
            careers: {
                // Array of strings
                type: [String],
                required: true,
                enum: [
                  'Web Development',
                  'Mobile Development',
                  'UI/UX',
                  'Data Science',
                  'Business',
                  'Other'
                ]  // enum: Only available value that it can have // 
              }, 
  
              averageRating: {
                type: Number,
                min: [1, 'Rating must be at least 1'],
                max: [10, 'Rating must can not be more than 10']
              },
    
              averageCost:{
                type: Number,
              },
    
           photo: {
          type: String,
          default: 'no-photo.jpg'
        },
    
        housing: {
            type: Boolean,
            default: false
          },
    
          jobAssistance: {
            type: Boolean,
            default: false
          },
    
          jobGuarantee: {
            type: Boolean,
            default: false
          },
    
             // acceptGi Bill //
          acceptGi: {
            type: Boolean,
            default: false
          },

          createdAt: {
            type: Date,
            default: Date.now
          },

          // User Relationship with Bootcamp Model //
       /*   user:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",   // User Model || User Collection //
            required:true,
         }
          */
  
   })


   const Bootcamp = mongoose.model("Bootcamp", BootcampSchema);

   export default Bootcamp;