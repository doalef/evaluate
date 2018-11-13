import model from '../model';

export let list = async (req, res) => {
    try {
        let mothers = await model.Mother.find({}).sort('-createdAt').lean();
        res.validSend(200, { mothers });
    } catch (error) {
        res.validSend(500, { error });
    }
}

export let add = async (req, res) => {
    try {
        let {
            name,
            student,
            education,
            working,
            ownSmartphone,
            instagram
        } = req.body;

        let newMother = await new model.Mother({
            name,
            student,
            education,
            working,
            ownSmartphone,
            instagram
        });
        await newMother.save();
        return res.validSend(200, { newMother });
    } catch (error) {
        res.validSend(500, { error });
    }
}

export let update = async (req, res) => {
    try {
        let { motherid, updates } = req.body;
        let updated = await model.Mother.findByIdAndUpdate(motherid, updates, { new: true }).lean();
        res.validSend(200, { updated });
    } catch (error) {
        res.validSend(500, { error });
    }
}