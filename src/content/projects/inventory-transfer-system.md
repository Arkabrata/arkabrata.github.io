---
title: "Inventory Transfer System / IST"
description: "An inter-store transfer and multi-warehouse allocation engine driving automated inventory movement decisions across 300+ stores."
order: 3
tags: ["Inventory", "Optimization", "Retail Operations", "Clustering"]
repo: "#"
---

## Problem
Retail networks routinely carry overstock in some locations while others face stockouts of the same SKUs. Transfer decisions must weigh projected demand, proximity, SLA, fulfillment cost, and execution feasibility — too many dimensions to manage manually at 300+ store scale.

## Method
IST frames inventory movement as a decision intelligence problem: store- and SKU-clustering models identify demand patterns, and a multi-warehouse allocation service scores candidate transfers on projected demand, distance, SLA, and fulfillment cost.

## System / Workflow
The workflow identifies candidate source and destination locations from live inventory and forecast signals, ranks feasible transfers, surfaces recommendations for execution, and tracks realized outcomes to refine future scoring.

## Impact
Together with the replenishment engine, the system contributed to a 35% reduction in inventory aging by moving stranded stock to where demand exists, improving availability without additional purchasing.

## Future Research Direction
Future research includes multi-echelon transfer optimization, causal measurement of transfer impact on sell-through, and reinforcement learning for dynamic inventory movement policies.
