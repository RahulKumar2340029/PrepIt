const express = require('express')
const { createSession, getSessionById, getMySessions, deleteSession } = require('../controllers/session.controller')
const { protect } = require('../middlewares/authMiddleware')

const  router = express.Router()

router.post('/create',protect, createSession)
router.post('/my-sessions', protect, getMySessions)
router.get('/:id', protect, getSessionById)
router.post('/:id', protect, deleteSession)

module.exports = router