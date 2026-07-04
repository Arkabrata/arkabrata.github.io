---
title: "RareBox"
description: "An internal AI and analytics platform (FastAPI, BigQuery, Cloud Run, LLM agent) serving 900+ active users company-wide."
order: 5
tags: ["AI Platform", "LLM Agents", "FastAPI", "BigQuery"]
repo: "#"
---

## Problem
Teams across merchandising, marketing, finance, and warehouse operations depended on analysts to pull data from disconnected ERP, POS, marketing, and logistics systems — turning simple business questions into multi-day request queues.

## Method
RareBox unifies ML model outputs, planning tools, and an LLM-powered query agent behind a single platform, letting business users self-serve answers and act on model recommendations directly instead of waiting on ad hoc analysis.

## System / Workflow
Built as sole engineer on FastAPI, BigQuery, and Cloud Run, the platform ingests data from ERP, POS, marketing, finance, and warehouse systems into a shared BigQuery foundation. Users access dashboards, planning workflows, and a natural-language query agent through one interface, with role-based access via JWT auth.

## Impact
RareBox serves 900+ active daily users and cut cross-team analytical turnaround from days to minutes, becoming the company's default surface for data-driven decisions.

## Future Research Direction
Future work includes agent evaluation harnesses, memory for longitudinal business context, and multi-agent workflows that chain analysis, recommendation, and execution steps.
