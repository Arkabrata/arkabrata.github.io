---
title: "Replenishment Platform"
description: "An AI-driven replenishment engine combining demand forecasts, sell-through rates, and lead-time constraints — reduced inventory aging by 35%."
order: 2
tags: ["Supply Chain", "Demand Forecasting", "Retail AI", "Optimization"]
repo: "#"
---

## Problem
Retail replenishment across 300+ stores requires balancing service levels, inventory carrying cost, supplier lead times, store-level demand, and seasonality — decisions that were previously slow, manual, and inconsistent across categories.

## Method
The engine combines SKU-store demand forecasts from the production forecasting platform with sell-through rates, lead-time constraints, and business rules to generate automated replenishment recommendations, with exception management for planner review.

## System / Workflow
Sales, inventory, demand signals, and constraint data flow from the BigQuery data foundation into the recommendation engine. The system produces ranked replenishment quantities per store and SKU, routes exceptions to planners, and pushes approved decisions into execution systems.

## Impact
Deployed in production for a ₹1,000 Cr retail business, the platform reduced inventory aging by 35% while automating a decision process that previously consumed significant planner time.

## Future Research Direction
Future work includes uncertainty-aware replenishment policies, multi-echelon optimization across warehouses and stores, and adaptive policies that learn from realized stockout and overstock outcomes.
