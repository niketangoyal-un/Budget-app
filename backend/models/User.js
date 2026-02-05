const mongoose=require('mongoose')
const bcrypt=require("bcrypt")
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },

    password: {
      type: String,
      required: true,
      minlength: 6
    }
  },
  { timestamps: true }
);


userSchema.pre("save", async function() {
  if (!this.isModified("password")) return;
  pass =  await bcrypt.hash(this.password, 10);
  this.password=pass;
  
});

userSchema.methods.comparePassword = function (password) {

  return bcrypt.compare(password, this.password);
};

module.exports=mongoose.model("User", userSchema);
