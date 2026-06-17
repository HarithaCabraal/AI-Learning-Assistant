import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Sparkles, BookOpen, Lightbulb } from "lucide-react";
import aiService from "../../services/aiService";
import toast from "react-hot-toast";
import MarkdownRenderer from "../common/MarkdownRenderer";

const AIActions = () => {
    const [loadingAction, setLoadingAction] = useState();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [concept, setConcept] = useState("");

    const handleGenerateSummary = async () => {
        setLoadingAction("summary");
        try {
            const { summary } = await aiService.generateSummary(documentId);
            setModalTitle("Generated Summary");
            setModalContent(summary);
            setIsModalOpen(true);
        } catch (error) {
            toast.eerror("Failed to generate summary.");
        } finally {
            setLoadingAction(null);
        }
    };

    const handleExplainConcept = async (e) => {
        e.preventDefault();
        if (!concept.trim()) {
            toast.error("Please enter a concept to explain.");
            return;
        }
        setLoadingAction("explain");
        try {
            const { explanation } = await aiService.explainConcept(
                documentId,
                concept
            );
            setModalTitle(`Explanation of "${concept}"`);
            setModalContent(explanation);
            setIsModalOpen(true);
            setConcept("");
        } catch (error) {
            toast.error("Failed to explain concept");
        } finally {
            setLoadingAction(null);
        }
    };


    return (
        <>
        <div className="">
            {/* Header */}
            <div className="">
                <div className="">
                    <div className="">
                        <Sparkles className="" strokeWidth={2} />
                    </div>
                    <div>
                        <h3 className="">
                            AI Assistant
                        </h3>
                        <p className=""> Powered by advanced AI</p>
                    </div>
                </div>
            </div>

            <div className="">
                {/* Generate Summary */}
                <div className="">
                    <div className="">
                        <div className="">
                            <div className="">
                                <div className="">
                                    <BookOpen
                                        className=""
                                        strokeWidth={2}
                                    />
                                </div>
                                <h4 className="">
                                    Generat Summary
                                </h4>
                            </div>
                            <p className="">
                                Get a concise summary of the entire document.
                            </p>
                        </div>
                        <button
                            onClick={handleGenerateSummary}
                            disabled={loadingAction === "summary"}
                            className=""
                        >
                            {loadingAction === "summary" ? (
                                <span className="">
                                    <div className="" />
                                    Loading....
                                </span>
                            ) : (
                                "Sumarize"
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default AIActions