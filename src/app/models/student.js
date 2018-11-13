import mongoose from 'mongoose';
import timestamps from 'mongoose-timestamp';
let Schema = mongoose.Schema;

let StudentSchema = new Schema({
    name: {type: String},

    favoriteArtist: {type: String},
    artistAnswered: {type: Boolean, default: false},

    favoriteTeacher: {type: String},
    teacherAnswered: {type: Boolean, default: false},

    favoriteFood: {type: String},
    foodAnswered: {type: Boolean, default: false},

    favoriteColor: {type: String},
    colorAnswered: {type: Boolean, default: false},

    favoritePet: {type: String},
    petAnswered: {type: Boolean, default: false},

    favoritePlace: {type: String},
    placeAnswered: {type: Boolean, default: false},

    biggestFear: {type: String},
    fearAnswered: {type: Boolean, default: false}
});

StudentSchema.plugin(timestamps);
export default mongoose.model('Student', StudentSchema);