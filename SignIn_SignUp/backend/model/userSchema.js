const mongoose=require('mongoose');
const {Schema}=mongoose;
const JWT=require('jsonwebtoken');

const userSchema=new Schema( {

    name:{
        type:String,
        required:[true,'user name is Required'],
        minLength:[5,'Name must be atleast 5 char'],
        maxLength:[50,'Name must be less than 50 char'],
        trim:true
    },
    email:{
        type:String,
        reqired:[true,'user email is required'],
        unique:true,
        lowercase:true,
        unique:[true,'already registered']
    },
    password:{
        type:String,
        selct:false
    },
    forgotPasswordToken:{
        type:String,
    },
    forPasswordExpiryDate:{
        type:Date
    }
},
{
 timestamps:true
})
userSchema.method={
    jwtToken(){
        return JWT.sign( 
            {id:this._id,email:this.email},
            process.env.SECRET,
                {expiresIn:'24h'}
            
        )
    }
}

const userModel=mongoose.model('user',userSchema);
module.exports=userModel;