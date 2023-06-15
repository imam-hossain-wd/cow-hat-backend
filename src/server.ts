import mongoose from 'mongoose';
import app from './app';
import config from './config';




const run = async()=> {
    try{
    await mongoose.connect(config.database_url)
    .then(()=> console.log('database connected successfully'))


    }
    catch(error){
        console.log(error);
    }
}
run().catch(error => console.log(error))