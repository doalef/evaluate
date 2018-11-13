import model from '../model';

export let list = async (req, res) => {
    try {
        let students = await model.Student.find({}).sort('-createdAt').lean();
        res.validSend(200, { students });
    } catch (error) {
        res.validSend(500, { error });
    }
}

export let add = async (req, res) => {
    try {
        let {
            name,
            favoriteArtist,
            favoriteTeacher,
            favoriteFood,
            favoriteColor,
            favoritePet,
            favoritePlace,
            biggestFear
        } = req.body;
        let newStudent = await new model.Student({
            name,
            favoriteArtist,
            favoriteTeacher,
            favoriteFood,
            favoriteColor,
            favoritePet,
            favoritePlace,
            biggestFear
        });
        await newStudent.save();
        return res.validSend(200, { newStudent });
    } catch (error) {
        res.validSend(500, { error });
    }
}

export let update = async (req, res) => {
    try {
        let { studentid, updates } = req.body;
        let updated = await model.Student.findByIdAndUpdate(studentid, updates, { new: true }).lean();
        res.validSend(200, {updated});
    } catch (error) {
        res.validSend(500, { error });
    }
}