import Document from '../models/Document.js';
import Flashcard from '../models/Flashcard.js';
import Quiz from '../models/Quiz.js';
import * as geminiService from '../utils/textChunker.js';
import { findRelevantChunks } from '../utils/textChunker.js';

// @desc Generate flashcards from document
// @route POST /api/ai/generate-flashcards
// @access Private
export const generateFlashcards = async (req, res, next) => {
    try {

    } catch {
        next(error);
    }
};

// @desc Generate quiz from document
// @route POST /api/ai/generate-quiz
// @access Private
export const generateQuiz = async (req, res, next) => {

};

// @desc Generate document summary
// @route POST /api/ai/generate-summmary
// @access Private
export const generateSummary = async (req, res, next) => {

};

// @desc Chat with document
// @route POST /api/ai/chat
// @access Private
export const chat = async (req, res, next) => {

};

// @desc Explain concepts from document
// @route POST /api/ai/explain-concept
// @access Private
export const explainConcept = async (req, res, next) => {

};

// @desc Get chat history for a document
// @route POST /api/ai/chat-history/:documentId
// @access Private
export const getChatHistory = async (req, res, next) => {

};