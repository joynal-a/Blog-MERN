import mongoose from "mongoose";


const connectToMongo = async() =>{
  const res = await mongoose.connect('mongodb+srv://joynal2:BKPhcrYWQ1yYVL5T@cluster0.vj7vo.mongodb.net/?retryWrites=true&w=majority');
    if(res){
      console.log(`Database is running.`);
    }
}

export default connectToMongo;