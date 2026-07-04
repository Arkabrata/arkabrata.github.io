---
title: "AI Warehouse Assistant"
description: "An LLM-powered assistant using RAG over live operational data, letting non-technical teams query demand, inventory, and campaign data in plain English."
order: 9
tags: ["LLM Applications", "RAG", "AI Agents", "Operations"]
repo: "#"
---

## Problem
Non-technical warehouse, planning, and marketing teams needed answers from operational data — demand, inventory, campaign performance — but every question required SQL and an analyst in the loop.

## Method
The assistant uses retrieval-augmented generation (RAG) over live operational data, grounding LLM responses in current demand, inventory, and campaign records so answers are accurate and specific rather than generic.

## System / Workflow
Users ask questions in plain English. The assistant retrieves relevant data from the BigQuery foundation, composes grounded answers, and cites the underlying figures — removing SQL as a prerequisite for operational decisions.

## Impact
Teams across warehouse and business functions query operational data directly without SQL or analyst support, shortening the path from question to decision.

## Future Research Direction
Future work includes structured evaluation of answer faithfulness, guardrails for business-critical queries, and extending the assistant from answering questions to executing approved workflows.
