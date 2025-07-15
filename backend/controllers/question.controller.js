const Question = require('../models/Question')
const Session = require('../models/Session')

//@desc     Add additional questions to an existing session
// @route   POST /api/questions/add
//@access   Private
exports.addQuestionsToSession = async (req, res) => {
    try {
        console.log("inside add question to sessions");
        const { sessionId, questions } = req.body;

        if (!sessionId || !questions || !Array.isArray(questions)) {
            return res.status(400).json({ message: "Invalid input data" });
        }

        const session = await Session.findById(sessionId);
        if (!session) {
            return res.status(404).json({ message: "Session not found" });
        }

        const createdQuestions = await Question.insertMany(
            questions.map((q) => ({
                session: sessionId,
                question: q.question,
                answer: q.answer
            }))
        );

        session.questions.push(...createdQuestions.map((q) => q._id));
        await session.save();
        res.status(201).json(createdQuestions); 
    } catch (error) {
        console.error("Error in addQuestionsToSession:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


//@desc    Pin or Unpin a question
//@route   POST /api/questions/:id/pin
//@access   Private

exports.togglePinQuestion = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}

//@route    POST /api/questions/:id/note

exports.updateQuestionNote = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" })
    }
}