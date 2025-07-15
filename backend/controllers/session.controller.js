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
        console.log("Inside my sessions")
        const sessions = await Session.find({ user: req.user.id})
            .sort({ createdAt: -1})
            .populate("questions");
        res.status(200).json(sessions)
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server error" })

    }
}
//@desc     Get a session by ID with populated questions
//@route    Get /api/sessions/:id
//@access   Private
exports.getSessionById = async(req, res) => {
    try {
        const session = await Session.findById(req.params.id).populate({
            path: "questions",
            options: { sort: { isPinned: -1, createdAt: 1}},
        }).exec();

        if(!session) {
            return res.status(404).json({ success: false, message: "Session not found"})
        }

        res.status(200).json({ success: true, session})
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server error" })
    }
}


exports.deleteSession = async (req, res) => {
    try {
        console.log("Inside delete session")
        const session = await Session.findById(req.params.id);

        if(!session) {
            return res.status(404).json({ message : "Session not found"})
        }

        // check if logged in user owns this session
        if(session.user.toString() !== req.user.id) {
            return res.status(401).json({ message: "Not authorized to delete this session"})
        }

        // First delete all question linked to this session
        await Question.deleteMany({ session: session._id})

        // thene delete the session
        await session.deleteOne();

        res.status(200).json({ message: "Session deleted Successfully"})
    } catch (error) {
        res.status(500).json({ success: false, message: "Internal Server error" })
    }
}