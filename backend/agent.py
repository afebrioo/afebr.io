"""
LangGraph agent for the portfolio AI chat.
Graph: retrieve_context → generate_answer
"""

import os
from typing import TypedDict, Annotated
from langgraph.graph import StateGraph, END
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.messages import HumanMessage, SystemMessage
from profile_data import PROFILE_DATA, SYSTEM_PROMPT
from dotenv import load_dotenv

load_dotenv()


# ─── State ─────────────────────────────────────────────────────────────────────

class AgentState(TypedDict):
    question: str
    context: str
    answer: str


# ─── Nodes ─────────────────────────────────────────────────────────────────────

def retrieve_context(state: AgentState) -> AgentState:
    """Node 1: Return the full profile as context (no vector DB needed)."""
    return {**state, "context": PROFILE_DATA}


async def generate_answer(state: AgentState) -> AgentState:
    """Node 2: Call Gemini with context + question."""
    llm = ChatGoogleGenerativeAI(
        model="gemini-1.5-flash",
        google_api_key=os.getenv("GEMINI_API_KEY"),
        temperature=0.7,
    )

    system_msg = SystemMessage(
        content=SYSTEM_PROMPT.format(profile=state["context"])
    )
    human_msg = HumanMessage(content=state["question"])

    response = await llm.ainvoke([system_msg, human_msg])
    return {**state, "answer": response.content}


# ─── Build Graph ───────────────────────────────────────────────────────────────

def build_graph():
    graph = StateGraph(AgentState)
    graph.add_node("retrieve_context", retrieve_context)
    graph.add_node("generate_answer", generate_answer)
    graph.set_entry_point("retrieve_context")
    graph.add_edge("retrieve_context", "generate_answer")
    graph.add_edge("generate_answer", END)
    return graph.compile()


_app = None


def get_app():
    global _app
    if _app is None:
        _app = build_graph()
    return _app


# ─── Public Interface ──────────────────────────────────────────────────────────

async def run_agent(question: str) -> str:
    """Run the LangGraph agent and return the answer."""
    app = get_app()
    initial_state: AgentState = {
        "question": question,
        "context": "",
        "answer": "",
    }
    result = await app.ainvoke(initial_state)
    return result["answer"]
