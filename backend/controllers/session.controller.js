const Session = require('../models/Session')
const Question = require('../models/Question')

//@desc Create 


exports.createSession = async (req, res) => {
    try {
        console.log("Inside createsessoion routes")
        const { role, experience, topicsToFocus, description, questions } = req.body
        const userId = req.user._id

        const session = await Session.create({
            user: userId,
            role,
            experience,
            topicsToFocus,
            description,
        })

        const questionDocs = await Promise.all(
            questions.map(async (q) => {
                const question = await Question.create({
                    session: session._id,
                    question: q.question,
                    answer: q.answer
                });
                return question._id;
            })
        )

        session.questions = questionDocs;
        await session.save();

        res.status(201).json({ success: true, session })
    } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: "Internal Server error" })
    }
}

exports.getMySessions = async (req, res) => {
    try {
        const sessions = await Session.find({ user: req.user.id})
            .sort({ createdAt: -1})
            .populate("questions");
        res.status(200).json(sessions)
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server error" })

    }
}

exports.getSessionById = async(req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server error" })
    }
}


exports.deleteSession = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server error" })
    }
}