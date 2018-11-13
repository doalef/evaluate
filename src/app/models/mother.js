import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';
let Schema = mongoose.Schema;

let MotherSchema = new Schema({
    name: {type: String},
    student: {type: String},

    education: {type: String},
    working: {type: Boolean},
    ownSmartphone: {type: Boolean},
    instagram: {type: Boolean},
});

MotherSchema.plugin(timestamps);
export default mongoose.model('Mother',MotherSchema);